# Class 37 - React + Next.JS

## Lab 37 - Intro to Next.js & Tailwind CSS: Cookie Stand Admin Version 1

React is great! And though it does A LOT, it’s not a full framework. In other words, many common tasks are not handled out of the box by React. So it’s up to us devs to make some decisions about how to use React in combination with other tools.

One great “stack” is to use Next.js (which builds on top of React) and style with Tailwind.

### Feature Tasks and Requirements

- The spec for lab is screen shot of Cookie Stand Admin Version 1
- `pages/Index.js` should…
  - Have `<Head>` component with page title set to Cookie Stand Admin
  - Have a `<header>` component that matches spec.
  - Have a `<main>` component containing `<form>` and a placeholder component showing JSON string of last created Cookie Stand.
  - Have a `<footer>` component that matches spec.
- Style app using TailwindCSS utility classes.

### Implementation Notes

- Initialize Next.js project with the following command.
  ```
  npx create-next-app@latest --js --no-app
  ```
  NOTE: there is no need to create a containing folder.
- Name your project `cookie-stand-admin`
- Accept defaults for remaining options.
- Strip out unused files
  - The app won’t break if they get left in, but a good practice to remove stuff you’re not using.
- Pro tips:
  - Tailwind CSS Extension Pack
  - React, Etc. Snippets

### User Acceptance Tests

- No testing required.

### Configuration

- Refer to Next Lab Submission Instructions for detailed instructions.

### Stretch Goals

- Refactor to move components to own functions.
- Refactor to move components to own files.
- Add more styling
- Link to another page within the app

## Code Challenge - Student Choice

## Written Class Notes

## Read 37 - React 1

## Resources Link/Pages

ES6 Overview

- [ES6 Syntax and Feature Overview](https://www.taniarascia.com/es6-syntax-and-feature-overview/)

React

- [React - Hello World](https://reactjs.org/docs/hello-world.html)
- [React - JSX](https://reactjs.org/docs/introducing-jsx.html)
- [React - Rendering Elements](https://reactjs.org/docs/rendering-elements.html)
- [React - Components & Props](https://reactjs.org/docs/components-and-props.html)
- [React - State & Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [React - Handling Events](https://reactjs.org/docs/handling-events.html)

Tailwind CSS

- [Utility First CSS](https://tailwindcss.com/docs/utility-first)
- [Tailwind in a few min minutes](https://www.youtube.com/watch?v=pB1oed_10IA)

Next.js

- [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app)
- [Why to use Next.js](https://www.youtube.com/watch?v=rtgbaKBhdkk)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Understanding Next.js (a React framework for frontend) and Tailwind CSS (a utility-first CSS framework) can equip you with frontend development skills.

## Reading Questions

1. In the context of ES6 Syntax and Feature Overview, what are three key features introduced in ES6 that improve upon the previous version of JavaScript, and briefly explain their benefits?

   - **Arrow Functions:**

     - **Benefit:** Arrow functions provide a concise syntax for writing functions. They also handle the binding of `this` lexically, which helps in avoiding the common pitfall of losing context when dealing with nested functions or callbacks.
     - **Example:**

     ```javascript
     // ES5 Function
     function add(a, b) {
       return a + b;
     }

     // ES6 Arrow Function
     const add = (a, b) => a + b;
     ```

   - **Let and Const:**

     - **Benefit:** `let` and `const` introduced block scoping, which helps in avoiding issues with variable hoisting and maintaining variable immutability. `let` allows variable reassignment within its scope, while `const` creates variables that cannot be reassigned.
     - **Example:**

     ```javascript
     // Using let
     let count = 0;
     count = 10; // Valid

     // Using const
     const PI = 3.14;
     PI = 3.14159; // Error: Cannot reassign constant variable
     ```

   - **Template Literals:**
     - **Benefit:** Template literals offer a more readable and convenient way to concatenate strings. They also support multiline strings and embedded expressions, making string interpolation easier.
     - **Example:**
     ```javascript
     const name = "Alice";
     const greeting = `Hello, ${name}!`;
     console.log(greeting); // Output: Hello, Alice!
     ```

2. After reading “Tailwind in 15 minutes,” can you describe the purpose of utility classes in Tailwind CSS and provide an example of how to use them to style an HTML element?

   - Utility classes in Tailwind CSS are pre-defined classes that provide direct access to common CSS properties. These classes allow developers to quickly apply styles without having to write custom CSS. The main purpose is to speed up development by offering a set of reusable and atomic utility classes.

   - Let's say you want to style a `<button>` element using Tailwind CSS:

     ```html
     <button
       class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
     >
       Button Text
     </button>
     ```

     In this example:

     - `bg-blue-500`: Sets the background color to a shade of blue.
     - `hover:bg-blue-700`: Changes the background color to a darker shade when hovered.
     - `text-white`: Sets the text color to white.
     - `font-bold`: Makes the text bold.
     - `py-2 px-4`: Adds padding vertically (`py-2`) and horizontally (`px-4`).
     - `rounded`: Rounds the corners of the button.

3. Based on “Why to use Next.js,” explain the main advantages of using Next.js for web development, and provide a brief comparison between traditional client-side rendering and Next.js’s server-side rendering approach.

   - **Server-Side Rendering (SSR)**: Next.js provides the ability to render pages on the server, improving initial load times and SEO. This means faster perceived performance for users and better search engine visibility.

   - **Ease of Deployment**: Next.js simplifies the deployment process with platforms like Vercel, AWS, and GitHub Pages. It also supports static site generation for hosting on platforms like GitHub Pages.

   - **Improved Developer Experience**: Next.js offers features like React Fast Refresh for preserving state during development, easy TypeScript integration, automatic code splitting, and built-in CSS and Sass support, reducing the need for additional configuration.

   - **Traditional CSR**: In traditional client-side rendering, the entire application is loaded in the browser, and content is rendered dynamically as users interact with the page. This can lead to slower initial load times, especially for content-heavy applications.

   - **Next.js SSR Approach**: Next.js, on the other hand, allows developers to choose whether to render pages on the server, the client, or use a mix of both based on specific page requirements. This flexibility improves performance by delivering pre-rendered content, reducing the client-side workload.

## Things I want to know more about

- How does Django come into play? Can you implement both Django and React?

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
