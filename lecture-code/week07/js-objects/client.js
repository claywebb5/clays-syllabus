console.log('JS is here!');
console.log(0.5 === .5);

// object literals
const topHat = {
  type: 'Top',
  color: 'Black',
  size: 14
}

const baseballHat = {
  type: 'Baseball cap',
  color: 'Red and white',
  size: 12
}



let penguins = [
  {
    name: 'Emperor',
    colors: ['black', 'white', 'yellow'],
    size: 1.0,
    isCute: true
  },
  {
    name: 'Little',
    colors: ['slate-blue', 'white'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Rockhopper',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.75,
    isCute: true
  },
  {
    name: 'African',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Gentoo',
    colors: ['Black', 'White'],
    size: 0.5,
    isCute: true
  },
  {
    name: 'Sea Gull',
    colors: ['Gray'],
    size: 0.25,
    isCute: false
  },
  {
    name: 'Chinstrap',
    colors: ['Black', 'White'],
    size: 0.25,
    isCute: true
  },
  {
    name: 'Macaroni',
    colors: ['Black', 'White', 'Yellow'],
    size: 0.5,
    isCute: true
  },
];

// create a function that takes in an array of penguins, 
// and returns only the cute penguins less than a certain size

function checkPenguins(array, maxHeight) {
  let cutePenguins = [];
  for (let penguin of array) {
    if (penguin.isCute && penguin.size < maxHeight) {
      cutePenguins.push(penguin.name);
    }
  }
  return cutePenguins;
}

let myCuties = checkPenguins(penguins, 0.7);
console.log('My cuties are', myCuties);

function Hat(type, color, size) {
  this.type = type;
  this.color = color;
  this.size = size;
}

// object instances of a hat
const averageTopHat = new Hat('Top', 'black', 14);
const funnyHat = new Hat('State Fair Hat', 'purple and cheetah', 18);
const largeTopHat = new Hat('Top', 'white', 24);

console.log('Our funny hat is this!', funnyHat);

function printHat(hatInput) {
  console.log(`The ${hatInput.type} hat is ${hatInput.color}`);
}

printHat({type: 'fedora', color: 'tan', size: 10});

printHat({
  type: 'fedora', 
  color: 'beige', 
  size: 10
});

printHat(funnyHat);