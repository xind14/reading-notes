# Class 3 - Passing Functions as Props

## Lab 3 - Passing Functions in Props

## Setup

For this class, you will be enhancing your Gallery Of Horns to allow users to click on an image and display it as a modal.

**Time Estimate**

For each feature, estimate the time it will take, and record your start and finish times:

1. Feature #1: Display a Modal
   - **Why:** To allow users to view a larger image with a description.
   - **What:** When a user clicks on an image, render it larger with the description.
   - **How:**
     - Import data.json into App and pass it to Gallery.
     - Map over JSON data in Gallery to render each beast.
     - Send a function to Gallery to update App state.
     - Create SelectedBeast component and include it in App.
     - Use App state to render an individual beast in a Modal in SelectedBeast using React Bootstrap.

   - **Estimate:**
   - **Start Time:**
   - **Finish Time:**
   - **Actual Time:**

Stretch Goal: Fuzzy search

2. Feature #2: Allow Users to Favorite Individual Beasts
   - **Why:** Users want to search images by titles or keywords.
   - **What:** When a user enters a character into the search field, display only matching images.
   - **How:**
     - Create an input element for image search.
     - Write a fuzzy search using regular expressions.

   - **Estimate:**
   - **Start Time:**
   - **Finish Time:**
   - **Actual Time:**

## Submission Instructions

- Complete your Feature Tasks.
- Run Lighthouse Accessibility report, aim for a score of 65 or higher, and make adjustments.
- Create a Pull Request (PR) to the main branch.
- On Canvas, submit a link to your PR and your deployed application on Netlify.
- In the Canvas comment, include:
  - A question related to the lab assignment.
  - An observation or 'Ah-hah!' moment during the lab.
  - The time spent on the assignment.

## Code Challenge

**Overview**
Read the [challenge overview](https://codefellows.github.io/code-301-guide/curriculum/class-03/challenges/).

**Video**
Watch the [class video](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k).

**Demonstration**
Explore the [sample problems](https://codefellows.github.io/code-301-guide/curriculum/class-03/challenges/DEMO.html).

**Challenges**
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch: `git checkout -b filter`.
2. Retrieve the code challenge: `npm run get-challenge 03`.
3. Run tests: `npm test 03`.
4. Write code to make the tests pass, one at a time.

**Submission**
When all tests pass, create a PR from your branch to the main branch.

## Written Class Notes

### Grid Overview

- `xs`, `s`, `md`, `lg` represent the number of columns displayed on various screen sizes.

### Filter

- `filter` runs on an array, returning a new array based on a specified condition.
- Demonstrated with `forEach`, `map`, and `filter` on an array of numbers and an array of objects.

Example:

```javascript
let arr = [1, 2, 3, 4, 5, 6];

let family = [
  {
    name: "John",
    species: "Person"
  },
  {
    name: "Rosie",
    species: "Dog",
  },
  {
    name: "Geno",
    species: "Dog"
  }
]

function addThemUp(value, idx) {
  console.log(value);
  return value * idx;
}

// forEach just runs for each element
let forEachArray = arr.forEach(addThemUp)
console.log('forEach', forEachArray);

// map runs for each element, creates
// a new array based on what's returned
// always the same size as the original
let mappedArray = arr.map(addThemUp);
console.log('Mapped', mappedArray);

// filter runs for each element, creates
// a new array based on what's returned
// based on a condition

let filterArray = family.filter((value, idx) => {
  if (value.species === "Person") { return true; }
});
console.log("Filtered", filterArray);
```

### Form Demo

- Demonstrated a form with a responsive auto-suggest example.
- Used the `useState` hook for form input.

Example:

```javascript
function ResponsiveAutoExample() {
  const [name, setName] = useState('');

  function handleChange(event) {
    let search = event.target.value;
    setName(search);

    let names = ["John", "Cathy", "Zach", "Allie"];
    let found = names.filter( (value) => {
      return value === search;
    })
    console.log(found);
  }

  return (
    <>
      <h1>Welcome, {name}</h1>
      <input onChange={handleChange} />
      <Container>
        <Row>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
          <Col sm={3}>sm=4</Col>
        </Row>
      </Container>
    </>
  );
}

export default ResponsiveAutoExample;
```

### Passing Functions Between Components

- Demonstrated passing functions from parent to child components.
- React is unidirectional from state down, but callback functions can affect the parent/state.
- Example with a function `haveBirthday` passed from parent to child.

Example:

```javascript
// Parameters:
// Name - String

function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

function sayHey(name) {
  console.log(`Hey there, ${name}`);
}

// Parameters:
// person - String
// greetingFunction - Function
// Functions can be passed in as arguments, which means
// they are "1st Class Citizens"
function greet(person, greetingFunction) {
  greetingFunction(person);
}

greet("John", sayHello);
greet("Cathy", sayHey);

/*
what actually happens in react...

1. const content = App();
    1. props = { name:"Zach", age:25,

 handleBirthday: haveBirthday }
    2. const childContent = Child( props );
    3. Child will return that div
    4. App will return the div it got from Child
2. Append content to div with id of "root"

function App() {
    function haveBirthday() {
    console.log("hooray");
    }
    return (
    <Child name="Zach", age=25, handleBirthday={haveBirthday} />
    );
}

function Child(props) {
props.handleBirthday();
return (
    <div>{props.name}</div>
)
}
*/
```

### Family Demo with Added Child Component Function Passing

App.jsx:

```javascript
import { useState } from 'react'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import People from './components/People.jsx';
import database from './assets/family.json';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [people, setPeople] = useState(database);

  function voteFor(person) {
    console.log('People', people);

    // Iterate the people array and find "person"
    let newPeople = people.map( (obj, idx) => {
      // Increase their vote count
      if( obj.name === person ) {
        obj.votes++;
        return obj;
      }
      return obj;
    });

    console.log("newPeople", newPeople);

    // Update State
    setPeople(newPeople);

    console.log(people);
  }

  return (
    <main>
      <Header title="Our Family!" members={people.length} />
      <People list={people} handleVote={voteFor} />
      <Footer content="Copyright 2023: John and the 301's" />
    </main>
  )
}

export default App;
```

People.jsx:

```javascript
import React from 'react';
import Person from './Person.jsx';

function People(props) {
  return (
    <>
      {props.list.map( (person,index) =>
        <Person
          key={index}
          name={person.name}
          hair={person.hair}
          votes={person.votes}
          handleVote={props.handleVote}
        />
      )}
    </>
  )
}

export default People;
```

Person.jsx:

```javascript
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Person( props ) {
  function vote() {
    // Call a method in the parent that does the voting...
    props.handleVote(props.name);
  }

  return (
    <Card style={{ width: '18rem', margin:"1em"}}>
      <Card.Img variant="top" src="https://placehold.co/100x100" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Votes: {props.votes}
        </Card.Text>
        <Button onClick={vote} variant="primary">Vote for {props.name}</Button>
      </Card.Body>
    </Card>
  );
}

export default Person;
```

## Read 3 - Readings Overview

### Resources Link/Pages

- [React Tutorial through ‘Declaring a Winner’](https://react.dev/learn/tutorial-tic-tac-toe)
- [React Docs - Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)

#### React Docs - lists and keys

1. [React Docs - lists and keys](https://legacy.reactjs.org/docs/lists-and-keys.html)

#### The Spread Operator

1. [The Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

#### How to Pass Functions Between Components

1. [How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU)

## Answer

**Statement on why this topic matters as it relates to what I'm studying in this module:**

The spread operator and passing functions between components are essential for precise state management.

#### React Docs - lists and keys

1. What does `.map()` return?
   - It returns a new array with the results of applying a provided function to each element of the original array.
2. If I want to loop through an array and display each value in JSX, how do I do that in React?
   - Use the `.map()` function.
3. Each list item needs a unique \_\_\_\_.
   - `key`
4. What is the purpose of a `key`?
   - It allows React to identify which items in a list have changed, been added, or been removed. It gives elements in the array a stable identity.

#### The Spread Operator

1. What is the spread operator?
   - The spread operator (...) is a syntax that allows an iterable to be expanded where zero or more arguments or elements are expected. It is used to make a shallow copy of an iterable or to include its elements individually.
2. List 4 things that the spread operator can do.
   - Expand elements of an array or string in a function call's arguments list.
   - Include all elements of an array in a new array literal.
   - Include all properties of an object in a new object literal.
   - Make a shallow copy of an array or object.
3. Give an example of using the spread operator to combine two arrays.
   - ```javascript
     const array1 = [1, 2, 3];
     const array2 = [4, 5, 6];
     const combinedArray = [...array1, ...array2];
     ```
4. Give an example of using the spread operator to add a new item to an array.
   - ```javascript
     const originalArray = [1, 2, 3];
     const newArray = [...originalArray, 4];
     ```
5. Give an example of using the spread operator to combine two objects into one.
   - ```javascript
     const obj1 = { foo: 'bar', x: 42 };
     const obj2 = { bar: 'baz', y: 13 };
     const combinedObject = { ...obj1, ...obj2 };
     ```

#### How to Pass Functions Between Components

1. In the video, what is the first step that the developer does to pass functions between components?
   - He creates the `increment` function in the parent component where the state is located, which is used to update the state.
2. In your own words, what does the increment function do?
   - It takes a person object as a parameter, including a name and a count. It loops through an array of people, finds the person with a matching name, increments their count, and updates the state with the modified array.
3. How can you pass a method from a parent component into a child component?
   - The parent component includes the method in the props passed to the child component. The child component can then access and invoke the method using `props.method`.
4. How does the child component invoke a method that was passed to it from a parent component?
   - Using `this.props.method` to call the method and trigger actions like updating the state in the parent component.

## Things I want to know more about

- Not quite sure what the real-world scenarios would be where using keys in React applications is needed.

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
   - I somewhat know how to write useState and event functions but still don't quite know where to apply those correctly and how to scope them.
1. What did I learn today?
   - I learned that child components can change if you affect state somehow to pass down to other children. I also understand  grid in react bootstrap about what xs/sm/md etc {number} means
1. What should I do differently next time?
   - I should ask for lab direction clarification before hand because that's where a lot of my constant restructuring of my code took the longest time.
1. What still puzzles me, or what do I need to learn more about?
   - I still don't understand useState in App and how to apply it downwards, I tried but nothing was rendering.

Thinking about each of your assignments for the day, reflect on:

1. Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - The assignment met the requirements but I didn't do any CSS because the feature goal already took a long time.

## Career 3 - Stage Fright (O_O)

Almost 2/3rds of the population will avoid having to publicly speak. So how do you overcome the fear and step into your personal and professional growth?

Here are two articles that will help you understand the science behind the fear and approaches to take when feeling anxious about presenting:

[Conquering Stage Fright](https://adaa.org/understanding-anxiety/social-anxiety-disorder/treatment/conquering-stage-fright)
[The Science Behind Public Speaking](https://www.scienceofpeople.com/public-speaking-tips/)

Assignment

Write about two things that you will implement to improve your anxiety when giving a presentation.

1. I will prepare my material in advance and practice out loud but

2. I should also understand that too much practice can still be harmful and give up trying to be perfect and know that what I have is enough and that it is ok to make mistakes.
