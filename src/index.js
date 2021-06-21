const C = document.querySelector("canvas"),
  $ = C.getContext("2d"),
  W = (C.width = window.innerWidth),
  H = (C.height = window.innerHeight - 1);

const str = "React Vue Next Nuxt SCSS SASS",
  matrix = str.split("");
let font = 15,
  col = W / font,
  arr = [];

for (let i = 0; i < col; i++) arr[i] = 1;
let currentSymbolIndex = 0;  

function draw() {
  $.fillStyle = "rgba(0,0,0,.05)";
  $.fillRect(0, 0, W, H);
  $.fillStyle = "#0f0";
  $.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[currentSymbolIndex < matrix.length ? currentSymbolIndex : currentSymbolIndex % matrix.length];
    $.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
    currentSymbolIndex++;
  }
}

setInterval(draw, 80);

window.addEventListener("resize", () => location.reload());
