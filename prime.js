//A prime number is any number that can only be divided by itself or one. any other number is a composite number 
function isPrime(num) {
    //do some exception handling
    if (!Number.isInteger(num) || num < 2) {
        return false;
    }
    //want to do n-1 because it's possible to get n/n without getting any remainder
    //By using the sqrt it reduces the number of times the loop has to be performed.
    for(let i = 2; i <= num - 1/*Math.sqrt(num)*/; i++) {
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



function isPrime(num) {
    //What is a prime number? Any number that is only divisibile by itself or 1. Any other number is considered a composite number.
    //exception handle: 2 is a primenumber and 1 is not so anything less than 2 is not a prime number also want to account for any non-numbers
    //Iterate through 


}
console.log(isPrime(11));