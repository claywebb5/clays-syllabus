# AJAX

[AJAX](https://www.w3schools.com/xml/ajax_intro.asp) is a methodology which allows us to communicate between the client and the server through our JavaScript code. We can request information via HTTP from the server using a **GET** request or send data to the server using a **POST** request.

### Types of Requests

Method | a.k.a. | Description
--- | --- | ---
GET | READ | Requests data. This can be tested in the browser.
POST | CREATE | Send data to the server.

We'll be adding two more request types at a later point.


## Client setup

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Quotes</title>
  <script src="jquery.min.js"></script>
  <script src="client.js"></script>
</head>
<body>
  <h1>Quotes!</h1>
  <ul id="output"></ul>
</body>
</html>
```
**client.js**
```JavaScript
$(document).ready(onReady);

function onReady() {
  getQuotes();

}

function getQuotes() {
  // Get quotes from server - AJAX!
}
```

## Ajax with jQuery

We can call routes from the client side with AJAX!

jQuery has a method called `$.ajax()` (http://api.jquery.com/jquery.ajax/) which makes creating and controlling these requests easier. Remember, we can make these requests with vanilla JavaScript (see [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)). jQuery just makes it easier. 

### Example GET
Let's get our quote of the moment from the server:

```JavaScript
$.ajax({
    method: 'GET',
    url: '/quotes',
  }).then(function(response) {
      console.log("SUCCESS!!!", response);
      // TODO - append quotes to the dom
  }).catch(function(response) {
      // notify the user
      alert('Request failed. Try again later.');
    }
  );
```

The response has our quote in it... Let's render it to the DOM.

```JavaScript
function getQuotes() {
  $.ajax({
    method: 'GET',
    url: '/quotes',
  }).then(function(response) {
      console.log("SUCCESS!!!");
      // append quotes to the dom
      renderToDOM(response);
  }).catch(function(response) {
      // notify the user
      alert('Request failed. Try again later.');
    }
  );
}

function renderToDOM(quotes) {
  $('#output').empty();

  for (let quote of quotes) {
    $('#output').append(`
      <li>
        ${quote.text} by <i>${quote.author}</i>
      </li>
    `);
  }
}
```

### Example POST
Let's setup a form to enter a new quote!

When we click submit, we'll make an Ajax POST request to the server, sending the new quote as data.

```JavaScript
$('#newQuoteButton').on('click', addQuote);

function addQuote() {
  // Make a POST request to the server
  $.ajax({
    method: 'POST', // Type of request
    url: '/quotes', // Route that we will match on
    // Must be an object - will be available as req.body
    data: { 
      quoteToAdd: { 
        text: 'hello', 
        author: 'me',
      }
    } 
  }).then(function(response) {
      console.log("SUCCESS!!!");
      // refresh quotes
      getQuotes();
  }).catch(function(response) {
      // notify the user
      alert('request failed');
  });
}
```

> The name `quoteToAdd` is not significant -- you can call it whatever you want, so long as it matches what the server is looking for on `req.body`!
> You should always send an object on data -- other data types sometimes have issues

This practice of calling a `POST` (or `UPDATE` or `DELETE` for that matter) and then immediately calling our `GET` request again is going to be a standard procedure for us to update our client with the data from the server. 

The `WHY` behind this will become clearer when we add our database, but essentially, having one `GET` request instead of returning data on every `POST`, `PUT`, and `DELETE` makes the server-side code much cleaner.


### Example POST

Client side code that will send data to the server.

```JavaScript
function addQuote() {
  // Make a POST request to the server
  $.ajax({
    method: 'POST', // Type of request
    url: '/quotes', // Route that we will match on
    // Must be an object - will be available as req.body on server
    data: { 
      quoteToAdd: { 
        text: 'hello', 
        author: 'me',
      }
    } 
  }).then(function(response) {
      console.log("SUCCESS!!!");
      // refresh quotes
      getQuotes();
  }).catch(function(response) {
      // notify the user
      alert('request failed');
  });
}
```