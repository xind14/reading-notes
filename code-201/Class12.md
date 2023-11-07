# Class 12 - Canvas and ChartJS

## Lab 12 - Odd Duck Products Pt. 2

## Setup

> Below are your lab requirements in a user story format. Try and think up what the feature tasks would be for each story, once you are done, or you get stuck, review the provided feature tasks to see what the actual tasks are for each story.

1. Do today’s work on a branch called dataviz.

2. As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.

    - Update your algorithm to randomly generate three unique product images from the images directory.

    - Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.

3. As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.

    - Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the `<canvas>` tags)

    - Place the bar chart in the section located beneath your three product images

    - The bar charts should only appear after all voting data has been collected.

4. Run a Lighthouse Accessability report. Make necessary updates to your application based on the report to get your score above 80.

    - Add a screenshot of your score to your README.md file.

## Written Class Notes


### Describe and Define

- Use of the `<canvas />` element
- 3rd party libraries


### Answer

1. What is HTML `<canvas />`?

2. What is a CDN?

3. What are some ways we can bring in third party libraries into our projects?














## Read 12 - Chart.js, Canvas

## Resources Link/Pages

Bookmark and Review: [Drawing Shapes With Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), [Applying Style and Colors - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), and [Drawing Text - Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)

### JavaScript Canvas

1. [JavaScript Canvas](https://www.javascripttutorial.net/web-apis/javascript-canvas/)

### Chart.js Documentation

1. [Chart.js Documentation](http://www.chartjs.org/docs/)

### Easily Create Stunning Animated Charts with Chart.js

1. [Easily Create Stunning Animated Charts with Chart.js](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- Both JavaScript Canvas and Chart.js enable the visual representation of complex data sets.

### JavaScript Canvas

1. What does the `<canvas>` allow a developer to achieve?

-  It can be used to draw 2D graphics using JavaScript. It creates a surface on which you can draw shapes, text, images, and other objects dynamically. 

2. What is the importance of the closing `</canvas>` tag?

- The `<canvas>` element requires a closing tag. Content between the opening and closing tag is fallback content, which is displayed if the browser does not support the `<canvas>` element.

3. Explain what the `getContext()` method does.

- It is used to obtain the rendering context of the canvas, allowing developers to draw on it. It takes one argument that specifies the type of context so for example `2d` or `getContext("2d")` returns CanvasRenderingContext2D object which provides a set of drawing methods and properties, so you acn create and manipulate 2D graphics on the canvas.


### Chart.js Documentation

1. What is Chart.js and how it can be brought into your project?

- It allows you to create charts and graphs and can be used in your project by using the `<script>` tag in HTML 

2. List 3 different Chart types you can create using Chart.js.

- `Bar Chart`: represents data in rectangular bars, where the length of each bar is proportional to the value it represents.
- `Line Chart`: represent data points with lines, used to visualize trends over a period of time.
- `Pie Chart`: circular chart divided into sectors, each sector represents a proportion of the whole.

### Easily Create Stunning Animated Charts with Chart.js

1. What are some advantages to displaying data via a chart over a table?

- Charts provide a visual representation of data, making it easier for viewers to grasp complex information quickly.
- Visual elements help understand patterns and relationships better
- Visual appealing in presentation making the data more engaging and impactful.

2. How could Chart.js aid your previously created applications visually?

- In regards to the cookie stand labs, instead of the giant table detailing every hour, I think what is important is to use a chart to gather the locations and final totals, so it's less numbers to look at and not overwhelming.

## Things I want to know more about

Can it be used to create animations?

## Career 12 - Resume Review By Your Accountability Partners

> Once your resume matches our guideline outlined here, have your accountability partners review your resume and give you feedback on how well it matches the guideline. Make a copy of your resume and send it to your accountability partner for suggested edits. Integrate those suggested changes onto your original resume and then DELETE the copy.

- A note on feedback: Whenever possible, provide a balance of positive and negative feedback. If you consistently give only positive or negative feedback, people will distrust the feedback and it will become useless. Remember to highlight what you liked on their resumes while also sharing ways for them to improve.

> Also, remember to make ALL changes in the original resume document emailed to you when you enrolled, to be sure you are updating the official file that is in our database—this file is what we will be sharing with partner companies once it is approved by your Instructor in 401.

## Learning Journal

Write a brief reflection on your learning today, or use the prompt below to get started.

Sometimes, something is easier to learn than we expected it to be. Sometimes, something is more difficult to learn than we expected it to be. Briefly write about an experience with each extreme that you have had in this course.

- I didn't find anything easier to learn than I expected in terms of important concepts, maybe git commands or branches and forking was easy to understand, but everything else was more difficult to learn. I feel like I still don't get anything. Objects and constructors and loops are still in a grey area for me I think I understand sometimes but I really don't. 