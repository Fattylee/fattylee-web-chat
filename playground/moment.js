const moment = require('moment');
const util = require('util');
//const fs = require('fs');
//const readFile = util.promisify(fs.readFile);
//const writeFile = util.promisify(fs.writeFile);
const fs = require('fs-extra');

const copy = async () => {
  const r = await fs.readFile('./playground/moment.js', 'utf-8');
  const w = await fs.writeFile('../fat.js', r);
  console.log('result:', r)
};

//copy();
/*
async function main() {
const files = ["files/file1.txt", "files/file2.txt"];

for (const file of files) {
const content = await fs.readFile(file, "utf-8");
const path = file.replace(".txt", "-copy.txt"); // A
const writeResult = await fs.writeFile(path, content); // B
}

return files; // C
}

main()
.then(console.log)
.catch(err => console.log("An error occurred", err));
*/

async function main() {
const files = ["files/file1.txt", "files/file2.txt"];

const readWrites = []; // A

for (const file of files) { // B
readWrites.push((async() => { // C
const content = await fs.readFile(file, "utf-8"); // D
const path = file.replace(".txt", "-copy.txt"); // E
return await fs.writeFile(path, content); // F
})());
}

return await Promise.all(readWrites); // G
}

main()
.then(console.log)
.catch(err => console.log("An error occurred", err));

const date = moment();

console.log(date.format('[week]do [day]Do of MMMM, YYYY.'))
//console.log(date.add(20, 'm').format());
console.log(date.format('h:mm a'))
console.log(moment().valueOf(), Date.now())