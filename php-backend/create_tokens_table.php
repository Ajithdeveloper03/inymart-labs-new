<?php
$host = 'localhost';
$db_name = 'inymart_blog';
$username = 'root';
$password = '';

$conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
$conn->exec("CREATE TABLE IF NOT EXISTS admin_tokens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    admin_id INT NOT NULL,
    token VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");
echo "admin_tokens table ready!";
?>
