<?php
require_once 'api/db.php';

try {
    
    $newHash = password_hash('inymartlabs@2026', PASSWORD_DEFAULT);
    
    // 1. Delete all existing admin users to make sure ONLY the new one works
    $conn->exec("DELETE FROM admin_users");
    
    // 2. Insert ONLY the inymartlabs user
    $stmt = $conn->prepare("INSERT INTO admin_users (username, password_hash) VALUES (?, ?)");
    $stmt->execute(['inymartlabs', $newHash]);
    
    echo "Success! Old admin users deleted. ONLY inymartlabs / inymartlabs@2026 will work now!";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
