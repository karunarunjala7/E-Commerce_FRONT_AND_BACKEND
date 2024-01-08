<?php
$servername = "localhost";
$username = "root";
$password = "rkaruna77@";
$dbname = "e_commerce";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$card_number = $_POST["card_number"];
$expiry_date = $_POST["expiry_date"];
$cvv = $_POST["cvv"];
$email = $_POST["email"];


$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO payments (card_number, expiry_date, cvv, email) VALUES (?, ?, ?, ?)");
$stmt->bind_param("iiis", $card_number, $expiry_date, $cvv, $email);

if ($stmt->execute()) {
    echo '<script>alert("Data stored successfully");</script>';
} else {
    error_log("Error: " . $stmt->error);
    echo "Error storing data. Please try again later.";
} 

$stmt->close();
$conn->close();
?>




