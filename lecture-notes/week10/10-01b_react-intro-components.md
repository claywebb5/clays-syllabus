# React Components

## Objectives

- Build off the [CRA orientation lecture](./10-01_cra-orientation.md) which intros CRA, folder structure, basic importing, etc.
- Understanding of the concept of Components
- Use JSX to render Components on the DOM
- Be able to create new Components, import, and render in App



## React Components

Everything in a React app should be broken down into components. This makes it easier to re-use code and test your code. 

Think about the components that would make up a basic list app.

```
index
+-------------------------+
|App                      |
|+---------------------+  |
||Form Input & Button  |  |
|+---------------------+  |
|                         |
|+----------------------+ |
||List of Stuff         | |
||+--------------------+| |
|||List Item           || |
||+--------------------+| |
||+--------------------+| |
|||List Item           || |
||+--------------------+| |
|+----------------------+ |
|                         |
+-------------------------+
```


## What are Components?

Describe what a component is, visuals help with real-world examples: facebook, pinterest, twitter, etc.

Core

- self-contained files of HTML, CSS and JS that can display on the DOM
- respond to user events (clicks, typing, etc.)
- intended to be reused
- can talk to one another

Bottom line: A Component is used to put a small amount of HTML onto the DOM and manage it.


### React Starter Project
We've already made our repo, so lets look closer.

The starter project comes with two components out of the box, `App.js` and `index.js`. Each component comes with a corresponding CSS file. 


### index.js

We won't be working in here much this week, but take a look at index.js. This is the root of our application.
Primarily, a Component needs to get HTML to appear on the DOM. The `ReactDom.render` function takes in two arguments, **what** we want to render (our App) and **where** we want it to go on our HTML page.

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Note on reportWebVitals -- not important, and you can remove it. Just a helper. If you want to know more, follow that link.

### Get Organized & Paths

Let's start by creating a `components` folder with an `App` folder inside it. Rename `App.js` to `App.jsx`
>> .jsx is still a valid extension. It stands for javascript extension! No actual difference for the code we write, but the code editor will be a bit smarter about our work.

Now we're going to move `App.jsx` into that folder. When we restart, things are broken! Why? What do we need to change?

We have to update `index.js` to the correct path.

### Components 

Let's create a `components/Header/Header.jsx` file. Inside, we'll render a simple Hello World in a `h1`. Lets import it in our App component and render it there:

```js
<div className="App">
  <header className="App-header">
    <Header />
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer" 
      >
        Learn React
    </a>
  </header>
</div>
```

Let's create a `components/Instructions/Instructions.jsx` file and move the `p` tag content to that new file as a component.

Let's add a second `<p>` tag to `Instructions.jsx`. Read the error. What is it saying? `Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag (9:12)` What does that mean? Read the errors carefully. They are trying to help.

We need to only have ONE overall parent per component. If it's arbitrary, we can use a Fragment! Otherwise, you could use a `div`

```
<>
  ...
</>
```

...speaking of reading errors carefully...

> Exercise: Rocket React Rascal - Read the instructions and look at the final gif!! You're not done until it looks like the gif.


