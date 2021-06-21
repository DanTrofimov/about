const canvas = document.querySelector("canvas");
const width = (canvas.width = 400);
const height = (canvas.height = 350);
const ctx = canvas.getContext("2d");

const sourceString = "React Vue Next Nuxt GraphQL ES6+";
const matrixSymbols = sourceString.split("");
const fontSize = 15;
let columns = width / fontSize;
let arrayModel = [];

const interval = 80;

for (let i = 0; i < columns; i++) arrayModel[i] = 1;
let currentSymbolIndex = 0;  

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0,.05)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#0f0";
  ctx.font = fontSize + "px system-ui";
  for (let i = 0; i < arrayModel.length; i++) {
    let txt = matrixSymbols[currentSymbolIndex < matrixSymbols.length ? currentSymbolIndex : currentSymbolIndex % matrixSymbols.length];
    ctx.fillText(txt, i * fontSize, arrayModel[i] * fontSize);
    if (arrayModel[i] * fontSize > height && Math.random() > 0.975) arrayModel[i] = 0;
    arrayModel[i]++;
    currentSymbolIndex++;
  }
}

setInterval(draw, interval);
