# Class 1 - Setup Developer Toolbelt

## Lab 1 - Let's Get Started

## Setup

Create a webpage that accepts user input and, based on that input, displays messages back to the user

1. Set up the HTML document body with header, main, and footer elements.
2. In the main of the file, place a h1 tag with the content “Class 1 Lab”. Style this element with text and background colors via an internal `<style>` element placed in the head of your document.
3. In the HTML portion of the file, place the four questions within a series of p tags so that they are listed on the screen.
4. Give each p tag a different text color and background color by using inline styling.
5. Using a total of four JavaScript ‘prompt’ statements along the lines of our class demo, have a user answer four questions.
6. The user’s response to each question (input) should be stored in a separate variable. Name your variables carefully and let to define your variables.
7. Using these responses, return an alert to the user (output) that concatenates their response into some kind of reply like we did in class.
8. Strive to have your alert for each question utilize the responses to all of the prior questions such that by the fourth question, your response would look something like, “Greetings, Iggy from Ipanema, I also like to eat bananas while on vacation in Paris.”
9. Be creative and have fun with your questions/responses! They can be whatever you want so long as the input/output requirements are met.
10. In addition, for each response, create a console.log() message that indicates the nature of the question and the user’s response, as we did in class.
11. Using Lighthouse in the Chrome DevTools, analyze the accessibility of your application.
12. The following options to generate a Lighthouse report should be selected:

    - Mode: Navigation
    - Device: Desktop
    - Categories: Accessibility

13. A score between 50-65 is a great place to start for this first lab.

## Written Class Notes

## Read 1 - Readings Overview

## Resources Link/Pages

### Getting Started

1. [Getting Started](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
2. [How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
3. [Website Design and Process](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like)
4. [JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

### Introduction to HTML

1. [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
2. [Getting Started with HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
3. [HTML Document Structure](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
4. [Metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)

### Miscellaneous

1. [How to Start to Design a Website](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Design_and_accessibility/Thinking_before_coding)
2. [Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
3. [What is JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- This gives you all the tools and guides needed to understand the basic, backbone, and makeup of a simple webpage.


### Getting Started

1. Compose a short poem describing how HTTP sends data between computers.

    - Client requests from server, server ponders requests, server approves and now client requests manifest

2. Describe how HTML, CSS, and JS files are “parsed” in the browser.

    - The browser reads the HTML file first and recognizes that external CSS and JS files exist. The browser then sends a request to the server and when the server apporves those files, the browser is able to read the external files. CSS gets applied first before JS is executed.

3. How can you find images to add to a Website?

    - Go to Google and change usage rights to creative commons licenses to avoid copyright. Then you can save images into your repo or save any of your own personal images or copy the images web address to link in HTML using `<img src="image url or image file path" alt="attribute to descibe image">` 

4. How do you create a `String` vs a `Number` in JavaScript?

    - `String`: use single or double quotes `"string"` or `'string'`
    - `Number`: use any number with no quotes `10`

5. What is a `Variable` and why are they important in JavaScript?

    - It's a container that stores value after you assign something to it and it's important because you can store and change data to make a website dynamic. 

### Introduction to HTML

1. What is an HTML attribute?

    - Additional information about the element and it goes before the closing bracket of the opening tag. Like for `<img src="image url or image file path" alt="attribute to descibe image">`, `src=" "` and `alt=" "` gives more information about the `<img>` element by specifying a file path and giving an image description with alternate text.

2. Describe the Anatomy of an HTMl element.

    - Includes an opening tag wrapped in angle brackets, content in the middle, ends with closing tag that is the same as the opening with an added forward slash before element in the brackets. `<element>Content</element>`

3. What is the Difference between `<article>` and `<section>` element tags?

    - `Article`: groups together content that can be a stand-alone
    - `Section`: groups related content together to make it more organizational 

4. What Elements does a “typical” website include?

    - `<!DOCTYPE html>`: Specifies the HTML version.
    - `<html>`: Wraps the entire content of the page.
    - `<head>`: Acts like a container for content in HTML page
    - `<title>`: Creates title of page
    - `<body>`: Contains the content of the web page.

5. How does metadata influence Search Engine Optimization?

    - It gives more data about a webpage that allows search engines to understand the content more, and therefore affecting ranks in visibility. The more it understands the content the more it can determine relevancy and push the webpage higher.

6. How is the `<meta>` HTML tag used when specifying metadata?

    - It provides additional info like character encoding, which helps display proper characters in the human language.

### Miscellaneous

1. What is the first step to designing a Website?

    - Project Ideation which involves your goals with a website and tasks to reach that goal.

2. What is the most important question to answer when designing a Website?

    - What do you want the website to accomplish. 

3. Why should you use an `<h1>` element over a `<span>` element to display a top level heading?

    - It gives the text a meaning instead of producing just a look, and the meaning provides search engines better understanding of the content.

4. What are the benefits of using semantic tags in our HTML?

    - Provides search engine with better understanding of content, makes thing accessible, and it is just the standard way to write content so other developers can interpret your code.

5. Describe 2 things that require JavaScript in the Browser?

    - Any time you reload a page or user input is different and it is able to display different content
    - Validate user input like producing error messages when trying to enter a password

6. How can you add JavaScript to an HTML document?

    - Externally: create a separate JS file `script.js` and use `<script>` element to link it.
    - Internally: use `<script>` element and write JS in HTML file

## Things I want to know more about

- How to write server-side code, like pulling data from somewhere and updating it on real-time on the webpage.

## Career 1 - Identify Your Accountability Partners

1. Find 2 people in your current class to be your accountability partner.
   - Those two people should not be in your direct friend pool. They need to be people you are less casual around.
2. Once your two partners have accepted the role, please submit those two names in the assignment entry screen.

Your accountability partners will be responsible for checking your resume and your personal pitch in this course.
