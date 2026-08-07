<?php
// CORS Headers
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : 'http://localhost:3000';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once 'db.php';

// Ensure admin_tokens table exists
$conn->exec("CREATE TABLE IF NOT EXISTS admin_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

$action = isset($_GET['action']) ? $_GET['action'] : '';

if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username ?? '';
    $password = $data->password ?? '';
    
    if (empty($username) || empty($password)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "Username and password required"]);
        exit;
    }

    $stmt = $conn->prepare("SELECT id, password_hash FROM admin_users WHERE username = ? LIMIT 1");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password_hash'])) {
        // Generate a secure random token
        $token = bin2hex(random_bytes(32));
        
        // Store token in DB
        $stmt = $conn->prepare("INSERT INTO admin_tokens (admin_id, token) VALUES (?, ?)");
        $stmt->execute([$user['id'], $token]);
        
        echo json_encode(["success" => true, "message" => "Logged in successfully", "token" => $token]);
    } else {
        http_response_code(401);
        echo json_encode(["success" => false, "message" => "Invalid credentials"]);
    }
} elseif ($action === 'logout' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    // Remove token from DB
    $token = getBearerToken();
    if ($token) {
        $stmt = $conn->prepare("DELETE FROM admin_tokens WHERE token = ?");
        $stmt->execute([$token]);
    }
    echo json_encode(["success" => true, "message" => "Logged out successfully"]);
} elseif ($action === 'check' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    $token = getBearerToken();
    if ($token) {
        $stmt = $conn->prepare("SELECT admin_id FROM admin_tokens WHERE token = ? LIMIT 1");
        $stmt->execute([$token]);
        if ($stmt->fetch()) {
            echo json_encode(["authenticated" => true]);
        } else {
            echo json_encode(["authenticated" => false]);
        }
    } else {
        echo json_encode(["authenticated" => false]);
    }
} else {
    http_response_code(404);
    echo json_encode(["success" => false, "message" => "Action not found"]);
}

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
?>
