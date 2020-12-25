const palindrome1 = (str) => {
    const rev = str.split('').reverse().join('');
    // console.log(typeof rev);
    if (str === rev) {
        return true;
    }
    else {
        return false;
    }
}

const palindrome2 = (str) => {
    const rev = str.split('').reverse().join('');

    return str === rev;
}

console.log(palindrome1("abba"));
console.log(palindrome1("abcdefg"));
console.log(palindrome2("abba"));
console.log(palindrome2("abcdefg"));