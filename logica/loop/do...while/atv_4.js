const prompt = require("prompt-sync")();

let i = 1;
let x = Number(prompt("Digite um número: "));
let numero = 0;
let verificarprimo = 0;

do {
  if (x % i == 0) {
    numero++;
    console.log(i, x);
  }
  if (verificarprimo == numero) {
    console.log(numero + "é um número primo");
    break;
  } else {
    console.log(numero + "não é um número primo");
    break;
  }
} while (true);
