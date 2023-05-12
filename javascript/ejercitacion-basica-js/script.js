const EXERCISES = [
  {
    title: "Ejercicio 1",
    desc: "Ingresando un año del último siglo, averiguar si es o no bisiesto. (divisible por cuatro, pero no por 100 aunque sí por 400).",
  },
  {
    title: "Ejercicio 2",
    desc: "Ingresando una temperatura, convertirla a las otras tres escalas. Las escalas conocidas son: Roemer (°R), Farenheit (°F), Celsius (°C), Kelvin (°K). Hacer una interfaz ingeniosa con varios controles.",
  },
  {
    title: "Ejercicio 3",
    desc: "Ingresando dos números enteros por teclado decir si son pares y la cantidad de enteros que hay entre ambos. (validar que los datos ingresados sean numéricos y enteros).",
  },
  {
    title: "Ejercicio 4",
    desc: "Ingresar dos números. Si son iguales, mostrar el cuadrado del primero. Si el segundo es mayor que el primero, mostrar el cuadrado del segundo dividido el primero. Si el segundo es menor que el primero, mostrar el cubo del segundo menos el primero.",
  },
  {
    title: "Ejercicio 5",
    desc: "Una empresa se dedica a la fabricación de tanques cilíndricos con tapa de distintos materiales. Necesita un programa que le permita ingresar el radio de la base, la altura y el costo del metro cuadrado de material y le calcule el costo con el 25% de ganancia.",
  },
  {
    title: "Ejercicio 6",
    desc: "Ingresando por teclado la cantidad de horas trabajadas en un mes por un trabajador, calcular el total a percibir por el mismo, sabiendo que las horas que superen de 170 se pagan como extras al 100%. El valor hora también se debe ingresar por teclado. Si el neto a percibir supera los $20.000 se le debe descontar el 5% en concepto de retenciones.",
  },
  {
    title: "Ejercicio 7",
    desc: "Ingresando la edad de tres personas, calcular el promedio de las dos más viejas y decir cuántas son mayores de 18 años.",
  },
  {
    title: "Ejercicio 8",
    desc: "Hacer un programa que permita convertir pesos a dólares y a reales. Para ello, el programador ya conoce la cotización de ambas monedas.",
  },
  {
    title: "Ejercicio 9",
    desc: "Se requiere un programa que posibilite el ingreso por teclado de tres números reales. Si están en orden mostrar la suma de los tres, si no están ordenados al ingresarlos, mostrar el producto entre los tres.",
  },
  {
    title: "Ejercicio 10",
    desc: "Ingresar dos números. Si ambos son positivos, sumarlos y mostrar la suma. Caso contrario y si, además, ninguno es cero, mostrar la diferencia entre ambos.",
  },
  {
    title: "Ejercicio 11",
    desc: "Ingresar la altura y la base de un triángulo. Calcular y mostrar la superficie si es posible. Caso contrario mostrar un cartel indicando la imposibilidad de mostrarlos.",
  },
  {
    title: "Ejercicio 12",
    desc: "Solicitando que se ingrese un número entero de 1 a 10 por teclado (validarlo), calcular y mostrar la tabla de dicho número. Debe contener un enlace para que se pueda volver a ejecutar la página para otro número.",
  },
  {
    title: "Ejercicio 13",
    desc: "Calcular el factorial de un número que se ingresa por teclado. Validar el número para que sea entero.",
  },
  {
    title: "Ejercicio 14",
    desc: "Mostrar la secuencia de la serie de Fibonacci para los n primeros términos siendo n un número natural que se ingresa por teclado. Validar que sea natural.",
  },
];

const exercisesListElem = document.querySelector(".exercises-list");

EXERCISES.forEach((exercise) => {
  //Extraigo el titulo y la descripcion del ejercicio
  const { title, desc } = exercise;

  //Creo el listItem
  const listItem = document.createElement("li");

  //Relleno el li con la estructura desesada
  listItem.innerHTML = `
  <a href="${getPagePath(title)}" class="exercise-card">
    <h2 class="exercise-card--title">${title}</h2>
    <p class="exercise-card--desc">
      ${desc}
    </p>
  </a>
  `;

  //Añado el li al ul
  exercisesListElem.appendChild(listItem);
});

//Obtengo el path relativo de cada pagina
function getPagePath(title) {
  const exerciseFolder = title.split(" ").join("-").toLowerCase();
  return `./${exerciseFolder}/index.html`;
}
