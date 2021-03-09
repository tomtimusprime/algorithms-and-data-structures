// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     if(Math.sign(n) === -1) {
        
//     }
//     let numString = `${n}`;
//     let reversedNum = parseInt(numString.split('').reverse().join(''));
//     return reversedNum;
// }


//additional practice 
// function reverseInt(n) {
//    const reversed = n.toString().split('').reverse().join('');
//    if(n < 0) {
//        return parseInt(reversed) * -1;
//    }
//    return parseInt(reversed);
// }

//Additional practice
function reverseInt(n) {
    const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

    return parseInt(reversed) * Math.sign(n);
}

console.log(reverseInt(1234567890));

module.exports = reverseInt;

//take an input of n.
//turn it into a string and then split it into an array so we can use some array functions on it.
//return an integer and multiply it by the sign of the original input
