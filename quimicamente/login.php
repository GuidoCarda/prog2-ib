<?php

  session_start();
  $user = $_POST['user'];
  $password = $_POST['password'];

  $base = new mysqli('localhost','root','','quimicamente');

  if($base->connect_errno){
    echo 'Error ' . $base->connect_errno . '<br>';
    echo 'Error detail' . $base->connect_error . '<br>';
  }

  // $sql = "SELECT * FROM users WHERE user = '$user' AND password = '$password'";
  // $query = $base->query($sql);
  // $results = $query->fetch_all();

  // print_r($results);

  // if(!count($results)){
  //   echo 'El usuario ingresado no existe';
  // }else{
  //   echo 'Te logiaste';
  //   header("Location: analisis.html");
  // }


  $sql = "SELECT * FROM users WHERE user = '$user' AND password = '$password'";
  $result = $base->query($sql);

  if($result->num_rows == 1){
    $row = $result->fetch_assoc();
    echo $row['id'] . '<br>';
    echo $row['user'] . '<br>';
    echo $row['password'] . '<br>';

    $_SESSION['user'] = $row['user'];
    header('Location: analisis.php');
  }else{
    echo 'El usuario ingresado no existe';
  }
?>