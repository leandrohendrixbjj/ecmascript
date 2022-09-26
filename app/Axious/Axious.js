console.clear();

const axios = require('axios');

async function findCep(cep){
    const res = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return res;
}

async function print(){
    let cep = await findCep('03664010');
    console.log(cep.data);
}

print();