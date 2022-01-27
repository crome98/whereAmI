let button = document.querySelector("button");
console.log(button);

function renderCountryInfo() {
  const img = document.getElementsByClassName("country-img");
  document.getElementsByClassName("container")[0].classList.remove("hide");
}

button.addEventListener("click", (etv) => {
  let latt = document.getElementsByClassName("latt")[0].value;
  let long = document.getElementsByClassName("long")[0].value;
  fetch(`https://geocode.xyz/${latt},${long}?geoit=json`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderCountryInfo();
    })
    .catch(error => console.log(error));
})
