<?php
$servername = "localhost";
$username = "root";
$password = "rkaruna77@";
$dbname = "e_commerce";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$gender = $_POST['gender'];
$password = $_POST['password'];
$retype_password = $_POST['retype_password'];

if ($password !== $retype_password) {
    die("Error: Passwords do not match");
}

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO edit_profile (email, firstname, lastname, gender, password, retype_password) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $email, $firstname, $lastname, $gender, $hashed_password, $retype_password);

if ($stmt->execute()) {
    echo "Your details have been successfully edited";
} else {
    error_log("Error: " . $stmt->error);
    echo "Error storing data. Please try again later.";
}

$stmt->close();
$conn->close();
?>
