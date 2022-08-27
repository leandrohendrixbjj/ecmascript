const motos = [
    {id:'1',nome:'Nmax'},
    {id:'2',nome:'Crosser'},
    {id:'3',nome:'Fazer'},
    {id:'4',nome:'SV'},
    {id:'5',nome:'CB 250'},
    {id:'6',nome:'XJ'},
    {id:'7',nome:'Intruder'},
    {id:'8',nome:'Vstrom'},
    {id:'9',nome:'Tenere'},
    {id:'10',nome:'Versys'},
];

const index = motos.findIndex(moto => moto.id == 10);

console.log(motos[index]);