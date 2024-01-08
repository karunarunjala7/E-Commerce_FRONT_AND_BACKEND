
<?php
$servername = "localhost";
$username = "root";
$password = "rkaruna77@";
$dbname = "e-commerce";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$message = ""; // Initialize an empty message variable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Process Address Form
    $full_name = $_POST["full_name"];
    $country = $_POST["country"];
    $phone_number = $_POST["phone_number"];
    $alternate_number = $_POST["alternate_number"];
    $pincode = $_POST["pincode"];
    $state = $_POST["state"];
    $city = $_POST["city"];
    $house_number = $_POST["house_number"];
    $area = $_POST["area"];

    $sql = "INSERT INTO addresses (full_name, country, phone_number, alternate_number, pincode, state, city, house_number, area)
            VALUES ('$full_name', '$country', '$phone_number', '$alternate_number', '$pincode', '$state', '$city', '$house_number', '$area')";

    if ($conn->query($sql) !== TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        $message = "Address details successfully stored. ";
    }

    // Process Payment Form
    $card_number = $_POST["card_number"];
    $expiry_date = $_POST["expiry_date"];
    $cvv = $_POST["cvv"];
    $email = $_POST["email"];

    $sql = "INSERT INTO payments (card_number, expiry_date, cvv, email)
            VALUES ('$card_number', '$expiry_date', '$cvv', '$email')";

    if ($conn->query($sql) !== TRUE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    } else {
        $message .= "Payment details successfully stored.";
    }
}

$conn->close();
?>