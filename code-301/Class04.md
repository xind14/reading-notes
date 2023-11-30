# Class 4 - React and Forms

## Lab 4 - Forms and Filter

## Setup

This is the last class of our Gallery Of Horns. You have horned creatures displaying on the page. When you click on a beast, you increase its favorites and display it as a modal. We will be adding one more piece of functionality: filtering by numbers of horns.

Time Estimate
For each of the features listed below, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Number and name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____
Add this information to your README.

1. Feature #1: Filter by Numbers of Horns

    - Why are we implementing this feature?
      - As a user, I want to be able to view the beasts by the number of horns


    - What are we going to implement?
      - Given that a user is presented with filtering options

      - When the user clicks on one option. Then the images should be filtered accordingly


    - How are we implementing it?
      - Using the Form component of react-bootstrap, build a drop down menu so that the user can choose to filter by number of horns.
      - When the user chooses one of the options, the correct images should be displayed.


2. Feature #2: Allow Users to Favorite Individual Beasts?
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
      - A link to the deployed version of your latest code.
      - A question within the context of the lab assignment
      - An observation about the lab assignment, or related ‘Ah-hah!’ moment
      - How long you spent working on this assignment



## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-04/challenges/)
[Reading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/watch?v=-vR3a11Wzt0)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-04/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called sort
git checkout -b sort

2. Retrieve the code challenge from the system
npm run get-challenge 04

3. In your terminal, from the javascript folder, run npm test 04 to execute the tests in this file for this challenge.

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


## Read 4 - Readings Overview

## Resources Link/Pages

[React Bootstrap - Forms](https://react-bootstrap.github.io/forms/overview/)
[React Docs - conditional rendering](https://legacy.reactjs.org/docs/conditional-rendering.html)

### React Docs - Forms

1. [React Docs - Forms](https://legacy.reactjs.org/docs/forms.html)


### The Conditional (Ternary) Operator Explained

1. [The Conditional (Ternary) Operator Explained](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

React forms enables efficient management of user input and state and ternary operator simplifies conditional rendering,

### React Docs - Forms

1. What is a ‘Controlled Component’?
    -  Refers to a form element, such as `<input>`, `<textarea>`, or `<select>`, whose value is controlled by React state. The component maintains its own state and updates it based on user input, allowing React to be the "single source of truth" for the form's data.
2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
    - There was no answers in the reading so I asked ChatGpt and it said:
    - It is generally preferable to update the state with the user's responses as soon as they enter them. This approach, known as real-time or immediate updating, allows for a more responsive user interface. Storing responses in state as they are entered ensures that the component's state reflects the latest user input and facilitates seamless interaction.
3. How do we target what the user is entering if we have an event handler on an input field?
    - Enter the value through the event.target.value property. This value represents the current content of the input field and can be used to update the React state accordingly.



### The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?
    - It's a concise way to write conditional statements. It is often used when you have a simple condition and want to assign a value based on whether that condition is true or false.
    - syntax: condition ? value if true : value if false

2. Rewrite the following statement using a ternary statement:

        if(x===y){
          console.log(true);
        } else {
          console.log(false);
        }

- x === y ? console.log(true) : console.log(false);


## Things I want to know more about

- Are there more advanced uses for ternary operator? How do you know when to use them?

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
2. What did I learn today?
3. What should I do differently next time?
4. What still puzzles me, or what do I need to learn more about?
5. Thinking about each of your assignments for the day, reflect on:
    - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
    - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.








