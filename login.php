<?php
$servername = "localhost";
$username = "root";
$password = "rkaruna77@";
$dbname = "e_commerce";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO login_details (username,password) VALUES (?, ?)");
$stmt->bind_param("ss", $username,$hashed_password);

if ($stmt->execute()) {
   // Close the database connection
    $stmt->close();
    $conn->close();

    // Redirect to index.html
    header("Location: index.html");
    exit();

} else {
    error_log("Error: " . $stmt->error);
    echo "Error storing data. Please try again later.";
}

$stmt->close();
$conn->close();
?>
