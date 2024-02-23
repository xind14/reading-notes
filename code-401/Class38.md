# Class 38 - React - Forms and Conditional Rendering

## Lab 38 - Projecting application state

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

## Read 38 - React 2

## Resources Link/Pages

- [React - Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [React - Lists & Keys](https://reactjs.org/docs/lists-and-keys.html)
- [React - Forms](https://reactjs.org/docs/forms.html)
- [React - Lifting State](https://reactjs.org/docs/lifting-state-up.html)
- [React - Composition vs Inheritance](https://reactjs.org/docs/composition-vs-inheritance.html)
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

- [React - Comprehensive Guide](https://tylermcginnis.com/reactjs-tutorial-a-comprehensive-guide-to-building-apps-with-react/)
- [Heroicons](https://heroicons.com/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Knowing React allows you to build dynamic and interactive user interfaces, complementing your back-end Python skills.


## Reading Questions

1. How does lifting state up in a React application help with managing data flow and what are the benefits of using this approach?

   - Lifting state up in a React application refers to the practice of moving the state from a child component to a parent component. This helps in managing the data flow in the application by centralizing the state management at a higher level in the component hierarchy. Here are benefits:

     - **Single Source of Truth**: When the state is lifted up to a common ancestor component, it becomes the single source of truth for the state. This makes it easier to maintain and update the state consistently across multiple components.

     - **Shared State**: By lifting state up, multiple child components can access and modify the same state. This enables sharing data between components that need it without having to pass props down through many levels of the component tree.

     - **Simplifies Logic**: It simplifies the logic within individual components by removing the need for complex state management within each child component. Child components can focus on presentation and behavior, while the parent component manages the data.

     - **Easier Debugging**: With state lifted up, the data flow becomes more predictable and easier to debug. Changes to the state and its effects on the UI can be traced more effectively.

2. Explain the concept of conditional rendering in React and provide an example of how to implement it in a component.

   - Conditional rendering in React allows you to render different components or elements based on certain conditions. It works similarly to JavaScript conditions, using if statements, ternary operators, or logical && operators to determine what to render.

     ```jsx
     import React from "react";

     function Greeting({ isLoggedIn }) {
       if (isLoggedIn) {
         return <h1>Welcome back!</h1>;
       } else {
         return <h1>Please sign up.</h1>;
       }
     }

     // Usage
     function App() {
       const isLoggedIn = false;

       return (
         <div>
           <Greeting isLoggedIn={isLoggedIn} />
         </div>
       );
     }

     export default App;
     ```

     In this example, the `Greeting` component renders different messages based on the value of the `isLoggedIn` prop. If `isLoggedIn` is `true`, it displays "Welcome back!", otherwise, it displays "Please sign up." This allows for dynamic rendering based on the application's state.

3. What are the main principles behind “Thinking in React” and how do they guide the process of designing and building a React application?

   - **Break UI into Components**: Divide the user interface into small, reusable components. Each component should ideally have a single responsibility, following the Single Responsibility Principle (SRP).

   - **Identify Component Hierarchy**: Arrange components into a hierarchy where child components represent parts of the parent component. This hierarchy should match the natural structure of the data model.

   - **Build Static Version First**: Start by building a static version of the app that renders UI components based on props, without any interactivity. This helps in understanding the component structure and data flow.

   - **Identify Minimal State Representation**: Determine the minimal set of changing data (state) needed for the app. Keep the state DRY (Don't Repeat Yourself) by computing other data based on this minimal state.

   - **Lift State Up When Needed**: If multiple components need access to the same state, lift the state up to the closest common ancestor component. This enables shared state management and avoids prop drilling.

   - **Implement Inverse Data Flow**: Enable components to update the shared state by passing down functions as props. This allows child components to communicate changes back to the parent component.

   - Guiding the Design Process: 
      - **Component Modularity**: Encourages creating reusable, modular components.
      - **Data-Driven UI**: Ensures the UI reflects the underlying data model. 
      - **State Management**: Emphasizes efficient and centralized state management.
      - **Interactivity**: Guides adding interactivity incrementally, starting with static UIs.

## Things I want to know more about

- Just to confirm are we moving away from python now and going back to REACT?

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
