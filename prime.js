//A prime number is any number that can only be divided by itself or one. any other number is a composite number 
function isPrime(num) {
    //do some exception handling
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }
    //want to do n-1 because you can still get n/n without getting any remainder
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}


for(let i = 0; i < 50; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}
console.log(isPrime(11));