<?php
session_start();
?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>login</title>
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <?php include "connection.php"; ?>
  <?php include "header.php"; ?>

  <?php
  if (!isset($_SESSION['user'])) {
    echo '
    <section class="container">
      <form action="login.php" class="login-form" method="POST">
        <h1 class="main-title">Log In</h1>
        <label for="username">User</label>
        <input type="text" name="username">
        <label for="password">Password</label>
        <input type="password" name="password">
        <button>login</button>
      </form>
    </section>
    ';
  } else {
    header('Location: home.php');
    // $username = $_SESSION['user'];
    // echo "<h1>Bienvenido {$username}</h1>";
    // echo "<a href='logout.php'>Cerrar sesion</a>";
  }
  ?>
</body>

</html>

<style>
  html,
  body {
    min-height: 100%;
  }


  label {
    display: block;
  }
</style>