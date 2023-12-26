# Class 4 - React and Forms

## Lab 4 - Forms and Filter

## Setup

This is the last class of our Gallery Of Horns. You have horned creatures displaying on the page. When you click on a beast, you increase its favorites and display it as a modal. We will be adding one more piece of functionality: filtering by numbers of horns.

**Time Estimate**
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

1. **Feature #1: Filter by Numbers of Horns**
   - **Why are we implementing this feature?**
     - As a user, I want to be able to view the beasts by the number of horns.
   - **What are we going to implement?**
     - Given that a user is presented with filtering options.
     - When the user clicks on one option, then the images should be filtered accordingly.
   - **How are we implementing it?**
     - Using the Form component of react-bootstrap, build a drop-down menu so that the user can choose to filter by the number of horns.
     - When the user chooses one of the options, the correct images should be displayed.

   - **Estimate:**
   - **Start Time:**
   - **Finish Time:**
   - **Actual Time:**

2. **Submission Instructions**
   - Complete your Feature Tasks for the day.
   - Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
   - Create a Pull Request (PR) back to the main branch of your repository.
   - On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
     - A link to the deployed version of your latest code.
     - A question within the context of the lab assignment.
     - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
     - How long you spent working on this assignment.

## Code Challenge

**Overview**
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-04/challenges/)
[Reading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

**Video**
[Watch the video for this class from the demo playlist.](https://www.youtube.com/watch?v=-vR3a11Wzt0)

**Demonstration**
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-04/challenges/DEMO.html)

**Challenges**
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called sort
   ```
   git checkout -b sort
   ```

2. Retrieve the code challenge from the system
   ```
   npm run get-challenge 04
   ```

3. In your terminal, from the javascript folder, run npm test 04 to execute the tests in this file for this challenge.

4. At this point, you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.

5. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!

6. Write code to make the tests pass, one at a time. Let the error messages guide you.

7. Once the test is passing, refactor as needed, then move on to the next challenge.

8. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress.

**Submission**
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

### Filter Demo

**App.jsx**

```jsx
// useState is a "hook"
// It's a function that returns state and an update function
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import People from './components/People.jsx';
import SelectedPerson from './components/SelectedPerson.jsx';
import originalFamilyData from "./assets/family.json";

function App() {
  const [family, setFamily] = useState(originalFamilyData);
  const [selectedPerson, setSelectedPerson] = useState({});
  const [isSelectedPersonVisible, setIsSelectedPersonVisible] = useState(false);

  function addFamilyMember() {
    let newPerson = {
      _id: Math.random(),
      name: "Fred",
      hair: "Grey",
      pets: [],
      age: 42,
      votes: 0
    };

    setFamily([...family, newPerson]);
  }

  function selectPerson(person) {
    setSelectedPerson(person);
    setIsSelectedPersonVisible(true);
  }

  function handleCloseModal() {
    setIsSelectedPersonVisible(false);
  }

  function handleVote(data) {
    let newFamily = family.map(person => {
      if (data._id === person._id) {
        person.votes++;
      }
      return person;
    });

    setFamily(newFamily);
    handleCloseModal();
  }

  return (
    <>
      <div>Family Members: {family.length}</div>
      <button onClick={addFamilyMember}>Add One</button>
      <People handleSelectPerson={selectPerson} list={family} />
      <SelectedPerson
        show={isSelectedPersonVisible}
        handleClose={handleCloseModal}
        handleVote={handleVote}
        person={selectedPerson}
      />
    </>
  );
}

export default App;
```

**People.jsx**

```jsx
import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Form from 'react-bootstrap/Form';
import Person from './Person.jsx';

class People extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'The Cokos Clan',
      address: 'Lynnwood, Wa',
      family: props.list,
      displayFamily: props.list,
    };
  }

  changeAddress = () => {
    this.setState({ ...this.state, address: "Wenatchee, WA" });
  }

  handleFilter = (e) => {
    let age = e.target.value;
    let filteredFamily = this.state.family.filter(person => person.age >= age);
    this.setState({ ...this.state, displayFamily: filteredFamily });
  }

  render() {
    return (
      <>
        <h2>Meet {this.state.name} from {this.state.address}</h2>
        <div>
          <button onClick={this.changeAddress}>Change</button>
        </div>
        <Form>
          <Form.Label htmlFor="inputPassword5">

Password</Form.Label>
          <Form.Control
            type="number"
            id="age"
            placeholder="Enter Age"
            onChange={this.handleFilter}
            aria-describedby="passwordHelpBlock"
          />
        </Form>

        <CardGroup>
          {this.state.displayFamily.map(person =>
            <Person
              handleSelectPerson={this.props.handleSelectPerson}
              key={person._id}
              person={person}
            />
          )}
        </CardGroup>
      </>
    )
  }
}

export default People;
```

**Person.jsx**

```jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Person(props) {
  function handleClick() {
    props.handleSelectPerson(props.person);
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.person.name}</Card.Title>
        <Card.Text>
          Votes: {props.person.votes}
        </Card.Text>
        {
          props.person.votes >= 1 ? null : <Button variant="primary" onClick={handleClick}>Pick Me!</Button>
        }
      </Card.Body>
    </Card>
  )
}

export default Person;
```

**SelectedPerson.jsx**

```jsx
import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SelectedPerson(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.person.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>Votes: {props.person.votes}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => props.handleVote(props.person)}>
          Vote For Me
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SelectedPerson;
```

## Read 4 - Readings Overview

### Resources Link/Pages

- [React Bootstrap - Forms](https://react-bootstrap.github.io/forms/overview/)
- [React Docs - conditional rendering](https://legacy.reactjs.org/docs/conditional-rendering.html)

#### React Docs - Forms

1. [React Docs - Forms](https://legacy.reactjs.org/docs/forms.html)

#### The Conditional (Ternary) Operator Explained

1. [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

## Answer

**Statement on why this topic matters as it relates to what I'm studying in this module:**

React forms enable efficient management of user input and state, and the ternary operator simplifies conditional rendering.

#### React Docs - Forms

1. What is a ‘Controlled Component’?
   - Refers to a form element, such as `<input>`, `<textarea>`, or `<select>`, whose value is controlled by React state. The component maintains its own state and updates it based on user input, allowing React to be the "single source of truth" for the form's data.
2. Should we wait to store the users' responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
   - It is generally preferable to update the state with the user's responses as soon as they enter them. This approach, known as real-time or immediate updating, allows for a more responsive user interface. Storing responses in state as they are entered ensures that the component's state reflects the latest user input and facilitates seamless interaction.
3. How do we target what the user is entering if we have an event handler on an input field?
   - Enter the value through the `event.target.value` property. This value represents the current content of the input field and can be used to update the React state accordingly.

#### The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?
   - It's a concise way to write conditional statements. It is often used when you have a simple condition and want to assign a value based on whether that condition is true or false.
   - Syntax: `condition ? value if true : value if false`

2. Rewrite the following statement using a ternary statement:
   ```javascript
   if(x===y){
     console.log(true);
   } else {
     console.log(false);
   }
   ```
   - `x === y ? console.log(true) : console.log(false);`

## Things I want to know more about

- Are there more advanced uses for the ternary operator? How do you know when to use them?

## Retrospective

**Retrospectives** are a critical part of Agile and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview of the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
   - I figured out that the easiest way possible to make functions be passed down is to just create an entirely new component that only references one place which is the state in app.

2. What did I learn today?
   - I learned about the spread operator during today's code challenge, but I'm still not confident on anything this week.

3. What should I do differently next time?
   - I keep forgetting to ask for help earlier past the 15-minute mark because I get so into it. I need to do that next time because a lot of time is just me trying to troubleshoot with no results.

4. What still puzzles me, or what do I need to learn more about?
   - Everything. I feel like I need to self-teach myself and watch some outside videos. At least by the end of the week where the project is finished, I actually get it, but now at the end of this week, I would not be able to produce anything on my own.

5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.
   - I think it's complete. Again, I was not worried about the CSS because I just wanted to get the task down. I want to refine this project at the end of this class.
