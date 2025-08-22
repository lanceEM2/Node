const { readFileSync } = require('fs');

console.log("Start");

const data = readFileSync('./content/first.txt', 'utf8'); // blocks here until file is read
console.log(data);

console.log("End");
