const people = [
    {
        name: 'Tom',
        age: 33,
        position: 'Programmer'
    },
    {
        name: 'Ashley',
        age: 25,
        position: 'Professor'
    },
    {
        name: 'Averi',
        age: 39,
        position: 'Photographer'
    }
]

//Notes about the map function:
//returns a new array
//Does not change the size of the original array, unlike the filter() method.
//Uses values from the original array when making a new one.

const ages = people.map((people)=> {
    return people.age;
})

console.log(ages);