# jQuery Intro

## Topics

* What is jQuery?
* Getting jQuery
* The Document Object Model (DOM)
* Event-Driven Programming
* Resources

## What is jQuery?

* a software library used to traverse and manipulate the DOM, handle events,
create animations, and make asynchronous requests to a server
* is a layer on top of vanilla JavaScript

## Getting jQuery

You can include jQuery in your projects in two ways:

**Method 1:** Download the minified file from http://jquery.com/download/. Then, source that file into your HTML file.

```HTML
<script src="jquery-3.1.1.min.js"></script>
```

OR

**Method 2:** Include a content delivery network (CDN) source in your HTML file.

```HTML
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
```

**REMEMBER:** Source the jQuery library into your `index.html` file _before_ your JavaScript file.

## The Document Object Model (DOM)

* cross-platform and language-independent convention for representing and interacting with objects in HTML documents
* organized in a tree structure

![DOM visualization](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/800px-DOM-model.svg.png)

## Event-Driven Programming

To create dynamic web pages, we need JavaScript code that is not completely sequential. We need to react to events.

Our code can run at three events:

1. When the page loads the script.
2. When the browser loads the DOM.
3. When other events occur. (Covered in later lecture.)

```JS
$(document).ready(onReady);

function onReady() {
  // Event 2
  // code here runs after DOM is loaded
});

// Event 1
// code here runs when the script (file) is loaded
// non-DOM code can safely go here
```

## Resources

* [jQuery official website](http://jquery.com/)
* [jQuery documentation](http://api.jquery.com/)