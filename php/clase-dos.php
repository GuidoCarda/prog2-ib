<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <form  action="clase-dos-b.php" method="GET">
      <label for="username">Usuario</label>
      <input type="text" name="username">
      <label for="password">Contraseña</label>
      <input type="password" name="password">
      <button type="submit">iniciar sesion</button>
    </form>

    <?php
      $username = $_GET['username'] ?? '';
      $password = $_GET['password'] ?? '';

      if($username AND $password){
        echo "<h1>usuario {$username}<h1> <br>";
        echo  "<h1>contrasenia {$password}<h1> <br>";
      }
      
    ?>
  </body>
</html>

