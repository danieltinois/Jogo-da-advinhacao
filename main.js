// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keypress", keyPress);

//Funções
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (inputNumber.value !== "") {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen();
      screen2.querySelector("span").innerText = xAttempts;
    }

    inputNumber.value = "";
    xAttempts++;
  } else {
    console.log("Teste");
  }
}

function handleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  xAttempts = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function keyPress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
}
