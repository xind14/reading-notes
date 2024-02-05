# Class 28 - Django CRUD and Forms	

## Lab 28 - Create, Read, Update, and Delete


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

## Read 28 - Django CRUD and Forms

## Resources Link/Pages

- [Django Forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Forms)
  **Bookmark and Review**

- [Django Templates](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Home_page)
- [Django Views](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Generic_views)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Learning Django forms, templates, and views is crucial when learning Python as it empowers developers to efficiently handle user input, create dynamic and reusable web interfaces, and manage server-side logic, providing a comprehensive skill set for building robust and interactive web applications.

## Reading Questions

1. How do Django Forms facilitate user input handling, and what are some key components of creating a form using the Django framework?

   - Django Forms facilitate user input handling by providing a high-level, object-oriented way to define and handle forms on the website. Key components of creating a form using Django include:

     - **Form Class:** Forms are created by defining a Python class that inherits from `django.forms.Form`. This class contains fields, each representing a form input.

     - **Field Types:** Django provides various field types (e.g., CharField, DateField) to define the type of data the form should accept.

     - **Validation:** Forms automatically handle validation, ensuring that data entered adheres to specified criteria, such as required fields or specific data formats.

     - **Rendering:** Forms can render HTML for display on web pages, making it easier to integrate them into the site's frontend.

     - **CSRF Protection:** Django Forms include built-in protection against Cross-Site Request Forgery (CSRF) attacks.

2. Explain the purpose of Django Templates in web development and describe how template inheritance can be utilized to improve code reusability and maintainability.

   - Django Templates in web development serve the purpose of dynamically generating HTML by embedding Python-like code within HTML files. Template inheritance is a powerful feature to improve code reusability and maintainability:

     - **Template Tags:** Django Templates use template tags enclosed in `{% %}` for logic and `{{ }}` for variable rendering. This allows embedding Python-like control structures directly into HTML.

     - **Template Inheritance:** Templates can extend and override other templates using the `{% extends "base.html" %}` and `{% block content %}` tags. This promotes modular design and avoids duplication of code.

     - **Reusability:** By creating a base template that includes the common structure and blocks for different pages, template inheritance enables reusing code across multiple pages.

     - **Maintainability:** Changes made to the base template automatically reflect in all templates that extend it, reducing the need for redundant updates.

3. Describe the function of Django Views in handling HTTP requests, and outline the differences between function-based views and class-based views.

   - Django Views handle HTTP requests and contain the logic for processing these requests. In the context of Django, there are two main types of views:

     - **Function-Based Views (FBVs):**
     - Implemented as Python functions.
     - Simpler and straightforward for smaller applications.
     - Easier to understand due to linear flow.
     - Suitable for simple tasks.

     - **Class-Based Views (CBVs):**
     - Implemented as classes.
     - Provide more structure and organization for complex applications.
     - Encourage code reuse through mixins and inheritance.
     - Can be more reusable and maintainable for larger projects.

## Things I want to know more about

- How can form data be processed and validated before being saved to the database in a Django web application?

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

## Career 28 - Workshop #4 Prep: Behavioral Questions
