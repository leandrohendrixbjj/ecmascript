const motos = [
    { id: '1', nome: 'Nmax' },
    { id: '2', nome: 'Crosser' },
    { id: '3', nome: 'Fazer' }
];

let id = 1;
const moto = motos.find(moto => moto.id == id);
console.log(moto);