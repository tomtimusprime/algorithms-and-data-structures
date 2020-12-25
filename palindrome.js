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

console.log(palindrome1("abba"));
console.log(palindrome1("abcdefg"));