// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if(column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

steps(10);


function recursiveSteps(n) {
    if(n === 0) {
        return;
    }
    
}

module.exports = steps;

/*
Two for loops
From O to n
    create an empty string 'stair'
    From 0 to n
        IF the current column is equal to or less than the current row
        Add a '#' to 'stair'
        ELSE
        Add a space to 'stair'
    console.log 'stair'

*/

//With recursion you always want to start with a 'base case' or a case in which the recursion stops.
