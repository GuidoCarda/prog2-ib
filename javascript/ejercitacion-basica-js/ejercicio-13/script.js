const form = document.querySelector("form");
const inputField = document.querySelector("input");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const value = inputField.value.trim();

  const isValid = validateInput(value);

  console.log("entro");

  if (!isValid) {
    inputField.value = "";
    return;
  }

  const result = factorial(value);

  const h2 = document.createElement("h2");
  h2.textContent = `${value}! = ${result}`;
  document.body.appendChild(h2);
}

function validateInput(value) {
  console.log(value);
  if (!value.length) {
    alert("campo vacio");
    return false;
  }
  if (isNaN(value)) {
    alert("el valor ingresado no es un numero");
    return false;
  }
  if (!Number.isInteger(Number(value))) {
    alert("el valor ingresado no es entero");
    return false;
  }
  return true;
}

//Recursiva
function factorial(number) {
  if (number == 1) return number;
  return number * factorial(number - 1);
}

// function factorial(number) {
//   let factorial = 1;
//   for (let i = number; i > 0; i--) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }
