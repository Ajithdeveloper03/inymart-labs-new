<?php
$host = 'localhost';
$db_name = 'inymart_blog';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8mb4", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Add columns if they don't exist
    $queries = [
        "ALTER TABLE blog_posts ADD COLUMN status ENUM('LIVE', 'DRAFT') DEFAULT 'DRAFT' AFTER date;",
        "ALTER TABLE blog_posts ADD COLUMN sections JSON AFTER content;",
        "ALTER TABLE blog_posts ADD COLUMN faqs JSON AFTER sections;"
    ];

    foreach($queries as $query) {
        try {
            $conn->exec($query);
            echo "Successfully executed: $query\n";
        } catch (PDOException $e) {
            // Ignore duplicate column errors
            echo "Skipped: " . $e->getMessage() . "\n";
        }
    }
    
    // Convert existing post to LIVE
    $conn->exec("UPDATE blog_posts SET status = 'LIVE' WHERE slug = 'future-of-ai-seo'");
    
    echo "\nMigration complete!";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>
