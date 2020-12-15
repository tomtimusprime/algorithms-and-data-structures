function reverseString(str) {
    const arr = str.split('');
    arr.reverse();
    arr.join('');
    return arr;
}

console.log(reverseString("Thomas"));