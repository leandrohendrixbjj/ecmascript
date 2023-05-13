console.clear();
const moment = require('moment');

const dtLast = '2023-05-12 18:00:10';
const dtPenult = '2023-05-12 18:00:00';

const diff = moment(dtLast, "YYYY/MM/DD HH:mm:ss").diff(dtPenult, "YYYY/MM/DD HH:mm:ss");
const duration = moment.duration(diff);

const timeDiff = Math.floor(duration.asHours()) + moment.utc(diff).format(":mm:ss");

console.log("timeDiff", timeDiff);


