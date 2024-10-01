console.clear()

/* eslint-disable */

// Durante o processo de compilação as variáveis são armazenadas em memória
// Quando o compilador identifica uma declaração antecipada de uma variável COM VALOR
// O hosting(Içar, puxar para cima) é aplicado. Permitindo que nenhum erro seja 
// apresentado durante o processo de compilação

// Hoisting : inicializá-la antecipadamente, e depois declarar a variável
data = 'Leandro'
console.log(data)
let data
