# jQuery Selectors, DOM Manipulation and Events

[Code from Lecture](https://github.com/PrimeAcademy/hadar-jquery-intro)

Once the DOM is loaded, we can select elements with the `$()` syntax. When we do this, we get a jQuery object.

To _manipulate_ the DOM, we must first select an element.

## Selectors

* select by ID - `$('#some-id')`
* select by class - `$('.some-class')`
* select descendants - `$('ul li')`
* select multiple elements - `$('.mic, .check')`
* find elements within a selection - `$('#solid').find('.rock')`

**Selectors** return an **Object** that has properties and functions we can call.

## DOM Traversal

Once we select an element, we can navigate to other elements in the DOM tree.

* navigate to parent element - `$('.some-child').parent()`
* get the first-level children of an element - `$('ul').children()`

## DOM Manipulation

Once we select an element, we can change how that element appears on the DOM.

* change an elements text color - `$('#once-blue').css('color', 'blue')`

## Manipulating Classes

Allows us to easily change which pre-defined CSS classes are applied to any element. We can further react to events by applying CSS rules which have visual changes, even animations associated with them.

```JavaScript
addClass('className');    // adds a CSS class by name
removeClass('className'); // removes CSS class by name
toggleClass('className'); // adds if it isn't on the element, removes if it is

// CSS file
 .className {
  color: blue;
}

```

## Getters and Setters

Some manipulation methods that allow us to **set** (i.e. change or update) properties for jQuery objects, can also be used to **get** the current properties of that object.

```JavaScript
$('#an-element').text('Hello World!'); // sets the text in the element to Hello World!

$('#an-element').text(); // returns the value "Hello World!"

$('#an-input').val(); // returns the value of the input field

$('#an-input').val(''); // clears input text
```

## Handling Click Events

- Events are registered to listeners on DOM ready
  - We can only register events to elements that are on the DOM at this time
  - What about buttons that are created on the fly? Can we still add listeners to them?
  - Adding descendant selectors - `$('#section').on('click', '.dynamicallyCreatedButton', function(){});`
- Callback functions contain logic that occurs when event actually triggered

### $(this)

- How we know what was clicked to trigger the event
- Represents the **target** of the **event** (e.g. *click*)

## Appending/Removing from DOM

- `.append()`
- `.remove()`
- `.empty()`


## References

* [jQuery Selector Documentation](http://api.jquery.com/category/selectors/)
* [jQuery Manipulation Documentation](http://api.jquery.com/category/manipulation/)
