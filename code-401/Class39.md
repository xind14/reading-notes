# Class 39 - Resource Fetching & Authentication

## Lab 39 - Consuming Authenticated Resources

## Setup

## Code Challenge

Overview
[Read this overview.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/)

Video
[Watch the video for this class from the demo playlist.](https://www.youtube.com/playlist?list=PLVngfM2hsbi-L6G8qlWd8RyRbuTamHt3k)

Demonstration
[Look through these sample problems.](https://codefellows.github.io/code-301-guide/curriculum/class-01/challenges/DEMO.html)

Challenges

1. Navigate to the javascript folder within your data-structures-and-algorithms repository.
2. Create a new branch for this challenge called for-each
   git checkout -b for-each
3. Retrieve the code challenge from the system
   npm run get-challenge 01
4. In your terminal, from the javascript folder, run npm test 01 to execute the tests in this file for this challenge.
5. At this point you will see the failed tests scroll through your terminal window with a brief report of the number of failed tests at the bottom.
6. If you do not see this, verify your installation of Jest by typing npx jest --version in your terminal. Filename typos can make things break!
7. Write code to make the tests pass, one at a time. Let the error messages guide you.
8. Once the test is passing, refactor as needed, then move on to the next challenge.
9. Note, you can also run npm test (without a challenge number) to run all of the tests for every code challenge file assignment during the course all at once. This can get “noisy”, but it’s an opportunity to get a view of your overall progress

Submission
When you have completed the entire set of code challenges and all tests pass, create a pull request from your current branch to the main branch and merge it into main.

You will be able to see a test coverage report in GitHub on the Actions tab of your data-structures-and-algorithms repository. It should match what you saw on your terminal in the above steps. Your graders will be looking at this as well.

Submit a link to your pull request.

## Written Class Notes

## Read 39 - React 3

## Resources Link/Pages

- [NextJs](https://nextjs.org/learn-pages-router/basics/create-nextjs-app) Through Assets, Metadata, and CSS section.
- [React Context for Beginners](https://www.freecodecamp.org/news/react-context-for-beginners/)
- [Why I’m using Next.js in 2020](https://www.youtube.com/watch?v=rtgbaKBhdkk)
- [Learn useContext In 13 Minutes](https://www.youtube.com/watch?v=5LrDIWkK_Bc)

**Bookmark and Review**

- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

React Context enables sharing data across the component tree without prop drilling. `useContext` Hook provides a simple way to consume data from a React Context within functional components. Next.js simplifies React app development with features like server-side rendering, automatic code splitting, and streamlined deployment.

## Reading Questions

1. What is React Context, and how does it help in managing state and data sharing in a React application?

   - **React Context** is a feature in React that allows you to pass data through the component tree without having to pass props down manually at every level. It's designed to share data that can be considered "global" for a tree of React components.

   - **Managing State and Data Sharing**:
   - React Context is particularly useful for managing global state or providing shared data across multiple components in a React application.
   - Instead of drilling props through multiple levels of components, you can define a Context, provide it at the top of the component tree, and consume it wherever needed.

2. Explain the useContext Hook and how it can be used to access data from a React Context within a functional component.

   - The `useContext` Hook is a built-in React Hook that allows functional components to consume data from a Context.
   - It provides a way to access the value of a Context without needing to use a Context.Consumer component.
   - It takes a Context object (created using `React.createContext`) as an argument and returns the current context value for that context.

      ```javascript
      import React, { useContext } from "react";
      import MyContext from "./MyContext";

      const MyComponent = () => {
      // Using useContext to access data from MyContext
      const contextData = useContext(MyContext);

      return (
         <div>
            <h1>{contextData.title}</h1>
            <p>{contextData.description}</p>
         </div>
      );
      };

      export default MyComponent;
      ```

3. Describe the purpose of Next.js, and provide an example from the Vercel Next.js Examples reading on how it can be used to build a scalable web application.

   - Next.js is a React framework that aims to simplify React application development by offering built-in features for server-side rendering, static site generation, and more.

   - It provides a streamlined way to build React applications with features like automatic code splitting, server-side rendering, and simplified deployment.

   - **Example from Vercel Next.js Examples**:
   - In the Vercel Next.js Examples, one example of how Next.js can be used to build a scalable web application is demonstrated in the "with-tailwindcss" example.
   - This example shows how Next.js can be integrated with Tailwind CSS, a popular utility-first CSS framework.
   - By using Next.js with Tailwind CSS, developers can quickly set up a project preconfigured with Tailwind CSS, TypeScript or JavaScript, and the App Router.
   - This allows for efficient development of responsive and visually appealing web applications with minimal setup and configuration.
   - Here's an example of how to create a Next.js project with Tailwind CSS:
      ```bash
      npx create-next-app --tailwind with-tailwindcss-app
      ```
   - This command initializes a new Next.js project with Tailwind CSS already set up, providing a solid foundation for building a scalable and well-styled web application.

## Things I want to know more about

- How does all of this and the python we've learned so far come together? Cna they be combined?

## Retrospective

Retrospectives are a critical part of Agile, and typically take the form of meetings held by a team at the end of a sprint cycle. To get us acclimated to that process, we will use the format of a retrospectives to guide today’s reflection.

This [article](https://www.benlinders.com/2013/which-questions-do-you-ask-in-retrospectives/) gives a nice overview to the role of retrospectives.

1. What went well, that I might forget if I don’t write down?
2. What did I learn today?
3. What should I do differently next time?
4. What still puzzles me, or what do I need to learn more about?
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
   - Do not get bogged down in written analysis; instead, focus on capturing the moment with an eye toward how your observations can guide you toward future productivity.
