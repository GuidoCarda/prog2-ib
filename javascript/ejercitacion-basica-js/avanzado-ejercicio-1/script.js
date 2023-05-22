// Una empresa de cable necesita un programa en Javascript que permita la carga y la estadística de la facturación mensual. Emite una factura por mes para cada cliente. Para ello cuenta con los siguientes datos por cada factura que emite: fecha de la factura, número de cliente (un número que puede ser de 1 a 1278), monto de la factura, concepto de facturación. El programa debe permitir la carga de todas las facturas del mes y obtener un informe que incluya: cantidad total facturada, promedio de facturación por cliente, cantidad de clientes cuya facturación es superior a mil pesos.",

const form = document.querySelector("form");
const tableBodyElem = document.querySelector("tbody");

const bills = [
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

  if (!formEntries.clientNumber || !formEntries.date || !formEntries.amount) {
    return alert("campos vacios");
  }

  if (formEntries.clientNumber < 0 || formEntries.clientNumber > 1278) {
    return alert("valor invalido");
  }

  const client = bills.find(
    (bill) => bill.clientNumber === formEntries.clientNumber
  );

  if (client && client.clientNumber) {
    const alreadyBilled = bills.findIndex(
      (bill) =>
        bill.clientNumber === client.clientNumber &&
        new Date(bill.date).getFullYear() ===
          new Date(formEntries.date).getFullYear() &&
        new Date(bill.date).getMonth() === new Date(formEntries.date).getMonth()
    );

    console.log(alreadyBilled);

    if (alreadyBilled >= 0) {
      return alert("ya se facturo a este cliente el mes ingresado");
    }
  }

  bills.push(formEntries);
  renderRows();
}

function renderRows() {
  tableBodyElem.innerHTML = "";

  bills.forEach((factura) => {
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
