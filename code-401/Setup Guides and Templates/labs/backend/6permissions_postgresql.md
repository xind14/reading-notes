# Lab: Permissions & PostgreSQL

## Overview

Let’s move our site closer to production grade by adding Permissions and a PostgreSQL Database.

## Feature Tasks and Requirements

### Features - General

- You have been supplied with two demos, each presenting a key new feature.
  - One demonstrates how to restrict access to portions of your API's data.
  - The other demonstrates switching over to using PostgreSQL vs SQLite.
- Your job is to merge the functionality of both demos.
- Customize your project to use different application features/models than what was used in demos.

### Features - Django REST Framework

- Make your site a DRF-powered API as you did in the previous lab.
- Adjust the project’s permissions so that only authenticated users have access to the API.
- Add a custom permission so that only appropriate users can update or delete data.
  - Exactly what this means will depend on your application, so if you have any questions about what “appropriate users” means, reach out to TA/Instructor.
- Add the ability to switch users directly from the browsable API.

### Features - Docker

- NOTE: Refer to the demo for built-out `Dockerfile` and `docker-compose.yml` examples.
- Create a `Dockerfile` based on `python:3.10-slim`.
- Create `docker-compose.yml` to run the Django app as a web service.
  - Enter `docker compose up --build` to start your site.
- Add PostgreSQL as a service.
  - Note: It is not required to include a volume so that data can persist when the container is shut down.
- Go to the browsable API and confirm the site properly restricts users based on their permissions.

## Stretch Goals

- Try different permission levels, including custom ones.
- Figure out how to directly access PostgreSQL running inside the container. Hint: It will take research.
- Add a volume to persist data when the container is shut down.

## Implementation Notes

- You should NOT be running PostgreSQL directly on the host machine.
- This means that operations like `createsuperuser` and `migrate` will need to happen inside the container.
  - For example:
    ```
    docker compose run web python manage.py migrate
    ```
    or:
    ```
    docker compose run web bash
    ```

## User Acceptance Tests

Adjust any tests provided in the demo to work with your project.

## Configuration

- Name GitHub repo `drf-api-permissions-postgres`.

Refer to Lab Submission Instructions for detailed instructions.

