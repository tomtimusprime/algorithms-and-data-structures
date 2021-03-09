const bob = {
    first: 'Bob',
    last: 'Sanders',
    city: 'Chicago',
    siblings: {
        sister: 'Jane'
    },
}

const { first } = bob;
const { siblings : {sister} } = bob;

console.log(first);
console.log(sister);