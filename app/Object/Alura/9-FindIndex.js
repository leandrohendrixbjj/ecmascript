const motos = [
    { id: '1', nome: 'Nmax' },
    { id: '2', nome: 'Crosser' },
    { id: '3', nome: 'Fazer' },
    { id: '4', nome: 'SV' },
    { id: '5', nome: 'CB 250' },
];

const index = motos.findIndex(moto => moto.id == 10);

console.log(motos[index]);