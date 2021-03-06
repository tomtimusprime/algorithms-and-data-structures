// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     //word.replace(/[^\w]/g, '').toLowerCase();
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]){
//             return false;
//         }
//     }

//     return true;
// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] || 1;
//     }
//     return charMap;
// }

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

str.replace(/[^\w]/g)

// function buildCharMap(str) {
//     const charMap = {};

//     for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] || 1;
//     }
// }

// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for(let char in aCharMap) {
//        if(aCharMap[char] !== bCharMap[char]) {
//            return false
//        }
//     }

//     return true;
// }


//Anagrams - comparing to see if two strings have the same characters in them. step by step
//We'll have two functions. one will be a helper function. In the main function, we'll be returning if the two strings have the same characters in the form of a boolean - true or false
//create a helper function to clean up the strings that are used, including pulling out any characters thar aren't part of a regular expression.
//in that helper function we want to sort it alphabetically 
//in the anagrams function we can use our helper function 
