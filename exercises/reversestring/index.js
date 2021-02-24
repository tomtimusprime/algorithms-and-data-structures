// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
let str = "Jumbo";

//solution 1
// function reverse(str) {
//     let reverseArray = [];
//     let reverseString;
//     for (const letter of str) {
//         reverseArray.push(letter);
//     }
//     reverseArray.reverse()
//     reverseString = reverseArray.join("");
//     return reverseString;
// }


//solution 2
// function reverse(str) {
//     let arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

//solution 3
// function reverse(str) {
//     return str.split('').reverse().join('');
// }

//solution 4
// function reverse(str) {
//     let reversed = '';
//     for (let letter of str) {
//         reversed = letter + reversed;
//     }
//     return reversed;
// }

//solution 5
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}


console.log(`original string is ${str}`);
console.log(`The reverse string is ${reverse(str)}`);


module.exports = reverse;
