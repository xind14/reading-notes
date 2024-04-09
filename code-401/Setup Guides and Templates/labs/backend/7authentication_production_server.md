# Lab: Authentication & Production Server

## Overview

Let’s move our API closer to production grade by adding Authentication and switching to a Production Server.

## Feature Tasks and Requirements

### Features - Django

- Add JWT Authentication to your API.
  - Install needed libraries in project configuration and/or site settings.
  - Keep any pre-existing authentication so DRF Browsable API is still usable.

### Features - Docker

- Switch to using [Gunicorn](https://gunicorn.org/) instead of Django’s built-in development server.
  - Mind the number of workers to avoid sluggishness.
  - Warning: You will run into styling issues when you switch over to Gunicorn.
- On the Django side, you’ll need to properly handle static files using [Whitenoise](http://whitenoise.evans.io/en/stable/django.html).

### Storage Options

- Your choice of SQLite or PostgreSQL.
- Adjust `docker-compose.yml` so that data is persisted in a volume outside of the container.
  - These steps are different depending on whether SQLite or PostgreSQL is being used.

## Stretch Goals

- Create a boilerplate `Dockerfile` and `docker-compose.yml` so you don’t need to start from scratch each time.
  - E.g., as a VS Code snippet, or a gist.
- Research deployment options for Docker/Postgres/Django and report findings to class.
- Research separate PostgreSQL hosting.
- Create/Find a seed project so that you can have a running start on the next DRF project.

## Implementation Notes

- You should handle JWT Authentication and Gunicorn configuration properly in your Django project.

## User Acceptance Tests

- README should include steps to manually test using an HTTP Client such as httpie, ThunderClient, etc.
- List the routes (including HTTP method and note whether a token is required) for:
  - Get tokens.
  - Refresh tokens.
  - CRUD routes for resource.
- No unit tests required.

## Configuration

- Name GitHub repo `drf-auth`.

Refer to Lab Submission Instructions for detailed instructions.

© Code Fellows 2024
