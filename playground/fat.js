const moment = require('moment');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const copy = async () => {
  const r = await readFile('./playground/moment.js', 'utf-8');
  const w = await writeFile('./fat.js', r);
  console.log('result:', r)
};

copy();


const date = moment();

console.log(date.format('[week]do [day]Do of MMMM, YYYY.'))
//console.log(date.add(20, 'm').format());
console.log(date.format('h:mm a'));
console.log(moment().valueOf(), Date.now());