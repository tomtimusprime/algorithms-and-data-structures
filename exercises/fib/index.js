// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    const result = [0, 1];
    if (n < 2) {
        return n;
    } else {
        for(let i = 2; i <= n; i++) {
            const a = result[i - 1];
            const b = result[i - 2];
            result.push(a + b);
        }
    }

    return result[n];
    //return result[result.length - 1];
}
//This is linear runtime. For every addition to n, there's one additional calcululation/computation

const fibRecursive = (n) => {
    if (n < 2) {
        return n;
    }

    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

console.log(fibRecursive(11));

module.exports = fib;
