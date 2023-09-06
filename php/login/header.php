<header>
  <nav class="container">
    <?php

    if (isset($_SESSION['user'])) {
      echo "
        <h2>Inicio</h2>
        <p>{$_SESSION['user']}</p>  
      ";
    } else {
      echo "<p>Iniciar sesion</p>";
    }

    ?>
  </nav>
</header>