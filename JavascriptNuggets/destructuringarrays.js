//faster/easier way to access/unpack variables from arrays
const fruits = ['orange', 'banana', 'lemon', 'grapes'];
const friends = ['John', 'Peter', 'Bob', 'Anna', 'Kelly'];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

const [peter] = friends;
console.log(peter);