console.clear();

// Regular Date
let date = new Date(2022, 9, 27);
console.log(`Data: ${date}`);

// As String
date = new Date('2022/09/01');
console.log(`Data: ${date}`);

const dateTz = new Date();

// TimeZone => from Sao Paulo
console.log(
    dateTz.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
);

// TimeZone => Universal
console.log(
    dateTz.toLocaleString('UTC', { timeZone: 'UTC' })
);

