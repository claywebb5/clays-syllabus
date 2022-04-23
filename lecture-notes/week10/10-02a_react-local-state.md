# React State

This lecture will cover:

- Rendering local state in React
- Using `useState` to make and update React component state
- React event handler onClick

## Getting started
Starting repo:
https://github.com/PrimeAcademy/react-state-starter

Let's open up `src/App.jsx`.
```jsx

function App () {

    return (
        <div className="App">
            <p>Hello! My name is Luke.</p>
            <button>Click me!</button>
            <p>I've clicked the button 0 times.</p>
        </div>;
    )
}
```

## React State

What if we want to pull that _name_ out into a dynamic "variable"? Or the _count_? In React, we use _state_ to track variables within a component. If a variable should be shown on the DOM, it should live in state.

To achieve this, we cannot just make a variable, we have to use a `hook` called `useState`. React gives us this tool.

`import {useState} from 'react'`

This is Object destructruring -- a sort of shortcut to get a property of an object. Here, this is a shortcut for:
```js
import React from 'react'
const useState = React.useState
```


The pattern for useState:
`const [myStateVariable, setMyStateVariable] = useState('initial value');`

Think of it this way: useState is a function, that you give the initial value to. It can be any datatype.

It returns to us an array, with two things inside. This syntax is called `destructuring`. 

Array descructuring, (similar to object desructuring). useState returns an array. It accepts the default value of the state variable.

Written in full it could look like:

```jsx
let whatUseStateReturns = useState(false);
let myThing = whatUseStateReturns[0];
let changeMyThing = whatUseStateReturns[1];
```

You get a state variable at index 0, and a function for how to change that state variable at index 1.

As written, you could read this as 

"Make two variables, grabbing the first thing out of the array and call it name, and grab the second thing out of the array and call it setName"

With useState -- the first thing in the array is ALWAYS the variable and the second thing is ALWAYS a function that sets that variable.



```jsx
import { useState } from 'react';

function App () {
    // destructured array
    //const [myStateVariable, setMyStateVariable] = useState('initial value');

    const [name, setName] = useState('Luke');
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>React Local State</h1>
            Hello! My name is {name}.
            <button>Click me!</button>
            I've clicked the button {count} times.
        </div>;
    )
}

```

Note the `{someVar}` for variable interpolation in JSX. Similar to the the `${someVar}` syntax in JS template strings (but only works in JSX).

----

## Changing state
Let's get that button working! When we click on it, we want to trigger some functionality! Let's start with a console log. With react, we use the html `onClick`!

```JSX
<button onClick={() => console.log('clicked!')}>Click me!</button>
```

Note -- this is arrow function shorthand -- you can only get it to do one thing this way. If you want a console.log AND other things, you have to write it with brackets and return.

So, now that we got a click logging, lets try to get the DOM to read how many times we've clicked the button. Remove the console.log. How might we do this? We have a state variable called count...

Your first instinct might be to just alter count-- cant do that! First, its a `const`, but even if it were a `let`, we wouldn't do that. 

React works in a very specific way.
We have to call the setter function that we were given for count. If we alter it directly, the DOM will not update!

```JSX
// NO
<button onClick={() => count += 1}>Click me!</button>

//YES
<button onClick={() => setCount(count + 1)}>Click me!</button>

```

## Named Function
If you wanted to do more than just setCount, you should use a named function. 

Something like:
```jsx
 const handleClick = () => {
    console.log('clicked');
    setCount(count + 1);
}
//...

<button onClick={handleClick}>Click me!</button>
```

>> Activity: Rock Picker



