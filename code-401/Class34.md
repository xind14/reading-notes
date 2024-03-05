# Class 34 - Back End Deployment

## Lab 34 - Moving API to the cloud: Putting it All Together

It’s time to show off your skills by bringing “Vanilla” Django and Django Rest Framework together in the same project.

You’ll build out a Restful API as well as a user-facing site.

Along the way you’ll see how easy Django makes it to move to a remote database.

The project will be an old favorite with a Python twist - a Cookie Stand management site.

### Feature Tasks and Requirements

#### Choice 1: Use your own Template/s

- If you’ve built a template repository for your Django sites, or APIs, or both - now’s the time to put them to work.
- See what it would take to combine the two approaches into one starter kit to rule them all.

#### Choice 2: Use API Quick Start Template

- The API Quick Start is a built-out skeleton project with lots of the tools we’ve been using in class. Check it out. If you like it, use it. But better yet, use it as an inspiration to build your own that’s a perfect fit.
- **WARNING**: There is no guarantee that the API Quick Start is a perfect fit for your needs, is bug-free, etc. It’s a great jumping-off point though. And if you spot any bugs or have ideas for improvements make a PR!

#### Modify your application paying close attention to the instructions in README.md found in the root of the repository.

- Install from `requirements.txt`.
- Export (aka freeze) requirements.
- Change `things` app folder to be `cookie_stands`.
- Go through the codebase looking for `Thing`, `thing`, and `things` change to cookie-stand related names.
  - E.g. `Thing` model becomes `CookieStand`
  - E.g. `ThingList` becomes `CookieStandList`
  - **Pro Tip**: Do a global text search looking for `thing`. Search should be case insensitive.
- **WARNING**: Do NOT just cut and paste. Think through each change carefully.
- Create/rename `.env` using `.env.sample` as a starting point.
  - Here’s a handy way to generate a secret key:
    ```
    python -c “import secrets; print(secrets.token_urlsafe())”
    ```

#### CookieStand Model Details

The `CookieStand` model must contain:

- `location = models.CharField(max_length=256)`
- `owner = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True, blank=True)`
- `description = models.TextField(blank=True)`
- `hourly_sales = models.JSONField(default=list, null=True)`
- `minimum_customers_per_hour = models.IntegerField(default=0)`
- `maximum_customers_per_hour = models.IntegerField(default=0)`
- `average_cookies_per_sale = models.FloatField(default=0)`

```python
def __str__(self):
    return self.location
```

- Notice the use of `JSONField`.
- Once changes are complete make migrations, migrate, and test locally.

#### Database Deployment Requirements

- Host your Database at ElephantSQL.

#### Site Deployment Requirements

- We’ll handle deployment a little later. For now, run your site locally, but the Database should be remote.

### Stretch Goals

- Add functionality so that when a JSON array of `hourly_sales` is not provided at creation time it will be generated with random numbers based on minimum/maximum customers per hour and average cookies per sale.

### Implementation Notes

- Name your repo `cookie-stand-api`.
- Site must use environment variables.

### Useful Terminal Commands

- `docker compose up --build`
- `docker compose down`
- `docker compose restart`
- `docker compose run web python manage.py migrate`
- `docker compose run web python manage.py collectstatic`

### User Acceptance Tests

- Add Unit Tests to `cookie_stands/tests.py`.
- Manually confirm API using API Tester, Postman, or HTTPie.

### Submission Requirements

- Make sure a user exists in Database. E.g., `createsuperuser` has been run.
- Provide username and password in Canvas submission.
- Rename `.env` contents or provide in Canvas submission.
- Include GitHub repo in Canvas submission.

## Code Challenge - Mock Interview

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

3. What is the purpose of Cross-Origin Resource Sharing (CORS) in web applications, and how can it be implemented and configured in a Django project to control access to resources?

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

