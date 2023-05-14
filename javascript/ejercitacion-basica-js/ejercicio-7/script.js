const form = document.querySelector("#age-form");

form.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  console.log(e);
}
