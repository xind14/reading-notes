# Class 2 - Introduction to Web Development

## Lab 2 - About Me Project

## Setup

Build out an “About Me” webpage that quizzes the user on fun facts gives the user some basic information about who you are and where you came from. 

- **User stories** are a device commonly used in software development to identify what the functionality and design of a product should be by considering the interests and motivations of people with varied multiple points of view. They are presented in the manner of `As a __, I want __, so that____` 

- This layout allows a client to communicate to a team what type of behavior they are looking for and allow the developer team to think up a solution that best fits the the clients need. The development team will then create sub-bullets called **Feature Tasks** which are individual tasks that must be completed by the developer to accomplish the user story. Once all of the feature tasks for an individual user story is completed, so is the story.

1. As a user, I would like to learn about the site owner so I can get to know them better...
    - Create an About Me guessing game that utilizes HTML, CSS, & JavaScript.

    - Include on your HTML page a short biography, your education history, an overview of your job experience, and any goals that you may have.

    - Prompt the user a total of exactly five yes or no questions. The user input for the answer must accept either y/n or yes/no responses while taking into consideration case sensitivity by normalizing the user input so that it can be validated (hint: look into the `.toUpperCase()` or `.toLowerCase()`functions). Be sure to let the user know if they answered the question correctly by alerting them with a response.

    - Add `console.log()` messages within your app to notify the user if they are correct. Before submitting, comment out (don’t delete) your `console.log()` messages and replace them with the `alerts()` to complete the project.

2. As a user, I would like a personalized welcome message so that I feel like I am interacting with the site owner.
    - Ask the user their name through a `prompt()`

    - Display that name back to the user through a custom greeting welcoming them to your site.

    - Display the user’s name back to them in your final message to the user.

3. Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.
    - The following options to generate a Lighthouse report should be selected:

      - Mode: Navigation
      - Device: Desktop
      - Categories: Accessibility

    - Strive for a score between 50-65. Make necessary adjustments based on the report to achieve that score.

    - Add a screenshot of your score to your README.md file.

**Developer Style Guide**:
A style guide is a series of standards and practices that must be followed in order for your code to be accepted by the team. This can include variable naming, file structure, and process. Below is a list of practices that you will be required to follow within this lab:

1. Your JS file must contain a `'use strict'` declaration at the top, and your javascript file must be linked in your html file as an external script file.

2. Make sure that all code is cleanly written with correct indentation and syntax. Look at an example [JavaScript Style Guide](https://javascript.info/coding-style#syntax). Note that your JS must pass the rules in the linter that you installed.

3. Follow the Add, Commit, Push process. It should be evident in GitHub that commits are made regularly, and with good commit messages that explain the WHY of the commit.

## Resources Link/Pages

1. [Setting Up a New Code 201 Project](https://codefellows.github.io/code-201-guide/curriculum/class-02/project-setup)


## Written Class Notes




## Read 2 - Basics of HTML, CSS, and JS

## Resources Link/Pages

Bookmark and Review: [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

### Continue Reading Introduction to HTML

1. [Continue Reading Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
2. [HTML Text Fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
3. [HTML Advanced Text Formatting](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)

### Learn CSS

1. [How CSS is Structured](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured)

### Learn JS

1. [Continue Reading JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
2. [Making Decisions in Your Code - Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)



## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- CSS and JS are the next steps after HTML to learn because they are fundamental concepts in web development and they start incorporating structure, aesthetics, and interactive components that make webpages dynamic and user friendly. 

### Continue Reading Introduction to HTML

1. Why is it important to use semantic elements in our HTML?
   - Semantic elements gives the content of a webpage meaning, and that can lead to a page with better structure and accessibility. Semantic elements like `<h1>` gives the text content a meaning of being the top level  heading. This shows that whatever content in that element is the most important and probably defines the page. It also influences the page's visibility, as search engines considers headers as important identifying words.

2. How many levels of headings are there in HTML?
   - There are 6 levels from `<h1>` to `<h6>` with the highest number being the smallest headings. 
    ![HTML Heading Hierarchy](https://upload.wikimedia.org/wikipedia/commons/3/38/HTML_h1-h6_label_example.png?20120911125957)

3. What are some uses for the `<sup>` and `<sub>` elements?
    - `<sup>` is superscript and `<sub>` is subscript. They are typically used for footnotes, math expressions or chemical formulas, and for dates like the use of `th`, `rd`, `st`, `nd` 

    - For example the superscript in 9<sup>th</sup> is written like `9<sup>th</sup>` and the subscript in H<sub>2</sub>O is written like `H<sub>2</sub>O`

4. When using the `<abbr>` element, what attribute must be added to provide the full expansion of the term?
    - The `<title>` attribute needs to be added and it can show up on the browser when a cursor hovers over the element. 

    - ex: `<p> <abbr>HTML</abbr>, Hypertext Markup Language, is the basic structure of webpages </p>`

### Learn CSS

1. What are ways we can apply CSS to our HTML?
    - `Externally`: A separate file with a CSS extension needs to be created like `style.css` and CSS code is written in that file separate from the HTML file. This is the preferred method as it prevents messy and cluttered code.
    
       - The external CSS stylesheet needs to be referenced in the `<head>` section of the HTML file using a `<link>` element. For example: `<link rel="stylesheet" href="style.css" />` with two attributes `rel=" "` specifying the **rel**ationship between the linked file and the HTML document and `href=" "` references the file being linked.

    - `Internally`: When the stylesheet is placed inside an HTML document using the `<style>` element also in the `<head>` section. For example: `<style> h1 {color: orange;} </style>`. This is not recommended for multi-page websites. 

    - `Inline`: When the `<style>` attribute is used to directly apply CSS inside a single HTML element. For example: `<h1 style="color: orange;">`. It is best to avoid this method.

2. Why should we avoid using inline styles?
    - It's difficult and not efficient to edit each individual element and it makes the HTML document messy to read.

3. Review the block of code below and answer the following questions:

            ```
            h2 {
                color: black;
                padding: 5px;
              }
              ```
    - What is representing the selector?
        - `h2`

    - Which components are the CSS declarations?
        - The content inside the curly brackets `{ }` which would be `color:black;` and  `padding: 5px;`

    - Which components are considered properties?
        - Properties are the different aspects of the element's style you want to change so `color` and `padding`


### Learn JS

1. What data type is a sequence of text enclosed in single quote marks?
    - The `string` data type

2. List 4 types of JavaScript operators.
    - `Arithmetic`: These perform math calculations like `+`, `-`, `*`, and `/`

    - `Comparison`: These compare two values and return a **Boolean/true or false** result. 3x= `===`means the two values need to be strictly equal to return a `true` result. 2x= `==` is loosely equal meaning if `5 = '5'` even though it's comparing a number and a string it will still be true because it does not look at data type

    - `Assignment`: These assign a value to a variable. `=` means assign what came before to what came after the operator.

    - `Logical`: These perform logical operations on **Boolean/true or false** values. For example: `Logical AND "&&"`will return true if both conditions are true. `Logical OR ||` will return true if at least one condition is true.

3. Describe a real world Problem you could solve with a Function.
    - You could probably make a function where it calculates a group of people's expenses and executes the total amount each person owes or is owed. 

4. An if statement checks a __ and if it evaluates to ___, then the code block will execute.
    - An if statement checks a `condition` and if it evaluates to `true`, then the code block will execute.

5. What is the use of an `else if`?
    - It is additional conditions that are checked if the initial `if` statement is false. 

6. List 3 different types of comparison operators.
    - `===`means the two values need to be strictly equal to return a `true` result.
    - `==` is loosely equal meaning if `5 = '5'` even though it's comparing a number and a string it will still be true because it does not look at data type
    - `>` means greater than and will return true if left is greater than right.

7. What is the difference between the logical operator `&&` and `||`?
    - As mentioned above: `Logical AND "&&"`will return true if both conditions are true. `Logical OR ||` will return true if at least one condition is true.

## Things I want to know more about

 - How to use `switch` statements because it said it's helpful when there are a lot of choice options.

## Learning Journal

Read this article about [Andragogy vs. Pedagogy](https://elearningindustry.com/pedagogy-vs-andragogy-in-elearning-can-you-tell-the-difference) and write a brief reflection on your learning today, or use the prompt below to get started. Consider the following quote from the article linked above:

> “[Adult learners] are deeply involved not only in planning, but also in evaluating their learning, as they know what knowledge they want to acquire.” 

In other words, you should continuously evaluate your learning, and your learning journal is an excellent way to keep track of that. How do you see yourself planning and evaluating your learning? What details will you record and/or measure? How often will you evaluate what you want to learn?