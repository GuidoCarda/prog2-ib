const COTIZACIONES = {
  dolar: 469,
  real: 46.76,
  // euro: 514,
  // libra: 288.98,
  // "peso-mx": 13.22,
  // yuan: 33.18,
};

const form = document.querySelector("form");

const resultsSection = document.querySelector("section");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formValue = [...formData.values()][0];

  if (!formValue.length) {
    return alert("campo vacio");
  }

  if (formValue === "0") return;

  if (resultsSection.hasChildNodes()) {
    resultsSection.innerHTML = "";
  }

  for (const cotizacion in COTIZACIONES) {
    const result = formValue / COTIZACIONES[cotizacion];

    if (result) {
      resultsSection.innerHTML += `
      <div>
          <h2>${cotizacion}</h2>
          <span class="convertion">${result.toFixed(2)}</span>
      </div>
      `;
    } else {
      alert("algo salio mal");
    }
  }
}
