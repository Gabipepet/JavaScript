const prompt = require("prompt-sync")();

let episodios = prompt("digite um numero: ");

switch (true) {
  case episodios >= 1 && episodios <= 10:
    console.log("série curta");
    break;
  case episodios >= 11 && episodios <= 100:
    console.log("série média");
    break;
  case episodios >= 101 && episodios <= 999:
    console.log("série longa");
    break;
  case episodios > 1000:
    console.log("one Piece");
    break;
  default:
    console.log("não existe");
    break;
}
