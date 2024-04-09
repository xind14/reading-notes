# Lab: Django CRUD and Forms

## Overview

Add full CRUD functionality to your bag of tricks by building a Django project that allows Creating, Reading, Updating, and Deleting.

## Feature Tasks and Requirements

- Create `snacks_crud_project` Django project.
- Create `snacks` app.
- Create `Snack` model:
  - `title` field.
  - `purchaser` field.
  - `description` field.
- Register model with admin.
- Create `SnackListView` that extends appropriate generic view.
  - Associated URL path is an empty string.
- Create `SnackDetailView` that extends appropriate generic view.
  - Associated URL path is `<int:pk>/`.
- Create `SnackCreateView` that extends appropriate generic view.
  - Associated URL path is `create/`.
- Create `SnackUpdateView` that extends appropriate generic view.
  - Associated URL path is `<int:pk>/update/`.
- Create `SnackDeleteView` that extends appropriate generic view.
  - Associated URL path is `<int:pk>/delete/`.
- Add URLs to support all views, with appropriate names.
- Add templates to support all views.
- Add navigation links in appropriate locations to access all pages.
- Make all necessary changes to project-level files for the project to run. In other words, make it work.

## Implementation Notes

A lot of functionality is being added here, but it should still follow the “Django way.” So when in doubt, refer back to the demo.

## Stretch Goals

- Add multiple models.
- Use an alternate test runner.
- Add more advanced fields to models, e.g., created timestamp.
- Add styling.

## User Acceptance Tests

- Test all Views.
- Test Model:
  - String representation.
  - All fields.
  - When in doubt on what to test, refer to the demo.

## Configuration

Create a virtual environment inside `snacks_crud`.

Refer to Lab Submission Instructions for detailed instructions.


