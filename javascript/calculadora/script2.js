const OPERATORS = {
  add: "+",
  sub: "-",
  prod: "*",
  div: "/",
};

const buttons = document.querySelector("#actions");
const screen = document.querySelector("span");

buttons.addEventListener("click", function (event) {
  const target = event.target;

  //Si el usuario clickea el contenedor retornamos
  if (target.id === "actions") return;

  //Obtengo el tipo de boton clickeado y su valor
  const [key, value] = target.id.split("-");

  if (key === "action") {
    //Si se presiona una accion y el input es vacio, retornamos un error
    if (!screen.textContent.length) {
      return alert("Accción invalida");
    }

    if (value === "clear") {
      screen.textContent = "";
      return;
    }

    if (value === "delete") {
      screen.textContent = screen.textContent.slice(0, -1);
      return;
    }

    //Si el ultimo caracter es un operador, retornamos una alerta
    if (isLastCharacterAnOperator(screen.textContent)) {
      return alert("Accción invalida");
    }

    if (value === "equal") {
      screen.textContent = eval(screen.textContent);
      return;
    }

    screen.textContent += OPERATORS[value];
  }

  if (key === "number") {
    if (!screen.textContent.length) {
      screen.textContent = value;
    } else {
      screen.textContent += value;
    }
  }
});

//Checkea si el ultimo caracter de un string es un operador
function isLastCharacterAnOperator(str) {
  return Object.values(ACTIONS).includes(str.at(-1));
}

function compute(prev, operand, current) {
  switch (operand) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "x":
      return prev * current;
    case "/":
      if (current === 0) {
        alert("No se puede dividir por 0");
        return "";
      }
      return prev / current;
  }
}
