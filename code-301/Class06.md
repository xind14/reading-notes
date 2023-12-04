# Class 6 - Asynchronous Code and Third Party APIs

## Lab 6 - Asynchronous code, and APIs

## Setup

In this class you will be building a React application that uses the Axios library to make user-initiated requests for data from a third-party API.

**Resources**
[Axios on NPM](https://www.npmjs.com/package/axios)

[Location IQ Geocoding API](https://docs.locationiq.com/docs#search-forward-geocoding) - Specifically, the “Search / Forward GeoCoding” and “Static Maps” sections.

**Process**

When available, your instructor will pair you with a partner for this lab. Spend the first 15 minutes planning out an approach to this lab’s work on a whiteboard.

1. Draw the web request-response cycle for the current lab tasks (about 15 minutes).
2. Document the data flow: identify inputs and outputs for each part of the cycle.
3. Outline the functions that support this data flow.
4. Be sure to include these drawings in your README.md.
5. Implement your plan, coding in your own repository, submitting your own pull request.

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
2. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
3. Create a PR back to the main branch of your repository, showing ALL your work, and merge it cleanly.
4. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
    - A link to the deployed version of your latest code.
    - A link to your public Trello board.
    - A question within the context of this lab assignment.
    - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
    - How long you spent working on this assignment.

## Code Challenge - Reduce

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-06/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-06/challenges/DEMO.html)

Challenges
Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called reduce
git checkout -b reduce

2. Retrieve the code challenge from the system
npm run get-challenge 06

3. In your terminal, from the javascript folder, run npm test 06 to execute the tests in this file for this challenge.

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


## Read 6 - Readings Overview

## Resources Link/Pages

### What Google Learned From Its Quest to Build the Perfect Team


1. [What Google Learned From Its Quest to Build the Perfect Team](https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)


### How I explained REST to my brother

1. [How I explained REST to my brother](https://gist.github.com/brookr/5977550)


### API Keys

1. [Geocoding API](https://locationiq.com/)
2. [Weather Bit API](https://www.weatherbit.io/)
3. [Yelp API Docs](https://docs.developer.yelp.com/reference/v3_business_search)
4. [The Movie DB API Docs](https://developer.themoviedb.org/docs/getting-started)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Using APIs is crucial in modern coding because they provide a standardized and efficient way for different software systems to communicate, allowing developers to access and share data seamlessly across the web.


### What Google Learned From Its Quest to Build the Perfect Team


1. To what extent did psychological safety impact your previous work experience?
    - In my previous job, I ensured people in my team had equal participation by holding round table meetings and a reminder at the beginning that they can say whatever they want. However, how our team functioned within the overall company was not great because the people in charge of use did not provide a psychologically safe environment. Our productivity was low because we all agreed the job was just a paycheck because the bosses wouldn't listen to our concerns. We did bond over how the bosses were treating us so that opened up to more emotional conversations which made work not feel like work sometimes.

2. How does this article inform your approach to working with others moving forward?
    - I will ensure the following three things happen because it will contribute to a psychologically safe team.
      - `Equal Participation`: every member has an opportunity to speak and be heard. Conversational turn-taking ensures that all voices are valued and respected.
      - `Average Social Sensitivity`: teams with high social sensitivity can intuitively understand and respond to their colleagues' emotions, fostering empathy and trust within the team.
      - `Shared Norms and Emotional Conversations`: teams with established norms for open communication and emotional conversations create an environment where members feel safe to express their thoughts, concerns, and feelings without fear of judgment.


### How I explained REST to my brother

1. Who is Roy Fielding?
    - Wrote the first web servers, that sent documents across the internet… and then he did a ton of research explaining why the web works the way it does. His name is on the specification for the HTTP protocol that is used to get pages from servers to your browser.
2. Why don’t the techniques that we use in this class work well when we need to be able to talk to all of the machines in the world?
    - The in class focus is typically on smaller, localized communication, whereas the web needed a universal approach to enable communication with any machine worldwide.
3. What is the HTTP protocol that Fielding and his friends created?
    - It's the foundation for communication on the World Wide Web. It defines how messages are formatted and transmitted, and how web servers and browsers should respond to various commands.
4. What does a GET do?
    - A request method used by the browser to retrieve information from a specified URL. It is the primary method browsers use to obtain web pages and resources.
5. What does a POST do?
    - A request method used to submit data to be processed to a specified resource. It is commonly used when uploading a file, submitting a form, or making changes to a database. If one system needs to add something to another system
6. What does PUT do?
    - A request method used to update a resource or create a new resource if it does not exist at a specified URL. It is often used to replace or create a resource. If a system wants to replace something in another system.
7. What does PATCH do?
    - A request method used to apply partial modifications to a resource. It is used when you want to apply changes to a resource without modifying the entire resource.

#### Summary of Conversation

- The conversation explains the significance of Roy Fielding and his contributions to the development of the World Wide Web and the HTTP protocol.
- HTTP is a crucial protocol that uses verbs (GET, POST, PUT, PATCH) to perform actions on nouns (resources) identified by URLs.
- The conversation emphasizes the importance of machine-readable representations of resources for efficient communication between systems, leading to the concept of REST.
- REST (Representational State Transfer) is an architectural style that focuses on the simplicity and universality of communication between machines, enabling a wide range of applications and interactions.
- The use of HTTP verbs allows for consistent and standardized interactions with resources, making it easier for machines to understand and communicate.
- The conversation contrasts REST with older approaches like SOAP, highlighting the shift towards more straightforward and effective methods in modern software development, particularly in building APIs.


### API Keys

Request a personal API key from the following APIs. You should receive these in your email within a few hours, often within minutes. Please request these keys prior to lecture to allow adequate time because you will need them in order to complete your lab assignment. Note: do not post your API keys in the Canvas discussion or on GitHub. Save them in a secure place.

1. Geocoding API
    - Yes
2. Weather Bit API
    - Yes
3. Yelp API Docs
    - Yes
4. The Movie DB API Docs
    - Yes

## Things I want to know more about

- I'm still not quite sure why API keys can't be shared. Whats the security issue with using these that I'm not getting?

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

## Career 6 - Behavioral Questions & Mock Interviews

During the interview process you will be asked behavioral questions and you’ll need muscle memory to take over to answer calmly and confidently when the nerves kick-in. Having stories ready to go that you’ve already vetted and practiced will make all of the difference.

**Assignment**

The key to nailing the job interview is practicing and refining your answers. In efforts to support your success, practice the behavioral questions that you have prepared throughout 201 and 301 with your two accountability partners. Structure it as a brief mock interview of each other.

Take notes and give thoughtful, candid feedback to help each other improve.

After you have been interviewed yourself, submit a small summary of what you learned about the interview process and yourself. Please write a minimum of five sentences.


- I have none of my behavioral questions memorized because I'm really not focused on that right now. I don't think I should be focused on anything career related because I need to spend time learning to code first. I shouldn't think about interviews or anything that far ahead if I don't have the foundations of what I am learning down. But having read the behavioral questions, they are too long so I might have to trim most of these down because I for sure cannot memorize any of these. If the interviews were online though I think I could get away with reading my answers to the screen because it looked like I was looking at the camera when reading my answers. I talked about one job too much, but I don't really have any other experience to draw from so that might be a limitation. I say a lot of dead words to fill the space when I'm thinking so I need to be mindful of that. Also, definitely not confident in what I am saying but I think that has to do with not practicing these questions.
