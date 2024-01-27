# Class 16 - Serverless Functions

## Lab 16 - Computing in the cloud

### Overview - Chess Board

Today we’ll be constructing chess boards like it’s 1980.

No prebuilt images, just the power of arrays and pixel art.

### Feature Tasks and Requirements

1. Your job is to render out chess boards with red and blue queens on them.

2. We’re keeping it really basic here so the only pieces are queens and each queen is represented by a blue or red square.

3. Chess board is an 8 by 8 grid of alternating black and white squares. The queens are red and blue squares.

4. Each board will have one red and one blue queen at different coordinates. In addition to displaying the board you’ll need to identify if the queens are “under attack” based on their coordinates.

### Implementation Notes

- Define a ChessBoard class

- Should contain an 8x8 grid.

  - Each cell in the grid should have a color represented in RGB format.
    - Black: (0, 0, 0)
    - White: (1, 1, 1)
    - Blue: (0, 1, 1)
    - Red: (1, 0.2, 0)

- Should have an `add_red` method that accepts a row and column as input which colors the corresponding cell.
- Should have an `add_blue` method that accepts a row and column as input which colors the corresponding cell.
- Should have a `render` method that displays the chess board on the screen with red and blue shown in correct locations.
- Should have an `is_under_attack` method that returns a boolean if red is under attack by a blue piece horizontally, vertically, or diagonally.
- Diagonal attacks can come from four directions. Make sure to handle all of them.

- Render your board for each `is_under_attack` scenario:

  1. Horizontal (aka same row).
  2. Vertical (aka same column).
  3. Four Diagonals.
  4. A "Not Under Attack" scenario.

### User Acceptance Tests

There are no acceptance tests required. The notebook should clearly show that the various `is_under_attack` scenarios have been handled.

## Code Challenge

- **Branch Name:** stack-queue-pseudo
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Create a new class called pseudo queue.
2. Do not use an existing Queue.
3. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
4. Internally, utilize 2 Stack instances to create and manage the queue

- `enqueue`

  - **Arguments:** value
  - Inserts a value into the PseudoQueue, using a first-in, first-out approach.

- `dequeue`
  - **Arguments:** none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

**NOTE:** The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

### Example

```python
# Example
queue = PseudoQueue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
value = queue.dequeue() # Output: 5
```

#### Enqueue

| Input            | Args | Internal State        |
| ---------------- | ---- | --------------------- |
| [10]->[15]->[20] | 5    | [5]->[10]->[15]->[20] |
|                  | 5    | [5]                   |

#### Dequeue

| Input                 | Output | Internal State  |
| --------------------- | ------ | --------------- |
| [5]->[10]->[15]->[20] | 20     | [5]->[10]->[15] |
| [5]->[10]->[15]       | 15     | [5]->[10]       |

## Written Class Notes

## Read 16 -  Serverless Functions

## Resources Link/Pages

- [What is Serverless Computing?](https://www.ibm.com/cloud/learn/serverless) through the Pros and Cons section.
- [venv - Creation of Virtual Environments](https://docs.python.org/3/library/venv.html)
- [Vercel - Get Started](https://vercel.com/docs/get-started)
- [http.server](https://pymotw.com/3/http.server/index.html)
- [Requests){:target=”\_blank”}](https://requests.readthedocs.io/en/latest/)
- [Python & APIs](https://realpython.com/python-api/)
- [What is Serverless?](https://www.youtube.com/watch?v=vxJobGtqKVM)

**Bookmark and Review**

- [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions)
- [Effective Python Environment](https://realpython.com/effective-python-environment/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Many applications interact with external data sources, and APIs are a common way to retrieve and manipulate data. Knowing how to make HTTP requests, handle API responses, and parse data is fundamental for building data-driven applications.

## Reading Questions

1. What are the key characteristics of serverless computing, and how does it differ from traditional server-based architectures?

      - Serverless computing is a cloud application development and execution model 
          - developers are relieved of server management tasks. Cloud service providers handle server provisioning, scaling, maintenance, and other infrastructure-related activities.
          - developers can focus primarily on writing application code and business logic. 
          - serverless architectures are inherently stateless. State is often managed externally, allowing for seamless scalability.
      - On the other hand, traditional server-based architecture:
          - developers are responsible for provisioning, managing, and maintaining servers to run their applications.
          - developers need to manage infrastructure details, including server configurations and scaling policies.
          - state can be maintained within servers, leading to challenges in scaling.

2. How can one get started with Vercel, and what are the main steps involved in deploying a serverless function using Vercel?

      - create a Vercel Account
      - create a new project by either deploying a template or importing and deploying an existing project
      - vercel supports a wide range of the most popular frontend frameworks, optimizing how your site builds and runs no matter what tool you use.
      - whenever a new deployment is created, Vercel will automatically generate a unique URL which you can use to access that particular deployment.
      - create a Serverless Function:
         - inside your project directory, create a folder named `/api`. where you'll place your serverless functions.


3. What are APIs, and how can they be utilized in Python applications to access and manipulate data from external sources?

      - APIs, or Application Programming Interfaces, serve as communication interfaces that allow different software systems to interact with each other. They enable the exchange of data and functionalities between systems without needing to understand the internal workings of each other.

      - In Python applications, the `requests` library is a powerful tool for working with APIs. This library simplifies the process of making HTTP requests to interact with web APIs.
         - Install the library
            ```
            bash
            $ python -m pip install requests
            ```
         - Make API Request:
            - The `requests` library allows you to make HTTP requests easily. Common request methods include `GET`, `POST`, `PUT`, and `DELETE`. These methods correspond to CRUD (Create, Read, Update, Delete) operations.
         - Handle Response:
            - After making an API request, you'll receive a response. The response contains information such as status codes, headers, and the actual data. The `.json()` method can be used to parse JSON content from the response, while `.text` and `.content` provide other ways to access the response data.
         - Using Query Params
            - Query parameters are often used in API requests to filter or customize the data returned. In Python, you can include query parameters in your requests by appending them to the URL. The `requests` library makes it easy to pass parameters as part of the request.
         - Authentication:
            - Some APIs require authentication to access certain endpoints. Python applications can include authentication details, such as API keys or tokens, in their requests to ensure secure access.
         - Working with Different HTTP Methods:
            - APIs support various HTTP methods, including `GET`, `POST`, `PUT`, and `DELETE`. Python applications can use the corresponding methods in the `requests` library to perform different actions on the API.

4. What is the Requests library in Python, and how can it be used to interact with APIs by sending HTTP requests? Can you provide an example of a basic GET request using the Requests library?

      - The `requests` library in Python is a popular HTTP library for making HTTP requests. This library is commonly used for interacting with APIs, fetching data from web servers, and handling various HTTP-related tasks.
      - basic example of making a GET request using the `requests` library:

         - Installation:

            ```bash
            pip install requests
            ```

         - Make a GET Request:

            ```python
            import requests

            # Specify the URL you want to make a GET request to
            url = 'https://jsonplaceholder.typicode.com/todos/1'

            # Make the GET request
            response = requests.get(url)

            # Check if the request was successful (status code 200)
            if response.status_code == 200:
               # Print the content of the response (usually in JSON format for APIs)
               print(response.json())
            else:
               # Print an error message if the request was not successful
               print(f"Error: {response.status_code}")
            ```

## Things I want to know more about

- We had to manually create API requests in 301, what other libraries exist out there that automate what we were taught?

## Learning Journal

### Reflection

Take 10-15 minutes at the end of lab to respond to the following questions, adapted from the article:

1. What went well, that I might forget if I don’t write down?
   - I liked learning the career stuff today, but I forgot to write most of it down so will rewatch recording later to take notes again.
2. What did I learn today?
   - No matter the skills you have most of your chances of getting hired is through networking, which I don't know how to do well so that's going to be such a challenge.
3. What should I do differently next time?
   - Take screenshots of the slides.
4. What still puzzles me, or what do I need to learn more about?
   - I'm not understanding trees like I did stacks and queues so I will look at it more.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
     - Assignments are complete. Will work on readings for next week.
