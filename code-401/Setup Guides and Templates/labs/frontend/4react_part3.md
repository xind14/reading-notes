# Lab: Cookie Stand Admin Version 3

## Overview

Your job is to continue work on the Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

Annoying Change Explanation: The layout of Cookie Stand Form has changed a bit.

## Feature Tasks and Requirements

- All features from versions 1 and 2 should be complete.
- The specs for the lab are screen shots of [Cookie Stand Admin Version 3](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-version-3.png) and [Cookie Stand Admin Login](https://codefellows.github.io/code-401-python-guide/curriculum/class-39/lab/cookie-stand-admin-login.png).
- `pages/index.js` should export a `<Home>` component.

### `<Home>` Requirements

- If the user is NOT logged in then `<LoginForm>` should render.
- If the user IS logged in then `<CookieStandAdmin>` component should render.

### `<LoginForm>` Requirements

- Should receive a function passed in to call when the form is submitted.
- The function should be called with username and password arguments.

### `<CookieStandAdmin>` Requirements

- When the user fills out the form to add location then the data should be posted to API.
- When API response is complete then `<CookieStandTable>` should render latest data immediately.
- Should NOT require a page refresh.

### `<CookieStandTable>` Requirements

- Component should continue to display Cookie Stand info as in version 2.
- Add a delete icon in each stand’s location cell.
- Clicking delete icon should immediately delete the Cookie Stand.
- Should NOT require a page refresh.

- Continue to style all components using TailwindCSS utility classes to match spec.

## Implementation Notes

- Continue work in the `cookie-stand-admin` repository.
- Ideally, you will have the front end communicate with your API.
- If your API is not fully functional then communicate with instructor to get access to a test API.
- You can use an Icon of your choosing for the delete functionality. One recommendation is [Hero Icons](https://heroicons.com/).
- IMPORTANT: Complete version 1 & 2 tasks before moving on to version 3 features.
  - Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)

## User Acceptance Tests

No testing required.

## Configuration

Continue work in the `cookie-stand-admin` repository in Github.

Refer to Lab Submission Instructions for detailed instructions.

Add .env contents to Canvas submission.

## Stretch Goals

- Use your own deployed API instead of one running on localhost or that has been supplied by the instructor.
- Add a confirmation dialog when deleting a Cookie Stand.
- Add a list of Cookie Stand locations to Overview page.
  - There is some trickiness here regarding logged in status. Try to figure it out!
- Add edit feature.

© Code Fellows 2024
