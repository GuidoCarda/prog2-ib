<?php
  //$_POST['username'];
  //$_POST['password'];
  echo "usuario: {$_GET['username']} contra: {$_GET['password']}";

  if($_GET['username'] OR $_GET['password']){
    echo "<h1> {$_GET['username']} </h1> <br>";
    echo "<h1> {$_GET['password']} </h1> <br>";
  }

?>