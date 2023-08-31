<!-- Hacer una pagina solo en html con un menu principal para gestion de una empresa
de ventas de productos quimicos al por mayor. Cada opcion del menu debe invocar
otras paginas por ahora, no tengan mas que un boton para volver al menu
principal -->

<?php 
  session_start();
  $user = $_SESSION['user'];

  if(!$user){
    header('Location: index.html');
  }
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Actividad 1</title>
    <link rel="stylesheet" href="style.css" />
    <meta charset="utf-8" />
  </head>
  <body>
    <nav>
      <div class="container">
        <a class="nav-logo" href="analisis.php">Químicamente</a>
        <label for="check" class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <input type="checkbox" id="check" />
        <ul>
          <li><a href="analisis.php">análisis</a></li>
          <li><a href="ventas.html">ventas</a></li>
          <li><a href="compras.html">compras</a></li>
          <li><a href="stock.html">stock</a></li>
          <li><a href="facturacion.html">facturación</a></li>
          <li><a href="configuracion.html">configuración</a></li>
          <?php 
            echo "<li><a href='logout.php'>{$user}</a></li>"
          ?>
        </ul>
      </div>
    </nav>

    <main>
      <div class="container hero">
        <h1 class="page-title">Resumen general</h1>

        <section class="resume-cards">
          <article>
            <span>123</span>
            <h3>Total ventas</h3>
          </article>
          <article>
            <span>15</span>
            <h3>Total clientes activos</h3>
          </article>
          <article>
            <span>3</span>
            <h3>Total Proveedores</h3>
          </article>
        </section>

        <section>
          <span class="commentary"
            >Algunas secciones que se podrían considerar:
          </span>
          <h2>Resumen ventas</h2>
          <p>
            Un análisis detallado de las ventas realizadas por la empresa
            durante un período de tiempo específico. Esto puede incluir
            información sobre el volumen de ventas, el número de clientes, los
            productos más vendidos y los canales de venta más efectivos.
          </p>
        </section>

        <section>
          <h2>Resumen rentabilidad</h2>
          <p>
            Una sección que muestra la rentabilidad de la empresa, basada en
            factores como los gastos generales y las ventas realizadas. Esto
            puede ayudar a la empresa a identificar áreas en las que se pueden
            mejorar los márgenes de beneficio y hacer ajustes en su modelo de
            negocio.
          </p>
        </section>
      </div>
    </main>
    <footer>Quimicamente 2023 Derechos reservados</footer>
  </body>
</html>
