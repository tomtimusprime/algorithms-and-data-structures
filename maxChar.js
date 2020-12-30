const maxChar = (str) => {
    const chars = {};

    for (let char of str) {
        if(!chars[char]) {
            chars[char] = 1;
        }
        else {
            chars[char]++;
        }
    }

    return chars;
}

const maxChar2 = (str) => {
    const chars = {}
    let max = 0;
    let maxChar = "";
    for (let char of str) {
        chars[char] =  chars[char] + 1 || 1
    }

    for (let char in chars) {
        if(chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }
    return maxChar;
}


const maxChar3 = (str) => {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        // charMap[char] = charMap[char] + 1 || 1;
        if(charMap[char]) {
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    }
    console.log(charMap);

    for (let char in charMap) {
        if(charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log(maxChar3("Hello There!"));
