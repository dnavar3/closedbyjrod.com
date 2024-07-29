<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $firstName = htmlspecialchars($_POST['first-name']);
    $lastName = htmlspecialchars($_POST['last-name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);

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