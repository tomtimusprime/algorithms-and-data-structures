//Filter - returns a new array, can manipulate the size of the new array (unlike map()), returns based on condition.
//Find - returns a single instance (object), returns first match, if not match - undefined.

const people = [
    { name: 'Bob', age: 20, position: 'developer'}, 
    { name: 'Tom', age: 33, position: 'developer'}, 
    { name: 'Ashley', age: 25, position: 'Professor'}, 
    { name: 'Averi', age: 39, position: 'Photographer'}, 
]

const youngPeople = people.filter((person) => {
    // if(person.age < 30) {
    //     return person;
    // }
    return person.age < 30;
});

const tom = people.find((person) => {
    return person.name === 'Tom';
})

const olderPerson = people.find((person) => person.age > 33);
const ashley = people.filter((person) => person.name === 'Ashley');

console.log(youngPeople);
console.log(tom);
console.log(olderPerson);
console.log(ashley);