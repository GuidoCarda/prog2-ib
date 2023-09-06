<?php
session_start();

if (!isset($_SESSION['user'])) {
  header('Location: index.php');
  exit;
}

$username = $_SESSION['user'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <?php require('header.php'); ?>
  <section class="container">

    <h1 class="main-title">Home</h1>
    <?php echo "<h2>Bienvenido {$username}</h2>" ?>

    <a href="logout.php">Cerrar sesion</a>
  </section>
</body>

</html>