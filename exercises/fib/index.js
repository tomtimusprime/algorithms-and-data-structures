// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibonacci(n) {
    const result = [0, 1]; // give it a starting point
    if (n < 2) {
        return n;
    } else {
        for (let i = 2; i <= n; i++) {
            const a = result[i - 1];
            const b = result[i - 2];
            result.push(a + b);
        }
    }

    return result[n];
    //return result[result.length - 1];
}
//This is linear runtime. For every addition to n, there's one additional calcululation/computation

const memoize = (fn) => {
    const cache = {};

    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}
const fib = memoize(fibRecursive);

function fibRecursive(n) {
    if (n < 2) {
        return n;
        //This accounts for only returning 0 or 1 because there's nothing to add to the sequence at that point.
    }

    return fib(n - 1) + fib(n - 2);
}
//This is exponential runtime. For every additional element in the sequence you can a significant increase in the number of fibRecursive function calls.
//Under normal circumstances, we would not accept this as a viable solution from a computation standpoint.

console.log(fibRecursive(11));



module.exports = fib;
