<?php
// CORS Headers
$origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : 'http://localhost:3000';
header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
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

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        // Publicly accessible - Fetch posts
        if (isset($_GET['slug'])) {
            $stmt = $conn->prepare("SELECT * FROM blog_posts WHERE slug = ?");
            $stmt->execute([$_GET['slug']]);
            $post = $stmt->fetch();
            if ($post) {
                echo json_encode($post);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Post not found"]);
            }
        } else {
            $stmt = $conn->query("SELECT * FROM blog_posts ORDER BY date DESC");
            $posts = $stmt->fetchAll();
            echo json_encode($posts);
        }
        break;

    case 'POST':
        checkAuth();
        $data = json_decode(file_get_contents("php://input"));
        if (!$data || empty($data->title) || empty($data->slug)) {
            http_response_code(400);
            echo json_encode(["error" => "Title and slug are required"]);
            exit;
        }

        $stmt = $conn->prepare("INSERT INTO blog_posts (slug, title, excerpt, content, category, author, readingTime, image, date, status, sections, faqs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        try {
            $stmt->execute([
                $data->slug,
                $data->title,
                $data->excerpt ?? '',
                $data->content ?? '',
                $data->category ?? '',
                $data->author ?? 'Admin',
                $data->readingTime ?? '5 min read',
                $data->image ?? '',
                $data->date ?? date('Y-m-d'),
                $data->status ?? 'DRAFT',
                isset($data->sections) ? json_encode($data->sections) : null,
                isset($data->faqs) ? json_encode($data->faqs) : null
            ]);
            echo json_encode(["success" => true, "id" => $conn->lastInsertId(), "message" => "Post created successfully"]);
        } catch (PDOException $e) {
            http_response_code(400);
            echo json_encode(["error" => "Failed to create post: " . $e->getMessage()]);
        }
        break;

    case 'PUT':
        checkAuth();
        $data = json_decode(file_get_contents("php://input"));
        if (!isset($_GET['id']) || !$data) {
            http_response_code(400);
            echo json_encode(["error" => "ID and data are required"]);
            exit;
        }

        $stmt = $conn->prepare("UPDATE blog_posts SET slug=?, title=?, excerpt=?, content=?, category=?, author=?, readingTime=?, image=?, date=?, status=?, sections=?, faqs=? WHERE id=?");
        try {
            $stmt->execute([
                $data->slug,
                $data->title,
                $data->excerpt,
                $data->content,
                $data->category,
                $data->author,
                $data->readingTime,
                $data->image,
                $data->date,
                $data->status ?? 'DRAFT',
                isset($data->sections) ? json_encode($data->sections) : null,
                isset($data->faqs) ? json_encode($data->faqs) : null,
                $_GET['id']
            ]);
            echo json_encode(["success" => true, "message" => "Post updated successfully"]);
        } catch (PDOException $e) {
            http_response_code(400);
            echo json_encode(["error" => "Failed to update post: " . $e->getMessage()]);
        }
        break;

    case 'DELETE':
        checkAuth();
        if (!isset($_GET['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            exit;
        }

        $stmt = $conn->prepare("DELETE FROM blog_posts WHERE id=?");
        $stmt->execute([$_GET['id']]);
        echo json_encode(["success" => true, "message" => "Post deleted successfully"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}
?>
