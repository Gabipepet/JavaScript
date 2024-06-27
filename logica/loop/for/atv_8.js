const prompt = require("prompt-sync")();

const x = Number(prompt("digite um numero: "));
let contador = 0;

for (let i = 1; i <= x; i++) {
  if (x % i == 0) {
    contador++;
  }
}
if (contador == 2) {
  console.log("é primo");
} else {
  console.log("não é primo");
}
