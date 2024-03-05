# Class 32 - Permissions & Postgresql

## Lab 32 - Controlling access to your API & enterprise Database

Let’s move our site closer to production grade by adding Permissions and Postgresql Database.

### Feature Tasks and Requirements

#### Features - General

- You have been supplied with two demos, each presenting a key new feature.
- One demonstrates how to restrict access to portions of your APIs data.
- The other demonstrates switching over to using Postgres vs SQLite.
- Your job is to merge the functionality of both demos.
- Customize your project to use different application features/models than what was used in demos.

#### Features - Django REST Framework

- Make your site a DRF powered API as you did in the previous lab.
- Adjust project’s permissions so that only authenticated users have access to API.
- Add a custom permission so that only appropriate users can update or delete it.
  - Exactly what this means will depend on your application, so if you have any questions about “appropriate users” means reach out to TA/Instructor.
- Add the ability to switch users directly from the browsable API.

#### Features - Docker

- **NOTE**: Refer to demo for built-out `Dockerfile` and `docker-compose.yml` examples.
- Create `Dockerfile` based off `python:3.10-slim`.
- Create `docker-compose.yml` to run Django app as a web service.
  - Enter `docker compose up --build` to start your site.
- Add Postgres as a service.
  - **Note**: It is not required to include a volume so that data can persist when the container is shut down.
- Go to browsable API and confirm site properly restricts users based on their permissions.

### Stretch Goals

- Try different permission levels, including custom ones.
- Figure out how to directly access Postgres running inside the container.
  - **Hint**: It will take research.
- Add a volume to persist data when the container is shut down.

### Implementation Notes

- You should NOT be running Postgres directly on the host machine.
- This means that operations like `createsuperuser` and `migrate` will need to happen inside the container.
  - For example…
    ```
    docker compose run web python manage.py migrate
    ```
    or:
    ```
    docker compose run web bash
    ```

### User Acceptance Tests

- Adjust any tests provided in the demo to work with your project.

### Configuration

- Name GitHub repo `drf-api-permissions-postgres`.

## Code Challenge

Find common values in 2 binary trees.

### Specifications

1. Read all of the following instructions carefully. Name things exactly as described.
2. Do all your work in a public repository (matching the example provided by your instructor) called data-structures-and-algorithms, with a well-formatted, detailed top-level README.md
3. Create a branch in your repository called tree-intersection
4. On your branch, create…
   - C#: Create a new class library with a class file named TreeIntersection.cs
   - JavaScript: a folder named treeIntersection which contains a file called tree-intersection.js
   - Python: a folder named tree_intersection which contains a file called tree_intersection.py
   - Java: a folder named TreeIntersection which contains a file called TreeIntersection.java
5. Include any language-specific configuration files required for this challenge to become an individual component, module, library, etc.
   - NOTE: You can find an example of this configuration for your course in your class lecture repository.

### Feature Tasks

1. Write a function called tree_intersection that takes two binary trees as parameters.
2. Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

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
