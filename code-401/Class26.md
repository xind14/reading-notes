# Class 26 - Intro to Django	

## Lab 26 - Build better web apps more quickly with less code


## Setup

## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/DEMO.html)

Challenges

1. Navigate to the javascript folder within your data-structures-and-algorithms repository.
2. Create a new branch for this challenge called for-each
   git checkout -b for-each
3. Retrieve the code challenge from the system
   npm run get-challenge 01
4. In your terminal, from the javascript folder, run npm test 01 to execute the tests in this file for this challenge.
5. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
6. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!
7. Write code to make the tests pass, one at a time. Let the error messages guide you.
8. Once the test is passing, refactor as needed, then move on to the next challenge.
9. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

## Read 26 - Intro to Django

## Resources Link/Pages

- [Getting started with Django](https://www.djangoproject.com/start/) Just the Intro to Django section.
- [How Django Works Behind the Scenes](https://wsvincent.com/how-django-works-behind-the-scenes/)
- [What is Tailwind CSS?](https://blog.hubspot.com/website/what-is-tailwind-css)

**Bookmark and Review**

- [What is Django](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Introduction)
- [First Django App - Part 1](https://docs.djangoproject.com/en/4.1/intro/tutorial01/)
- [First Django App - Part 2](https://docs.djangoproject.com/en/4.1/intro/tutorial02/)
- [Tailwind CSS Django - Flowbite](https://flowbite.com/docs/getting-started/django/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Django and Tailwind CSS alongside Python enhances your ability to develop full-stack web applications

## Reading Questions

1. What are the key components of the Django framework, and how do they contribute to building a web application?

   - **Model:** Represents the data structure and database schema. It defines the data structure of the application and handles interactions with the database.
   - **View:** Manages the presentation logic and handles user input. It retrieves data from the model and sends it to the template.
   - **Template:** Defines the structure of the output and presentation. It generates HTML dynamically based on data provided by the view.
   - **URLconf (URL Configuration):** Maps URL patterns to views. It directs incoming web requests to the appropriate view based on the defined patterns.
   - **ORM (Object-Relational Mapping):** Enables interaction with the database using Python code instead of SQL queries.
   - **Middleware:** Intercepts and processes requests globally before they reach the view. It allows for functionalities like authentication, security, and more.

2. Explain the role of Django’s MTV (Model-View-Template) architecture and how it handles a typical web request-response cycle.

   - **Model:** Represents the data structure and interacts with the database.
   - **Template:** Generates HTML dynamically based on data provided by the view.
   - **View:** Handles user input, retrieves data from the model, and sends it to the template.

   **Web Request-Response Cycle:**

   1. **User sends a request:** When a user interacts with a Django-powered web application, a request is sent to the server.
   2. **URLs are mapped:** The URLconf maps the URL patterns to the appropriate views.
   3. **View processes the request:** The view processes the request, interacts with the model to fetch data, and sends it to the template.
   4. **Template generates HTML:** The template receives the data and generates HTML, which is sent back to the user as a response.
   5. **User receives the response:** The user's browser receives the HTML response and renders the web page.

3. What is the purpose of Tailwind CSS, and how does it differ from Bootstrap CSS?

   - Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier. It provides a set of low-level utility classes that can be directly applied in HTML to control styling, layout, and other design aspects.
   - **Differences from Bootstrap CSS:**
     - **Utility-First vs. Component-Based:** Tailwind CSS is utility-first, allowing developers to apply small, single-purpose utility classes directly in HTML. Bootstrap, on the other hand, is component-based, providing pre-designed components that need to be customized using predefined classes.
     - **Flexibility and Control:** Tailwind offers more flexibility and control over the design of the application since developers can create custom components using utility classes. Bootstrap provides ready-made components with limited customization options.
     - **File Size:** Tailwind CSS can result in smaller CSS files as developers only include the utility classes they use. Bootstrap includes a comprehensive set of styles, potentially leading to larger file sizes.
     - **Learning Curve:** Tailwind's learning curve primarily involves familiarizing oneself with its utility classes. Bootstrap has a learning curve associated with understanding its components and their customization options.

## Things I want to know more about

- I'm a bit confused on how you're able to create a full web page with python and tailwind. How does it come together?

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

