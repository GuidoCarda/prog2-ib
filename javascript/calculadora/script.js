const OPERATORS = {
  add: "+",
  sub: "-",
  prod: "*",
  div: "/",
};

const buttons = document.querySelector("#buttons");
const screen = document.querySelector("span");

buttons.addEventListener("click", function (event) {
  //Obtengo el boton mas cercano, si existe
  const clickedButton = event.target.closest("button");

  //Si el usuario no clickea un boton retornamos
  if (!clickedButton) return;

  //Obtengo el tipo de boton clickeado y su valor
  const [buttonType, buttonValue] = clickedButton.id.split("-");

  const inputLength = screen.textContent.length;

  if (buttonType === "action") {
    //Si se presiona una accion y el input es vacio, retornamos un error
    if (!inputLength) {
      return alert("Accción invalida");
    }

    if (buttonValue === "clear") {
      //Limpiamos el input
      screen.textContent = "";
      return;
    }

    if (buttonValue === "delete") {
      //Eliminamos el ultimo caracter del input
      screen.textContent = screen.textContent.slice(0, -1);
      return;
    }

    //Si el ultimo caracter es un operador, retornamos una alerta
    if (isLastCharAnOperator(screen.textContent)) {
      return alert("Accción invalida");
    }

    if (buttonValue === "equal") {
      //Evaluo los operadores
      const [operator] = screen.textContent.match(/[^0-9]/g) ?? [];
      //Si es una division y el divisor es 0 retorno una alerta
      if (operator === "/" && !isValidDivisor(screen.textContent)) {
        return alert("No se puede dividir por 0");
      }

      //Cómputo la operación matemática
      screen.textContent = eval(screen.textContent);
    }
  }

  if (buttonType === "operator") {
    //Si el ultimo caracter es un operador o
    //Si el operador es distinto a '-' y el campo esta vacio
    //retorno error
    if (
      isLastCharAnOperator(screen.textContent) ||
      (buttonValue !== "sub" && !inputLength)
    ) {
      return alert("Accción invalida");
    }

    //Agrego el operador
    screen.textContent += OPERATORS[buttonValue];
  }

  if (buttonType === "number") {
    //Si no hay input o si el largo del input es igual a 1 y su contenido es '0'
    if (!inputLength || (inputLength === 1 && screen.textContent === "0")) {
      //Remplazo el input actual
      screen.textContent = buttonValue;
    } else {
      //de lo contrario concateno al input el nuevo valor
      screen.textContent += buttonValue;
    }
  }
});

//Checkea si el ultimo caracter de un string es un operador
function isLastCharAnOperator(str) {
  return Object.values(OPERATORS).includes(str.at(-1));
}

//Checkea si el divisor es valido
function isValidDivisor(str) {
  const divider = str.split("/")[1];
  return divider !== "0";
}
