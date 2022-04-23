# React Props

[Starter Repo](https://github.com/PrimeAcademy/react-props-starter)

Mythical Creature App with a list and form in components (uses props):

- make a header and pass it props
- move list to a component
- move individual list items to a component
- move form to a component



Our `App.js` is getting a little crowded. We should probably break these out into components now:

```
index
+-------------------------+
|App                      |
|                         |
|+---------------------+  |
||Header               |  |
|+---------------------+  |
|+---------------------+  |
||Form Input & Button  |  |
|+---------------------+  |
|                         |
|+----------------------+ |
||List of things        | |
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

## Props
Props are the way to share data from one component to a child component. They always flow from parent to child - never the reverse! They are diferent than local state, which still can exist in each component. We don't want to duplicate state data, so we use props to pass data around.
[Flow Diagram](https://www.techdiagonal.com/reactjs_courses/beginner/reactjs-component-state/)

## Header
Lets start by making a new  file `components/Header/Header.js`

```JSX

function Header (props) {
    console.log(props)
    return (
        <>
            <h1>Hi!</h1>
        </>
    );
  }

export default Header;
```

And in `App.js` we need to import:
```JSX
import Header from '../Header/Header';
```

And we need to render the component:
```JSX
<Header />
```
So to use props, we will pass data from the parent (App) to the child (Header). Props can be called anything you want!

<Header myProp={"YAY"} isCool={true} title={"Hello Props!"} />

Check out your console log from header -- what do you see?

Let's render the title prop in our header:
```
 return (
        <>
            <h1>{props.title}</h1>
        </>
    );
```


## List Component
More often with props, we share existing variables! Let's make a list!

Create a new file `components/CreatureList/CreatureList.js` 

```JSX

function CreatureList (props) {

    return (
        <ul>
          {
            props.list.map(creature => (
              <li key={creature.id}>
                The {creature.name} originated in {creature.origin}.
              </li>
            ))
          }
        </ul>
    );
  

export default CreatureList;
```

And in `App.js` we need to import:
```JSX
import CreatureList from '../CreatureList/CreatureList';
```

And we need to pass the correct props:
```JSX
<CreatureList list={creatureList}/>
```

## Destructuring Props
It's getting annoying to always have to type props.thing, and we can make it a little simpler. If we `destructure` our props, we can get access to the stuff directly. You've already done this, actually:

`import {useState} from 'react` -- useState is being destructured out of react. Its a shortcut for `react.useState`

So, if we know the name of the prop we want, we can just grab it by its name!

`function CreatureList ({list}) {`

## Item

Look at that list! Its great! But, the li itself might be a good candidate for a component, so we can make it happen with props!
Create a new file `components/CreatureItem/CreatureItem.js` 


```JSX

function CreatureItem({creature}) {

    //This component could have local state too!

    return (
      <li key={creature.id}>
        The {creature.name} originated in {creature.origin}.
      </li>
    );
  

export default CreatureItem;
```

And use in the `.map` in CreatureList:

```JSX
 return (
        <ul>
          {
            list.map(creature => (
              <CreatureItem creature={creature} />
            ))
          }
        </ul>
    );
```

## Form Component

Now the tricky one...

We can pass *anything* through props. Not just arrays or strings, but also functions. They don't have to be things on `state` either.
We're also going to move the state of the form into the Form component.

Create a new file `components/CreatureForm/CreatureForm.js`

```JSX

function CreatureForm ({
  addNewCreature
  }) {

    const [newCreatureName, setNewCreatureName] = useState('')
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newCreature = {
            name : newCreatureName,
            origin: newCreatureOrigin
        };
        
        // Pass the new creature up to the App component
        addNewCreature(newCreature);

        // Clear form inputs
        setNewCreatureName('');
        setNewCreatureOrigin('');
    }
    
    return (
      <form onSubmit={handleSubmit}>
          <input value={newCreatureName} onChange={(event) => setNewCreatureName(event.target.value)} />
          <input value={newCreatureOrigin} onChange={(event) => setNewCreatureOrigin(event.target.value)} />
          <button type="submit">Add Creature</button>
      </form>
    );
  }


export default CreatureForm;
```


This new `CreatureForm` component will pass a creature object up to the `App` component, via the `addNewCreature` function prop.

Our `App` component will handle this new creature by sending to the server with axios:

```js
// in App.jsx
// This is the function that CreatureForm is calling, when
// a new creature is added
const addNewCreature = (newCreature) => {
   axios({
      method: 'POST',
      url: '/creature',
      // Send the new creature object to the server
      data: newCreature
    })
      .then( (response) => {
        console.log('Response:', response);
        fetchCreatures();
      })
      .catch(function (error) {
        console.log('Error on add:', error);
      });
}
```

We'll pass this function down to `CreatureForm` as a prop:

```JSX
// In App.js
// Import the CreatureForm
import CreatureForm from '../CreatureForm/CreatureForm';

// ... 


// And render it
<CreatureForm 
  // passing the addNewCreature function as a prop
  addNewCreature={addNewCreature} 
/>
```

We can also remove these bits of state from `App`, since they are now managed by the `CreatureForm`:

```js
// Get rid of these in App.jsx
// const [newCreatureName, setNewCreatureName] = useState('');
// const [newCreatureOrigin, setNewCreatureOrigin] = useState('');
```

## Final Version

In the end, in `App.jsx` will look like:

```jsx
import {useEffect, useState} from 'react';
import axios from 'axios';

import './App.css';

function App () {
  const [creatureList, setCreatureList] = useState([]);

  const fetchCreatures = () => {
    axios({
      method: 'GET',
      url: '/creature'
    })
      .then( (response) => {
        setCreatureList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  const addNewCreature = (newCreature) => {
    axios({
        method: 'POST',
        url: '/creature',
        data: newCreature
      })
        .then( (response) => {
          console.log('Response:', response);
          fetchCreatures();
        })
        .catch(function (error) {
          console.log('Error on add:', error);
        });
  }

  useEffect( () => {
    fetchCreatures();
  }, [])
  
  return (
    <div className="App">

      <CreatureForm 
        addNewCreature={addNewCreature} 
      />

      <h2>All Creatures</h2>
      <CreatureList list={creatureList}/>
    </div>
  );

}

export default App
```
