<?php
// Get the database credentials
$servername = "sql212.epizy.com";//主机地址
$dbname= "epiz_34346371_kill";//数据库名称
$username = "epiz_34346371";//数据库用户名
$password = "2jnvaZJc4gQ5SA";//数据库密码

// Connect to the database
$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Get the form data
    $email = $_POST["username"];
    $password = $_POST["password"];

    // Prepare the SQL statement
    $stmt = $conn->prepare("SELECT * FROM users WHERE username=:username AND password=:password");
    $stmt->bindParam(':username', $email);
    $stmt->bindParam(':password', $password);
    $stmt->execute();
    $user = $stmt->fetch();

    if ($user) {
        // Login successful
        // Convert avatar blob to image and save to ../avatar/ directory
        $avatar_data = $user['avatar'];
        $avatar_ext = get_image_type($avatar_data);
        $avatar_name = time() . '.' . $avatar_ext;
        file_put_contents("../avatar/" . $avatar_name, $avatar_data);
    
        // Generate the URL of the saved image
        $avatar_url = "avatar/" . $avatar_name;
    
        // Pass the URL to page.php using a query parameter
        header("Location: ../index.php?avatar=" . urlencode($avatar_url));
        exit();
    } else {
        // Login failed
        echo "Invalid email or password";
    }
}

function get_image_type($data) {
    $header = substr($data, 0, 2);
    switch ($header) {
        case "\xFF\xD8":
            return "jpg";
        case "\x89\x50":
            return "png";
        case "GIF":
            return "gif";
        default:
            return "";
    }
}


function generate_random_name() {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $name = "";
    for ($i = 0; $i < 10; $i++) {
        $name .= $chars[rand(0, strlen($chars) - 1)];
    }
    return $name;
}
?>
