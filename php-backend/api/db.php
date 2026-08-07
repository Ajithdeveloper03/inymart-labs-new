<?php
$host = 'localhost';
$db_name = 'inymart_blog';
$username = 'root';
$password = ''; // Default for local XAMPP/WAMP

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
