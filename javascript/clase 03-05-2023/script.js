const ul = document.querySelector("ul");
let input = prompt("ingrese un numero");

// if (!input.length) {
//   alert("Campo vacio, ingrese un numero");
//   window.location.reload();
// } else if (isNaN(input)) {
//   alert("El valor ingresado no es un numero");
//   window.location.reload();
// } else if (input < 0 || input > 10) {
//   alert("El valor ingresado debe estar entre 0 y 10");
//   window.location.reload();
// } else {
//   ul.innerHTML += "<li>" + input + " x 1 = " + input * 1 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 2 = " + input * 2 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 3 = " + input * 3 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 4 = " + input * 4 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 5 = " + input * 5 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 6 = " + input * 6 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 7 = " + input * 7 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 8 = " + input * 8 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 9 = " + input * 9 + "</li>";
//   ul.innerHTML += "<li>" + input + " x 10 = " + input * 10 + "</li>";
// }

if (!input.length) {
  alert("Campo vacio, ingrese un numero");
  window.location.reload();
} else if (isNaN(input)) {
  alert("El valor ingresado no es un numero");
  window.location.reload();
} else if (input < 0 || input > 10) {
  alert("El valor ingresado debe estar entre 0 y 10");
  window.location.reload();
} else {
  for (let i = 1; i <= 10; i++) {
    ul.innerHTML += "<li>" + input + " x " + i + " = " + input * i + "</li>";
  }
}

// if (!input.length) {
//   alert("Campo vacio, ingrese un numero");
//   window.location.reload();
// } else if (isNaN(input)) {
//   alert("El valor ingresado no es un numero");
//   window.location.reload();
// } else if (input < 0 || input > 10) {
//   alert("El valor ingresado debe estar entre 0 y 10");
//   window.location.reload();
// } else {
//   for (let i = 1; i <= 10; i++) {
//     ul.innerHTML += "<li>" + input + " x " + i + " = " + input * i + "</li>";
//   }
// }
