const axios = require('axios');

class Api {
    static async getAdress(cep) {
        const response = await (axios.get(`https://viacep.com.br/ws/${cep}/json`));
        return response;
    }
}

const data = Api.getAdress('03664020');

data.then((res) => {
    console.log(res.data);
}).catch(err => console.log(err));