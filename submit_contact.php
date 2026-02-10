<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    // your recipient email:
    $to      = "your-recipient@example.com";
    $subject = "New message from contact form";
    $body    = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    $headers = "From: $email\r\n"
             . "Reply-To: $email\r\n"
             . "Content-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Sorry — failed to send your message.";
    }
} else {
    echo "Invalid request.";
}
