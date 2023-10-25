# Class 6 - Domain Modeling, Intro to the DOM, and Object Literal Notation

## Lab 6 - Salmon Cookies

![Lab 6 Salmon Logo](https://codefellows.github.io/code-201-guide/curriculum/class-06/lab/assets/salmon.png)

## Setup

1.  Create a new repository within GitHub called “cookie-stand”. Make sure that this repository is properly set up with a license and a readme. Clone this repo down to your local machine.

2.  Create two new pages within your project. One for Sales Data (sales.html) and another for the homepage (index.html). You’ll also need to create at least one JavaScript file.

3.  Sales Data - Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

    - Store the min/max hourly customers, and the average cookies per customer, in object properties.
    - Use a method of that object to generate a random number of customers per hour. [Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
    - Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
    - Store the results for each location in a separate array… perhaps as a property of the object representing that location.
    - Display the values of each array as unordered lists in the browser.
    - Calculating the sum of these hourly totals; your output for each location should look like this:

          Seattle
          6am: 16 cookies
          7am: 20 cookies
          8am: 35 cookies
          9am: 48 cookies
          10am: 56 cookies
          11am: 77 cookies
          12pm: 93 cookies
          1pm: 144 cookies
          2pm: 119 cookies
          3pm: 84 cookies
          4pm: 61 cookies
          5pm: 23 cookies
          6pm: 42 cookies
          7pm: 57 cookies
          Total: 875 cookies

          Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

          Here are the starting numbers that you’ll need to build these objects:
            Location	Min / Cust	Max / Cust	Avg Cookie / Sale
            Seattle	23	        65	        6.3
            Tokyo	    3	        24	        1.2
            Dubai	    11	        38	        3.7
            Paris	    20	        38	        2.3
            Lima	    2	        16	        4.6
         
          These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

4. Home Page - In addition to the provided picture of the fish, your index.html file should contain:

    - A custom sans-serif [Google Font](https://fonts.google.com/) for use in heading tags (`<h# />`)

    - A specified standard sans-serif web font for sales data (such as Arial, Verdana, or Helvetica).

    - A specified standard serif web font for text (such as Georgia, Times).

    - Specified different font colors for all three font uses.

    - A background color for the default page background (make sure font colors have good contrast and are readable on this background).

    - A different background color for elements such boxes and tables (so make sure the font colors contrast against this well, too!).

    - Anything else you’d like to add related to style. But remember: simplicity, clarity, and consistency are good things in design.

    - Be thoughtful about layout and overall organization of the page.

    - Run a Lighthouse Accessibility report. In this module, push to achieve a score between 65-80. Add the screenshot of your score to your README.md.

    - Include all of the typical stuff that you’ll find on the home page of a business: locations, hours, contact information, some text about how awesome the business is, etc. Be creative, and again, think about what is meaningful to a typical end user.

5. Developer Style Guide:
    - For every lab within this project, you will be creating a new branch for every day. Create a new branch name that follows the following format `class##-feature` (example: `class06-Objects`).

    - Within your local version of your repo, add your `.gitignore` and `.eslintrc.json`.

    - While working within your non-main branch, conduct regular commits within git.

    - All properties/values and methods should be correctly constructed and given meaningful names.

    - Functions and methods should follow the single-responsibility principle.

    - Use template literals in your JS logic to render the stores as lists on the sales page.

## Written Class Notes

### Answer

1. What is the DOM?

2. What is DOM manipulation?

3. What are JavaScript objects?

4. What are JavaScript methods?













## Read 6 - Problem Domain, Objects, and the DOM

## Resources Link/Pages

Bookmark and Review: [Understanding the problem domain is the hardest part of programming](https://simpleprogrammer.com/solving-problems-breaking-it-down/) and [What’s the difference between primitive values and object references in JavaScript?](https://betterprogramming.pub/intermediate-javascript-whats-the-difference-between-primitive-values-and-object-references-e863d70677b)

### JavaScript Object Basics

1. [JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

### JavaScript Object Basics and Introduction to the DOM

1. How would you describe an object to a non-technical friend you grew up with?


2. What are some advantages to creating object literals?


3. How do objects differ from arrays?


4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.


5. Evaluate the code below. What does the term this refer to and what is the advantage to using this?

        const dog = {
          name: 'Spot',
          age: 2,
          color: 'white with black spots',
          humanAge: function (){
            console.log(`${this.name} is ${this.age*7} in human
            years`);
          }
        }

6. What is the DOM?


7. Briefly describe the relationship between the DOM and JavaScript.

## Things I want to know more about

If you utilize any content directly from the reading sources, be sure to identify what you are quoting, and cite the source.

## Career 6 - Behavioral Interview Questions

Read: [STAR Method](https://careerservices.wayne.edu/pdf/behavioralinterviewinfo.pdf)

1. Ask a chatbot of your choice to ask you 3 behavioral interview questions, one at a time. Answer the provided questions in the S.T.A.R method and ask the chatbot to provide you feedback. ex.Please provide me a behavioral interview question that I can answer using the STAR method. Please provide me with feedback on my response to your question.

2. Make sure to prompt the chatbot for a new question when you are ready for another. Be sure to incorporate the tips received into your subsequent answers.

3. Make a copy of this [template](https://docs.google.com/document/d/1u02dYTGk9F8eVi59HABVF2HP_ksNW1svfKMZ8nuYkmk/) and record the behavioral questions provided by the chatbot and along with your answers using the S.T.A.R method.

4. Have your two accountability partners also review your answers. After you make your edits based on feedback from the chatbot and your partners, share your written answers by copying them out of your document and pasting them in the class discussion.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> “What motivates adults to find time for their learning in their busy schedule? Mostly intrinsic motivators.”

In other words, adults are motivated by internal forces rather than by external expectations, and your learning journal provides an outlet for considering and noting those internal forces. Which of your internal forces for learning can you concretely identify?
