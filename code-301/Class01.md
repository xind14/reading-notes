# Class 1 - React and Component-Based Architecture

## Lab 1 - Component structure of the application

### Setup

By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by the number of horns and choose your favorite image.

For this class, we will focus on the component structure of the application. You will create a new React application using Vite and fill it with components. Refer to 'Feature Tasks' to see exactly which components to build and where to display them.

**Resources**
- [React Official Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [Vite Official Documentation](https://vitejs.dev/)

**Configuration**
Your repository must include the following config files:

1. `README.md` - Add the README from our configs folder, but edited by you to include an overview of the project for a new visitor to your repo. Name all collaborators.
2. `.gitignore` - provided by Vite.
3. Create a React application using Vite as demonstrated in class.
4. Use the command `npm create vite@latest`.
5. Create a new repository on GitHub named “Gallery of Horns” WITHOUT a `README.md`. We will import an “existing” repository with its own README.
6. Follow the instructions given by GitHub to “push an existing repository from the command line”. Be sure to select HTTPS or SSH, whichever is relevant for you.
7. Create a Branch and begin your work. As always, ACP often.
8. Your App component should render a Header, Footer, and Gallery component, each of which is defined in their own files.
9. Your Header component needs to have an `<h1>` with a title.
10. Your Footer component needs to contain your name as the author.
11. The Gallery component needs to render at least two copies of a component called HornedBeast.
12. The Gallery component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of this lab, you can pass whatever title, URL, and description that you want into each HornedBeast component.
13. The HornedBeast component needs to contain an `<h2>` that displays the title of the animal, an `<img>` element with `src`, `alt`, and `title` attributes, and a `<p>` that displays the description.
   - NOTE: Rendering an image in React is a little tricky. Try to figure out how to do this on your own, and we will go over it in the next code review.

**Stretch Goal**
- Given the following array, loop over the data to display three HornedBeast components:
  ```json
  [
    {
      "_id": 1,
      "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
      "title": "UniWhal",
      "description": "A unicorn and a narwhal nuzzling their horns",
      "keyword": "narwhal",
      "horns": 1
    },
    {
      "_id": 2,
      "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
      "title": "Rhino Family",
      "description": "Parent rhino with two babies",
      "keyword": "rhino",
      "horns": 2
    },
    {
      "_id": 3,
      "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
      "title": "Unicorn Head",
      "description": "Someone wearing a very silly unicorn head mask",
      "keyword": "unicorn",
      "horns": 1
    }
  ]
  ```

**Submission Instructions**

1. Complete your Feature Tasks for the day.
2. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
3. Create a Pull Request (PR) back to the main branch of your repository. Submit your assignment as a link to your PR and a comment describing how much time you spent on the lab.

## Code Challenge

**Overview**
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/)

**Video**
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

**Demonstration**
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/DEMO.html)

**Challenges**

1. Navigate to the javascript folder within your data-structures-and-algorithms repository.
2. Create a new branch for this challenge called `for-each`.
   ```bash
   git checkout -b for-each
   ```
3. Retrieve the code challenge from the system.
   ```bash
   npm run get-challenge 01
   ```
4. In your terminal, from the javascript folder, run `npm test 01` to execute the tests in this file for this challenge.
5. At this point, you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
6. If you do not see this, verify your installation of Jest by typing `npx jest --version` in your terminal. Filename typos can make things break!
7. Write code to make the tests pass, one at a time. Let the error messages guide you.
8. Once the test is passing, refactor as needed, then move on to the next challenge.
9. Note, you can also run `npm test` (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress.

**Submission**
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

### **forEach**
Array methods -

 iterate array and run a callback functions (function(event)=call back function we did in 201)

```javascript
let arr = [1, 2, 3, 4];
let newArray = [];

function addOne(value, index) {
  newArray.push(value + 1);
}

// Old Fashioned way
for (let i = 0; i < arr.length; i++) {
  addOne(arr[i], i);
}

// Newer way
// .forEach iterates an array. Does not return. Does not modify the original.
arr.forEach(addOne);

// Newer way but inline...
arr.forEach(function (value, index) {
  newArray.push(value + 1);
});

// Newer way, but with arrows ...
arr.forEach((value, index) => newArray.push(value + 1));

// Arrow functions are interesting
let f1 = (value, index) => {
  newArray.push(value + 1);
};

// If you only have 1 param, you don't need parens
let f2 = (value) => {
  newArray.push(value + 1);
};

// If you only have 1 line of code, you don't need braces AND ... that will also be the return value
let f3 = (value) => newArray.push(value + 1);

// Implicitly return
let f4 = (name) => name.toUpperCase();

// f4("john");  Return would be "JOHN"
```

**Clients and Servers**
Client - wants information, data
Servers - has the data for the client
protocol that we use to exchange

**Local and Remote**
Local - VScode, terminal, live server, HTML, CSS, JS

**WRRC**
Web remote request cycle

server - hw hd sw-when client goes to/homepage send markup
client asks for homepage sw chrome turns markup to things

**React**
```bash
npm create vite@latest counter
```
Don't touch `index.html` and `main.jsx` (get rid of import `.index.css`)
JSX for React component - can import one JS to other JS - component with HTML CSS JS all inside markup it made

Get rid of `app.jsx`

```javascript
import React, { useState } from 'react';

function App() {
  // count is a "getter"
  // setCount is a "setter"
  const [count, setCount] = useState(0);

  function increment() {
    // Adds 1 to the current 'count' in state
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  // When the value of {count} changes, React will automatically
  // re-render THIS COMPONENT
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
    </div>
  );
}

export default App;
```

Import needs export

`index` requires `main.jsx` which brings in `app` from `app.jsx`, `app` just has a function to return a markup

```javascript
import React from 'react';

import Header from './components/Header/Header.jsx';
import Family from './components/Family/Family.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    // can't return three parent things only one need to put in into something
    <>
      {/* something there that renders nothing */}
      <Header title="Code 301" />
      <Family />
      <Footer />
    </>
  );
}

export default App;
```

Components folder with three folders inside folder put a file for each `Footer.jsx` and `footer.module.css` import the CSS in JSX and in JSX add `className`

Start at main, delete `app.jsx` and `app.css`.

## Read 1 - Introduction to React and Components

## Resources Link/Pages

**Bookmark and Review**
- [React Tutorial through ‘Passing Data Through Props’](https://react.dev/learn/tutorial-tic-tac-toe)
- [React Docs - Hello world](https://legacy.reactjs.org/docs/hello-world.html)
- [React Docs - Introducing JSX](https://legacy.reactjs.org/docs/introducing-jsx.html)
- [React Docs - Rendering elements](https://legacy.reactjs.org/docs/rendering-elements.html)
- [React Docs - Components and props](https://legacy.reactjs.org/docs/components-and-props.html)

### Component-Based Architecture

1. [Component-Based Architecture](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)

### What is Props and How to Use it in React

1. [What is Props and How to Use it in React](https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0)

## Answer

Statement on why this topic matters as it relates to what I'm studying in this module:

Adding on to what was learned in 201, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

### Component-Based Architecture

1. What is a "component"?

   - A replaceable and reusable set of functionality. It is a software object, interacting with other components. Components are designed to be independent, allowing them to be deployed and composed individually.

2. What are the characteristics of a component?

   - Reusability: Designed to be reused in various applications or situations.
   - Replaceable: Can be substituted with similar components.
   - Not context-specific: Operates effectively in diverse environments and contexts.
   - Extensible: Allows the addition of new functionalities through modification or extension.
   - Encapsulated: Hides internal complexities, exposing only a well-defined external interface.
   - Independent: Minimizes dependencies on other components.

3. What are the advantages of using component-based architecture?

   - Ease of deployment: Easy replacement of versions without disrupting other components.
   - Reduced cost: Third-party components use spreads the cost of development and maintenance.
   - Ease of development: Provides clear interfaces, promoting focused development without affecting the broader system.
   - Reusable: Reused across applications, leading to cost-effective development and maintenance.
   - Modification of technical complexity: Components manage complexity through specialized containers and services.
   - Reliability: The reliability of individual components contributes to the overall system's robustness through reuse.
   - System Maintenance and Evolution: Allows for easy updates and modifications.
   - Independent: Independent development and flexible connectivity, fostering productivity in software development.

### What is Props and How to Use it in React

1. What is “props” short for?

   - It is short for "properties." It is a special keyword used to pass data from one component to another.

2. How are props used in React?

   - They are used to pass data from a parent component to a child component. They are objects and are passed to components like function arguments.

3. What is the flow of props?

   - The flow of props in React is unidirectional, meaning it goes from parent to child components. Data is passed from the parent component as props, and child components receive and use these props. Props are read-only, and modifications to them should be made in the parent component. Data from the parent should not be changed by child components.

## Things I want to know more about

- How does React handle the communication of data between sibling components if it's unidirectional?

## Retrospective

Retrospectives are a critical part of Agile and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospective to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview of the role of retrospectives.

1. What went well, that I might forget if I don’t write it down?
2. What did I learn today?
3. What should I do differently next time?
4. What still puzzles me, or what do I need to learn more about?
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.

## Career 1 - Identify Your Accountability Partners




