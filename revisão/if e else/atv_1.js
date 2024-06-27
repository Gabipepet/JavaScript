const prompt = require("prompt-sync")();

let numero = prompt("digite um número: ");
console.log(numero);

if (numero > 5) {
  console.log("o número é maior que 5");
}
