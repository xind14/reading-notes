# Class 29 - DjangoX	

## Lab 29 - Customizing Django to make it your own


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

## Read 29 - Django Custom User

## Resources Link/Pages

- [Django Custum User Model](https://learndjango.com/tutorials/django-custom-user-model)
- [DjangoX](https://github.com/wsvincent/djangox)

CHOOSE ONE

- [Creating a Custom User Moel](https://www.youtube.com/watch?v=eCeRC7E8Z7Y&t=59s)
- [Abstract User, User Profile and Signals in Django](https://www.youtube.com/watch?v=EudKs1HPUfE)

**Bookmark and Review**

- [Substituting a custom User model](https://docs.djangoproject.com/en/3.0/topics/auth/customizing/#auth-custom-user)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Learning Django Custom User Models and DjangoX is important when learning Python because it equips you with essential skills for building scalable and customized web applications, showcasing your ability to implement robust authentication systems and leverage efficient project frameworks in Django.

## Reading Questions

1. What are the key benefits of using a Django Custom User Model, and how does it differ from the default Django User Model?

   - **Benefits:**

     - **Flexibility:** A Django Custom User Model offers more flexibility by allowing you to define additional fields tailored to your project's needs.
     - **Scalability:** It provides a scalable solution, accommodating future changes and extensions with ease.
     - **Security:** You have control over authentication methods and can implement custom security measures.
     - **Project Consistency:** Ensures consistency by using a unified user model across the entire project.

   - **Differences:**
     - **Additional Fields:** Unlike the default Django User Model, a Custom User Model allows you to include additional fields relevant to your application.
     - **AbstractUser vs AbstractBaseUser:** It uses the AbstractUser approach, offering a more straightforward setup compared to the more complex AbstractBaseUser.

2. Explain the process of creating and implementing a Custom User Model in Django, including the necessary changes to settings.py and the required model fields.

   - GPT example:

   **Process:**

   1. **Update settings.py:**

      - Add the custom user app to INSTALLED_APPS.
      - Specify the AUTH_USER_MODEL to point to the custom user model.

      ```python
      # django_project/settings.py
      INSTALLED_APPS = [
         "django.contrib.admin",
         "django.contrib.auth",
         "django.contrib.contenttypes",
         "django.contrib.sessions",
         "django.contrib.messages",
         "django.contrib.staticfiles",
         "accounts",  # new custom user app
      ]
      ...
      AUTH_USER_MODEL = "accounts.CustomUser"  # new custom user model
      ```

   2. **Create Custom User Model:**

      - Subclass `AbstractUser` in the models.py of the custom user app.

      ```python
      # accounts/models.py
      from django.contrib.auth.models import AbstractUser
      from django.db import models

      class CustomUser(AbstractUser):
         pass
         # add additional fields in here

         def __str__(self):
            return self.username
      ```

   3. **Forms and Admin:**

      - Create forms.py to customize user creation and change forms.
      - Update admin.py to use the custom user forms.

      ```python
      # accounts/forms.py
      from django.contrib.auth.forms import UserCreationForm, UserChangeForm
      from .models import CustomUser

      # ... (form classes)

      # accounts/admin.py
      from django.contrib import admin
      from django.contrib.auth.admin import UserAdmin
      from .forms import CustomUserCreationForm, CustomUserChangeForm
      from .models import CustomUser

      # ... (admin class)
      ```

   4. **Run Migrations:**

      - Run `makemigrations` and `migrate` to apply changes to the database.

      ```bash
      (.venv) $ python manage.py makemigrations accounts
      (.venv) $ python manage.py migrate
      ```

3. What is DjangoX and how does it complement or extend the functionality of Django? Provide an example use case for incorporating DjangoX in a project. (GPT Answer)

   - DjangoX is an open-source Django starter framework that enhances Django functionality by providing a pre-configured project structure.

     - **Features:** It includes a custom user model, email/password authentication (as opposed to username/email/password), social authentication, and other useful components.

     **Example Use Case:**

     - **Scenario:** Imagine you are starting a new web project with Django and want to expedite the setup process while incorporating best practices.
     - **Incorporating DjangoX:**

     1. Install DjangoX and create a new project using its template.
     2. Leverage the provided custom user model and authentication system.
     3. Utilize the default project structure and configurations for improved development efficiency.
     4. Customize further based on project requirements.

     **Benefits:**

     - **Time-Efficiency:** DjangoX accelerates the initial setup, saving time and effort.
     - **Best Practices:** It follows best practices, ensuring a robust and well-structured Django project from the start.
     - **Extendability:** Developers can easily build upon the provided foundation to tailor the project to specific needs.

## Things I want to know more about

- In what situations would you recommend using DjangoX as opposed to manually configuring a Django project with a Custom User Model

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

## Career 29 - Workshop #4 Prep: Mock Interviews

1. [Interview Question Examples](https://codefellows.github.io/common_curriculum/career_coaching/401/workshop-4/assignments/behavioral-interview-questions)
1. [Technical Question Examples](https://codefellows.github.io/common_curriculum/career_coaching/401/workshop-4/assignments/technical-interview-questions)
1. [Mock Interview Guide](https://codefellows.github.io/common_curriculum/career_coaching/401/workshop-4/assignments/mock-interview-guide)


