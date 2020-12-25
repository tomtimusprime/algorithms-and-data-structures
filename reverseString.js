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

console.log(reverseString1("Thomas"));
console.log(reverseString2("Thomas"));