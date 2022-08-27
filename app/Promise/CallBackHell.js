let nome = 'leandro';

function begin(nome, idade) {
  if (nome == 'leandro')
    idade(38);
}

function cep(idade, endereco) {
  if (idade > 30) {
    endereco('03664010');
  }
}

begin(nome, function (idade) {
  cep(idade, function (adress) {
    console.log(`Endereço: ${adress}`);
  })
});