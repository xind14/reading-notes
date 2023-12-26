# Class 7 - Express Servers

## Lab 7 - Custom Servers with Node and Express

## Setup

In this lab assignment, you will begin building your own custom API server, which will provide data for the City Explorer front-end application. This means users will get to see not only the map, but also interesting information about the area, provided by a variety of third-party APIs that your server will manage.

**Resources**

- [Node JS Docs](https://nodejs.org/en/)

- [NPM JS Docs](https://docs.npmjs.com/)

- [Express JS Docs](https://expressjs.com/en/4x/api.html)

- [dotenv Docs](https://www.npmjs.com/package/dotenv)

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

Name of feature:

Estimate of time needed to complete:

Start time:

Finish time:

Actual time needed to complete:

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

## Code Challenge - Reduce

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-07/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-07/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called sort
   git checkout -b sort

2. Retrieve the code challenge from the system
   npm run get-challenge 07

3. In your terminal, from the javascript folder, run npm test 07 to execute the tests in this file for this challenge.

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

### ARRAY METHODS

let people = [
{
name: "John"
},
{
name: "Jane",
},
{
name: "Cathy"
}
]

// .forEach(callback) will iterates through each element in the array and executes the callback function for each element.

// .map(callback) will iterate through each element in the array and executes the callback function for each element and returns a value (of any kind). That value is "pushed" into a new array.

// .filter(callback) will iterate through each element in the array and executes the callback function for each element. If the callback function returns true, the element itslef is "pushed" into a new array.

// .find(callback) will iterate through each element in the array and executes the callback function for each element. If the callback returns true for any element, that element is returned and find is done.
let person = people.find((value, idx) => {
// What is value?
return value.name.charAt(0) === "C";
// return value.name === "Jane";
})
console.log(person);

// .reduce( callback, initialState) iterates through each element in the array and executes the callback function for each element. The callback function is passed the "current state" and reutrns the "next state" and at the end, the "final" state is returned.

// Use reduce to iterate an array of objects and count them, returning
// the total number
let initialState = 0;
let numberOfPeople = people.reduce((state, element, index) => {
state = state + 1;
return state;
}, initialState)

console.log(numberOfPeople);

// Use reduce to itterate our array of objects and return an
// array of strings (names)
let initialListOfNames = [];
let names = people.reduce((state, element, index) => {
// Add the name property value from the element into the next state
state.push(element.name)
return state;
}, initialListOfNames)

console.log(names);

### Notes

1. What is a server?

   - In computing, a server is a piece of computer hardware or software that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.
     - [Wikipedia](<https://en.wikipedia.org/wiki/Server_(computing)>)

1. What is express?

   - You can use Node.js to create a simple web server using the Node HTTP package.
     - Other common web-development tasks, like GET, POST, and DELETE are not directly supported by Node itself.
     - If you want to do more than just READ, you will either need to write the code yourself, or you can use a web framework, like Express!
   - Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks.
     - Express is the enviroment in which we build our server in.
     - Set common web application settings like the port to use for connecting, and create custom responses for different HTTP paths.

1. What is a PORT?

   - Listens on a [Port](<https://en.wikipedia.org/wiki/Port_(computer_networking)>)

     - In computer networking, a port is a communication endpoint.
     - At the software level, within an operating system, a port is a logical construct that identifies a specific process or application.
     - A port number is always associated with the host's IP address and the type of transport protocol (HTTP method) used for communication.

   - What is cors?

     - [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
       - Cross-Origin Resource Sharing
       - "Body Guard of the Internet"
       - CORS is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
       - CORS developed in response to browser security and vulerabilities.
         - <https://medium.com/@electra_chong/what-is-cors-what-is-it-used-for-308cafa4df1a>
       - CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred.

   - Why do we need a server?
     - Servers connect applications across the internet
     - Set us up to scale our application, without hammering the API.
     - Provide our application a single source to fetch all of the data it needs.
     - Allow a server to do the hard work of formatting data to feed our front end.
     - Servers may have better/faster connections to other servers, making it more efficient than the browser doing this job.
     - Secure our keys, when HTTP Referrer restrictions aren't an option

- back end readme everything is done by hand

- in backend: npm init, My first express server, server.js, License MIT, npm install express dotenv, npm install cors, render.com, new web service build and deploy from git repo connext back end, name is 301 back end server node, npm install free

### Getting Started

#### React App

1. Create a new React App with Vite `npm create vite@latest front-end`
1. Perform initial installation and add any dependencies
   - `npm install`
   - `npm install axios bootstrap react-bootstrap react-if`
1. Create a repository (front-end) at GitHub
1. Connect your React App to GitHub
   - git init
   - git branch -M main
   - git remote add origin (url to your repo, copied from gitHub)
   - git add .
   - git commit -m "initial commit"
   - git push origin main
1. Clear out all of the starter-code from the app and alter `App.jsx` to just render an `<h1>` with Hello World in it
1. Deploy your app to Netlify
1. Verify that you can see the starte app deployed at Netlify

#### Express App

1. Create a new repository (back-end) at GitHub
   - Add a README
   - Choose the MIT license
   - Choose the "Node" .gitignore template
   - Make it "public"
   - Copy the URL
1. Clone this on your computer in a different folder from your react app
1. Create a file called server.js (`touch server.js`)
1. Initialize an NPM module
   - `npm init -y`
   - Install the basic dependencies for an express app
   - `npm install express cors dotenv axios`
1. Write a basic express server (use the above notes and demo as the basis)
1. Store the `PORT` in a file called `.env`
1. Deploy this to Render.com
1. Verify that you can see data coming from the `/` route once deployed

#### Getting them to work together

1. Change your Express server's `/` route to return a JSON object. Something simple like:
   `{ message: "Hello" }`
1. Push to gitHub so that it deploys to render.com
1. Add a button to your React app that, when clicked, will do an async axios call to your server's `/` route
   - This will require that you put the URL to your server in the `.env.local` file and use that in the app to make the Axios call
   - We do this for security!
   - (This is shown in the demo)
1. When the data comes back, put it into state, and render that `message` in the `<h1 />`
1. Push to github so that it will deploy to netlify.com

At this point, you should be able to click a button and see the data from your server flowing to the front-end.

From this point, you can tailor the server and the react app together to accomplish ANY goal!

1. Basic express server:

   ```javaScript
   'use strict';
   // this library lets us access our .env file
   require('dotenv').config();
   // express is a server library
   const express = require('express');

   // initalizes the express library
   const app = express();

   // library that determines who is allowed to speak to our server
   const cors = require('cors');

   // this settting says that everyone is allowed to speak to our server
   app.use(cors());

   // we are getting the port variable from the .env file.
   const PORT = process.env.PORT;

   // this is a route. if you turn the server on and go to http://localhost:3001/ (or whatever port you specified in your .env), you will see 'hello from the home route'
   app.get('/', (request, response) => {
     response.send('hello from the home route');
   });

   // this turns the server on to the port that you specifed in your .env file
   app.listen(PORT, () => console.log(`listening on ${PORT}`));
   ```

1. You can set up a route that your front-end can hit. Your server will return information on that route:

   ```javaScript
   // FRONT-END
   await axios.get('http://localhost:3001/cats');

   // BACK-END
   app.get('/cats', (request, response) => {
     response.send('cats are the best');
   });
   ```

1. You can also send information from the front-end to the back-end as a query.

   - Queries live in the URL after the question mark: `http://localhost:3000/?city=seattle`
   - To send that query to the back-end via axios, you could write code like:

     ```javaScript
     //FRONT-END
     await axios.get('http://localhost:3001/city', {params: { city: 'seattle' }});

     // BACK-END
     app.get('city', (request, response) => {
       const city = reqeust.query.city;
       response.send(`you sent the city of ${city}`)
     });
     ```

## Read 7 - Readings Overview

## Resources Link/Pages

**Bookmark and Review**

- [Geocoding API Docs](https://locationiq.com/)
- [Axios docs](https://www.npmjs.com/package/axios)
- [MDN async and await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises)

### An Introduction to Node.js on sitepoint.com

1. [An Introduction to Node.js on sitepoint.com](https://www.sitepoint.com/an-introduction-to-node-js/)

### 6 Reasons for Pair Programming

1. [6 Reasons for Pair Programming](https://www.codefellows.org/blog/6-reasons-for-pair-programming/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Node.js allows you to run JavaScript on the server side, expanding the traditional role of JavaScript, which primarily ran in browsers. This is starting to go into full-stack development and enabling a single language (JavaScript) across both client and server environments.

### An Introduction to Node.js on sitepoint.com

1. What is node.js?

   - Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. It allows you to execute JavaScript on your computer outside of a browser environment, and it comes with additional features such as a file system API, an HTTP library, and various operating system utility methods.

2. In your own words, what is Chrome’s V8 JavaScript Engine?

   - It's an open-source engine that runs in web browsers like Google Chrome and is designed for high performance and compiles JavaScript code directly into native machine code for execution on your computer.

3. What does it mean that node is a JavaScript runtime?

   - It provides an environment for executing JavaScript code on your computer outside of a web browser. It allows you to run JavaScript server-side, enabling the development of server applications using JavaScript.

4. What is npm?

   - (Node Package Manager) is a package manager for JavaScript. It allows developers to easily install, manage, and share packages (libraries or tools) needed for their JavaScript projects.

5. What version of node are you running on your machine?

   - v21.2.0

6. What version of npm are you running on your machine?

   - 10.2.3

7. What command would you type to install a library/package called ‘jshint’?

   - `npm install -g jshint`

8. What is node used for?
   - Running JavaScript on the server.
   - Building applications that require real-time interaction or collaboration.
   - Developing APIs that handle I/O driven requests.
   - Handling data streaming, allowing processing of files while they are still being uploaded.
   - Writing cross-platform desktop applications.

### 6 Reasons for Pair Programming

1. What are the 6 reasons for pair programming?
   - Greater efficiency: Pair programming catches mistakes early, produces higher-quality code, and is often more efficient than working separately.
   - Engaged collaboration: Working together on the same code base keeps programmers focused and makes the experience more engaging.
   - Learning from fellow students: Pair programming exposes developers to different problem-solving approaches and allows sharing of skills.
   - Social skills: Pair programming improves communication and interpersonal skills as developers collaborate and find effective ways to work together.
   - Job interview readiness: Many interviews involve pair programming exercises, making candidates demonstrate collaboration and coding skills.
   - Work environment readiness: Graduates familiar with pair programming can seamlessly transition into companies that use this practice.
2. In your experience, which of these reasons have you found most beneficial?
   - I think greater efficiency and engaged collaboration. You can end up working with someone who knows what they are doing and can help make the process of figuring out the code faster.
3. How does pair programming work?
   - Pair programming involves two roles: the Driver and the Navigator. The Driver is the one typing. The Navigator guides the Driver by thinking about the big picture, planning the next steps, and scanning for errors. The Navigator uses their words to guide, while the Driver is the one interacting with the computer. Pair programming fosters collaboration and helps in developing key industry skills by engaging both developers in different aspects of coding and problem-solving.

## Things I want to know more about

- What exactly does it mean when it said Node runs in a single thread and what is blocking I/O and why should it be avoided?

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
   - I figured out why import styles from .file.module.css was rendering in my files and it was because in the class names i didn't put styles.file
1. What did I learn today?
   - Integration of backend and frontend is so confusing. I still do not get it. I think most of us did not get todays lab with how many remo tickets I saw...
1. What should I do differently next time?
   - I need all the time I can get on these labs so I'm going to do all the other assignments for the week at the start of the week like readings and career things.
1. What still puzzles me, or what do I need to learn more about?
   - Everything of what we learned today. That was crazy confusing. I thought last week was bad and then I thought yesterday was bad but today beats all of those and I have a feeling I'm going to say that about the rest of this week.
1. Thinking about each of your assignments for the day, reflect on: Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - It is not. I still have to fix the front end issue. The backend is getting the right data but the frontend isn't get that data.

## Career 7 - Targeted Job Research

Explore the companies around you. Do some research on any known job board and explore the different positions open in your community.

Read this [article](https://careerpivot.com/2017/target-the-company-quit-chasing-job/) on how to target companies and get hired.

If it’s your first time doing this assignment, make a copy of this Google Spreadsheet template and save it to your personal drive. (File » Make a copy).

If you already have this template, build off of your existing data.

Go onto any job board site (Example: LinkedIn, Indeed, etc…) and find at least 3 different job postings from 3 different companies and fill out the spreadsheet for each job posting you find. Look for job postings with job titles that you are targeting. Consider titles with the words ‘Developer’, ‘Engineer’ for those who have graduated the Advanced Software track, and “Junior SOC Analyst”, “Network Administrator”, or “Network Technician” for those who graduated the cybersecurity ops track. You can also try a specific programming language or technology and see what appears. Use this opportunity to learn more about the companies that your community has to offer and potential positions are available.

Share a URL to your Google Sheet that allows “comment” access (top right corner, hit the blue share bottom, click advance in the bottom right, then click top option of “Anyone can” and change that to “anyone with the link” and change the access drop down button to “can comment”.)

Submit your shared link to complete this assignment.
