// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//     let numVals = 0;
//     //let checker = "aeiou";
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for(char of str.toLowerCase()) {
//         if(checker.includes(char)) {
//             numVals++;
//         }
//     }
    
//     return numVals;
// }

// function vowels(str) {
//     const matches = str.match(/[aeiou]/gi);
//     return matches ? matches.length : 0;
// }

const vowels = (str) => {
    let counter = 0;
    let vowelArray = ['a','e','i','o','u'];

    for (char of str.toLowerCase()) {
        if(vowelArray.includes(char)) {
            counter++;
        }
    }
    return counter;
}

const vowels2 = (str) => {
    let counter = 0;
    let checkerArray = ['a','e','i','o','u'];
    const lowerCase = str.toLowerCase().split('');

    for (let i = 0; i < str.length; i++) {
        if(checkerArray.includes(lowerCase[i])) {
            counter++;
        }
    }
    return counter;
}

const vowels3 = (str) => {
    let counter = 0;
    let checker = ['a', 'e', 'i','o','u'];

    for (char of str.toLowerCase()) {
        if(checker.includes(char)) {
            counter++;
        }
    }
    return counter;
}

module.exports = vowels2;
