const moment = require('moment');
const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/*
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
*/
/*
function* Gen() {
  yield console.log(5);
  yield 'fattylee';
  yield 'mankind';
};
//console.log(JSON.stringify(gen(), null, 2));
const gen = Gen();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
*/

/*
function Person(name) {
  this.name = name;
};
Person.prototype.info = function () {
  return 'My name is ' + this.name;
};
function King(...args) {
  //Object.create(this, )
  Person.apply(this, args);
  this.age = args[1];
};

King.prototype = Object.create(Person.prototype);
King.prototype.worth = '$26737M';

Person.prototype.sex = 'male';
King.prototype.sex = 'female';

const fatai = new Person('fatai');
console.log(fatai, fatai.info(), fatai.sex);
const k = new King('king j', 31);
console.log(k, k.info(), k.worth, k.sex)
*/
/*
var str = "Is this all there is all";
var patt1 = /is(?= all)/g;
console.log(str.match(patt1));
*/

