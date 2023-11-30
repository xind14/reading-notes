# Class 3 - Passing Functions as Props

## Lab 3 - Passing Functions in Props

## Setup


For this class you will be adding a feature to your Gallery Of Horns that allows the user to click on an image and display it as a modal.

**Time Estimate**

For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

1. Feature #1: Display a Modal

    - Why are we implementing this feature?
      - As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

    - What are we going to implement?
      - Given that a user wants to view the details of the image

      - When the user clicks on an individual image Then the image should render larger on the screen with the description displayed

    - How are we implementing it?
      - Import the data.json file into your App component and send that data into the Gallery component
      - Map over the JSON data in your Gallery component to render each beast
      - Send a function into your Gallery component that allows the user to update state in the App
      - Create a SelectedBeast component and include it in your App
      - Use the state in the App to render an individual beast in a Modal in the SelectedBeast component using React Bootstrap

Stretch Goal: Fuzzy search

1. Feature #2: Allow Users to Favorite Individual Beasts?
    - Why are we implementing this feature?
      - As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

    - What are we going to implement?
      - Given that a user wants to view specific images
      - When the user enters a character into the search field
      - Then only the images matching the current set of characters should be displayed on the screen

    - How are we implementing it?
      - Create an input element to allow users to search for an image. It is up to you to decide if the user should be able to search by title, keyword, or both.
      - Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.

3. Submission Instructions
    - Complete your Feature Tasks for the day
    - Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
    - Create a Pull Request (PR) back to the main branch of your repository
    - On Canvas, submit a link to your PR and a link to your deployed application on Netlify. Add a comment in your Canvas assignment which includes the following:
      - A question within the context of the lab assignment
      - An observation about the lab assignment, or related ‘Ah-hah!’ moment
      - How long you spent working on this assignment

## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-03/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-03/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called git checkout -b filter

2. Retrieve the code challenge from the system
npm run get-challenge 03
3. In your terminal, from the javascript folder, run npm test 03 to execute the tests in this file for this challenge.

4. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.

5. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!

6. Write code to make the tests pass, one at a time. Let the error messages guide you.

7. Once the test is passing, refactor as needed, then move on to the next challenge.

8. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes


Grid Overview

- xs s md lg = set numbers inside are how many columns you want shown on the screen sizes

Filter - runs array returns an array. The purpose of filter is to create a new array containing only the elements that satisfy a specified condition. It does not modify the original array but returns a new one.

forEach, Map, Filter Demo

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

- React is unidirectional from  state down but you can write call back functions to affect the parent/state which will pass on changes to other children, for example no sibling communications if one sibling wants to affect another child first child changes parent with function and parent can then affect child 2.

Demo

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
        //           they are "1st Class Citizens"
        function greet(person, greetingFunction) {
        greetingFunction(person);
        }

        greet("John", sayHello);
        greet("Cathy", sayHey);

        /*

        what actually happens in react...

        1. const content = App();
            1. props = { name:"Zach", age:25, handleBirthday: haveBirthday }
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


Family Demo with added child component function passing

App.jsx

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

People.jsx

    import React from 'react';

    import Person from './Person.jsx';

    function People(props) {

    return (
        <>
        {
            props.list.map( (person,index) =>
            <Person
                key={index}
                name={person.name}
                hair={person.hair}
                votes={person.votes}
                handleVote={props.handleVote}
            />
            )
        }

        </>
    )

    }

    export default People;

Person.jsx

    import React, {useState} from 'react';
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



## Read 3 - Readings Overview

## Resources Link/Pages

[React Tutorial through ‘Declaring a Winner’](https://react.dev/learn/tutorial-tic-tac-toe)
[React Docs - Lifting State Up](https://legacy.reactjs.org/docs/lifting-state-up.html)

### React Docs - lists and keys


1. [React Docs - lists and keys](https://legacy.reactjs.org/docs/lists-and-keys.html)


### The Spread Operator


1. [The Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### How to Pass Functions Between Components

1. [How to Pass Functions Between Components](https://www.youtube.com/watch?v=c05OL7XbwXU)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

The spread operator and the passing of functions between components are essential for achieving precise state management

### React Docs - lists and keys


1. What does `.map()` return?
    - It's a function that returns a new array with the results of applying a provided function to each element of the original array.
2. If I want to loop through an array and display each value in JSX, how do I do that in React?
    - Use the `.map()` function
3. Each list item needs a unique ____.
    - `key`
4. What is the purpose of a `key`?
    - It's so React can identify which items in a list have changed, been added, or been removed. It gives elements in the array a stable identity. Keys should be unique among their siblings but do not need to be globally unique. Keys are not passed to components but used internally by React.

### The Spread Operator

1. What is the spread operator?
    - The spread operator (...) is a syntax that allows an iterable (such as an array or string) to be expanded in places where zero or more arguments or elements are expected. It is used to make a shallow copy of an iterable or to include its elements individually.
2. List 4 things that the spread operator can do.
    - Expand elements of an array or string in a function call's arguments list.
    - Include all elements of an array in a new array literal.
    - Include all properties of an object in a new object literal.
    - Make a shallow copy of an array or object.
3. Give an example of using the spread operator to combine two arrays.
    - const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const combinedArray = [...array1, ...array2];
4. Give an example of using the spread operator to add a new item to an array.
    - const originalArray = [1, 2, 3];
    - const newArray = [...originalArray, 4];
5. Give an example of using the spread operator to combine two objects into one.
      The reading gives this as an example:
    - const obj1 = { foo: 'bar', x: 42 };
      const obj2 = { bar: 'baz', y: 13 };
      const combinedObject = { ...obj1, ...obj2 };

### How to Pass Functions Between Components

1. In the video, what is the first step that the developer does to pass functions between components?
    - He created the `increment` function in the parent component where the state is located, which is used to update the state.
2. In your own words, what does the increment function do?
    - It takes a person object as a parameter, which includes a name and a count. It loops through an array of people, finds the person with a matching name, increments their count, and updates the state with the modified array.
3. How can you pass a method from a parent component into a child component?
    - The parent component includes the method in the props passed to the child component. The child component can then access and invoke the method using props.method.
4. How does the child component invoke a method that was passed to it from a parent component?
    - Using this.props.method to call the method and trigger something like updating the state in the parent component.

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
