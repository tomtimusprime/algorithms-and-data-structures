//Spread operator:
//splits an array or object into single items and COPIES them.

const udemy = 'udemy';
const udemyArray = [...udemy];
console.log(udemyArray);

const boys = ['Jack', 'Tom', 'Davy'];
const girls = ['Ashley', 'Averi', 'Stephanie'];
const bestFriend = ['Ashley'];

const friends = [...boys, ...girls, ...bestFriend];
console.log(friends);
const newFriends = [...friends, 'Bill'];
console.log(newFriends);

const bob = {
    first: 'Bob',
    last: 'Sanders',
    city: 'Chicago',
    siblings: {
        sister: 'Jane'
    },
}

const newPerson = {...bob, parents:"Bill and Lynette"};
console.log(newPerson);