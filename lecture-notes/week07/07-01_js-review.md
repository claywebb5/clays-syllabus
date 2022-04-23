# JavaScript Review

JavaScript is a loosely typed, interpreted run-time language.

First of two JS review lectures. Covers

- primitives
- data types
- variables
- expressions and operators
- NaN, null, undefined values
- conditional statements and comparison operators
- loops
- functions

## Jargon
      . - dot
      () - parenthesis, parens
      [] - brackets, square brackets, square braces
      {} - braces, curlies, curly braces, curly brackets
      < - less than, bird, angle brackets
      > - greater than, gator, angle brackets
      / - slash, whack, forward slash
      \ - back slash
      ! - not, bang
      # - pound, hash, number
      * - star, splat
      || - or, pipes
      $ - dollar sign, bling, cash
      NaN - not a number, bread

## Some data types

Data type | Example
--- | ---
Number | `18`
String | `'taco'` and `'18'`

Additional resources: [data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## Variables

`let x = 1`

- `let` is a **keyword** that tells the computer we are defining a variable

- `x` is the **name** of the variable

- `=` is the **assignment operator**

- `1` is the **value** of the variable

### Naming your variables

- Use camel-case
- Start with a letter
- Use a noun (unless you're naming a function)
- Be descriptive

`let firstName = 'Chris';`

`let numberOfPets = 2;`

## Expressions and operators

"An expression is any valid set of literals, variables, operators, and expressions that evaluates to a single value." [[source](http://lib.ru/JAVA/javascr/expr.html)]

```JavaScript
let x = 3; // expression

x = x + 1; // expression

x += 1; // expression using shorthand compound assignment operator

x++; // increments by 1
```

### String Considerations

- `+` will convert a number to a string and concatenate them
 - `'1' + 2 = '12'`
- all other operators will convert a string into a number, if possible
 - `'10' - 5 = 5`
 - `'36' / 6 = 6`
 - `'ten' * 3 = NaN`

## NaN, null, undefined values

**NaN** stands for Not a Number. Value is not a legal number.

**null** represents an empty value.

**undefined** indicates a variable has not been assigned a value.

**not defined** indicates a variable was referenced but it doesn't exist in the correct scope.

## Conditional statements and comparison operators

```JavaScript
if (/*expression is truthy*/) {
  // perform some logic
} else {
  // perform some other logic
}
```

### Comparison Operators

Operator | Description | Example | Returns
--- | --- | --- | ---
`==` | equal to | `8 == 8` | true
`==` | equal to | `'8' == 8` | true
`===` | equal to and type | `8 === 8` | true
`===` | equal value and type | `'8' === 8` | false
`!=` | not equal to | `8 != 8` | false
`!==` | not equal value or type | `'8' !== 8` | true
`>` | greater than | `8 > 8` | false
`<` | less than | `8 < 8` | false
`>=` | greater than | `8 >= 8` | true
`<=` | less than | `8 <= 8` | true

## Loops

Allows us to perform some logic repeatedly until some ending condition is reached. There are various types of loops and in the beginning it seems they all do the same thing. How do you pick which one to use?

### while loops

While loops are typically run until some logical condition is met.

```JavaScript
while (/* expression is truthy */) {
  // perform some logic
}
```

### for loops

For-loops are commonly used to run a set number of times (as opposed to being based on logic like a while loop.) Therefore they are very often used iterate over a collection like an array. They then perform some logic on every item within that collection.

```JavaScript
for (let i = 0; i < 3; i++) {
  // perform some logic
  // the variable i can be used inside this block. It will be a Number
}
```

`let i = 0` acts to *initialize* any variables before the loop is run.

`i < 3` is a *condition* that must be true for the logic in the loop to be performed.

`i++` is the *final expression* evaluated at the end of the current loop iteration.

The use of `i` is very common across languages. It can be thought to represent `incrementor`, `iterator`, or `index`

```JavaScript
const hats = ['stocking cap', 'baseball cap', 'fedora', 'top hat'];
for (let i = 0; i < hats.length; i++) {
  // perform some logic
  // access each element in our hats array using the variable i to stand in for the index number
  console.log( hats[i] );
}
```

## Functions

Functions are blocks of logic we want to be able to run repeatedly, whenever we want. Functions give us the ability to reuse code. Each function should contain all of the logic it needs to do its work. This is called `encapsulation`

Functions often take input, do something with that input, and give us back a result.

```JavaScript
// function declaration
function doubleIt(x) {
  return x * 2;
}

// function expression
let doubleIt = function(x) {
  return x * 2;
}
```

- Each function does the same thing, BUT *function declarations* can appear anywhere in a file, while *function expressions* must be defined before they are used.
- `x` is an **argument**. Arguments allow us to pass data/values to our functions.
- **Arguments** are also called **parameters**
- The value of the function expression is an *anonymous function*: a function that has no name.
- `return` is a keyword that is used to exit a function with a given value.

**Additional resources:** [function expression vs. declaration](https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/)


## JavaScript Built-In Functions, Strings and Arrays

JavaScript comes with a host of useful functions. We explore a few here,
but there are more at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects).

**Methods** are **functions** that are attached to a specific **object**. **Methods** are more commonly written as _function expressions_. When writing a **function** in the global scope it is more common to use a _function declaration_.

### Built-In Functions

* [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
* [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
* [String()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Object Methods

* .toString()

## String Methods

* [.charAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
* [.length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length)
* [.substring()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

[W3Schools String Methods](https://www.w3schools.com/js/js_string_methods.asp)

### Array Methods

* [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=control)
* [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop?v=control)
* [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift?v=control)
* [.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift?v=control)

[W3Schools Array Methods](https://www.w3schools.com/js/js_array_methods.asp)

![array methods](../images/array_methods.png)

### Also...

Convert String to an Array

```JavaScript
let str = "a, b, c, d, e";
let theArray = str.split(",");
```
