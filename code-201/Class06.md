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

4.  Home Page - In addition to the provided picture of the fish, your index.html file should contain:

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

5.  Developer Style Guide:

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

John Sonmez in the first article "How to solve programming problems": 
1. Read the problem completely twice.
2. Solve the problem manually with 3 sets of sample data.
3. Optimize the manual steps.
4. Write the manual steps as comments or pseudo-code.
5. Replace the comments or pseudo-code with real code.
6. Optimize the real code.
- Recommends spending 70% of the 30 minutes to solve just thinking about the problem. 

### JavaScript Object Basics

1. [JavaScript Object Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
2. [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Objects help with data structure and organization and allows functionality in them so you can use the code again without rewriting it. Knowing how to change DOM enables dynamic web pages. JS relies on objects and DOM.

### JavaScript Object Basics and Introduction to the DOM

1. How would you describe an `object` to a non-technical friend you grew up with?

    - An `object` is a box of data that can hold any information that are related to a certain thing. For example, you can create a person object and added all information about that person into that object and be able to use those data in your code.
    - `Code Definition`: collect of data that has several variables and functions, they are called `properties` and `methods` when inside objects
    - Syntax:

            let objectName = {
              name1: value1,
              name2: value2,
              name3: value3,
            };

2. What are some advantages to creating `object literals`?

    - `Simplicity`: it is easy to create and clearly defines properties and methods
    - `Efficient`: easy to send a single object to a database server
    - `Readable`: it is a shorter syntax, which becomes handy when structured data gets long

3. How do objects differ from arrays?

    - `Objects` uses names to access values, while each value in an `array` has a number assigned to it and you access it by using the index and calling a specific number that is associated with that value.
      - `Objects`: a way to store a collection of properties that have their own values or data within.
      - `Arrays`: it is used to store a list of values of the same type, items etc and are identified by an index

4. Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.

    - You would need to use `bracket notations` if an objects property name is inside a variable
      - `Dot Notation`: the syntax is `object name.item you want access` anything after the dot can be a property or method.
      - `Bracket Notation`: alternative way to access object properties. Syntax is `objectName["property"]["etc"]`

5. Evaluate the code below. What does the term `this` refer to and what is the advantage to using `this`?

    - An object named `dog` is created with `name, age, and color` as the properties. It looks like `humanAge` inside the object is a method to calculate the human age equivalent of a dog.c`this` is the keyword that refers to the object that the `humanAge` method is called and it is accessing the properties of the `dog` object. The advantage is that the code is reusable so that the method can app;y to different objects with the same property names. 

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

   - `Document Object Model`: created in a computers memory when a browser is open after it processes HTML, CSS, JS, it takes HTML to create a structure of the document 
7. Briefly describe the relationship between the DOM and JavaScript.

   - After the HTML is processed and the structure is created, when the web page loads, JS is read to modify elements on the page. DOM gives JS a way to navigate and interact with content and they both make a page more dynamic.

## Things I want to know more about

- A lot of the code in the objects reading and also some previous readings about functions and loops all seem to have really long codes. I thought sometimes it's about writing code that is concise or is that just too advance to do right now? 

## Career 6 - Behavioral Interview Questions

Read: [STAR Method](https://careerservices.wayne.edu/pdf/behavioralinterviewinfo.pdf)

1. Ask a chatbot of your choice to ask you 3 behavioral interview questions, one at a time. Answer the provided questions in the S.T.A.R method and ask the chatbot to provide you feedback. ex.Please provide me a behavioral interview question that I can answer using the STAR method. Please provide me with feedback on my response to your question.

2. Make sure to prompt the chatbot for a new question when you are ready for another. Be sure to incorporate the tips received into your subsequent answers.

3. Make a copy of this [template](https://docs.google.com/document/d/1u02dYTGk9F8eVi59HABVF2HP_ksNW1svfKMZ8nuYkmk/) and record the behavioral questions provided by the chatbot and along with your answers using the S.T.A.R method.

4. Have your two accountability partners also review your answers. After you make your edits based on feedback from the chatbot and your partners, share your written answers by copying them out of your document and pasting them in the class discussion.

5. Question 1: Tell me about a time when…you had to adapt to a significant change at work.

   - Situation: In my previous job, I was a member of the receptionist team. Our lead was let go, and due to my consistent performance, I was unexpectedly promoted to a lead position. The sudden change meant I had to transition from being a regular team member to overseeing a team of receptionists.
   - Task: My responsibilities shifted dramatically. Instead of focusing solely on my daily receptionist tasks, I was now tasked with leading a team, creating a new method of training, enhancing efficiency, and ensuring the team's success in understanding how to be the face of the company.
   - Action: To adapt to my new role, I sought help from the lead of another team. I encouraged team meetings and department cross-training to understand each member's role in the company. I also encouraged open communication and held monthly meetings that was a safe space, ensuring people felt comfortable sharing ideas and concerns. Additionally, I delegated tasks after getting to know each members' strengths. 
   - Result: Adapting to my sudden promotion was challenging, but through open communication and learning from my senior colleagues, I successfully transitioned into my role as a team lead. The team became more cohesive, resulting in an increase in productivity and efficiency. My ability to adapt helped me be successful in my new position and also encouraged a collaborative work environment within the team and between teams, contributing to an overall success of the company.

6. Question 2: Tell me about a time when…you had to deal with a difficult coworker or client.

   - Situation: While working as a receptionist at the vet clinic, I had a challenging situation with a client who was having trouble accessing her funds and paying for the services her pet received. The client was frustrated and repeatedly blamed our front desk for being unable to correctly process her payment. 
   - Task: My responsibility was to maintain a professional and empathetic demeanor while trying to assist the client in finding a solution to her payment issue. 
   - Action: I allowed the client to express her frustrations and then patiently walked her through the steps it took to process her payment and showed her what issue kept popping up that was declining her payment. I reassured her that this was the same procedure we took to process her payment during her previous visits and suggested this might be an issue with her card's company. 
   - Result: By approaching the situation with patience and clear communication, I was able to assist the client in successfully finding the root of the issue and accessing her funds and the client expressed gratitude for my help. This experience emphasized the importance of empathy and problem-solving skills in dealing with challenging customer interactions. 

7. Question 3: Tell me about a time when…you had to handle multiple priorities or tasks simultaneously. How did you prioritize your work, and what strategies did you use to stay organized and focused?
   - Situation: During the duration of my coding courses I found myself always dealing with a hectic evening with five assignments due for the class at midnight, and a reading assignment due the following morning, and sometimes personal tasks like showering, making dinner, and going grocery shopping all at once.
   - Task: My challenge was to manage my time effectively to complete all the assignments and handle personal responsibilities to ensure everything was done on time.
   - Action: To solve this issue, I first prioritized my tasks. I reviewed the assignments and identified the ones that required immediate attention and those that could wait a bit. I split up each tasks to be done within a specific time, allowing focus times for assignments and planning shorter breaks in between to handle personal tasks. I broke down complex assignments into manageable steps and during breaks I multitasked by preparing dinner and watching assigned videos to make the most of my time.
   - Result: By creating a manageable schedule and staying focused I successfully completed all my assignments and my personal chores. Despite the challenging circumstances, I submitted all assignments on time and was able to balance my academic and personal responsibilities. This experience highlighted the importance of planning and effective time management in managing multiple priorities.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

> “What motivates adults to find time for their learning in their busy schedule? Mostly intrinsic motivators.”

In other words, adults are motivated by internal forces rather than by external expectations, and your learning journal provides an outlet for considering and noting those internal forces. Which of your internal forces for learning can you concretely identify?

- I think right now there is a sense of accomplishment when I learn something and actually understand it. There are few of those moments, so I want to strive for those because I always think maybe I do get this and it's not so bad after all. It gives me confidence and a feeling of competence. When there is confidence there is more drive in wanting to explore new concepts and maybe every time I learn new things I start to think there is so much I don't get, but here is the small amount I do get, so it might just take time. 