// Una empresa de cable necesita un programa en Javascript que permita la carga y la estadística de la facturación mensual. Emite una factura por mes para cada cliente. Para ello cuenta con los siguientes datos por cada factura que emite: fecha de la factura, número de cliente (un número que puede ser de 1 a 1278), monto de la factura, concepto de facturación. El programa debe permitir la carga de todas las facturas del mes y obtener un informe que incluya: cantidad total facturada, promedio de facturación por cliente, cantidad de clientes cuya facturación es superior a mil pesos.",

const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData);

  const listItem = document.createElement("li");

  listItem.innerHTML += `${formEntries["client-number"]} - ${formEntries.date} - ${formEntries.amount} - ${formEntries.concept} `;

  document.querySelector("ul").appendChild(listItem);

  console.log(formEntries);
}
