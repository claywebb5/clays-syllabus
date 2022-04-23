// add a global const named maxItems and set it to 5

// create a function called isFull(), which should
// return false if the basket contains less than the max number of items
// return true otherwise (equal or more than maxItems)



let basket = [];
const maxItems = 5;

function isFull() {
  if (basket.length < maxItems) {
    return false;
  // } else if (basket.length >= maxitems) {
  // } else {
  }
  return true;
}

console.log('isFull?', isFull());
// basket.push('oranges');
// basket.push('apples');
// basket.push('oat milk');
// basket.push('BREAD');
// console.log('the basket is', basket);
// console.log('isFull now?', isFull());
// basket.push('pizza rolls');
// console.log('and now?', isFull());

// update addItem() function to:
// use the isFull() function to prevent more than maxItems from being added to basket
// if an item was added to the array, return true
// if there was no room and the item could not be added, return false

// arrow function:
// let addItem = (item) => {

// }

function addItem(item) { //  function name, and input parameter
  let full = isFull();
  console.log('full, inside addItem() function', full);
  if (full) {
    return false;
  } else {
    basket.push(item);
    return true; // output, or return value
  }
}

// Remember to test your functions!!!
// console.log('addItem is', addItem());
console.log('Basket is:', basket);
console.log('Add apple:', addItem('apple'));
console.log('Add banana:', addItem('banana'));
console.log('Add orange:', addItem('orange'));
console.log('Add kiwi:', addItem('kiwi'));
console.log('addItem is', addItem('grape'));
console.log('addItem is', addItem('two more grapes'));
console.log('Basket is:', basket);

let pet = {
  // key: value
  type: 'bunny',
  name: 'Drew Bunnymore',
  age: 3,
  favoriteActivities: ['hopping', 'eating', 'booping']
};

console.log('pet is', pet);

// dot notation / using the dot operator
console.log(`My ${pet.type} is named ${pet.name}`); // dot notation within template literals
console.log('My' + ' pet ' + pet.type);
console.log('My', 'pet', pet.type);
