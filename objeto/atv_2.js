let carro = {
  marca: "chevrolet",
  modelo: "vectra",
  ano: 1997,
  cor: "preto",
};

console.log("Modelo: " + carro.modelo);
console.log("Cor: " + carro.cor);

carro.cor = "Jacinto";
console.log("Nova Cor: " + carro.cor);

carro.condicao = "usado";
console.log("Condição: " + carro.condicao);

delete carro.ano;
console.log(carro);
