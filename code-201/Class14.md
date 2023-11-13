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

### Add a comment to this Canvas submission with answers to the following questions:

1. How did this go, overall?
    - I spent most of this lab teaching my partner because she didn't understand any of this week. But from what I heard from my project members they feel the same. So I don't know if all of us don't get it because of how it's taught or what. 

2. What observations or questions do you have about what you’ve learned so far?
    - We got chart.js to work but as soon as we messed with something in local storage even the images disappeared. I don't think I quite understand localstorage either like my partner. Or at least not well enough to debug it. 

3. How long did it take you to complete this assignment? And, before you started, how long did you think it would take you to complete this assignment?
    - We kept it within 2 hours and got some stuff done. We weren't even going to look at CSS until we figured out JS. I honestly think it's going to take me hours to do this assignment if it was an actually lab.

## Written Class Notes - None/No Lecture

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

I'd just like to know how to do animations in general. Sounds fun. 

## Career 11 - Give Your 60 Second Professional Pitch

> Before the end of the course, you are to attend one meetup event at one of the below (or other related) meetup groups found on [Meetup.com](https://www.meetup.com/). 
>
>Write up a summary of your experience at the event, to discuss with your peers.
>
>**If you went to a larger monthly meetup**: What were the titles of the talks you heard? Write about (at least) two people you met, where (if) they work, and what they do there. Write about what you found interesting (or uninteresting) about the subject matter of the talks, as well as anything else notable about the meetup.
>
>**If you went to a specialized weekly meetup**: Describe what you worked on. Write about (at least) two people you met, where they work, and what they do there. If you had any interesting conversations or anyone provided you with some significant help, note that as well.


I went to a virtual event on Meetup.com hosted by the Bay Area Chapter of the Design Systems Community held on November 9th 2023 and 305 people attended. The theme of the meet up was **"Accessibility and Design Systems: explore the what, how, and why prioritizing accessibility initiatives is important."** A **design system** is a complete set of standards intended to manage design at scale using reusable components and patterns. This greatly reduces the number of bugs and improves the overall health and performance of every application that uses the design system. This was actually very interesting to see how three different companies are tackling accessibility issues. I liked Karen's presentation the most because not only did she break down every component of what a design system is she detailed the different positions and their responsibilities and I think I really would like to work on UI. However, it seems that a graphic design background is needed and I don't know much about going to school again. I think I need to research things more. I really appreciated that Camilo wasn't afraid to show how their engineers were lacking in terms of accessibility and presented on all the statistics. When I have time, I would love to make a parent design system for myself.

**Talk Titles:**

1. "Creating Accessible Design System" by Karen Hawkins (Principal of Accessible Design at Level Access)
1. "Technical Retrospective and Accessibility on Hawkins Professional" by Camilo Valderrama (Senior Manager at Netflix)
1. "React Spectrum Get Hooked: Building a More Accessible UI with React Aria and React Hooks" by Danielle Robinson (Engineering Manager at Adobe)

**People I Met and What I Found Interesting About the Talks:**

1. Karen Hawkins: Principal of Accessible Design at Level Access.

    - She said that many companies design systems tend to be incomplete and do not meet accessibility requirements and she said that anytime you cause your user to pause, you decrease their efficiency so a consistent state design is key.
    - Ask who is responsible for which accessibility requirements in a design system. There are usually three defined roles: `User Experience (UX) Designer`, `User Interface (UI) Designer`, `Content Designer`.
    - She talked about how to up your accessible design by using **Atomic Design: a framework to break interfaces/design processes down into atoms, molecules, organisms, templates, and pages** which are fundamental reusable building blocks that are then able to be built back up in infinite variations.
    - Make sure those "atomic" building blocks are accessible before you create new features. Which ensures consistency in design, component hierarchy, and user interaction patterns up to the molecule level.
    - She focused on the atomic breakdown of a button: `atoms` are the text, `molecule` is the button text and the border of the entire button. But there are subcomponents of CSS properties that make up the `atoms` as well like font type, size, color, padding etc. These are the `subatomic particles` and each of these subcomponents have something called `design tokens` which are the values if the CSS properties.
    - She talked about how companies take into consideration accessability and consistency across different devices and browsers, but sometimes forget about `Keyboard Interactions`
    - This part I thought was really interesting because I never even considered this was a possibility: she gave an example using buttons again. There is a group of four `radio button` answers. When you hit `tab` you move into that group of answers, hit `arrows` to move up and down options, hit `enter` to select, hit `tab` again to move out of the group. However, if you look at `checkbox buttons` when you hit `tab` you enter the group, hit `tab` again to move through options unlike `radio buttons` which uses `arrows`. You hit `enter` to select a box and then you hit `tab` to select another answer.
    - She advocates for early incorporation of digital accessibility and the importance of embedding accessibility at every stage in the product development lifecycle to prevent trouble for developers. So set up accessibility checkpoints to ensure comprehensive integration. 
    - She is involved heavily in client work which means new projects and new brands all the time, so she recommends creating a parent design system that has the basic CSS molecule properties and then create a child design system that would inherit a subset of features or properties from the parent and you can create as many child design systems as you like based on different projects and brands by changing various molecular state, which are those design tokens. Smart design of inheritance improves efficiency. 

2. Camilo Valderrama: Senior Software Engineer, specifically working on the UI developer experience team called **Hawkins** at Netflix.

    - **Hawkins**: Netflix's centralized design system, foundational components that are the blueprint for over 150 engineering teams to ensure over 80 of Netflix's applications are consistent. 
    - He leads the accessibility initiatives for **Hawkins** and helps with the improvement of one set of components vs each application or team using their own components because when that one set of component is improved on the benefit is applicable to all teams. 
    - This year they wanted to focus on accessibility more and hired an outside firm to look over everything they've done. Now and in the future Netflix is investing more on accessibility.
    - In order to improve accessibility, he wanted to analyze how the organization in general is understanding accessibility.
    - He created a survey study asking all engineers what they thought about accessibility. What he found was that most engineers were unaware of basic accessibility practices. He also asked teams about their consideration for accessibility and found that most teams didn't prioritize accessibility when building products.
    - The survey showed that a lot of engineers thought accessibility was a checklist you go to to fix and be done with. He wanted people to know that accessibility is always going to be an ongoing process because accessibility is user experiences and that is always changing.
    - He gave a tip that chrome has a lot of good accessibility extensions and to use them.
    - He also analyzed Netflix's repositories related to accessibility and found 10 commits containing accessibility keywords, so engineers were not considering accessibility when building **Hawkins**.
    - He found issues with screen readers not interacting with drop down menus well and also said in general they had issues where singular components rendered but multiple components together had issues.

3. Danielle Robinson: Software Engineering Manager of React Spectrum at Adobe

    - She said Adobe once faced the challenges of maintaining UI consistency, accessability, and usability across its numerous products developed by over thousands of engineers globally.
    - Recognizing the popularity of design systems, Adobe created **React Spectrum**, a collection of libraries and tools for building adaptive, and accessible user experiences in web applications. Everything is open source on GitHub.
    - **React Spectrum**: Design system uses `React Hooks` to split components into state, behavior, and rendered parts. Within spectrum are **React Aria** and **React Stately**
    - **React Aria**: Allows for quick component building and provides control over rendering, styling, and implementing behavior and accessibility. 
    - **React Stately**: No design system-specific collection of hooks that are just the basic core components. So basically the parent system. 
    - They build their own hooks and she used `useDrag` and `useDrop` as examples.
    - Historically, drag and drop were limited to mouse and touchscreen users, so in order to be more accessible they created keyboard and screen reader friendly alternatives for users who can't use the usual interaction methods.
    - Her team does a lot of testing before release. They test on multiple browsers and devices and user interactions like mouse/keyboard and screen readers on different devices. And asks feedback from accessability team first.



## Learning Journal

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- Today I learned that I can describe what is happening when decipher code a lot more than I thought. I was able to explain today's lab and this weeks concepts to her thoroughly and in a way that she can understand. But even though I can explain it and follow, sometimes I feel like I can't apply it or know where to start and that is what makes me feel like I don't know anything. 