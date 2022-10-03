console.clear();

// Regular Date
let date = new Date(2022, 09, 27);
console.log(`Data: ${date}`);

// As String
date = new Date('2022/09/01');
console.log(`Data: ${date}`);

// TimeZone
const dateTz = new Date();
console.log(
    dateTz.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
);

