let pessoa = {
  nome: "Pepet",
  idade: 16,
  profissao: "Jogadora de Volêi",
  pais: "País do voleibol",
};

console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);

pessoa.profissao = "Vendedor da Shopee";
console.log("Profissão: " + pessoa.profissao);

pessoa.email = "pepet10@gmail.com";
console.log("Email: " + pessoa.email);

delete pessoa.pais;
console.log(pessoa);
