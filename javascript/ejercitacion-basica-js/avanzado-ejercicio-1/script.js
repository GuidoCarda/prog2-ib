// Una empresa de cable necesita un programa en Javascript que permita la carga y la estadística de la facturación mensual. Emite una factura por mes para cada cliente. Para ello cuenta con los siguientes datos por cada factura que emite: fecha de la factura, número de cliente (un número que puede ser de 1 a 1278), monto de la factura, concepto de facturación. El programa debe permitir la carga de todas las facturas del mes y obtener un informe que incluya: cantidad total facturada, promedio de facturación por cliente, cantidad de clientes cuya facturación es superior a mil pesos.",

const form = document.querySelector("form");
const tableBodyElem = document.querySelector("tbody");
const statisticsCardsElems = document.querySelectorAll(".statistics-card");

const bills = [
  // {
  //   date: "2023-05-10",
  //   clientNumber: "1",
  //   amount: "2",
  //   concept: "servicio",
  // },
  // {
  //   date: "2023-05-10",
  //   clientNumber: "2",
  //   amount: "2",
  //   concept: "servicio",
  // },
  // {
  //   date: "2023-05-10",
  //   clientNumber: "3",
  //   amount: "2",
  //   concept: "servicio",
  // },
  // {
  //   date: "2023-05-10",
  //   clientNumber: "4",
  //   amount: "2",
  //   concept: "servicio",
  // },
  // {
  //   date: "2023-05-10",
  //   clientNumber: "5",
  //   amount: "2123",
  //   concept: "servicio",
  // },
];

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formEntries = Object.fromEntries(formData);

  if (!formEntries.clientNumber || !formEntries.date || !formEntries.amount) {
    return alert("campos vacios");
  }

  if (
    isNaN(formEntries.clientNumber) ||
    formEntries.clientNumber < 0 ||
    formEntries.clientNumber > 1278
  ) {
    return alert("valor invalido");
  }

  const client = bills.find(
    (bill) => bill.clientNumber === formEntries.clientNumber
  );

  if (client && client.clientNumber) {
    if (isAlreadyBilled(formEntries.clientNumber, formEntries.date)) {
      return alert("ya se facturo a este cliente el mes ingresado");
    }
  }
  bills.push(formEntries);
  renderRows();
  renderStatistics();
}

function isAlreadyBilled(clientNumber, billingDate) {
  const newBillingDate = new Date(billingDate);
  return bills.some((bill) => {
    const existingBillingDate = new Date(bill.date);

    return (
      bill.clientNumber === clientNumber &&
      existingBillingDate.getFullYear() === newBillingDate.getFullYear() &&
      existingBillingDate.getMonth() === newBillingDate.getMonth()
    );
  });
}

function validateEntries() {}

function renderRows() {
  //Limpiamos contenido existente para evitar duplicacion
  tableBodyElem.innerHTML = "";

  //Si no hay facturas registradas
  if (!bills.length) {
    return (tableBodyElem.innerHTML = `
      <tr>
        <td class='empty-state' colspan="4">
          No hay facturas cargadas
        </td>
      </tr>
    `);
  }

  bills.forEach((bill) => {
    const { clientNumber, date, amount, concept } = bill;
    const tableRow = document.createElement("tr");

    tableRow.innerHTML = `
    <td>${clientNumber}</td>
    <td>${date}</td>
    <td>${amount}</td>
    <td>${concept || "-"}</td>
    `;

    tableBodyElem.appendChild(tableRow);
  });
}

function renderStatistics() {
  const statistics = getStatistics();
  statistics.forEach((statistic, idx) => {
    statisticsCardsElems[idx].firstElementChild.textContent = statistic;
  });
}

function getStatistics() {
  let totalBilled = 0;
  let averageBilled = 0;
  let clientsOverThousand = 0;

  bills.forEach((bill) => {
    totalBilled += Number(bill.amount);
    if (bill.amount > 1000) {
      clientsOverThousand++;
    }
  });

  if (bills.length) {
    averageBilled = totalBilled / bills.length;
  }

  return [totalBilled, averageBilled.toFixed(2), clientsOverThousand];
}

//Renderizo las facturas existentes
renderRows();
renderStatistics();
