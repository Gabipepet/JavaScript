const prompt = require("prompt-sync")();

let min;
let max;

for (let i = 0; i < 5; i++) {
  const x = Number(prompt("digite um numero: "));

  if (i == 0) {
    min = x;
    max = x;
  } else {
    if (x > max) {
      max = x;
    }

    if (x < min) {
      min = x;
    }
  }
}

console.log("maior numero: ", max);
console.log("menor numero: ", min);
