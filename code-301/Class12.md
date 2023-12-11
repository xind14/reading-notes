# Class 12 - Creating and Deleting Resources

## Lab 12 - Create and Delete



## Setup

In this class you will add the functionality for the user to create a book resource in the database or delete one. A book will be created from a form in React, and sent to the server where it will be saved into the database, and then returned to the front end to be displayed in the list of favorite books. You will then be able to delete that book with a click of a button, to have it instantly removed from the front end, with a request sent to back end for removal.

**Feature Tasks**

1. CREATE and DELETE of CRUD. See your team’s Trello board for this lab’s feature tasks.

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

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

Add this information to your README.

**Submission Instructions**

1. Complete your Feature Tasks for the lab, according to the Trello cards.

1. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
1. Create a PR back to the main branch of your repository, showing ALL your work, and merge it cleanly.
1. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of this lab assignment.
    - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
    - How long you spent working on this assignment.

## Code Challenge - Chaining Methods

<!-- Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-12/challenges/) -->

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

<!-- Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-12/challenges/DEMO.html) -->

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called chaining
git checkout -b chaining

2. Retrieve the code challenge from the system
npm run get-challenge 12

3. In your terminal, from the javascript folder, run npm test 12 to execute the tests in this file for this challenge.

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


## Read 12 - Readings Overview

## Resources Link/Pages

### Status Codes Based On REST Methods

1. [Status Codes Based On REST Methods](https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/)

### Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

1. [Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Knowing status codes developers can use them for efficient debugging and troubleshooting.

### Status Codes Based On REST Methods


1. In your own words, describe what each group of status code represents:
    - 100’s =  Informational status - server has received the request headers, and the client should proceed to send the request body.
    - 200’s = Success codes - request was accepted or successfully processed.
    - 300’s = Redirection codes - the resource the client is requesting isn't available at the expected location and may have moved.
    - 400’s = Client error codes - issue with the client's request, such as invalid input parameters or missing authentication.
    - 500’s = Server error codes - indicating problems on the server side
1. What is a status code 202?
    - Used for asynchronous processing. It signals that the request was valid, but its processing will finish sometime in the future.
1. What is a status code 308?
    - Permanent Redirect: Used when the resource will now be available at a new URL, and the client should directly access it via the new URL in the future.
1. What code would you use if an update didn’t return data to a client?
    - 204 No Content: code for updates that don’t return data to the client
1. What code would you use if a resource used to exist but no longer does?
    - 410 Gone: Indicates that the resource existed in the past but got deleted or moved, and the server doesn’t know where.
1. What is the ‘Forbidden’ status code?
    - 403 Forbidden: The client has no permissions to access the resource.

### Build A REST API With Node.js, Express, & MongoDB - Quick - First 20 minutes

1. Why do we need to pull our MongoDB database string out of our server and put it into our .env?
    - Storing sensitive information like database connection strings in a separate configuration file, such as a .env file, enhances security. This practice helps to keep sensitive information, like database credentials, separate from the codebase.
1. What is middleware?
    - Functions or processes that have access to the request and response objects in an application's lifecycle.
1. What does app.use(express.json()) do?
    - This middleware is used in an Express.js application to parse incoming JSON payloads. It enables the server to interpret JSON data sent in the request body, making it accessible in the request.body object of the route handlers.
1. What does the /:id mean in a route?
    - It's a route parameter. It represents a variable part of the URL, and its value can be captured and accessed within the route handler.
1. What is the difference between PUT and PATCH?
    - Both PUT and PATCH are HTTP methods used for updating resources.PUT is used to update or create a resource entirely, while PATCH is used to apply partial modifications to a resource. In other words, PUT typically sends the entire updated resource, and PATCH sends only the changes.
1. How do you make a default value in a schema?
    - Can be done during schema definition.
1. What does a 500 error status code mean?
    - Server error: It implies that the server encountered an unexpected condition that prevented it from fulfilling the request.
1. What is the difference between a status 200 and a status 201?
    - 200 indicates a successful HTTP request, meaning the server successfully processed the request. 201 is used when a new resource is successfully created as a result of the request.



## Things I want to know more about

- Are we suppose to write these 30 errors ourselves? 

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

## Career 12 - Networking: Informational Interview 1:1

Coffee meetings, aka Informational Interviews, are a great way to make meaningful connections in the tech industry. People are often flattered you want to hear their perspective, and will be excited to meet with you. READ [this run down](https://www.themuse.com/advice/9-questions-you-have-about-coffee-meetings-but-were-too-afraid-to-ask) of how these meetings operate.

Growing and maintaining your network is an important career strategy. Your network should remain active and have new connections constantly being added. Schedule and attend a 1:1 informational interview with an industry person who is a new connection.

Have a [plan in place](https://www.themuse.com/advice/4-strategies-for-your-oneonone-networking-meeting) before getting to the meeting. Your goal is to find a tangible way to make this meeting be a benefit to the both of you. Always end by asking, “How can I help?”

Assignment
Read the articles above and meet with your 1:1 over coffee, or tea.

Afterwards, share with your classmates who you met with, a short summary of what you learned about that person, and what you will do to help them.


TA’s will be grading you on your submission of who you met with and your description of attempting to find a solution to a pain point of theirs by helping them in some way. Please include your plan to follow up and thank them for the meeting.





