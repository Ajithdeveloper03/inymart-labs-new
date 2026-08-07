<?php
$host = 'localhost';
$db_name = 'inymart_blog';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $newHash = password_hash('admin123', PASSWORD_DEFAULT);
    
    $stmt = $conn->prepare("UPDATE admin_users SET password_hash = ? WHERE username = 'admin'");
    $stmt->execute([$newHash]);
    
    echo "Password updated successfully!";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
