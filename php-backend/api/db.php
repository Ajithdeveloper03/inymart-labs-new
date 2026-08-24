<?php
$host = 'localhost';          // Hostinger/cPanel usually uses 'localhost', but some providers might give you an IP or host name.
$db_name = 'inymart_blog';  // CHANGE THIS to your live database name (e.g., 'u123456789_blog')
$username = 'root';         // CHANGE THIS to your live database username (e.g., 'u123456789_user')
$password = '';             // CHANGE THIS to your live database password

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Connection failed: " . $e->getMessage()]);
    exit;
}
?>
