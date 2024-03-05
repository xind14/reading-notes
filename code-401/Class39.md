# Class 39 - Resource Fetching & Authentication

## Lab 39 - Consuming Authenticated Resources: Cookie Stand Admin Version 2

Your job is to continue work on Cookie Stand Admin app using Next.js and style using Tailwind CSS.

But now you’ll be working with data from a remote API!

### Annoying Change Explanation

The layout of Cookie Stand Form has changed a bit. Sometimes the client will change their mind. This WILL happen all the time as devs. We may as well get used to it now.

### Feature Tasks and Requirements

- All features from versions 1 an 2 should be complete.
- The specs for lab are screen shots Cookie Stand Admin Version 3 and Cookie Stand Admin Login
- `pages/index.js` should export a `<Home>` component.
- `<Home>` requirements

      - If user is NOT logged in then `<LoginForm>` should render.
      - If user IS logged in then `<CookieStandAdmin>` component should render.

- `<LoginForm>` requirements - Should receive a function passed in to call when form is submitted. - The function should be called with username and password arguments.

- `<CookieStandAdmin>` requirements - When user fills out form to add location then the data should be posted to API - When API response is complete then `<CookieStandTable>` should render latest data immediately. - Should NOT require a page refresh.

- `<CookieStandTable>` requirements - Component should continue to display Cookie Stand info as in version 2 - Add a delete icon in each stand’s location cell. - Clicking delete icon should immediately delete the Cookie Stand. - Should NOT require a page refresh.

- Continue to style all components using TailwindCSS utility classes to match spec.

### Implementation Notes

- Continue work in `cookie-stand-admin` repository
- Ideally, you will have front end communicate with your API.
  - If your API is not fully functional then communicate with instructor to get access to a test API.
- You can use Icon of your choosing for the delete functionality.
  - One recommendation is [Hero Icons](https://heroicons.com/)
- IMPORTANT Complete version 1 & 2 tasks before moving on to version 3 features.
- Pro tip: Tailwind CSS Extension Pack

### User Acceptance Tests

- No testing required.

### Configuration

- Continue work in `cookie-stand-admin` repository in Github

### Stretch Goals

- Use your own deployed API instead of one running on localhost or that has been supplied by instructor.
- Add a confirmation dialog when deleting a Cookie Stand.
- Add a list of Cookie Stand locations to Overview page.
  - There is some trickiness here regarding logged in status. Try to figure it out!
- Add edit feature.

## Code Challenge - Mock Interview

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

- How does all of this and the python we've learned so far come together? Can they be combined?

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
