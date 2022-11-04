console.clear();

const marcas = [{
    'nome': 'Honda',
    'moto': 'CG',
},
{
    'nome': 'Suzuki',
    'moto': 'GSX'
}];

for (moto in marcas) {
    console.log(marcas[moto]);
}