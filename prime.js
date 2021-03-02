//A prime number is any number that can only be divided by itself or one any other number is a composite number 

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(11));