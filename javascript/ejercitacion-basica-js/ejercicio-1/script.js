// Ingresando un año del último siglo, averiguar si es o no bisiesto. (divisible por cuatro,pero no por 100 aunque sí por 400).

//v1
const input = prompt("Ingresa un año del ultimo siglo");

if (!input.length) {
  alert("El campo esta vacio, ingrese un año");
} else if (isNaN(input)) {
  alert("El valor ingresado no es un numero");
} else if (input < 2001 || input > 2100) {
  alert("El año a ingresar debe ser del ultimo siglo");
} else {
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    alert(input + " es un año bisiesto");
  } else {
    alert(input + " no es un año bisiesto");
  }
}

window.location.reload();

// Ingresando un año del último siglo, averiguar si es o no bisiesto. (divisible por cuatro,pero no por 100 aunque sí por 400).

//v1
const input = prompt("Ingresa un año del ultimo siglo");

if (!input.length) {
  alert("El campo esta vacio, ingrese un año");
} else if (isNaN(input)) {
  alert("El valor ingresado no es un numero");
} else if (input < 2001 || input > 2100) {
  alert("El año a ingresar debe ser del ultimo siglo");
} else {
  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    alert(input + " es un año bisiesto");
  } else {
    alert(input + " no es un año bisiesto");
  }
}

window.location.reload();
