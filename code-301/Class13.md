# Class 13 - Updating Resources

## Lab 13 - Update a Resource

### Setup

In this class, you will complete your full stack CRUD application by adding an UPDATE route. You will add a button to each book that, when clicked, will display a form where the user can change information about that book. That information will be sent to the server where it will replace what’s already in the database for that record.

**Feature Tasks**

1. CREATE and DELETE of CRUD. See your team’s Trello board for this lab’s feature tasks.

**Documentation**

Your README.md must include:

# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview

<!-- Provide a high-level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

<!-- What are the steps that a user must take in order to build this app on their machine and get it running? -->

## Architecture

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59 pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

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
2. Run your Lighthouse Accessibility report looking for a score of 65 or higher. Make adjustments as needed.
3. Create a PR back to the main branch of your repository, showing ALL your work, and merge it cleanly.
4. On Canvas, submit a link to your PR. Add a comment in your Canvas assignment which includes the following:
   - A link to the deployed version of your latest code.
   - A link to your public Trello board.
   - A question within the context of this lab assignment.
   - An observation about the lab assignment, or related ‘Ah-hah!’ moment.
   - How long you spent working on this assignment.

## Code Challenge - Regular Expressions, part 1

### Overview

[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-13/challenges/)

### Video

[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

### Demonstration

[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-13/challenges/DEMO.html)

### Challenges

Navigate to the javascript folder within your data-structures-and-algorithms repository.

1. Create a new branch for this challenge called regex-1

   ```bash
   git checkout -b regex-1
   ```

2. Retrieve the code challenge from the system

   ```bash
   npm run get-challenge 13
   ```

3. In your terminal, from the javascript folder, run npm test 13 to execute the tests in this file for this challenge.

4. At this point, you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.

5. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!

6. Write code to make the tests pass, one at a time. Let the error messages guide you.

7. Once the test is passing, refactor as needed, then move on to the next challenge.

8. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

### Submission

When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

## Read 13 - Readings Overview

## Resources Link/Pages

### CRUD Basics

1. [CRUD Basics](https://medium.com/geekculture/crud-operations-explained-2a44096e9c88)

### Speed Coding: Building a CRUD API (Watch a Twitch streamer code an Express API in 20 minutes!)

1. [Speed Coding: Building a CRUD API (Watch a Twitch streamer code an Express API in 20 minutes!)](https://www.youtube.com/watch?v=EzNcBhSv1Wo)

## Answer

Statement on why this topic matters as it relates to what I'm studying in this module:

Understanding CRUD is essential when working with databases to store, retrieve, modify, and delete data.

### CRUD Basics

1. Which HTTP method would you use to update a record through an API?
   - PUT. This replaces all current data of the target resource with the uploaded content.
2. Which REST methods require an ID parameter?
   - Update (or Edit) and Delete methods. The ID parameter helps identify the specific resource that needs to be updated or deleted.

### Speed Coding: Building a CRUD API (Watch a Twitch streamer code an Express API in 20 minutes!)

1. What’s the relationship between REST and CRUD?
   - REST (Representational State Transfer) is an architectural style that defines a set of constraints to be used when creating web services. CRUD (Create, Read, Update, Delete) is a set of basic operations commonly used in database interactions. The relationship between REST and CRUD lies in how RESTful APIs (Application Programming Interfaces) adhere to the principles of REST while implementing CRUD operations.
   - In a RESTful API:
     - Create is typically implemented using HTTP POST method.
     - Read is implemented using HTTP GET method.
     - Update is implemented using HTTP PUT or PATCH methods.
     - Delete is implemented using HTTP DELETE method.
2. If you had to describe the process of creating a RESTful API in 5

 steps, what would they be?

- Define Resources
- Choose HTTP Methods
- Design URIs
- Implement CRUD Operations
- Handle Errors and Responses

## Things I want to know more about

- What exactly are nonrestful APIs then. What have we been using so far?

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
2. What did I learn today?
3. What should I do differently next time?
4. What still puzzles me, or what do I need to learn more about?
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.

## Career 13 - Networking: Attend an Event

> Do some research on local meetups in your area. Attend one that you have never been to, off campus, with the intention of treating it as a networking opportunity. Set a goal of meeting at least 3 new people, and having one meaningful conversation. Get business cards if you can and connect with them on LinkedIn.

> Share the event name with a short review of your experience. Who did you meet, and what did you get to talk about? How can you follow up with the person that you connected with the most?

I attended a virtual event called AI for Designers hosted by the AI User Group in San Francisco on December 14th, 2023, via Meetup.com. The event focused on the theme of AI for designers "Explore the world of AI-powered design tools like ChatGPT, Dall-E, and Midjourney, and learn how they can enhance your creative process in UX/UI design, graphic design, web design, conversation design, product design, and generative design." The meetup provided valuable insights into different aspects of AI in design, covering image generation, brand creation, and AI integration in the design process. Speakers highlighted the efficiency and benefits of AI tools while also addressing potential ethical considerations in the industry. I never realized how many extensions or uses for GPT are out there; it's kind of cool.

**Key Takeaway: AI is not here to replace you, it's here to make you smarter. AI is able to do so much that it's so integrated into your design and creation process, and while it's making us better, we have to go back to before and nourish our creativity again because we're relying so much on tools right now.**

**Talk Titles:**

1. "Dall-E 3: Best Practices for Elevating Image Accuracy and Nuance" by Bryan Wade (Software Engineer, AI Art Creator, and Organizer of Generative AI SF Happy Hour)

1. "AI Brand Creation for Designers" by Ross Patrick (Founder/Creative Director of XTRA BOLD, Director and Creative Lead School of Advertising - Academy of Art University)

1. "Integrate an AI-Powered Copilot Into Your Design Process" by KD Deshpende (Founder and CEO at Simplified)

**People I Met and What I Found Interesting About the Talks:**

1. Bryan Wade: Dall-E 3: Best Practices for Elevating Image Accuracy and Nuance

   - Dall-E is an AI art feature of ChatGPT, enabling image creation in an app interface.
     - Takes 30 seconds to make images compare to others
     - Still a chatbot so no open source features and has missing features like:
       - no editor
       - no pinpointing
       - no fine-tuning
       - no embeddings
       - no control net
     - So why would you use it if no access to those features:
       - Solves prompt-related issues by allowing users to simply say I want an image
       - He said to treat it like you're talking to a person or artist
     - With chatbots you can use previous images as a half input into new one so it can easily iterate on prev images
     - The difference between Dall-E and others is it has strict filters, no realistic photos
       - But because it's still an openAI ecosystem it has access to APIs like GPT Vision which can take key words and turn your headshot into a cartoon and then a realistic photo
       - Checkout GPTs store which I didn't know existed but it's "Custom versions of ChatGPT that you can create for a specific purpose—called GPTs. GPTs are a new way for anyone to create a tailored version of ChatGPT to be more helpful in their daily life, at specific tasks, at work, or at home—and then share that creation with others. For example, GPTs can help you learn the rules to any board game, help teach your kids math, or design stickers."

2. Ross Patrick: AI Brand Creation for Designers

   - He has been teaching how to use AI for advertising so like image generation for ads, doing tv spots and now he is teaching how to use AI to designers now.
   - He delved into the ethical dimensions of AIs and importance on the industry
     - AI systems may inadvertently replicate existing images, leading to potential copyright infringement issues.
     - When packaging design, you can steal artist work as a mimic and use it for fun but don’t take credit for it
   - His recommendation for when developing prompts to get an image you want start with changing one word each time.

3. KD Deshpende: Integrate an AI-Powered Copilot Into Your Design Process

   - He used to work for Uber and Facebook but founded Simplified, which is a design and collaboration platform for modern marketing teams. It's one app to create, collaborate, and scale your marketing. So it's creation and distribution all in one platform.
   - He started showing what his platform could do like:
     - Create professional videos from any image
     - The coolest thing he showed was that by entering the prompt "Make me a presentation about AI power" more than a dozen presentation templates of so many designs pop up and when you click the design you want, it generated an entire full deck presentation.
     - It can also make ads and browsers by entering prompts.
   - He gave the key takeaway of this entire meeting which is **AI is not here to replace you, it's here to make you smarter. AI is able to do so much that it's so integrated into your design and creation process, and while it's making us better, we have to go back to before and nourish our creativity again because we're relying so much on tools right now.**
