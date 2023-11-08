# Class 14 - Documentation, Project Selection, and Team Workflow

## Lab 14 - Data Storage, Retrieval, and Charting

## Setup

> The design team has decided to extract the chart from the voting page and move it to a separate results page on the website. We will need to create a new page for the chart, link to it, and then have that page generate the chart, using the voting data from the main page. At any time, a user should be able to revisit the chart page and see the last set of voting results.

1. Create a new repo using this [template repository](https://github.com/codefellows/201-lab-14).

2. If partnered with another student:

    - Add the other person as a collaborator. That means that both of you will have privileges to push and merge to that repo.

    - Plan and develop the necessary code in the JavaScript and CSS files, but do not modify the HTML files in any way.

    - The `index.html` is where the users will be voting on the items.
    - The `chart.html` page will display the voting results using Chart.js.
    - The `css/styles.css` file, which is currently empty, will house your design and styles for this application.

3. Tips:
    - You’ll need to use local storage to share data between the two HTML pages.

    - If in a pair, you and your partner should plan out how you want to 
    collaboratively attack the problem with regards to pair programming. It’s up to you how the details are managed, but make sure each partner makes contributions in both CSS and JS files.
    - Complete the `//TODO` items in the order that works best for you.
    - Make small changes, and test them as you go.

4. In a nutshell

    - Complete all `TODO` items in the JavaScript files.

    - Give the app some style.
    - Deploy the app.
    - Do **NOT** modify the html files.


## Written Class Notes

### Describe and Define

- JavaScript inheritance
- CSS animations

### Resources Link/Pages

- [The State of JS](http://stateofjs.com)
- [2023 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2023/)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Basics of "pass by value" vs. "pass by reference"](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)


Suggested JS readings
  - [Eloquent JavaScript](http://eloquentjavascript.net/)
  - [JS, the Good Parts](http://shop.oreilly.com/product/9780596517748.do)
  - [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
  - [Eric Elliott's articles on Medium](https://medium.com/@_ericelliott)
  - [What is "this" in JavaScript?](https://www.javascripttutorial.net/javascript-this/)

## Read 14 - a: CSS Transforms and Transitions, b: Psychological Safety

## 14a

Bookmark and Review: [Pure CSS Bounce Animation](http://codepen.io/dp_lewis/pen/gCfBv), [6 Buttons animated](http://codepen.io/retyui/pen/ByoaXV), [CSS3 Animations: Keyframes](http://codepen.io/akshaychauhan/pen/oAfae), and [404](http://codepen.io/kieranfivestars/pen/MYdQxX)

## Resources Link/Pages

### CSS Transforms

1. [CSS Transforms](http://learn.shayhowe.com/advanced-html-css/css-transforms/)

#### CSS Transitions & Animations

1. [CSS Transitions & Animations](http://learn.shayhowe.com/advanced-html-css/transitions-animations/)

### 8 simple CSS3 transitions that will wow your users

1. [8 simple CSS3 transitions that will wow your users](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users)

## 14b

### What Google Learned From Its Quest to Build the Perfect Team

1. [What Google Learned From Its Quest to Build the Perfect Team](https://web.archive.org/web/20221125192300/https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

CSS animations, transitions, and transforms can enhance the user experience on websites by adding visually appealing and interactive elements. And can create visually appealing effects without relying on JavaScript or other scripting languages.

### CSS Transforms

1. What does a CSS transform allow the developer to do to an element?

- It can be used to change the appearance and position of an element in a 2D or 3D space. You can do transformations like rotate, scale, translate without changing document flow. 

2. Provide an example of a transform and how you could see that being used on a website.

- You can use 2D scaling and it might be on websites where you hover over something and it scales the image to emphasize and image.

### CSS Transitions & Animations

1. What does a CSS transition allow the developer to do to an element?

- Change the appearance and behavior of an element whenever a state change occurs, such as when it is hovered over, focused on, active, or targeted. It can change the element's style over a specified duration and with a defined timing function. There are four transition related properties in total, including `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. 

2. How does a CSS animation differ from a CSS transition?

- Animations allow for more complex movements. Transitions have a limited start and end state but animations can have multiple keyframes or points where elements can change. 

### 8 simple CSS3 transitions that will wow your users

1. What are some benefits to using CSS transitions on websites?

 - You can create smooth and visually appealing animations
 - Increases interactivity by adding them to buttons or menus to do things like hover or click provides immediate visual feedback
 - Compared to JS it leads to better loading time
 - They are supported across various devices.

2. How this topic fit in with your long-term goals?

- Since I'm starting to get interested in graphic design or user experience design aspect of programming, CSS transitions can help make interactive and visually appealing sites and a general more user-friendly interface.

### What Google Learned From Its Quest to Build the Perfect Team

1. What are three key factors that contribute to psychologically safe teams?

- `Equal Participation`: every member has an opportunity to speak and be heard. Conversational turn-taking ensures that all voices are valued and respected.
- `Average Social Sensitivity`: teams with high social sensitivity can intuitively understand and respond to their colleagues' emotions, fostering empathy and trust within the team.
- `Shared Norms and Emotional Conversations`: teams with established norms for open communication and emotional conversations create an environment where members feel safe to express their thoughts, concerns, and feelings without fear of judgment.


2. Evaluate, with details, a previous professional setting (or team) you were in with regards to psychological safety.

- In my previous job, I ensured people in my team had equal participation by holding round table meetings and a reminder at the beginning that they can say whatever they want. However, how our team functioned within the overall company was not great because the people in charge of use did not provide a psychologically safe environment. Our productivity was low because we all agreed the job was just a paycheck because the bosses wouldn't listen to our concerns. We did bond over how the bosses were treating us so that opened up to more emotional conversations which made work not feel like work sometimes. 


3. What impact do teams that operate with a high degree of psychological safety have on their company and the team members?

- They have a positive impact by increasing the following:
        - `Enhanced Collaboration`: Team members collaborate more effectively towards a common goal and share diverse ideas
        - `Increased Innovation`: Team members feel comfortable suggesting ideas without fear of judgement, fostering a culture of continuous improvement.
        - `Higher Productivity`: When team members are emotionally comfortable and can communicate freely, they are more engaged and motivated, leading to increased productivity and efficiency in completing tasks and projects.
        - `Employee Health`: Safer teams mean lower stress levels and higher job satisfaction. They are more likely to stay with the company, reducing turnover rates and preserving institutional knowledge.
   





## Things I want to know more about

If you utilize any content directly from the reading sources, be sure to identify what you are quoting, and cite the source.

## Career 11 - Give Your 60 Second Professional Pitch

> Before the end of the course, you are to attend one meetup event at one of the below (or other related) meetup groups found on [Meetup.com](https://www.meetup.com/). 

Write up a summary of your experience at the event, to discuss with your peers.

**If you went to a larger monthly meetup**: What were the titles of the talks you heard? Write about (at least) two people you met, where (if) they work, and what they do there. Write about what you found interesting (or uninteresting) about the subject matter of the talks, as well as anything else notable about the meetup.

**If you went to a specialized weekly meetup**: Describe what you worked on. Write about (at least) two people you met, where they work, and what they do there. If you had any interesting conversations or anyone provided you with some significant help, note that as well.

## Learning Journal

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.