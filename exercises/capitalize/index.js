// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    //Make an empty array perhaps called words
    const words = [];
    //Split the input string by spaces to get an array
    for(word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
    //For each word in the array
        //Uppercase the first letter of the string
        //Join first letter with the rest of the string
        //Push results into 'words' array
    //Join words into a string and return

}

const capitalize1 = (str) => {
    const words = [];

    for(word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    
    return words.join(' ');
}

const capitalize2 = (str) => {
    const words = [];

    for(word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

const capitalize3 = (str) => {
    let words = [];

    for(word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

console.log(capitalize3('hi how are you doing today?'));

module.exports = capitalize;

