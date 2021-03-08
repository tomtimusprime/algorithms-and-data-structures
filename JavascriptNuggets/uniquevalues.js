const menu = [
    {
        name: 'Pancakes',
        category: 'Breakfast'
    },
    {
        name: 'Waffles',
        category: 'Breakfast'
    },
    {
        name: 'Burger',
        category: 'Lunch'
    },
    {
        name: 'Steak',
        category: 'Dinner'
    },
    {
        name: 'Sandwich',
        category: 'Lunch'
    },
    {
        name: 'Curry',
        category: 'Dinner'
    },
    {
        name: 'Sushi',
        category: 'Dinner'
    },
    {
        name: 'Bacon',
        category: 'Breakfast'
    }
]

const categories = menu.map((items) => {
    return items.category;
})
const uniqueCategories = ['All', 1,2,3,4,5,...new Set(menu.map((items) => {
    return items.category;
}))]

console.log(categories);
console.log(uniqueCategories);



//Set is a data structure introduced in Es6 and it only returns unique values.