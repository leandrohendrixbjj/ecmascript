console.clear()

const axios = require('axios')
const cep = '03664010'

axios({
    method: 'GET',
    url: `https://viacep.com.br/ws/${cep}/json`
})
.then(res => console.log(res.data))
.catch(error => console.log(error))