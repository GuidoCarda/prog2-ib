// 4) Ingresar dos números. Si son iguales, mostrar el cuadrado del primero. Si el segundo
// es mayor que el primero, mostrar el cuadrado del segundo dividido el primero. Si el
// segundo es menor que el primero, mostrar el cubo del segundo menos el primero.  -->

const form = document.querySelector("form");
const resultSection = document.querySelector("section");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstInput = form.querySelector("#first-number");
  const secondInput = form.querySelector("#second-number");

  //Eliminar si ya
  firstInput.classList.remove("error");
  secondInput.classList.remove("error");

  const errors = {
    firstInput: validateInput(firstInput.value.trim()),
    secondInput: validateInput(secondInput.value.trim()),
  };

  if (errors.firstInput || errors.secondInput) {
    resultSection.innerHTML = "";
    if (errors.firstInput.length) {
      firstInput.nextElementSibling.textContent = errors.firstInput;
      firstInput.classList.add("error");
    }
    if (errors.secondInput.length) {
      secondInput.nextElementSibling.textContent = errors.secondInput;
      secondInput.classList.add("error");
    }
    return;
  } else {
    firstInput.classList.remove("error");
    secondInput.classList.remove("error");
  }

  resultSection.innerHTML = getResult(
    firstInput.value.trim(),
    secondInput.value.trim()
  ).toFixed(2);
});

function validateInput(input) {
  if (!input.length) {
    return "campo vacio";
  }
  if (isNaN(input)) {
    return "debe ser un numero";
  }
  return "";
}

function getResult(firstValue, secondValue) {
  if (firstValue === secondValue) {
    return Math.pow(firstValue, 2);
  } else if (firstValue < secondValue) {
    return Math.pow(secondValue, 2) / firstValue;
  } else {
    return Math.pow(secondValue, 3) - firstValue;
  }
}
