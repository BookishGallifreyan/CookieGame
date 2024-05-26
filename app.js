const tattycounter = document.getElementById("tattycounter");
const theButton = document.getElementById("theButton");
let bonus = 1;

let potato = 0;
theButton.onclick = function () {
  potato = potato + 1;
  tattycounter.textContent = potato;
};

setInterval(function () {
  potato = potato + bonus;
  tattycounter.textContent = potato;
  console.log("potato");
}, 1000);

//function rememberPotato() {
//localStorage.setItem("rememberPotato", tattycounter);
//}

//function updatPotato() {
//localStorage.getItem("updatePotato");

//function updatePotatoCount() {
//localStorage.setItem("tattycounter", "potato");
//const newtattycounter = localStorage.getItem("tattycounter");
//}

//function savetattycounter() {
// savetattycounter = localStorage.setItem("tattycounter", potato);
// document.getElementById("tattycounter").value =
//   localStorage.getitem("potato");
//}

//const stringified = JSON.stringify("tattycounter");

//localStorage.setItem("tattycounter", stringified);

//const dataRetrieval = localStorage.getItem("tattycounter");

//const readableTattyCounter = JSON.parse(dataRetrieval);
//console.log("readableTattyCounter");

//Not working, not sure why, get back to that later.

async function fetchPotatoShop() {
  const response = await fetch(
    "https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("HTTP Response:", response);

  const final = await response.json();
  console.log("JSON data:", final.value);
}
fetchPotatoShop();

let purchase1 = document.getElementById("trowel");
purchase1.onclick = function () {
  if (potato < 100) {
    alert("You don't have enough potatoes!");
    return;
  }
  potato -= 100;
  bonus += 1;
};

let purchase2 = document.getElementById("farmer");
purchase2.onclick = function () {
  if (potato < 500) {
    alert("You don't have enough potatoes!");
    return;
  }
  potato -= 500;
  bonus += 5;
};

let purchase3 = document.getElementById("spacePotato");
purchase3.onclick = function () {
  if (potato < 1000) {
    alert(
      "They're taking the hobbits to Isengard! (Also, you don't have enough potatoes...)"
    );
    return;
  }
  potato -= 1000;
  bonus += 10;
};
