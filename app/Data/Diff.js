// Diferença entre datas em horas
console.clear();
const moment = require('moment')

const first  = '2023-01-01 08:00:00'
const second = '2023-01-01 12:00:00'

const diff = moment(second, "YYYY/MM/DD HH:mm:ss").diff(first, "YYYY/MM/DD HH:mm:ss")
const result = moment.duration(diff);

const timeDiff = Math.floor( result.asHours() ) + moment.utc(diff).format(":mm:ss")

console.log(timeDiff);


