// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Additional Practice
// const palindrome = (str) => {
//     let isPal = false;
    
//     if(str.split('').reverse().join('') === str) {
//         isPal = true;
//     }
//     return isPal;
// }

//Additional practice using the .every() function
// const palindrome = (str) => {
//     const array = str.split('');
//     return array.every((char, i) => {
//         return char === array[array.length - i - 1];
//     })
// }


//Additional Practice using .every() function without 
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    })
}
// const palindrome = (str) => {
//     const reversed = str.split('').reverse().join('');

//     return reversed === str;
// }

//Solution 1
// function palindrome(str) {
//     let isPal = false;
//     if(str.split('').reverse().join('') === str) {
//         isPal = true;
//     }
//     return isPal;
// }


//Solution 2
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');

//     return str === reversed;
// }


console.log(palindrome("bob"));

module.exports = palindrome;
