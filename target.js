//Also known as Two Sum on leetcode
//const arry = [1,2,5,7,11,15];
//const target = 9;
//create a new map because we need to keep track of key value pairs
//Need a for loop to iterate through the length of the array
//Now need to find the compliment number and the compliment is going to be the target - num
//Almost have to come at it backwards
//If our map contains our compliment number then we know our result
//If our map DOES NOT contain our compliment we're going to add our number and iterator to our map

// function twoSum(array, target) {
//     const result = [];
//     const numIndex = new Map();
//     console.log(numIndex);
//     // for (let i = 0; i < array.length; i++) {
//     //     let num = array[i];
//     //     let compliment = target - num;

//     //     if(numIndex.has(compliment)) {
//     //         result[0] =  numIndex.get(compliment);
//     //         result[1] = i;
//     //         console.log(result[0], result[1]);
//     //         return result;
//     //     }
//     //     numIndex.set(num, i);
//     // }
//     // return result;
// }

// const twoSum = (array, target) => {
//     const numsIndexes = {};

//     for (let i = 0; i < array.length; i++) {
//         let currentDifference = target - array[i];
//         //exception handling
//         if(numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
//             return [i, numsIndexes[currentDifference]];
//         } else {
//             numsIndexes[array[i]] = i;
//         }
//     }
// }

const twoSum = (array, target) => {
    const numsIndexes = {};

    for (let i = 0; i < array.length; i++) {
        //exception handling.
        let currentDifference = target - array[i];
        if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
            return [i, numsIndexes[currentDifference]];
        } else {
            numsIndexes[array[i]] = i;
        }
    }
}

const twoSum2 = function(array, target) {
    const numsIndexes = {};

    for(let i = 0; i < array.length; i++) {
        let currentDifference = target - array[i];
        if(numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
            console.log(numsIndexes[currentDifference]);
            return [i, numsIndexes[currentDifference]]
        } else {
            numsIndexes[array[i]] = i;
            console.log(numsIndexes[array[i]]);
        }
    }
}

const twoSum3 = (array, target) => {
    //create a hashmap
    const indexes = {};

    for(let i = 0; i < array.length; i++) {
        let currentDifference = target - array[i];
        if(indexes[currentDifference] !== undefined && indexes[currentDifference] !== i) {
            return [i, indexes[currentDifference]];
        } else {
            indexes[array[i]] = i;
        }
    }
}

const twoSum4Brute = (array, target) => {
    const results = [];

    for(let i = 0; i < array.length; i++) {
        
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] + array[j] === target) {
                results.push(i);
                results.push(j);
            }
        }
    }

    return results;
}


console.log(twoSum4Brute([1, 2, 3, 4, 7], 9));

/*
Create an object containing the key-value pairs of the element and its index, respectively.
Iterate through the array that's passed in as an argument. For currentElement, compute currentDifference.
If currentDifference exists in hashTable and current ElementIndex !== hashTable[currentDifference], return the indices of each element.
If currentDifference does not exist or the indices of both elements are equal, move to the next element in the array.

Create an object containing the key-value pairs of the element and its index, respectively.
Iterate through array. For currentElement, compute currentDifference.
If currentDifference exists in hashTable and currentElementIndex !== hashTable[currentDifference], return the indices of each element.
If currentDifference does not exist or the indices of both elements are equal, move to the next element in the array.
*/