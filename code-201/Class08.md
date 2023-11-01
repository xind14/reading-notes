# Class 8 - Layout with CSS

## Lab 8 - a: HTML/CSS Wireframe Exercise, b: Salmon Cookies Pt. 3

## Setup

### 8a

> Wireframes traditionally only contain: Placeholder images, filler text such as [lorem ipsum](https://lipsum.com/). Avoid real images.

1. Create a new repo titled ‘wirefame-exercise’, making sure to configure it with `index.html`, `style.css`, and `reset.css` (use [Eric Meyer’s reset](https://meyerweb.com/eric/tools/css/reset)).

2. Consider taking a more professional approach to web development by planning out your approach before jumping into code.

3. Have a design concept and a plan completely ready to go before you write the first line of code.
   - Build/Review a wireframe showing all document dimensions

   - Know where images will go and how big they will be
   - Use placeholder images during the setup process
   - Know where text will go and use placeholder lorem ipsum text

4. Set up the project repository, scaffold the files, and make sure they are wired together.

5. Build out all of the HTML without applying any classes or IDs

6. Working top to bottom in the document, put elements into place with CSS, using the structure of the HTML to create selectors wherever it is possible. Seek to limit use of classes and IDs to only where they are needed.

7. Apply color, backgrounds, borders, text styling, etc., to the specifications of the design.

8. After each step, be sure to “ACP” within your git work-flow. With this wireframe in place, you can now present it to the designer and/or client for review, make any requested edits, and once there is a signoff on the wireframe, then it is time to start entering the actual content.

### 8b

> Continue working on the functionality of your `sales.html` page if you do not have it working 100% yet, including the row of totals across the bottom.

1. Pat has provided you 7 additional images that they would like to see on the home page of the site. These images are located in your daily class GitHub repo: `class-08/lab-b/assets/`.

2. Your public-facing index.html page should include the following:
   - locations with addresses,
   
   - hours open
   - contact information
   - Anything else you feel necessary.
   - A link to your `sales.html` page
     - Be sure to also include a link to your `index.html` page on your `sales.html` pages as well.

3. Run your Lighthouse Accessibility report. We are looking for a score between 65-80. Analyze the report to see what changes you can make to your site that will improve your score. Add a screenshot of your score to your README.md.

## Written Class Notes


### Describe and Define

- Fundamental website layout principles including:
  - display options: `block`, `inline`, `normal`
  - positioning: `relative`, `absolute`, `float`, and `fixed`
- Layouts with CSS flexbox.
- Fixed vs. liquid layouts.


### Answer

1. What are inline level elements?

2. What are block level elements?

3. To use CSS flex, the parent element (container) must have the `display` property set to what value?











## Read 8 - CSS Layout

Bookmark and Review: [Learn CSS - Layout](https://web.dev/learn/css/layout/)

## Resources Link/Pages

### Learn CSS - Flexbox

1. [Learn CSS - Flexbox](https://web.dev/learn/css/flexbox/)

### CSS Layout - Flexbox

1. [CSS Layout - Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) Read up to “Flex-Flow Shorthand”

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

- The modern web is accessible across all kinds of devices and flexbox is a way to create layouts that adapt to different screen sizes and devices. It could make a developers life easier because it simplifies complex layouts and reduces the need fo many CSS codes.

### Learn CSS - Flexbox

1. `Flexbox` is designed for one-dimensional content. Explain what this means.

  - It means that `flexbox` is great for making a bunch of elements with different sizes and providing the best layout options instead of setting individual dimensions for each item it deals with them in one direction at a time. It is a layout method that allows arranging things in rows or columns and they can fill additional spaces or shrink to fit into smaller spaces. 

2. Explain the difference between the main axis and cross axis.

  - `Main axis`: The primary direction or axis that flex items are laid out. It is set by using the `flex-direction` property. `Flex` items move as one group on the `main axis` so when the `flex-direction` is set to `row` they are laid out in a row the `main axis` is horizontal and when they are laid out in a column the `main axis` is vertical. `Flexbox` gives you the control of how elements are aligned along the `main axis` creating proportional layouts for various screen sizes. The start and end of the `main axis` is called `main start` and `main end`. 
  - `Cross axis`: is the axis perpendicular to the `main axis` so perpendicular to the direction the flex items are in. Similar to `main axis` the start and end of the `cross axis` is `cross start` and `cross end`.

3. How can using certain properties of flexbox negatively impact accessibility?

  - Certain properties like `order` allows you to visually reorder flex items, but not logically in HTML and that's what screen readers follow.

### CSS Layout - Flexbox

1. What are some advantages of using flexbox over float?

  - Less CSS code needed to create complex layouts compared to floats
  - Automatically distributes space without needing to individually change dimensions
  - Can create easier alignment of items 
  - Allows you to change the order of elements without changing their position in HTML


2. How does this topic connect with your long term goals?

 - It will simplify the process of creating a dynamic webpage. It can create cleaner code and still create a visually appealing page. If I ever wanted to go in more of the front end direction, It can help with marketing and understanding what makes compelling content. 

## Things I want to know more about

 - How are you suppose to use flexbox to visually reorder items so it can still help screen readers? 

## Career 8 - Targeted Job Search

1. Read [this article](https://careerpivot.com/2017/target-the-company-quit-chasing-job/) on how to target companies and get hired.

2. If it’s your first time doing this assignment, make a copy of this [Google Spreadsheet template](https://docs.google.com/spreadsheets/d/1PGylOhiYIuDMLcGr6iUdMNSVwCwczWovbr1HqSRXBGA/edit#gid=0) and save it to your personal drive. (File » Make a copy).

3. If you already have this template, build off of your existing data.

4. Go onto any job board site (Example: LinkedIn, Indeed, etc…) and find at least 3 different job postings from 3 different companies and fill out the spreadsheet for each job posting you find. Look for job postings with job titles that you are targeting. Consider titles with the words ‘Developer’, ‘Engineer’ for those who have graduated the Advanced Software track, and “Junior SOC Analyst”, “Network Administrator”, or “Network Technician” for those who graduated the cybersecurity ops track. You can also try a specific programming language or technology and see what appears. Use this opportunity to learn more about the companies that your community has to offer and potential positions are available.

5. Share a URL to your Google Sheet that allows “comment” access (top right corner, hit the blue share bottom, click advance in the bottom right, then click top option of “Anyone can” and change that to “anyone with the link” and change the access drop down button to “can comment”.)
6. Submit your shared link to complete this assignment.

## Learning Journal

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.
