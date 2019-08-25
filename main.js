const btnStart = document.querySelector(".main");
const divPrint = document.querySelector(".time div");
const btnReset = document.querySelector(".reset");
let idI;
let timesClicked = 0;
let number = 0;
const startStopwatch = () => {
  number++;
  divPrint.textContent = (number / 100).toFixed(2);
};

const startCounter = () => {
  timesClicked++;
  if (timesClicked % 2 == 0) {
    btnStart.textContent = "START";
    clearInterval(idI);
  } else {
    btnStart.textContent = "PAUSE";
    idI = setInterval(startStopwatch, 20);
  }
};
const stopCounter = () => {
  clearInterval(idI);
  divPrint.textContent = "---";
  number = 0;
  btnStart.textContent = "START";
  timesClicked = 0;
};

btnStart.addEventListener("click", startCounter);

btnReset.addEventListener("click", stopCounter);
