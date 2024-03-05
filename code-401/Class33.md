# Class 33 - Authentication & Production Server

## Lab 33 - JSON Web Tokens & Moving beyond development server

Let’s move our API closer to production grade by adding Authentication and switching to a Production Server.

### Feature Tasks and Requirements

#### Features - Django

- Add JWT Authentication to your API.
  - Install needed libraries in project configuration and/or site settings.
  - Keep any pre-existing authentication so DRF Browsable API is still usable.

#### Features - Docker

- Switch to using Gunicorn instead of Django’s built-in development server.
  - Mind the number of workers to avoid sluggishness.
  - **Warning**: You will run into styling issues when you switch over to Gunicorn.
- On Django side, you’ll need to properly handle static files using Whitenoise.

#### Storage Options

- Your choice of SQLite or PostgreSQL.
- Adjust `docker-compose.yml` so that data is persisted in a volume outside of the container.
  - These steps are different depending on whether SQLite or PostgreSQL is being used.

### Stretch Goals

- Create a boilerplate `Dockerfile` and `docker-compose.yml` so you don’t need to start from scratch each time.
  - E.g. as a VS Code snippet, or a gist.
- Research deployment options for Docker/Postgres/Django and report findings to the class.
- Research separate PostgreSQL hosting.
- Create/Find a seed project so that you can have a running start on the next DRF project.

### Implementation Notes

- Remember to update the Django settings for JWT Authentication.
- Make sure to properly configure Gunicorn and Whitenoise.

### User Acceptance Tests

- README should include steps to manually test using HTTP Client such as httpie, ThunderClient, etc.
- List the routes (including HTTP method and note whether token is required) for:
  - Get tokens
  - Refresh tokens
  - CRUD routes for resource

### Configuration

- Name GitHub repo `drf-auth`.

## Code Challenge

- **Branch Name:** hashmap-left-join

- **Challenge Type:** Code Challenge / Algorithm

### Features

1. Write a function that LEFT JOINs two hashmaps into a single data structure.

   - Write a function called left join
   - Arguments: two hash maps
     - The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
     - The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
   - Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

2. NOTES:

   - Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
   - LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.
   - If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

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
