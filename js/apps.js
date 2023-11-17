const inputName = document.getElementById("name");
const inputYear = document.getElementById("year");
const inputColor = document.getElementById("color");
const inputPrice = document.getElementById("price");
const addBtn = document.getElementById("add-btn");

const form = document.getElementById("form");
const cars = document.getElementById("cars");
const yearSelect = document.getElementById("yearSelect");
const priceSelect = document.getElementById("priceSelect");
const search = document.getElementById("search");
const tbody = document.getElementById("tbody");
const formInput= document.getElementById('formInput');

function validate() {
  if (!inputName.value) {
    inputName.style.outlineColor = "red";
    inputName.focus();
    inputName.value = "";
    return;
  }
  if (!inputYear.value) {
    inputYear.style.outlineColor = "red";
    inputYear.focus();

    return;
  }

  if (inputYear.value < 1970 || inputYear.value >= new Date().getFullYear + 1) {
    alert("Please, try again!");
    inputYear.value = "";
    return;
  }

  if (!inputColor.value) {
    inputColor.style.outlineColor = "red";
    inputColor.focus();
    return;
  }

  if (!inputPrice.value) {
    inputPrice.style.outlineColor = "red";
    inputPrice.focus();
    return;
  }
  if (inputPrice < 200) {
    alert("Try again");
    inputPrice.value = "";
    return;
  }
}

addBtn.addEventListener("click", function () {
  validate();

  let data = JSON.parse(localStorage.getItem("cars")) || [];

  const car = {
    id: Date.now(),
    name: inputName.value,
    year: inputYear.value,
    color: inputColor.value,
    price: inputPrice.value,
    status: "active",
  };

  data.push(car);

  formInput.reset();
  localStorage.setItem('cars', JSON.stringify(data));
});

document.addEventListener('DOMContentLoaded', function(){
    const cars = JSON.parse(localStorage.getItem('cars')) || [];

    if(cars.length) {
        let fakeDom;
        cars.forEach((car, index) => {
            let status;
            if(car.status == 'active') {
                status = 'Sotilmagan'
            }
            if(car.status == 'inactive') {
                status = 'Sotilgan'
            }
            
            let tr = `
            <tr>
                <td>${index+1}</td>
                <td>${car.name}</td>
                <td>${car.color}</td>
                <td>${car.price}</td>
                <td>${car.year}</td>
                <td>${status}</td>
            </tr>
            `;

            fakeDom+= tr;

        });
        tbody.innerHTML = fakeDom;
    }
})
