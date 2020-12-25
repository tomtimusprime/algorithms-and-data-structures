// function reverseString(str) {
//     const arr = str.split('');
//     arr.reverse();
//     arr.join('');
//     return arr;
// }

const reverseString1 = (str) => {
    const arr = str.split('');
    arr.reverse();
    arr.join('');
    return arr;
}

// function reverseString(str) {
//     let reversed = '';

//     for (let character of str) {
//         reversed = character + reversed;

//         return reversed;
//     }
// }

const reverseString2 = (str) => {
    let reversed = '';
    for (let character of str) {
        reversed = character + reversed;
    }
    return reversed;
}

const reverseString3 = (str) => {
    return str.split('').reduce((rev, char) => char + rev, '');
}

// const reverseString3 = (str) => {
//     return str.split('').reduce((rev, char) => char + rev, '');
// }

console.log(reverseString1("Thomas"));
console.log(reverseString2("Thomas"));
console.log(reverseString3("Ashley"));