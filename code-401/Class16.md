# Class 16 - Serverless Functions

## Lab 16 - Computing in the cloud

### Overview - Capital Finder

Deploy a serverless function to the cloud.

### Feature Tasks and Requirements


1. Sign up with [Vercel](https://vercel.com/docs/get-started).
2. Create a repository on Github and link it to the Vercel account.
3. Use the [requests](https://requests.readthedocs.io/en/latest/) library to interact with the [REST Countries API](https://restcountries.com/#rest-countries).
4. Create a serverless function following Vercel’s get-started directions that handles two kinds of queries:
    - The serverless function should handle a `GET` http request with a given country name that responds with a string in the form `The capital of X is Y`.
      - E.g. `/capital-finder?country=Chile` should generate an http response of `The capital of Chile is Santiago.`
    - The serverless function should handle a `GET` http request with a given capital that responds with a string in the form `Y is the capital of X.`
      - E.g. `/capital-finder?capital=Santiago` should generate an http response of `Santiago is the capital of Chile.`

### Implementation Notes


- Vercel has a free plan. No credit card is required.
- The Vercel CLI is useful (but not required) for local testing.


### User Acceptance Tests


- Project `README.md` should include working example URLs for the deployed function.

### Configuration

- Name your Github project `capital-finder`.
- Name your Vercel project starting with `capital-finder` then additional text as needed to give the project a unique name.
  - E.g. `capital-finder-ursula-lopez`
- File structure should match Vercel’s [Python requirements](https://vercel.com/docs/functions/serverless-functions/runtimes/python).
  - Refer to demo for details.

## Code Challenge

- **Branch Name:** tree-max
- **Challenge Type:** Extending an implementation

### Feature Tasks

Write the following method for the Binary Tree class

- find maximum value

  - Arguments: none
  - Returns: number
  - Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Written Class Notes

## Read 16 - Serverless Functions

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

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- Today I learned how to make a get request using python libraries which is very helpful. I was able to explain to a TA what the code was doing so I think my comprehension for this was higher than other topics. I'm still iffy about the right vocab to use to describe things but I will write comments to this code in another file to help me connect things. 