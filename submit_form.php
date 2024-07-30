<?php
// Display errors for debugging (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars(trim($_POST['first-name']));
    $lastName = htmlspecialchars(trim($_POST['last-name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email address
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'Invalid email address. Please go back and try again.';
        exit;
    }

    // Set the recipient email address
    $to = 'dnavar15@icloud.com'; // Replace with your email address

    // Set the email subject
    $subject = 'New Consultation Request';

    // Build the email content
    $email_content = "First Name: $firstName\n";
    $email_content .= "Last Name: $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Message:\n$message\n";

    // Set the email headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo 'Thank you! Your consultation request has been sent.';
    } else {
        echo 'Sorry, there was an error sending your message. Please try again later.';
    }
} else {
    echo 'There was a problem with your submission. Please try again.';
}
?>