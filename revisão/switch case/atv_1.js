const prompt = require("prompt-sync")();

let letra = prompt("digite uma letra: ");

switch (true) {
  case letra == "a":
    console.log("Letra a digitada.");
    break;
  case letra == "A":
    console.log("Letra A digitada.");
    break;
  case letra == "b":
    console.log("Letra b digitada.");
    break;
  case letra == "B":
    console.log("Letra B digitada.");
    break;
  default:
    console.log(
      "O prazo para as atividades está entre a letra G e K do teclado."
    );
    break;
}
