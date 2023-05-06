const resultContainerElem = document.querySelector(".result");

// Ingresando un año del último siglo, averiguar si es o no bisiesto. (divisible por cuatro,pero no por 100 aunque sí por 400).

//v1
// const input = prompt("Ingresa un año del ultimo siglo");

// if (!input.length) {
//   alert("El campo esta vacio, ingrese un año");
// } else if (isNaN(input)) {
//   alert("El valor ingresado no es un numero");
// } else if (input < 2001 || input > 2100) {
//   alert("El año a ingresar debe ser del ultimo siglo");
// } else {
//   if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
//     alert(input + " es un año bisiesto");
//   } else {
//     alert(input + " no es un año bisiesto");
//   }
// }

// window.location.reload();

//  V2
// Ingresando un año del último siglo, averiguar si es o no bisiesto. (divisible por cuatro,pero no por 100 aunque sí por 400).

// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// function isValidInput(input) {
//   return input.length && !isNaN(input) && input > 2000 && input < 2100;
// }

// const input = prompt("Ingrese un año del siglo actual");

// if (isValidInput(input)) {
//   const alertMessage = isLeapYear(input)
//     ? " es año bisiesto"
//     : " no es año bisiesto";

//   alert(input + alertMessage);
// } else {
//   alert("El input ingresado no es valido");
// }

// window.location.reload();

//v3
// function isLeapYear(year) {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

// function isValidInput(input) {
//   return input.length && !isNaN(input) && input > 2000 && input < 2100;
// }

// const input = prompt("Ingrese un año del siglo actual");

// if (isValidInput(input)) {
//   const alertMessage = isLeapYear(input)
//     ? " es año bisiesto"
//     : " no es año bisiesto";

//   alert(input + alertMessage);
// } else {
//   alert("El input ingresado no es valido");
// }

// window.location.reload();

//v3;
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isValidInput(input) {
  return input.length && !isNaN(input) && input > 2000 && input < 2100;
}

const input = prompt("Ingrese un año del siglo actual");

const resultTitle = document.createElement("h2");

if (isValidInput(input)) {
  const alertMessage = isLeapYear(input)
    ? " es año bisiesto"
    : " no es año bisiesto";

  resultTitle.textContent = input + alertMessage;
  resultTitle.classList.add(isLeapYear(input) ? "success" : "error");
} else {
  resultTitle.textContent = "El input ingresado no es valido";
  resultTitle.classList.add("error");
}

const button = document.createElement("button");
button.textContent = "Ingresar otro año";
button.onclick = () => window.location.reload();

resultContainerElem.append(resultTitle);
resultContainerElem.append(button);
