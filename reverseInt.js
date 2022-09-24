const reverseInt = (int) => {
    const reversed = int.toString().split('').reverse().join('');

    if (int < 0) {
        return parseInt(reversed) * -1;
    }

    return parseInt(reversed);
}


const reverseInt2 = (n) => {
    const reversed = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reversed) * -1;
    }
    return parseInt(reversed);
}

const reverseInt3 = (n) => {
    let reversed = n.toString().split('').reversed().join('');
    return n < 0 ? parseInt(reversed * -1) : parseInt(reversed);
}

//C# translation of reverseInt() function.
// int reverseInt(int startingNumber){
//     string reverse = string.Join("", Math.Abs(startingNumber).ToString().Reverse());
//     return int.Parse(reverse) * Math.Sign(startingNumber);
// }

console.log(reverseInt(-5132));
console.log(reverseInt(5156));
console.log(reverseInt(189));
console.log(reverseInt(98765));
console.log(reverseInt(-9));
