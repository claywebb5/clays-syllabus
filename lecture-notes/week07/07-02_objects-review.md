# JavaScript Object Review

## Objectives

- storing related pieces of info
- vs. arrays
- object literal notion
  - one-off objects
  - all datatypes are legal
  - accessing properties
  - adding properties to objects
- methods
  - calling methods
- objects in arrays
- looping and accessing
- object contructors


## Project Set-up

- make folder `js-objects`
  - cd into this new folder
- open in VSCode `code .`
- make index.html, client.js files with GUI
- index boilerplate
- source js into index



## Object Review

Objects are a data type that allows us to store multiple pieces of information together inside a single variable.

Each piece of data inside an object is called a **property**. Also sometimes called a **key**. Each **property** has a value. The value can be any legal JavaScript data type including Numbers, Strings, Arrays, other objects, or even Functions.


## Object Literals

A quick way to create an object is with an assignment expression with an **Object Literal**. This code creates a single Object variable.

```JavaScript
const topHat = {
    type: 'Top',
    color: 'Black',
    size: 14
};

const baseballHat = {
    type: 'Baseball Cap',
    color: 'Red and White',
    size: 12
}
```

This can be very handy and is used frequently in JavaScript.

Starting with an array of penguins, can you create a function that takes in an array of penguins, and returns only the cute penguins less than a certain size?

```JavaScript
let penguins = [
  {
    name: 'Emperor',
    colors: ['Black', 'White', 'Yellow'],
    size: 1.0,
    isCute: true
  },
  {
    name: 'Little',
    colors: ['Slate-blue', 'White'],
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

function checkPenguins(allPenguins, maxHeight) {
  let cutePenguins = [];
  for (let i = 0; i < allPenguins.length; i++) {
    if (!allPenguins[i].isCute && allPenguins[i].size < maxHeight) {
      cutePenguins.push(allPenguins[i].name);
    }
  }
  return cutePenguins;
}

console.log(checkPenguins(penguins, 0.9));
```

## Object Constructors

The downside of object literals is that if we need a lot of different kinds of `hat` or `penguin` objects, we don't want to copy and paste this code over and over again.

Constructor functions are special functions that are used to create objects. We give it some info about the object we want and it `returns` to us an object we can use.

```JavaScript
function Hat(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
}

// Object instances of a Hat
const averageTopHat = new Hat('Top', 'Black', 14);
const funnyHat = new Hat('Beanie', 'Multicolored', 10);
const largeTopHat = new Hat('Top', 'Purple', 24);
```

Using a constructor saves a bunch of time and typing. It also means if you want to change how hats are created, you only need to change the code in the Constructor function.

The `new` keyword is used to denote we want a new object of the given type.

Constructor function names are Capitalized. This is how we know they are a Constructor function instead of a normal function.


## Objects as Parameters

Oftentimes in JS we use object literals inline while calling functions. This is a bit confusing to read syntactically but very common. We'll see these more and more as we go on.

The keys to reading this is to notice the `{ }` and recognize that as defining an object literal.

```JavaScript
function printHat( hatInput ) {
  console.log( hatInput.type );
  console.log( hatInput.color );
}

// condensed
printHat({ type: 'fedora', color: 'tan', size: 'huge' });

// same as
printHat({ 
  type: 'fedora', 
  color: 'tan', 
  size: 'huge',
});


```