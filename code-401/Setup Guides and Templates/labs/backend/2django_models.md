# Lab: Django Models

## Overview

Django has a powerful Object Relational Mapper that allows us to persist data using Python instead of SQL. Today, you’ll build out a project with one model and wire up that model using Django Views.

## Implementation Notes

The instructions are becoming more conceptual. All the concepts listed relate to key Django steps covered in the demo. If there is confusion about what, exactly, is required then ask the client (aka the instructors). TLDR - make your lab project like the demo project.

## Feature Tasks and Requirements

### Model

- Create `snack_tracker_project` project. This will involve some preliminary steps. Review previous class lab for details.
- Create `snacks` app.
- Add `snacks` app to project.
- Create `Snack` model:
  - Make sure it extends from the proper base class.
  - Add `name` as a `CharField` with a maximum length of 64 characters.
  - Add `purchaser` ForeignKey related to Django’s built-in user model with `CASCADE` delete option.
    ```python
    from django.contrib.auth import get_user_model
    ```
  - Add `description` as a `TextField`.
- Add model to admin.
- Modify `Snack` model to have a user-friendly display in admin.
- Create migrations and migrate data.
- Create a superuser.
- Run the development server.
- Add a few snacks via Admin panel.
- Create another user and add more snacks via Admin panel.
- Confirm that snacks behave as expected with proper `name`, `purchaser`, and `description`.

### Views for Snacks App

- Create `SnackListView`.
  - Extend `ListView`.
  - Give a template of `snack_list.html`.
  - Associate `Snack` model.
  - Update URL patterns for the project.
    - Empty path should include `snacks.urls`.
  - Update `snacks` app URLs.
    - Empty sub-path should be handled by `SnackListView`.
  - Don’t forget to use `as_view()`.
- Add detail view.
  - Link `snack_detail.html` template.
  - Associate `Snack` model.
  - Update app URL patterns to handle detail view.
  - Account for primary key in URL (path would look like `localhost:8000/1/` to get to snack with id of 1).

### Templates

- Add `templates` folder in the root of the project.
- Register `templates` folder in project settings `TEMPLATES` section.
- Create `base.html` ancestor template.
  - Add main HTML document.
  - Use Django Templating Language to allow child templates to insert content.
- Create `snack_list.html` template.
  - Extend base template.
  - Use Django Templating Language to display each snack’s name.
  - View home page (aka `snack_list`) and confirm snacks are showing properly.
- Create `snack_detail.html` template.
  - Template should extend base.
  - Content should display snack’s name, description, and purchaser.
  - Add a link in `snack_list` template to related detail page for each snack.
  - Add a link back to Home (aka `snack_list`) page from the detail page.

### User Acceptance Tests

- Test Snack pages.
  - NOTE: Make sure test extends `TestCase` instead of `SimpleTestCase` used in the previous class.
  - Verify status code.
  - Verify correct template use.
  - Use URL name instead of hard-coded path.
    - TIP: `django.urls.reverse` will help with that.
- We can’t easily test `SnackDetailView` just yet. Can you figure out why?

## Configuration

- Create `django-models` GitHub repository.
- Create a virtual environment inside `django-models`.

Refer to Lab Submission Instructions for detailed instructions.

## Stretch Goals

- Add styling.
  - Create `static` folder at the root of the project.
  - Update `STATICFILES_DIRS`.
  - Create `base.css` file which styles `base.html` elements.
  - Load static CSS in `base.html` file.
- Test `SnackDetailView`.
- Test `Snack` model.
- Add multiple models.
- Use an alternate test runner.
- Add more advanced fields to models, e.g., created timestamp.

