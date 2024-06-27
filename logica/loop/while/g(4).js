let passos = 0;
let dado = 20;

while (true) {
  let rolagem = Math.random() * dado;

  rolagem = Math.ceil(rolagem);

  if (rolagem == 1) {
    passos--;
    console.log("voce voltou uma casa");
  }

  if (rolagem <= 11 && rolagem >= 2) {
    passos = passos + 0;
    console.log("voce não avança");
  }

  if (rolagem <= 19 && rolagem >= 12) {
    passos = passos + 1;
    console.log("voce avança um espaço");
  }

  if (rolagem == 20) {
    passos = passos + 10;
    console.log("voce avançou dez casas");
  }

  if (passos >= 10) {
    console.log("voce ganhou");
    break;
  }
}
