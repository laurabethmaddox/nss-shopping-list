// Declare a variable whose value will be an array filled 
// with objects
const shoppingList = [
    {key: "Milk", price: 1.25},
    {key: "Eggs", price: 2.05},
    {key: "Pizza rolls", price: 8.50},
    {key: "Chicken", price: 1.40},
    {key: "Raspberries", price: 3.25},
    {key: "Sandwich buns", price: 8.05},
    {key: "Condiments", price: 8.25}
]

// console.log(shoppingList)

for (const list of shoppingList) {
    if(list.price > 8.00)
    console.log(list)
}