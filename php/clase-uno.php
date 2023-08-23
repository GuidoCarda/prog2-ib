<?php
  $numero = 1;
  $cadena = "Guido \n";


  echo $cadena;
  echo "Se pueden concatenar cadenas con el punto " . $cadena . "\n";
  echo "O sino se pueden interpolar variables en una cadena usando llaves de {$cadena} \n";


  $num1 = 10;
  $num2 = 5;

  function suma($a,$b){
    return $a + $b;
  }

  $resultado = suma(1,2);

  echo $resultado;
?>