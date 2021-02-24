// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if(Math.sign(n) === -1) {
        
    }
    let numString = `${n}`;
    let reversedNum = parseInt(numString.split('').reverse().join(''));
    return reversedNum;
}

console.log(reverseInt(1234567890));

module.exports = reverseInt;
