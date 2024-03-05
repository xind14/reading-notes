# Class 26 - Intro to Django

## Lab 26 - Build better web apps more quickly with less code

The first words you see on the Django website are

> Django makes it easier to build better Web apps more quickly and with less code.

The next quote you’ll see is

> The web framework for perfectionists with deadlines.

In this class we’ll build out a small, but functional, multi page web site using Django.

We’ll get a feel for the “Django Way” and see the dramatic performance gains you can get with a mature, robust framework.

Along the way you’ll style your site in a new way using the utility first framework TailwindCSS.

### Feature Tasks and Requirements

- Create web site in Django with 2 pages
  - home page
  - about page
- Create views/urls/templates as needed for home and about pages
- Use ancestor template to contain navigation elements
- Should be built the “Django way” aka match the structure of in-class demo
- Configure your project to use TailwindCSS/Flowbite
  - Just basic styling is sufficient for today, but stretch out if you’ve got time!

### Implementation Notes

Typical Steps to Start Django Project:

1. Create project
2. Add dependencies if needed
3. Define app
4. Add app to project
5. Add views
6. Add urlpatterns
7. Add templates
8. Add tests

### User Acceptance Tests

- Use Django’s built-in testing tools
- Test that home and about url status codes
- Test home and about url template use, including ancestor template.

### Configuration

1. Create a Github repo named `django-snacks`
2. Create Django project named `snacks_project` (using Django)
3. Create Django app named `snacks` (Using Django)

### Stretch Goals

- Create additional apps in project
- Pass additional info along to views and render it
- Extend additional blocks in templates
- Add dark mode to your site
- Add Flowbite components

## Code Challenge - Trees practice with Neetcode.

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
   - I forgot almost all the steps and had to rewatch the lecture. The how to .md helped a lot but there was extra things in there I didn't need so I will create my own template.
2. What did I learn today?
   - It seems easier to create a site than react but I still need time to figure out where things need to go.
3. What should I do differently next time?
   - Set up took me a bit so will write down a cheatsheet for it.
4. What still puzzles me, or what do I need to learn more about?
   - I'm confused on the CSS classes. I still don't get where did all the styling in the output come from.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
     - I think everything is finished. I'm gonna go back and work on the rest of the code challenges though.
