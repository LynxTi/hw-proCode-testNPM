const moment = require('moment');


const dataBerthdayUserStr = "08.10.1992";
const getUserAge = berthdayStr => moment(berthdayStr,'DD.MM.YYYY').fromNow();

console.log(getUserAge(dataBerthdayUserStr));