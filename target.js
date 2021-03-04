//Also known as Two Sum on leetcode
//const arry = [1,2,5,7,11,15];
//const target = 9;
//create a new map because we need to keep track of key value pairs
//Need a for loop to iterate through the length of the array
//Now need to find the compliment number and the compliment is going to be the target - num
//Almost have to come at it backwards
//If our map contains our compliment number then we know our result
//If our map DOES NOT contain our compliment we're going to add our number and iterator to our map

function twoSum(array, target) {
    const result = [];
    const numIndex = new Map();
    console.log(numIndex);
    // for (let i = 0; i < array.length; i++) {
    //     let num = array[i];
    //     let compliment = target - num;

    //     if(numIndex.has(compliment)) {
    //         result[0] =  numIndex.get(compliment);
    //         result[1] = i;
    //         console.log(result[0], result[1]);
    //         return result;
    //     }
    //     numIndex.set(num, i);
    // }
    // return result;
}

twoSum([1,2,3,4,5], 9);