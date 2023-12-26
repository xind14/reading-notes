
# Class 2 - State and Props

## Lab 2 - React State and Props

## Setup

By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the beasts by the number of horns and choose your favorite beast.

In this class, your goal is to use the JSON file provided to display the title, image, and description of each horned beast in your application.

**Resources**
[data.json](https://codefellows.github.io/code-301-guide/curriculum/class-02/lab/assets/data.json)

**Time Estimate**

For each of the features listed below, make an estimate of the time it will take you to complete the feature and record your start and finish times for that feature:

Number and name of feature:

Estimate of time needed to complete:

Start time:

Finish time:

Actual time needed to complete:

Add this information to your README.

1. **Feature #1: Display Images**

   - **Why are we implementing this feature?**
     - As a user, I want to view the images on the page so that I can browse the photo collection.
   - **What are we going to implement?**
     - Given that a user opens the application in the browser, when the user navigates to the home page, then the photo gallery should display all of the beasts' images in the gallery.
   - **How are we implementing it?**
     - The Gallery component should pass props for the title, image, and description to each HornedBeast component. You will find this information in the provided JSON file.

2. **Feature #2: Allow Users to Favorite Individual Beasts**

   - **Why are we implementing this feature?**
     - As a user, I want to be able to interact with the site and favorite beasts.
   - **What are we going to implement?**
     - Given that a user opens the application in the browser, when a user clicks on an image of a beast, then the number of "Favorites" displayed on that beast will increase by one.
   - **How are we implementing it?**
     - Create state inside of the HornedBeast component that keeps track of the number of times each beast has been favorited. Put a heart in each HornedBeast component with the number of “Favorites” next to it.

3. **Feature 3: Bootstrap**

   - **Why are we implementing this feature?**
     - As a user, I want to see a visually pleasing application that is also responsive when I view this application on different screen sizes.
   - **What are we going to implement?**
     - Given that a user opens the application in the browser, when the images are displayed on the screen, then each image should be rendered in a visually pleasing way: - in columns, as screen width allows.
   - **How are we implementing it?**
     - Bring in the react-bootstrap library and use it to style your application making sure that it is responsive.

   - **Stretch Goal: Add Interaction**
     - **Why are we implementing this feature?**
       - As a user, I want to be able to interact with each item on the page.
     - **What are we going to implement?**
       - Given that a user opens the application in the browser, when a user clicks on an item other than the horned beasts, - such as the title of the page or the footer, then the information and styles should change.
     - **How are we implementing it?**
       - When the user clicks on elements such as the header, footer, or title of the page, make something change using state. You can update the words, change the styles or add something new. Be creative.

## Submission Instructions

- Complete your Feature Tasks for the day.
- Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
- Create a Pull Request (PR) back to the main branch of your repository.
- On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of the lab assignment.
  - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
  - How long you spent working on this assignment.

## Code Challenge

**Overview**
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-02/challenges/)

**Video**
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

**Demonstration**
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-02/challenges/DEMO.html)

**Challenges**
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called map `git checkout -b map`.
2. Retrieve the code challenge from the system: `npm run get-challenge 02`.
3. In your terminal, from the javascript folder, run `npm test 02` to execute the tests in this file for this challenge.
4. At this point, you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
5. If you do not see this, verify your installation of Jest by typing `npx jest --version` in your terminal. Filename typos can make things break!
6. Write code to make the tests pass, one at a time. Let the error messages guide you.
7. Once the test is passing, refactor as needed, then move on to the next challenge.
8. Note, you can also run `npm test` (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy,” but it’s an opportunity to get a view of your overall progress.

**Submission**
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

```javascript
let numbers = [1, 2, 3, 4, 5];

// .forEach does not return anything
let forEachSquares = numbers.forEach((value, idx) => {
  let s = value * value;
  return s;
})

// .map returns a new array of the same size as the original array.
// That array contains whatever gets returned;
let squares = numbers.map((value, idx) => {
  // An array of bunnies
  return "Bunnies";

  // An array of numbers based on the original array
  // return value * value;
});

console.log(squares);
```

**Family Demo**

**main.jsx**

```

javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

**App.jsx**

```javascript
import { useState } from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import People from './components/People.jsx';

import people from './assets/family.json';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <main>
      <Header title="Our Family!" members={people.length} />
      <People list={people} />
      <Footer content="Copyright 2023: John and the 301's" />
    </main>
  );
}

export default App;
```

**Header.jsx**

```javascript
import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <div>We have {props.members} family members for you to meet</div>
    </header>
  );
}

export default Header;
```

**People.jsx**

```javascript
import React from 'react';
import Person from './Person.jsx';

function People(props) {
  return (
    <>
      {props.list.map((person, index) => {
        return <Person key={index} name={person.name} hair={person.hair} />;
      })}
    </>
  );
}

export default People;
```

**PeopleClean.jsx**

```javascript
import React from 'react';
import Person from './Person.jsx';

function People(props) {
  return (
    <>
      {props.list.map((person, index) => (
        <Person key={index} name={person.name} hair={person.hair} />
      ))}
    </>
  );
}

export default People;
```

**Person.jsx**

    import React, { useState } from 'react';
    import Button from 'react-bootstrap/Button';
    import Card from 'react-bootstrap/Card';

    function Person(props) {
      const [color, setColor] = useState("grey");
      const [visible, setVisible] = useState("block");

      function vote() {
        setVisible("none");
      }

      return (
        // <Card style={{ width: '18rem', margin: '1em', display: `${visible}` }}>
          <Card.Img variant="top" src="https://placehold.co/100x100" />
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>
              Hair Color: {props.hair}
            </Card.Text>
            <Button onClick={vote} variant="primary">
              Vote for {props.name}
            </Button>
          </Card.Body>
        </Card>
      );
    }

    export default Person;

**Footer.jsx**

```javascript
import React from 'react';

function Footer(props) {
  return (
    <footer>
      <div>{props.content}</div>
    </footer>
  );
}

export default Footer;
```

**Important Notes:**

- Don't touch `index.html`.
- Remove CSS pages.
- Delete all in `app.jsx`.
- Remove import `app.css` from `main.jsx`.
- You can write `export default function app()` or at the bottom `export default app;`.
- An extension added is the file you wrote; if not outside, import so, for example, `import userstate from react` is outside vs `import header from './component/header.jsx'`.
- JSON files are raw data.
- Can't do for loops in React components.
- If you map over something, put a key in it, usually `key={index}`.

## Read 2 - Readings Overview

## Resources Link/Pages

**Bookmark and Review**

- [React Docs - State and Lifecycle](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
- [React Docs - Handling Events](https://legacy.reactjs.org/docs/handling-events.html)
- [React Tutorial through ‘Developer Tools’](https://react.dev/learn/tutorial-tic-tac-toe)
- [React Bootstrap Documentation](https://react-bootstrap.github.io/)
- [Bootstrap Cheatsheet](https://getbootstrap.com/docs/5.0/examples/cheatsheet/)
- [Bootstrap Shuffle - a class “sandbox”](https://bootstrapshuffle.com/classes)
- [Netlify](https://www.netlify.com/)

### React Lifecycle

1. [React Lifecycle](https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093)

### React State Vs Props

1. [React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

## Answer

Statement on why this topic matters as it relates to what I'm studying in this module:

Understanding React's component lifecycle and effective state management is crucial as it influences how I handle real-time data updates.

### React Lifecycle

1. Based on the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
   - It looks like render comes before componentDidMount. Mounting, Updating, and Unmounting are the three phases of the component lifecycle. And in Mounting is when an instance of a component is being created and the order there is `constructor`, `static getDerivedStateFromProps`, `render`, `componentDidMount`.
2. What is the very first thing to happen in the lifecycle of React?
   - The `constructor` method is called.
3. Put the following things in the order that they happen: `componentDidMount`, `render`, `constructor`, `componentWillUnmount`, `React Updates`
   - `constructor`
   - `render`
   - `componentDidMount`
   - `componentWillUnmount`
   - `React Updates`
4. What does `componentDidMount` do?
   - It is a method that is invoked immediately after a component is mounted. It is used for loading data from a network request, initializing the DOM, or setting up subscriptions.

### React State Vs Props

1. What types of things can you pass in the props?
   - Initial values, configuration settings, or any data that a component needs to render.
2. What is the big difference between props and state?
   - Props are passed into a component from outside, while state is handled and managed inside the component. Props are used for information that comes from a parent or external source, and state is used for managing internal component data that can change.
3. When do we re-render our application?
   - When there is a change in the state. Changing the state triggers a re-render of the corresponding section of the application.
4. What are some examples of things that we could store in state?
   - Current count in a counter application, user input from form data, or any data that may change over time and needs to trigger a re-render when modified.

## Things I want to know more about

- What are some mistakes that happen a lot or things to consider when working with React component lifecycle methods and managing state?

## Retrospective

Retrospectives are a critical part of Agile and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
   - I definitely forgot all the steps of how to run the code challenges again, and how bootstrap set up occurs so I had to go back to the recording for it. I wasn't able to take notes because he went so fast I just had to follow along as best as I could and written notes slows me down since I'm not fully paying attention.
2. What did I learn today?

   - I understand props a lot better now and the import hierarchy.

3. What should I do differently next time?
   - I was really focused on a CSS that wasn't part of the assignment. I should really just get the featured tasks done and turn it in instead of making it perfect.
4. What still puzzles me, or what do I need to learn more about?
   - All of react bootstrap structure and code and how it works. We just copied a big chunk of code from there but I still don't know what to do with it.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
     - All of my assignments are complete. My lab still doesn't look presentable but that's ok for now.

## Career 2 - Generating Opportunities

Did you know that 85% of all jobs come from networking? Most jobs that are listed online are already filled through employee connections or internally with current staff. [Read](https://hrdailyadvisor.blr.com/2016/03/10/are-employers-required-to-post-job-openings/)

### Assignment

Check out your local tech event calendars (GeekWire, Startup Digest, Meetup, and Eventbrite) to see where to get connected in the tech scene to generate opportunities through connections. Moreover, staying connected to the tech news/scene locally and nationally shows that you’re invested in this space and proves to the world that you are taking your career in tech seriously. Staying in the ‘know” gives you insight into who is growing or reducing their workforce, who are the influencers, and it gives you wonderful talking points with other techies while networking. Use your imagination and find a meetup that matches your interests.

Share with your classmates a list of 5 different off-campus networking opportunities that interest you. Check out what other folks found!

1. [Landing a job in tech](https://www.meetup.com/north-seattle-tech-talks/events/295445610/) Monday, December 4, 2023, at 5:30 PM to Monday, December 4, 2023, at 7:30 PM PST
2. [Responsible AI: Shaping the Future with Ethical Practices](https://www.meetup.com/microsoft-reactor-redmond/events/296683293/) Tuesday, December 5, 2023, at 9:30 AM to Tuesday, December 5, 2023, at 10:00 AM PST
3. [Modern Search Engine Optimization Strategies And Tools For Web Developers](https://www.meetup.com/seattle-web-development-club/events/297275893/) Monday, December 11, 2023, at 6:00 PM to Monday, December 11, 2023, at 7:30 PM PST
4. [Data and AI trends for 2024](https://www.meetup.com/microsoft-reactor-san-francisco/events/296683385/) Tuesday, December 12, 2023, at 9:30 AM to Tuesday, December 12, 2023, at 10:00 AM PST
5. [Exploring The Use Of Netlify For Launching Your Next Web Development Project](https://www.meetup.com/seattle-web-development-club/events/296905531/) Thursday, November 30, 2023, at 6:00 PM to Thursday, November 30, 2023, at 7:30 PM PST
