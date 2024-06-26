# Lab: Django REST Framework & Docker

## Overview

Use Django REST Framework to create an API, then “containerize” it with Docker.

## Feature Tasks and Requirements

- Rebuild a custom version of Things API demo project from scratch.
- Replace `things_project` and `Thing` with your own application and model.
- Your model must have at least as many fields as the demo’s model.
- Your model must have one field that is a foreign key to a user.
- NOTE: You are not required to build any templates for this lab.

### Features - Docker

- NOTE: Refer to the class demo for built-out `Dockerfile` and `docker-compose.yml` examples.
- Update `Dockerfile` and `docker-compose.yml` if needed.

## Stretch Goals

- Research using a production server vs. the built-in development server.
- Research using PostgreSQL instead of SQLite as a database.

## Implementation Notes

- If you get an allowed host error, examine the bug details and update code as needed.
- When Docker is installed and docker files are ready to go, run…
  ```
  $ docker compose up
  ```
  To shut Docker down, enter ctrl+c. You’ll learn a better way soon.

## User Acceptance Tests

- Modify provided unit tests in demo to work for your project.

## Configuration

- Create a virtual environment inside `drf-api`.
- Use the `drf-api` folder as the root of your project’s git repository.

Refer to Lab Submission Instructions for detailed instructions.

