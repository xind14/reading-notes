# Class 32 - Permissions & Postgresql

## Lab 32 - Controlling access to your API & enterprise Database

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

## Read 32 - Permissions & Postgresql

## Resources Link/Pages

- [DRF Permissions](https://www.django-rest-framework.org/api-guide/permissions/)
- [Review SQL Prework](https://codefellows.github.io/common_curriculum/prework/SQL)

**Bookmark and Review**

- [Classy Django REST](http://www.cdrf.co/)
- [DRF Generic Views](https://www.django-rest-framework.org/api-guide/generic-views/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Learning Django Rest Framework is important because it gives developers the skills to develop secure and scalable RESTful APIs.

## Reading Questions

1. What are the key components and purpose of Django Rest Framework (DRF) permissions, and how do they help in securing an API?

   - Permissions provide a way to control access to views based on the request user and the associated authentication credentials. They ensure the security of the API by controlling access to views and resources. By implementing permissions, developers can enforce restrictions on who can perform certain actions (such as viewing, creating, updating, or deleting data) within the API. This helps prevent unauthorized access, data breaches, and other security vulnerabilities. The key components of DRF permissions include:

     - **Permission Classes**: These are classes in DRF that define the rules for granting or denying access to views. Each permission class typically contains methods like `has_permission()` and `has_object_permission()` to perform authorization checks.
     - **Authentication**: Authentication in DRF is the process of identifying and verifying the identity of users making requests to the API. DRF provides various authentication classes like Token Authentication, Session Authentication, and Basic Authentication.
     - **Authorization**: Authorization in DRF determines whether a user has permission to perform a specific action on a resource. It involves checking permissions based on the user's role, group, or other factors.
     - DRF permissions help in securing an API by:

       - **Restricting Access**: Permissions allow developers to specify which users or groups are allowed to access specific views or resources. This ensures that sensitive data is only accessible to authorized users.

       - **Preventing Unauthorized Actions**: Permissions prevent unauthorized users from performing actions that they are not allowed to perform. For example, a permission class may deny access to certain views for unauthenticated users or restrict certain actions to specific user roles.

       - **Enhancing Data Integrity**: By controlling access to views and resources, permissions help maintain the integrity of the data stored in the API. Only authorized users are allowed to modify or delete data, reducing the risk of unauthorized changes or data corruption.

       - **Compliance with Security Standards**: Implementing permissions helps ensure compliance with security standards and best practices, such as the principle of least privilege. By following these standards, developers can build more secure and reliable APIs.

2. In SQL, what is the purpose of the SELECT statement, and how would you use it to retrieve all columns from a table called ‘employees’?

   - used to retrieve data from one or more tables in a database. It allows users to specify which columns they want to retrieve and apply filtering and sorting conditions to the result set.
   - `SELECT *` specifies that you want to retrieve all columns from the table.
   - `FROM employees` specifies the table from which you want to retrieve the data, in this case, the 'employees' table.

     ```sql
     SELECT * FROM employees;
     ```

3. Can you explain the role of DRF Generic Views and provide examples of their usage in building a RESTful API? (GPT Answer)

   - They are pre-built views provided by Django Rest Framework that simplify the process of building RESTful APIs by reducing the amount of code needed for common CRUD (Create, Retrieve, Update, Delete) operations. These views handle common patterns and tasks, such as querying a database, serializing/deserializing data, and performing actions on database objects
   - **ListCreateAPIView**: This view combines the functionality for listing multiple objects (`GET` request) and creating a new object (`POST` request) in a single view. Example usage:

   ```python
   from rest_framework.generics import ListCreateAPIView
   from .models import MyModel
   from .serializers import MyModelSerializer

   class MyModelListCreateAPIView(ListCreateAPIView):
       queryset = MyModel.objects.all()
       serializer_class = MyModelSerializer
   ```

   - **RetrieveUpdateDestroyAPIView**: This view provides functionality for retrieving a single object (`GET` request), updating an existing object (`PUT` or `PATCH` request), and deleting an existing object (`DELETE` request). Example usage:

   ```python
   from rest_framework.generics import RetrieveUpdateDestroyAPIView
   from .models import MyModel
   from .serializers import MyModelSerializer

   class MyModelRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
       queryset = MyModel.objects.all()
       serializer_class = MyModelSerializer
   ```

## Things I want to know more about

- How much of the third party packages should we know and use?

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

