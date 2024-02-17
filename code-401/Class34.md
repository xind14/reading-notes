# Class 34 - Back End Deployment

## Lab 34 - Moving API to the cloud

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

## Read 34 - API Deployment

## Resources Link/Pages

- [Django Settings Best Practices](https://djangostars.com/blog/configuring-django-settings-best-practices/)

**Bookmark and Review**

- [White Noise](http://whitenoise.evans.io/en/stable/)
- [CORS](https://en.m.wikipedia.org/wiki/Cross-origin_resource_sharing)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Understanding Django settings, WhiteNoise, and CORS in is crucial for building secure, scalable, and efficient web apps.

## Reading Questions

1. What are the key principles to follow when organizing and configuring Django settings for a project, according to the “Django Settings Best Practices” reading?

    - **Keep settings in environment variables:** Storing settings in environment variables allows for better separation of configuration from code and enhances security by keeping sensitive information out of version control systems.

    - **Write default values for production configuration:** It's advisable to provide default values for production configuration settings, excluding sensitive ones like secret keys and tokens.

    - **Don’t hardcode sensitive settings:** Sensitive settings such as secret keys and tokens should not be hardcoded in the settings files, and they should not be included in version control systems.

    - **Split settings into groups:** Organize settings into groups such as Django settings, third-party settings, and custom project settings to maintain clarity and manageability.

    - **Follow naming conventions:** Use meaningful names for custom project settings, prefixing them with the project name, and provide descriptions for clarity and documentation purposes.

2. How does the White Noise library contribute to the efficient serving of static files in a Django application, and what are the steps to integrate it into a project?

    - by allowing the application to serve its own static files without relying on external services like nginx or Amazon S3. It contributes to the efficient serving of static files by:

      - **Handling compression:** WhiteNoise serves compressed content (gzip and Brotli formats) and correctly handles Accept-Encoding and Vary headers, ensuring efficient data transfer between the server and the client.

      - **Setting cache headers:** WhiteNoise sets far-future cache headers on static content that is unlikely to change, optimizing caching behavior and improving performance by reducing unnecessary requests to the server.

    - Steps to integrate WhiteNoise into a project:

      - Install WhiteNoise using pip:

        ```
        pip install whitenoise
        ```

      - Add WhiteNoise middleware to the Django project's middleware list in the settings file:

        ```python
        MIDDLEWARE = [
           # Other middleware
           "whitenoise.middleware.WhiteNoiseMiddleware",
        ]
        ```

      - Optionally, configure the project to use compressed and forever-cacheable static files by setting the `STATICFILES_STORAGE` in the settings file:
        ```python
        STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"
        ```

3.  What is the purpose of Cross-Origin Resource Sharing (CORS) in web applications, and how can it be implemented and configured in a Django project to control access to resources?

    - a mechanism that allows web servers to specify which origins are permitted to access resources on a web page from another domain. CORS is important for controlling access to resources and enhancing security in web applications. It enables more freedom and functionality in cross-origin requests while maintaining a level of security higher than allowing all cross-origin requests.
    - can be implemented and configured using middleware or third-party packages. The Django CORS headers package is a popular choice for handling CORS in Django projects. It allows developers to specify which origins are allowed to access resources, configure allowed methods and headers, and control other aspects of CORS behavior.

    - To implement CORS in a Django project using the Django CORS headers package, developers can follow these steps:

          - Install the Django CORS headers package:
             ```
             pip install django-cors-headers
             ```

          - Add `'corsheaders'` to the `INSTALLED_APPS` list in the settings file.

          - Add the CORS middleware to the middleware list in the settings file:
             ```python
             MIDDLEWARE = [
                # Other middleware
                'corsheaders.middleware.CorsMiddleware',
             ]
             ```

          - Configure CORS settings in the settings file to specify allowed origins, methods, headers, and other options:
             ```python
             CORS_ALLOWED_ORIGINS = [
                "http://example.com",
                "https://example.com",
             ]
             ```

## Things I want to know more about

- Are there security issues or risks associated with implementing CORS?

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

## Career 1 - Identify Your Accountability Partners
