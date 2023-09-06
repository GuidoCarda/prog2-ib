<?php
require('connection.php');
session_start();


if (isset($_SESSION['user'])) {
  header('Location: home.php');
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if (!$username || !$password) {
    echo '
      <section>
        <h3> Campos vacios</h3>
        <a href="index.php">Reintentar</a>
      </section>
      ';
    exit();
  }

  $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
  $res = $conn->query($sql);

  // echo $username . ' ' . $password . "\n";
  // echo print_r($res->fetch_assoc());
  if ($res->num_rows > 0) {
    // while($row = $res->fetch_assoc()){
    //   echo $row["id"] . "\n";
    //   echo $row["username"] . "\n";
    //   echo $row["password"]. "\n";
    // }

    $row = $res->fetch_assoc();
    $_SESSION['user'] = $row["username"];
    echo $_SESSION['user'];
    header("Location: home.php");
    exit;
  } else {
    echo 'el usuario no existe' . "\n";
    echo '<a href="index.php">Volver a intentar</a>';
    exit();
  }
}


//If there is no user and no post request redirect to index
header('Location: index.php');
