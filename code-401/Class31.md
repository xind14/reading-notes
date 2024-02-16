# Class 31 - Django REST Framework & Docker

## Lab 31 - Leveling up Django for APIs & Containerization

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

## Read 31 - Django REST Framework & Docker

## Resources Link/Pages

- [Beginner’s Guide to Docker](https://wsvincent.com/beginners-guide-to-docker/)
- [Django for APIs - Library Website](https://djangoforapis.com/library-website-and-api/) May ask you for email because it’s a sample chapter for (fantastic) book they’re selling

**Bookmark and Review**

- [Beginner’s Guide to Django REST Framework](https://learndjango.com/tutorials/official-django-rest-framework-tutorial-beginners)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Learning Django REST Framework is important because it equips you with the skills to build powerful and scalable web APIs

## Reading Questions

1. What are the key components of a Docker container, and how do they help streamline the development and deployment of applications?

   - **Docker Image**: An image is a lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, environment variables, and configuration files. Images are built from Dockerfiles using the `docker build` command.
   - **Docker Container**: A container is a runtime instance of a Docker image. It encapsulates the application and its dependencies, ensuring consistency and isolation across different environments. Containers can be run, started, stopped, moved, and deleted using Docker commands.
   - **Dockerfile**: A Dockerfile is a text document that contains instructions for building a Docker image. It specifies the base image, dependencies, environment variables, commands to run, and other configuration settings. Dockerfiles enable reproducible builds and version-controlled infrastructure as code.
   - **Docker Engine**: The Docker Engine is a client-server application that enables the building, running, and managing of Docker containers. It consists of a daemon process (`dockerd`) that runs on the host machine, a REST API for interacting with Docker, and a command-line interface (`docker`) for executing Docker commands. The Docker Engine abstracts away the underlying infrastructure, making it easy to deploy applications across different environments, such as development, testing, and production.

   Docker containers streamline the development and deployment of applications by providing a consistent and portable runtime environment. They encapsulate the application and its dependencies, ensuring that it runs the same way everywhere, regardless of the underlying infrastructure. Containers are lightweight, fast to start up, and resource-efficient, making them ideal for microservices, continuous integration/continuous deployment (CI/CD), and scalable, cloud-native architectures.

2. Describe the primary steps involved in building a library website using Django, including essential components like models, views, and templates.

   - **Models**: Define the data models for the library application, such as `Book`, `Author`, `Genre`, etc., using Django's ORM (Object-Relational Mapper). Each model represents a database table, and relationships between models are defined using fields like `ForeignKey` and `ManyToManyField`.
   - **Views**: Implement views to handle HTTP requests and generate responses. Views retrieve data from the database using models, perform any necessary processing, and render HTML templates or return JSON responses. Views can be implemented as functions or class-based views.
   - **Templates**: Create HTML templates to define the structure and presentation of the website's pages. Templates use Django's template language to dynamically generate content based on data passed from views. Templates can include variables, tags, filters, and template inheritance to create reusable and modular layouts.
   - **URLs**: Define URL patterns to map incoming HTTP requests to the appropriate views. URLs are configured in the project's URL configuration (`urls.py`) using Django's URL patterns and routing mechanisms, such as `path()` and `include()`.
   - **Forms**: Implement forms to handle user input and data validation. Forms can be used to create, update, and delete records in the database, as well as perform user authentication and authorization.
   - **Static Files**: Serve static files (e.g., CSS, JavaScript, images) using Django's built-in static file handling capabilities. Static files are typically stored in the `static` directory of the Django project and served by the Django development server or a web server like Nginx or Apache in production.

3. Can you explain the primary differences between Django and Django REST framework?

   - Django is a high-level Python web framework for building full-stack web applications, focusing on rapid development and scalability. It provides features like URL routing, templating, forms, authentication, and database access out of the box. Django REST Framework (DRF) is a extension of Django for building Web APIs, offering tools and libraries for serialization, authentication, permissions, pagination, and more.
   - **API Development**: Django is primarily used for building traditional web applications with HTML views and forms rendered server-side. DRF, on the other hand, is specifically designed for building RESTful APIs that communicate with clients using JSON or XML over HTTP.
   - **Serialization**: DRF provides serializers for converting complex data types (e.g., Django models) into native Python data types (e.g., dictionaries) that can be easily rendered into JSON or XML responses. Django does not include built-in support for serialization.
   - **Authentication and Permissions**: DRF includes authentication classes and permission classes for implementing authentication and authorization mechanisms in Web APIs, such as token authentication, session authentication, and custom permissions based on user roles or object ownership. Django provides user authentication and permission systems for controlling access to views and data within the application, but these are primarily designed for HTML-based applications rather than APIs.
   - **Response Formats**: Django typically renders HTML responses using templates, whereas DRF generates responses in JSON or XML format by default. DRF also supports HTML rendering for browsable APIs and custom response formats.
   - **View Types**: Django uses function-based views or class-based views for handling HTTP requests. DRF extends Django's class-based views with additional mixins and generic views specifically tailored for building Web APIs, such as `APIView`, `GenericAPIView`, `ListAPIView`, `RetrieveAPIView`, etc.

## Things I want to know more about

- How does serializers actually work?

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

