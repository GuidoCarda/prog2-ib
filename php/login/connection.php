<?php 
  $hostname="localhost";
  $username = "root";
  $password = "";
  $port = 3306;
  $database = "loginwithphp";

  $conn = new mysqli($hostname, $username, $password, $database, $port );

  if($conn->connect_errno){
    echo 'Error '. $conn->connect_errno . ': ' . $conn->connect_error;
  }
