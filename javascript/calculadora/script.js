const ACTIONS = {
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
    if (isLastCharacterAnOperand(screen.textContent)) {
      return alert("Accción invalida");
    }

    if (value === "equal") {
      screen.textContent = eval(screen.textContent);
      return;
    }

    screen.textContent += ACTIONS[value];
  }

  if (key === "number") {
    console.log("number pressed");
    if (!screen.textContent.length) {
      screen.textContent = value;
    } else {
      screen.textContent += value;
    }
  }

  console.log("llego al final");
});

//Checkea si el ultimo caracter de un string es un operador
function isLastCharacterAnOperand(str) {
  // El metodo Object.values nos retorna un array de los valores enumerables
  //de un objeto.

  //El metodo includes retorna verdadero o falzo dependiendo si
  //el array contiene o no el valor recibido como parametro

  //El metodo .at, nos permite obtener un valor de un string o array
  //basado en su indice

  // Si usamos un indice negativo, este comienza desde el fin de la cadena/array
  return Object.values(ACTIONS).includes(str.at(-1));
}
