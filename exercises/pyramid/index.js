// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for(let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }

}

pyramid(10);

module.exports = pyramid;

/*
Pseudocode
First create a function Pyramid
Second find the midpoint - 

*/

const pyramid1 = (n) => {
    const midpoint = Math.floor((2 * n -1) / 2);

    for(let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        console.log(level);
    }
}

const pyramid2 = (n) => {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let step = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                step += '#';
            } else {
                step += ' '
            }
        }
        console.log(step);
    }
}

const pyramid3 = (n) => {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for(let row = 0; row < n; row++) {
        let step = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                step += '#';
            } else {
                step += ' ';
            }
        }
        console.log(step);
    }
}
