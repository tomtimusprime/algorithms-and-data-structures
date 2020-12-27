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
    for (let char of str) {
        chars[char] =  chars[char] + 1 || 1
    }
    return chars;
}

console.log(maxChar2("Hello There!"));