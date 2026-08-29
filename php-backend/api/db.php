<?php
$host = 'localhost';          // Hostinger/cPanel usually uses 'localhost', but some providers might give you an IP or host name.
$db_name = 'u508480125_inymartlabs';  
$username = 'u508480125_inymartlabs';         
$password = 'Inymart@Shield#585';             

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
