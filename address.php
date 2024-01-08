<?php

$servername = "localhost";
$username = "root";
$password = "rkaruna77@";
$dbname = "e_commerce";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$full_name = $_POST['full_name'];
$country = $_POST['country'];
$phone_number = $_POST['phone_number'];
$alternate_number = $_POST['alternate_number'];
$pincode = $_POST['pincode'];
$state = $_POST['state'];
$city = $_POST['city'];
$house_number = $_POST['house_number'];
$area = $_POST['area'];


$stmt = $conn->prepare("INSERT INTO address (full_name,country, phone_number, alternate_number, pincode, state, city,house_number,area) VALUES (?, ?, ?, ?, ?, ?,?,?,?)");
$stmt->bind_param("sssssssss", $full_name, $country, $phone_number, $alternate_number, $pincode, $state, $city, $house_number, $area);

if ($stmt->execute()) {
    echo '<script>alert("Data stored successfully");</script>';

} else {
    error_log("Error: " . $stmt->error);
    echo "Error storing data. Please try again later.";
}

$stmt->close();
$conn->close();    
?>




