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
$email = $_POST['email'];
$password = $_POST['password'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$stmt = $conn->prepare("INSERT INTO register_details (username,email,password) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username,$email,$hashed_password);

if ($stmt->execute()) {
    // Close the database connection
    $stmt->close();
    $conn->close();

    // Display a pop-up message using JavaScript and redirect to index.html
    echo '<script>
            alert("Register successfully. Start your shopping with RkElegance!");
            window.location.href = "index.html";
          </script>';
    exit();
    //echo "Data stored successfully";
} else {
    error_log("Error: " . $stmt->error);
    echo "Error storing data. Please try again later.";
}

$stmt->close();
$conn->close();
?>
