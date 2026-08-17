<?php
// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Ensure the request is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Load PHPMailer via Composer autoload
require_once __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Parse .env.production manually
$envPath = __DIR__ . '/../.env.production';
if (!file_exists($envPath)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Configuration file missing. Make sure .env.production is in the parent directory.']);
    exit;
}

$env = [];
$lines = file($envPath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
foreach ($lines as $line) {
    if (strpos(trim($line), '#') === 0) continue;
    $parts = explode('=', $line, 2);
    if (count($parts) === 2) {
        $key = trim($parts[0]);
        // Remove surrounding quotes if they exist
        $value = trim($parts[1], " \t\n\r\0\x0B\"'");
        $env[$key] = $value;
    }
}

// Read JSON input
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!$input || !isset($input['formType'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input or missing formType']);
    exit;
}

$formType = htmlspecialchars($input['formType']);
$date = date('Y-m-d H:i:s');

// Construct HTML Content
$htmlContent = "
  <div style='font-family: Arial, sans-serif; color: #333; line-height: 1.6;'>
    <h2 style='color: #333;'>New Website Enquiry</h2>
    <p><strong>Form Type:</strong> {$formType}</p>
";

foreach ($input as $key => $value) {
    if ($key === 'formType') continue;
    if (!empty($value)) {
        // Format key (camelCase to Title Case)
        $formattedKey = ucwords(preg_replace('/(?<!^)[A-Z]/', ' $0', $key));
        $safeValue = nl2br(htmlspecialchars($value));
        
        if (strtolower($key) === 'message') {
            $htmlContent .= "<p><strong>{$formattedKey}:</strong><br/>{$safeValue}</p>";
        } else {
            $htmlContent .= "<p><strong>{$formattedKey}:</strong> {$safeValue}</p>";
        }
    }
}

$htmlContent .= "<p><strong>Submitted Date & Time:</strong> {$date}</p></div>";

// Send Email using PHPMailer
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com'; 
    $mail->SMTPAuth   = true;
    $mail->Username   = $env['SMTP_USER'];
    $mail->Password   = $env['SMTP_PASS'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // Recipients
    $mail->setFrom($env['SMTP_USER'], 'Inymart Labs Website');
    $toEmail = !empty($env['SMTP_TO']) ? $env['SMTP_TO'] : 'tn48saravanan@gmail.com';
    $mail->addAddress($toEmail);
    // You can add CC or BCC if needed
    // $mail->addBCC('ceo@inymartlabs.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Website Enquiry: {$formType}";
    $mail->Body    = $htmlContent;
    $mail->AltBody = strip_tags(str_replace(['<br/>', '<br>', '</p>'], "\n", $htmlContent));

    $mail->send();
    
    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully!']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
