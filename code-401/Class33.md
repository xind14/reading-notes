# Class 33 - Authentication & Production Server

## Lab 33 - JSON Web Tokens & Moving beyond development server

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

## Read 33 - Authentication & Production Server

## Resources Link/Pages

- [JSON Web Tokens](https://jwt.io/introduction/)
- [DRF JWT Authentication](https://simpleisbetterthancomplex.com/tutorial/2018/12/19/how-to-use-jwt-authentication-with-django-rest-framework.html)
- [Django Runserver Is Not Your Production Server White Noise](https://build.vsupalov.com/django-runserver-in-production/)

**Bookmark and Review**

- [Optional: JWT with DRF](https://www.youtube.com/watch?v=Fhcn2qx-4VQ)
- [Gunicorn](https://gunicorn.org/)
- [Django Migrations Primer](https://realpython.com/django-migrations-a-primer/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

JWTs provide a secure way to authenticate users and authorize access to resources in web applications built with DRF. They allow users to obtain and present tokens that validate their identity and permissions, enabling secure interactions with the API endpoints.

## Reading Questions

1. What is the primary purpose of JSON Web Tokens (JWTs) and how do they work in terms of encoding and decoding data?

   - to securely transmit information between parties as a JSON object. They are commonly used for authentication and authorization purposes in web applications.
   - JWTs work by encoding data into a JSON format, which is then digitally signed to ensure its integrity. This encoded data can include claims such as user identity or permissions.
   - When a user authenticates, the server generates a JWT containing the necessary information (e.g., user ID, expiration time) and signs it with a secret key. This JWT is then sent to the client, usually as part of an HTTP header.
   - When the client sends subsequent requests to the server, it includes the JWT in the request headers. The server can then decode and verify the JWT to authenticate the user and authorize access to resources.


2. How does JWT Authentication integrate with Django REST Framework to secure API endpoints, and what are the key components involved in this process?

   - by providing a mechanism for token-based authentication.
   - The key components:
     - **JWT Library:** A JWT library is used to generate, encode, decode, and verify JWTs. Libraries like PyJWT are commonly used in Python/Django projects.
     - **Authentication Middleware:** DRF provides authentication middleware classes that can be configured to authenticate requests using JWTs. These middleware classes intercept incoming requests, extract the JWT from the request headers, and authenticate the user based on the token.
     - **Custom Authentication Backend:** In DRF, a custom authentication backend may be implemented to handle JWT authentication. This backend validates the JWT, extracts user information from it, and authenticates the user against the Django user model.
     - **Token Generation:** During authentication, a JWT is generated by the server and provided to the client upon successful login. This token is then included in subsequent requests to authenticate the user.
     - **Token Verification:** When receiving requests with JWTs, the server verifies the token's signature and checks its validity (e.g., expiration time) before granting access to protected resources.


3. Why is Django’s built-in runserver not suitable for production environments, and what are some alternative server options that should be considered for deploying a Django application?

   - **Lack of Scalability:** The runserver command is single-threaded and synchronous, making it unsuitable for handling high traffic loads typical in production environments.
   - **Security Concerns:** Django's runserver is not optimized for security and lacks features such as HTTPS support, request logging, and production-level security configurations.
   - Alternative server options that should be considered for deploying a Django application in production include:
     - **WSGI Servers:** Web Server Gateway Interface (WSGI) servers like Gunicorn (Green Unicorn) or uWSGI are commonly used to serve Django applications in production. These servers are designed for concurrency, scalability, and performance.
     - **Reverse Proxy Servers:** Servers like Nginx or Apache can be used as reverse proxies in front of WSGI servers to handle tasks such as load balancing, caching, and SSL termination. They enhance security and improve performance by offloading tasks from the application server.
     - **Cloud Platforms:** Cloud platforms like Heroku, AWS (Amazon Web Services), or Google Cloud Platform provide managed hosting solutions for deploying Django applications. They offer scalability, reliability, and various deployment options tailored to specific application needs.


## Things I want to know more about

- Is there a reason why Django's runserver isn't optimized for scalability and security?

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

