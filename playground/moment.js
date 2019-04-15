const moment = require('moment');

const date = moment();

console.log(date.format('[week]do [day]Do of MMMM, YYYY.'))
//console.log(date.add(20, 'm').format());
console.log(date.format('h:mm a'))
console.log(moment().valueOf(), Date.now())