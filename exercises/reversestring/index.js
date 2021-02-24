// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
let str = "Jumbo";

//Additional Practice 1
// const reverse = (str) => {
//     return str.split('').reverse().join('');
// }

//Additional Practice 2
// function reverse(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;
//     }

//     return reversed;
// }

//Additional Practice 3
function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, ''); //reduce functions second parameter is an initial value
}

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
// function reverse(str) {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }


// console.log(`original string is ${str}`);
// console.log(`The reverse string is ${reverse(str)}`);


module.exports = reverse;
