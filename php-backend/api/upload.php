<?php
// CORS Headers
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : 'http://localhost:3000';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'db.php';

// Helper: Extract Bearer token from Authorization header
function getBearerToken() {
    $headers = '';
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
        $headers = $_SERVER['HTTP_AUTHORIZATION'];
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
        $headers = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
    } elseif (function_exists('apache_request_headers')) {
        $requestHeaders = apache_request_headers();
        if (isset($requestHeaders['Authorization'])) {
            $headers = $requestHeaders['Authorization'];
        }
    }
    if (!empty($headers) && preg_match('/Bearer\s(\S+)/', $headers, $matches)) {
        return $matches[1];
    }
    return null;
}

// Utility function to check authentication via token
function checkAuth() {
    global $conn;
    $token = getBearerToken();
    if (!$token) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized access"]);
        exit;
    }
    
    // Allow demo-token bypass for offline/demo mode
    if ($token === 'demo-token') {
        return;
    }

    $stmt = $conn->prepare("SELECT admin_id FROM admin_tokens WHERE token = ? LIMIT 1");
    $stmt->execute([$token]);
    if (!$stmt->fetch()) {
        http_response_code(401);
        echo json_encode(["error" => "Unauthorized access"]);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    checkAuth();

    if (!isset($_FILES['image']) || $_FILES['image']['error'] !== UPLOAD_ERR_OK) {
        http_response_code(400);
        echo json_encode(["error" => "No file uploaded or upload error."]);
        exit;
    }

    $file = $_FILES['image'];
    $allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (!in_array($file['type'], $allowedTypes)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid file type. Only JPG, PNG, GIF, and WebP are allowed."]);
        exit;
    }

    $uploadDir = __DIR__ . '/../uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
    $filename = uniqid('img_') . '.' . $extension;
    $destination = $uploadDir . $filename;

    if (move_uploaded_file($file['tmp_name'], $destination)) {
        $baseDir = dirname(dirname($_SERVER['SCRIPT_NAME'])); // e.g. /new/php-backend
        $relativeUrl = rtrim($baseDir, '/') . '/uploads/' . $filename;

        // If local dev environment returns root /api/..., try to ensure it points to the PHP server properly.
        // But for production on same domain, relative URL is perfect.
        // We'll use absolute URL if NEXT_PUBLIC_API_URL was parsed, but relativeUrl works natively in browser.
        $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http";
        $host = $_SERVER['HTTP_HOST'];
        
        // Let's assume the frontend will figure out the domain if we return a full URL
        // but wait, if it's localhost:80 and frontend is localhost:3000, relativeUrl won't work on frontend.
        // So let's return the full URL based on the PHP server.
        $fullUrl = $protocol . "://" . $host . $relativeUrl;

        echo json_encode([
            "success" => true, 
            "url" => $fullUrl
        ]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to move uploaded file."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
