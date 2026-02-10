<?php
// Database connection settings
//http://localhost/ushimaddo/customer.php
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'ushimaddo';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

// Fetch customer data
$sql = "SELECT name, email, subject, message FROM customers ORDER BY id DESC LIMIT 20";
$result = $conn->query($sql);
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Customer Information</title>
  <link rel="stylesheet" href="index.css" />
  <style>
    body { font-family: Arial, sans-serif; background: #f4f6f9; margin: 20px; }
    table { width: 100%; border-collapse: collapse; background: #fff; }
    th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
    th { background: #4CAF50; color: white; }
    h1 { color: #333; }
  </style>

</head>
<body>
  <div class="container">
    <h2>Customer Information</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Subject</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <?php if ($result && $result->num_rows > 0): ?>
          <?php while($row = $result->fetch_assoc()): ?>
            <tr>
              <td><?= htmlspecialchars($row['name']) ?></td>
              <td><?= htmlspecialchars($row['email']) ?></td>
              <td><?= htmlspecialchars($row['subject']) ?></td>
              <td><?= htmlspecialchars($row['message']) ?></td>
            </tr>
          <?php endwhile; ?>
        <?php else: ?>
          <tr><td colspan="4">No customer data found.</td></tr>
        <?php endif; ?>
      </tbody>
    </table>
    <a href="index.html">&larr; Back to Eco Tours</a>
  </div>
</body>
</html>
<?php $conn->close(); ?>
