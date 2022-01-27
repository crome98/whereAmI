//jshint esversion:6
const button = document.querySelector("button");
const countryImg = document.querySelector("img");
const countryName = document.querySelector("h3");
const region = document.querySelector("h6");
const population = document.getElementsByClassName("population")[0];
const language = document.getElementsByClassName("language")[0];
const currency = document.getElementsByClassName("currency")[0];

function renderCountryInfo(data) {
  countryName.innerHTML = data.nativeName;//data.country;
  region.innerHTML = data.region;
  population.innerHTML = data.population;
  language.innerHTML = data.languages[0].name;
  currency.innerHTML = data.currencies[0].code;
  countryImg.src = data.flags.png;
}

button.addEventListener("click", (etv) => {
  let latt = 51.50354; //document.getElementsByClassName("latt")[0].value;
  let long = -0.12768; //document.getElementsByClassName("long")[0].value;
  fetch(`https://geocode.xyz/${latt},${long}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`Erro code: ${response.status}`);
      }
      return response.json(); // .json() returns a promise
    })
    .then(data => {
      console.log(data);
      const countryName = data.country;
      fetch(`https://restcountries.com/v2/name/${countryName}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Code: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log(data[0]);
          renderCountryInfo(data[0]);
        });
    })
    .catch(error => console.log(error));
});
