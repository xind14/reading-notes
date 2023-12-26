# Class 9 - Advanced Topics

## Lab 9 - Refactoring into Modules

## Setup

It’s time to clean up your code base.

**Process**

When available, your instructor will pair you with a partner for this lab. Review each other’s code from the previous lab and plan out an approach to this lab’s work on a whiteboard.

1. Do a formal code review of each person’s code (10 minutes each).
2. Open your partner’s GitHub pull request on your laptop.
3. Identify an area in the code that:
   - you don’t understand
   - or seems overly complex
   - or you see a way to improve
   - or you want more information on
   - or you really like or think is interesting
4. Add kind comments or questions inline using the GitHub review feature.
5. Draw the web request-response cycle for the current lab tasks (about 10 minutes).
6. Document the data flow: identify inputs and outputs for each part of the cycle.
7. Outline the functions that support this data flow.
8. Be sure to include these drawings in your README.md.
9. You will then work independently for the rest of the day, implementing your plan, coding in your own repository, submitting your own pull request.

**Workflow**

1. We will be using the Trello project management tool for the duration of this project.
2. To maximize your experience with Trello, you should create a free Trello account by clicking on the Sign Up button.
3. After creating an account, go to the [City Explorer Trello Board](https://trello.com/b/Ajj9Cbac/module-2-city-explorer), open the “… Show Menu” link, click the “… More” link, and then click “Copy Board”. Before you create it, be sure to “Change” from Private to “Public” (and click “Yes, Make Board Public”) so your instructional team can see your work. Now, click “Create” to add a copy to your personal account.
4. This Trello board contains all of the features required to complete this lab assignment.
5. Review the user stories and analyze the feature requests and requirements in the lab.
   Within each story, note the acceptance criteria (“Given … When … Then…”) and the checklist of feature tasks. Be careful to execute tasks in order as they are often dependencies of one another.
6. Throughout the lab time, check off tasks as you complete them, and move the story cards through the workflow.

**Documentation**

Your README.md must include:

# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Credit and Collaborations

<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

**Time Estimates**

For each of the lab features, make an estimate of the time it will take you to complete the feature, and record your start and finish times for that feature:

Name of feature: **************\_\_\_\_**************

Estimate of time needed to complete: **\_**

Start time: **\_**

Finish time: **\_**

Actual time needed to complete: **\_**

Add this information to your README.

**Submission Instructions**

1. Complete your Feature Tasks for the lab, according to the Trello cards.
2. Your lab will require 2 repositories: 1 for the Server (back-end) and 1 for the client (front-end)

3. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
4. Create a PR back to the main branch of your repository, showing ALL your work, and merge it cleanly.
5. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
   - A link to the deployed version of your latest code.
   - A link to your public Trello board.
   - A question within the context of this lab assignment.
   - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
   - How long you spent working on this assignment.

## Code Challenge - Value vs. Reference

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-09/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-09/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called value-vs-reference
   git checkout -b value-vs-reference

2. Retrieve the code challenge from the system
   npm run get-challenge 09

3. In your terminal, from the javascript folder, run npm test 09 to execute the tests in this file for this challenge.

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

## Read 9 - Readings Overview

## Resources Link/Pages

### Functional Programming

1. [Functional Programming](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)

### Node JS Tutorial for Beginners #6 - Modules and require()

1. [Node JS Tutorial for Beginners #6 - Modules and require()](https://www.youtube.com/watch?v=xHLd36QoS4k)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Studying functional programming, modules, and require in Node.js is crucial as it creates scalable software solutions. Functional programming principles enhance code maintainability, while modules and require in Node.js facilitate the organization and reuse of code components.

### Functional Programming

1. What is functional programming?

   - A style of writing computer programs where you treat computation as the evaluation of mathematical functions and avoid changing-state and mutable data. It's like using a set of building blocks (functions) to build a structure (program).

1. What is a pure function and how do we know if something is a pure function?

   - A pure function is a function where the output value is determined only by its input values, without observable side effects. It doesn't depend on external state, and for the same input, it will always produce the same output. So like a magic box: you give it something, it does its job, and it gives you back something without changing anything outside the box. It always produces the same output for the same input, and it doesn't mess with anything else in your program.
   - Criteria for a Pure Function:
     - Deterministic: Given the same inputs, a pure function will always return the same output.
     - No Side Effects: It does not cause any observable side effects, such as modifying a global object or modifying input parameters.
     - Referential Transparency: The function can be replaced with its value without changing the program's behavior.

1. What are the benefits of a pure function?

   - Pure functions make your code predictable and reliable. Since they don't mess with other parts of your program or depend on things that might change, you can trust them to do their job consistently, making it easier to understand and maintain your code.
   - Predictability: Easier to reason about and predict behavior since they have no hidden surprises or dependencies.
   - Testability: Pure functions are easier to test because they don't rely on external state or have side effects.
   - Concurrency: They are inherently more suitable for concurrent or parallel programming, as they don't share mutable state.

1. What is immutability?
   - Immutability is a concept where the state of an object cannot be modified after it is created. In functional programming, data is treated as immutable, meaning that once a piece of data is created, it cannot be changed. Instead, new data is created based on the existing data.
1. What is Referential transparency?
   - Referential transparency is a property of a function where its output is solely determined by its input, and calling the function with the same input always produces the same result. This property enables reasoning about programs by substituting function calls with their values without affecting the program's behavior.

### Node JS Tutorial for Beginners #6 - Modules and require()

1. What is a module?
   - A way to organize and encapsulate code in Node.js. It is essentially a JavaScript file that contains reusable pieces of code, variables, and functions that can be used in other files.
1. What does the word ‘require’ do?
   - It is used to import and include external modules or files in the current file. It allows you to use the functionality and code defined in another module.
1. How do we bring another module into the file the we are working in?
   - To bring another module into the current file, you use the 'require' function followed by the path to the module. So the example in the video is there is a counter function in the count.js file so now in the app.js file you write `var counter = require('./count');`
1. What do we have to do to make a module available?
   - To make a part of the module available outside of its file, you use `module.exports`. This allows you to specify what should be exposed and accessible when the module is required in another file. In the video example it is `module.exports = counter;`

## Things I want to know more about

- Is Modules and require the same as import/export like we've been doing in REACT? Or is it a different thing because it's Node.js.

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

What went well, that I might forget if I don’t write down?

- I finished lab 8 and I figured out how to render the movies and most of it without help. That's a win and I should write that down. 
  What did I learn today?
  Refactoring is hard when you don't know what you're doing and have a hard time keeping track of what is getting or fetching what.
  What should I do differently next time?
  Once I get to ask someone tomorrow, but I would like to know which components to start first to make things easier. 
  What still puzzles me, or what do I need to learn more about?
  Sever errors and figuring where it's not working.

Thinking about each of your assignments for the day, reflect on:

Is the assignment complete? If not, where exactly did you leave off, and what work remains?
It's not complete, its broken still right now, in the process of refactoring. Still have not done separate files for weatherday/movie
