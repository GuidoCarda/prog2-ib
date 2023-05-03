// let numero = parseInt(prompt("ingrese un numero"));

// if (!numero.length) {
//   alert("Campo vacio, ingrese un numero");
// } else if (isNaN(numero)) {
//   alert("El valor ingresado no es un numero");
// } else if (numero < 0 || numero > 10) {
//   alert("El valor ingresado debe estar entre 0 y 10");
// } else {
//   const title = document.createElement("h1");
//   title.textContent = "Tabla de multiplicar de " + numero;

//   document.body.appendChild(title);
//   const list = document.createElement("ul");

//   for (let i = 1; i <= 10; i++) {
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `${numero} x ${i} ${numero * i}`;
//     list.appendChild(listItem);
//   }

//   document.body.appendChild(list);
// }

const ul = document.querySelector("ul");
let input = prompt("ingrese un numero");

if (!input.length) {
  alert("Campo vacio, ingrese un numero");
} else if (isNaN(input)) {
  alert("El valor ingresado no es un numero");
} else if (input < 0 || input > 10) {
  alert("El valor ingresado debe estar entre 0 y 10");
} else {
  ul.innerHTML += "<li>" + input + " x 1 = " + input * 1 + "</li>";
  ul.innerHTML += "<li>" + input + " x 2 = " + input * 2 + "</li>";
  ul.innerHTML += "<li>" + input + " x 3 = " + input * 3 + "</li>";
  ul.innerHTML += "<li>" + input + " x 4 = " + input * 4 + "</li>";
  ul.innerHTML += "<li>" + input + " x 5 = " + input * 5 + "</li>";
  ul.innerHTML += "<li>" + input + " x 6 = " + input * 6 + "</li>";
  ul.innerHTML += "<li>" + input + " x 7 = " + input * 7 + "</li>";
  ul.innerHTML += "<li>" + input + " x 8 = " + input * 8 + "</li>";
  ul.innerHTML += "<li>" + input + " x 9 = " + input * 9 + "</li>";
  ul.innerHTML += "<li>" + input + " x 10 = " + input * 10 + "</li>";
}
