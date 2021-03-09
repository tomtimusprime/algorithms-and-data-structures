//Reduce - iterates and uses a callback function
//reduces to a single value - number, array, object
//1st parameter ('acc') - total of all calculations
//2nd parameter ('curr') - current iteration/value
//If we wanted to we could replace filter and find with just reduce. It is the most powerful, but can be a bit more complicated.

const staff = [
    { name: 'Bob', age: 20, position: 'developer', salary:100 },
    { name: 'Tom', age: 33, position: 'developer', salary:80 },
    { name: 'Ashley', age: 25, position: 'Professor', salary:90 },
    { name: 'Averi', age: 39, position: 'Photographer', salary:75 },
]

const total = staff.reduce((total, people) => {
    total += people.salary
    return total;
}, 0);

console.log(total);