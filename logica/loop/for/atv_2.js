const prompt = require("prompt-sync")();

const numero = Number(prompt("digite um numero: "));

for (let i = 1; i < numero; i++) {
  console.log(i);
}
