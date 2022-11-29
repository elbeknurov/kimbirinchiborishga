const elForm = document.querySelector("form");
const elInput = document.querySelector("#number");
const elPerson = document.querySelector(".person");
const elBicycle = document.querySelector(".bicycle");
const elCar = document.querySelector(".car");
const elPlain = document.querySelector(".plain");
const elBtn = document.querySelector(".btn");

let personSpped = 3.6;
let bicycleSpped = 20.1;
let carSpped = 70;
let plainSpped = 800;

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //ON FOOT
  const speed = elInput.value;
  const personTime = speed / personSpped;
  const pesonHour = Math.floor(personTime);
  const personTotal = personTime - pesonHour;
  const personMinute = Math.floor(personTotal * 60);

  // BiCYCLE
  const speed2 = elInput.value;
  const bicycleTime = speed2 / bicycleSpped;
  const bicycleHour = Math.floor(bicycleTime);
  const bicycleTotal = bicycleTime - bicycleHour;
  const bicycleMintue = Math.floor(bicycleTotal * 60);

  //CAR
  const speed3 = elInput.value;
  const carTime = speed3 / carSpped;
  const carHour = Math.floor(carTime);
  const carTotal = carTime - carHour;
  const carMinute = Math.floor(carTotal * 60);

  const speed4 = elInput.value;
  const plainTime = speed4 / plainSpped;
  const plainHour = Math.floor(plainTime);
  const plainTotal = plainTime - plainHour;
  const plainMinute = Math.floor(plainTotal * 60);

  elPerson.textContent = `${pesonHour} soat ${personMinute} daqiqa`;
  elBicycle.textContent = `${bicycleHour} soat ${bicycleMintue} daqiqa`;
  elCar.textContent = `${carHour} soat ${carMinute} daqiqa`;
  elPlain.textContent = `${plainHour} soat ${plainMinute} daqiqa`;
  // elInput.value = "";
});
