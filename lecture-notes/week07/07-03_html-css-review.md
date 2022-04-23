# HTML Review

[Code similar to lecture](https://github.com/PrimeAcademy/lecture-html-css-intro/)
[Live hosted code](https://primeacademy.github.io/lecture-html-css-intro/)

Lecture Objectives:

- understand HTML's place in web development
- understand static page limitations
- examples of: containers, lists, tables, forms, links, images
- understand concept of box model
- understand core CSS selectors
- resources


## Overview

Browsers only understand HTML and CSS as a way to render (draw) things on the page. Web development requires at least some knowledge of HTML. Even fancy things like React JSX all boil down to HTML and CSS in the end.

Static HTML pages do not change. Having a site with static pages ("static content") is difficult to maintain and has a lot of repeated code. However, it's a good place to start in learning HTML and CSS.


## Where to Start

Layout your content in big boxes prior to digging into specific components.

```
+===================+
|      Header       |
+===================+
|       Nav         |
+-------------------+
| Content | Content |
+-------------------+
|      Content      |
+-------------------+
|      Footer       |
+-------------------+
```

## HTML Elements

An **element** includes the open **tag**, closing **tag** and everything in between:

> `<span>Hello World</span>`

Some elements are **self-closing** and only need an opening tag with a slash just before the closing angular bracket:

> `<img src="path/to/image.png" />`

> `<input type="text" />`

A **tag** is the open or closing of an **element**:

> `<span>`

They are sometimes used interchangeably but technically have slightly different meanings.

## Nesting

Elements can be nested inside one another. Not all combinations are valid, even through you will not see any errors given. The browser will always try to render whatever you throw at it.

```HTML
<div>
	<h1>Heading!</h1>
	<p>This is <span>valid</span></p>
</div>

<table>
	<div>
		<p>This is not valid at all.</p>
	</div>
</table>

```

Some elements must be used together and are therefore more complicated to use. Tables, lists, drop down menus are some examples.

## Attributes

Some elements allow optional additional parameters called **attributes** which help specify more about this particular element. Attributes include a specific keyword, an equal sign, and a value in double quotes.

### Examples

> `<script src="/scripts/index.js" type="javascript">`

> `<img src="http://images.google.com/superfunimage.jpg" />`

> `<div id="container">`

> `<p class="drop-cap orange">`

## Container Elements

Elements used to contain other elements. Some have an implied meaning or usage, but all of them act like `div`s in terms of layout and style.

- div
- header
- sidebar
- main
- footer
- section

## Lists

```HTML
<ul>
	<li>First item</li>
	<li>Second item</li>
	<li>Third item</li>
	<li>
		<ol>
			<li>Bullet one</li>
			<li>Bullet two</li>
			<li><a href="http://www.google.com">Link to Google</a></li>
		</ol>
	</li>
</ul>
```

## Images

```HTML
<img src="path/to/image.png" />

<div style="background-image: url(path/to/image.png) top left no-repeat">
```

## Links

Things you can click on to go to another URL or HTML document.

> `<a href="path/to/page.html">Click Me</a>`

Don't do this. Buttons and links are different!

> `<button><a href="">Click Me</a></button>`

## Tables

```HTML
<table>
	<thead>
		<tr>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
```

## Forms & Inputs

The form element has some built in functionality. Namely, you can hit enter to submit. It reloads your page, though, so avoid it until we learn how to prevent the default behaviour. 

```HTML
<form>
	<input type="text placeholder="name" />
	<input type="submit" />
</form>
```

Inputs can be used outside of forms -- there are many types that help users know what to do!
- [Form Input Types](https://www.w3schools.com/tags/att_input_type.asp)


## Page Layout vs Visual Styling

HTML and CSS will either affect the **layout** of the page (how things are arranged on the page) or they will affect **styling** of elements (how things look).

### In-Line Elements

```HTML
<span>This will not</span>
<span>break the line.</span>
<button>Click Here</button>
<input type="text" />
```

### Block Level Elements

```HTML
<h2>Breaking Element</h2>
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<ol>
	<li>Read</li>
	<li>Write</li>
	<li>Speak</li>
	<li>Teach</li>
</ol>
<ul>
	<li>Charlie</li>
	<li>Thor</li>
</ul>
<div>
	...
</div>
```

---

## Common Element Selectors

See the [Full Reference at w3schools](https://www.w3schools.com/cssref/css_selectors.asp)

Selector | Example | Description
--- | --- | ---
element | div | Selects all elements with that tag
[.class](https://www.w3schools.com/cssref/sel_class.asp) | .intro | Selects all elements with class="intro"
[#id](https://www.w3schools.com/cssref/sel_id.asp) | #firstName | Selects the element with id="firstName"
 [*](https://www.w3schools.com/cssref/sel_all.asp) | * | Selects all elements
[element](https://www.w3schools.com/cssref/sel_element.asp) | p | Selects all <p> elements
[element within another element](https://www.w3schools.com/cssref/sel_element_element.asp) | div p | Selects all <p> elements inside <div> elements
| [multiple elements](https://www.w3schools.com/cssref/sel_element_comma.asp) | h1, h2, h3 | select all these elements

---

## Box Model

If you inspect an element with your browser, you can see a representation of the box model. Everything rendered on the page is a box. These boxes have properties and this is called **The Box Model**.

The parts of the box model are:

- `Content` - The content of the box, where text and images appear.
- `Padding` - Clears an area around the content but inside the element's box. The padding is transparent. Gives us space **inside** the box.
- `Border` - A border that goes around the padding and content
- `Margin` - Clears an area outside the box and border. The margin is transparent. Margin gives us space **between** elements.

---

## CSS properties to know!

- margin
- padding
- border
- height
- width
- display (block, inline, flex, grid, none)
- background-color

## The most common CSS question: HOW DO I CENTER?

Many options to center things. Thats part of the problem. This decision tree is very helpful:

- [Centering In CSS](https://css-tricks.com/centering-css-complete-guide/)


---

## Additional Resources

### HTML

- [HTML5 Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
- [HTML Tables](https://www.w3schools.com/tags/tag_thead.asp)
- [Form Input Types](https://www.w3schools.com/tags/att_input_type.asp)

### CSS

- [Web Colors](https://en.wikipedia.org/wiki/Web_colors)
- [CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.asp)
- [Advanced Layout: CSS Grid](https://www.w3schools.com/css/css_grid.asp)
- [Advanced Layout: CSS Flexbox](https://www.w3schools.com/css/css3_flexbox.asp)
- [Centering In CSS](https://css-tricks.com/centering-css-complete-guide/)
- [Normalizing CSS](https://necolas.github.io/normalize.css/)
