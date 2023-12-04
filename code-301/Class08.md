# Class 8 - APIs

## Lab 8 - APIs

## Setup

In this lab assignment, you will show live weather and movie data in response to City Explorer searches. This data comes from third-party APIs, that allow you to make queries with an access token (or key). To keep your key secure, you can’t expose it in your front-end code, but you can use it from within your own custom back-end API server code you started in the last lab. Your web client will make a request to your custom API server, which will in turn use the key to make a request to the data API. When your server gets the data back, you can wrangle the data as you like, and send it on back to the web client.

**Resources**

- [WeatherBit API](https://www.weatherbit.io/api)

- [The Movie DB API Docs](https://developer.themoviedb.org/docs/getting-started)



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

Name of feature: ________________________________

Estimate of time needed to complete: _____

Start time: _____

Finish time: _____

Actual time needed to complete: _____

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

## Code Challenge - Array and String Methods Fun with split, join, slice, and splice!

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-08/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-08/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called array-methods
git checkout -b array-methods

2. Retrieve the code challenge from the system
npm run get-challenge 08

3. In your terminal, from the javascript folder, run npm test 08 to execute the tests in this file for this challenge.

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


## Read 8 - Readings Overview

## Resources Link/Pages

**Bookmark and Review**

- [RegExr - Pay particular attention to the cheatsheet](https://regexr.com/)
- [Regex Tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
- [Regex 101](https://regex101.com/)

### API Design Best Practices

1. [API Design Best Practices](https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design)



## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

 APIs serve as the backbone for communication between different software components. REST provides a standardized architectural approach to designing these APIs.

### API Design Best Practices

1. What does REST stand for?
    - Representational State Transfer.
1. REST APIs are designed around a **resource**.
1. What is an identifier of a resource? Give an example.
    -  URI (Uniform Resource Identifier). Example: `https://adventure-works.com/orders/1`
1. What are the most common HTTP verbs?
    - GET, POST, PUT, PATCH, DELETE.
1. What should the URIs be based on?
    - The nouns (the resource) and not verbs (the operations on the resource).

1. Give an example of a good URI.
    - Good: `https://adventure-works.com/orders`
    - Avoid: `https://adventure-works.com/create-order`
1. What does it mean to have a ‘chatty’ web API? Is this a good or a bad thing?
    - When one that exposes a large number of small resources, leading to many requests. This is generally a bad thing as it increases the load on the server and may result in poor performance.
1. What status code does a successful `GET` request return?
    - HTTP status code 200 (OK).
1. What status code does an unsuccessful `GET` request return?
    - HTTP status code 404 (Not Found) if the resource cannot be found.
1. What status code does a successful `POST` request return?
    - HTTP status code 201 (Created).
1. What status code does a successful `DELETE` request return?
    - HTTP status code 204 (No Content).


#### The common HTTP methods used by most RESTful web APIs are:

- **GET** retrieves a representation of the resource at the specified URI. The body of the response message contains the details of the requested resource.
- **POST** creates a new resource at the specified URI. The body of the request message provides the details of the new resource. Note that POST can also be used to trigger operations that don't actually create resources.
- **PUT** either creates or replaces the resource at the specified URI. The body of the request message specifies the resource to be created or updated.
- **PATCH** performs a partial update of a resource. The request body specifies the set of changes to apply to the resource.
- **DELETE** removes the resource at the specified URI.


## Things I want to know more about

- What does it mean when it said REST APIs use a stateless request model and it enables web services to be highly scalable, because there is no need to retain any affinity between clients and specific servers? What can limit this scalability?

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

## Career 8 - Professional Pitch and Introduction


**Watch the videos:**

- Job interview professional introduction: [video](https://www.youtube.com/watch?v=Oy6S0iTZx54)
- How to give a personal pitch with little field experience: [video](https://www.youtube.com/watch?v=OF8nx8Pt0tI)

Now review the video of your professional pitch that you created earlier. It’s not easy to hear your own voice, or watch your own face, so be brave! This is one of the simplest ways to improve. Watch and listen carefully. Imagine you are hearing it for the first time.

**Assignment**

Re-record your pitch video, keeping the positives, and changing the things you’d like to improve.

Send your Career Coach, or a trusted mentor, the link to your pitch video to respond to you with their feedback. This exercise will better prepare you for the 401 Personal Pitch workshop where you will present your pitch to your classmates for their collective feedback.

Remember that feedback is a gift. Being receptive to ways you can improve is imperative when you are developing your story and your personal brand. Knowing what is working and what needs improvement early helps you practice with intention and excellence and be prepared for the interview process.

Submit the reworked version of your video to complete the assignment.

- Hello, I'm Xin Deng, transitioning from a career in veterinary clinic team management to the forward-thinking world of software development. In my role as a lead receptionist, I cultivated strong multitasking and problem-solving skills, but I felt a need for a more fulfilling and stable career. The allure of merging creativity with technology led me to software development, where I aspire to design user-friendly applications and contribute to groundbreaking innovations. My advantage lies in my extensive experience in client-facing roles, and understanding the importance of seamless user interactions. Thriving in collaborative environments, I am eager to leverage my problem-solving and communication skills to make a valuable impact on any software development team.


