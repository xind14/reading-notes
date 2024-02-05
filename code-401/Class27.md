# Class 27 - Django Models	

## Lab 27 - Object Relational Mapping


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

## Read 27 - Django Models

## Resources Link/Pages

- [Using Models](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Models)
- [Django Admin](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Django/Admin_site) `Advanced configuration` section is optional

The tutorial is really good but some of the tools are dated so when reading try to understand the concepts more than the code.

- [(Optional): Beginner’s Guide to Django - Part 1](https://simpleisbetterthancomplex.com/series/2017/09/04/a-complete-beginners-guide-to-django-part-1.html)

**Bookmark and Review**

- [Beginner’s Guide to Django - Part 2](https://simpleisbetterthancomplex.com/series/2017/09/11/a-complete-beginners-guide-to-django-part-2.html)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Django models serve as a crucial bridge between the application's Python code and its database.

## Reading Questions

1. Explain the purpose and basic structure of Django models. How do they help in creating and managing database schema in a Django application?

   - Django models represent the data structure of a Django application. They define the entities and relationships in the application, serving as an abstraction layer for database interactions.
   - **Basic Structure:** Models are Python classes that inherit from `django.db.models.Model`. Each class attribute represents a field in the database table. Fields can include data types, relationships, and constraints.
   - **Database Schema Management:** Models help in creating and managing the database schema by automatically generating database tables based on the defined models. Migrations are used to apply changes to the database schema over time.

2. Describe the primary features and functionality of the Django Admin interface. How can it be customized to suit the specific needs of a project?

   - Django Admin provides a web-based interface for managing Django models' data.
   - It automatically generates a CRUD (Create, Read, Update, Delete) interface for each registered model.
   - Features include search, filters, and sorting capabilities, making it easy to navigate and manipulate data.
   - **Customization:**
     - The admin interface can be customized to suit project needs.
     - Developers can customize the look and feel using CSS, override templates, and even extend functionality by creating custom admin views.
     - Admin classes are used to define how models appear and behave in the admin interface.

3. Briefly outline the key components and workflow of a Django application, as discussed in the Beginner’s Guide to Django. How do these components interact with each other to create a functional web application?

   - **Key Components:**
     - **Models:** Define data structure.
     - **Views:** Handle user requests and return appropriate responses.
     - **Templates:** Define the presentation layer, generating HTML dynamically.
     - **URLs:** Map URLs to views, directing user requests.
   - **Workflow:**
     - A user makes a request, which is directed to a specific view by the URL mapping.
     - The view processes the request, interacts with models if necessary, and returns a response.
     - The template generates HTML using data from the view.
     - The final HTML is sent as a response to the user.
   - **Interactions:**
     - Models interact with the database to store and retrieve data.
     - Views handle the request-response cycle, using models to fetch or update data.
     - Templates use data from views to generate dynamic HTML.
     - URLs map user requests to appropriate views.

## Things I want to know more about

- What are the pros and cons of creating a website with python vs JS?

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

## Career 27 - Workshop #4 Prep: Winning the Interview

```
Knowledge is power
If you have an understanding for how things work, you can tip the scale in your favor. The recruitment process can seem scary as an outsider but in reality … it is process like all other process. Know the formula and you have a better chance at success.

Read these articles to pull back the curtain and learn how to capitalize opportunities that you have generated:
```

1. [9 Secrets Recruiters Don’t Want You to Know](https://www.thejobnetwork.com/9-secrets-recruiters-dont-want-you-to-know/)
2. [The Ultimate Interview Guide: 30 Prep Tips for Job Interview Success](https://www.themuse.com/advice/the-ultimate-interview-guide-30-prep-tips-for-job-interview-success)

Submit a small summary of three new things you’ve learned and will be implementing in your process.

1. **Researching:** Do extensive research before an interview, not only about the company but also about the interviewers and the specific job role. This goes beyond the information available on the company's website, encouraging reaching out to current and previous employees and exploring multiple sources. I'll be incorporating a more comprehensive research strategy to gain a deeper understanding of the company culture, potential challenges, and the expectations associated with the position.

2. **Interview Prep:** Identify key selling points to practicing answers to common questions and use the STAR method for behavioral questions. I'll focus on tailoring my responses to showcase relevant skills and experiences, ensuring a coherent and compelling narrative during interviews.

3. **Presentation and Logistics:** The importance of personal presentation, including attire, grooming, and body language, is highlighted. Additionally, the emphasis on planning for interview logistics, such as testing technology, preparing reference lists, and organizing interview essentials, is crucial. I'll pay closer attention to these details to present myself professionally and handle practical aspects effectively, contributing to a smoother overall interview experience.
