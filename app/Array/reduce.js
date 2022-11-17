console.clear();
//Soma o numero de alunos

const valorInicial = 0;
const alunos = [
    { seq: 1, nome: 'leandro' },
    { seq: 2, nome: 'soares' },
    { seq: 3, nome: 'ribeiro' }
];

const sum = alunos.reduce((accumulate, alunos) => accumulate + alunos.seq, valorInicial);

console.log(sum);