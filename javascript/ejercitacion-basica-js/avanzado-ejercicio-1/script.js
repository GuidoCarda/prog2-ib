// Una empresa de cable necesita un programa en Javascript que permita la carga y la estadística de la facturación mensual. Emite una factura por mes para cada cliente. Para ello cuenta con los siguientes datos por cada factura que emite: fecha de la factura, número de cliente (un número que puede ser de 1 a 1278), monto de la factura, concepto de facturación. El programa debe permitir la carga de todas las facturas del mes y obtener un informe que incluya: cantidad total facturada, promedio de facturación por cliente, cantidad de clientes cuya facturación es superior a mil pesos.",

const form = document.querySelector("form");
const tableBodyElem = document.querySelector("tbody");

const facturas = [
  {
    date: "2023-05-10",
    clientNumber: "1",
    amount: "2",
    concept: "servicio",
  },
  {
    date: "2023-05-10",
    clientNumber: "2",
    amount: "2",
    concept: "servicio",
  },
  {
    date: "2023-05-10",
    clientNumber: "3",
    amount: "2",
    concept: "servicio",
  },
  {
    date: "2023-05-10",
    clientNumber: "4",
    amount: "2",
    concept: "servicio",
  },
  {
    date: "2023-05-10",
    clientNumber: "5",
    amount: "2123",
    concept: "servicio",
  },
];

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData);

  const cliente = facturas.find(
    (factura) => factura.clientNumber === formEntries.clientNumber
  );

  if (cliente) return alert(`Ya se facturo al cliente ${cliente.clientNumber}`);

  facturas.push(formEntries);
  renderRows();
}

function renderRows() {
  tableBodyElem.innerHTML = "";

  facturas.forEach((factura) => {
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
    <td>${factura.clientNumber}</td>
    <td>${factura.date}</td>
    <td>${factura.amount}</td>
    <td>${factura.concept}</td>
  `;

    tableBodyElem.appendChild(tableRow);
  });
}

renderRows();
