const reverseInt = (int) => {
    const reversed = int.toString().split('').reverse().join('');

    if (int < 0) {
        return parseInt(reversed) * -1;
    }

    return parseInt(reversed);
}

console.log(reverseInt(-51));
console.log(reverseInt(51));
console.log(reverseInt(189));
console.log(reverseInt(5));
console.log(reverseInt(-9));