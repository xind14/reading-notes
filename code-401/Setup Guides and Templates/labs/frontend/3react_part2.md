# Lab: Cookie Stand Admin Version 2

## Overview

Your job is to continue work on the Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).

## Feature Tasks and Requirements

- The specs for the lab are screen shots of [Cookie Stand Admin Version 2](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-version-2.png) and [Cookie Stand Admin No Stands](https://codefellows.github.io/code-401-python-guide/curriculum/class-38/lab/cookie-stand-admin-no-stands.png).
- `pages/Index.js` should return the top-level component `<CookieStandAdmin>`.
  - `<CookieStandAdmin>` details…
    - Will contain the following components: `<Head>`, `<Header>`, `<main>`, `<CreateForm>`, `<ReportTable>`, and `<Footer>` component that matches the spec.
    - Import time slot data from the supplied `data.js` file.
  - `<CreateForm>` component details…
    - Object should have hourly_sales property with hard-coded `[48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]`.
  - `<ReportTable>` details…
    - If reports is empty then render `<h2>No Cookie Stands Available</h2>`.
    - If reports is not empty then render a table with `<thead>`, `<tbody>`, and `<tfoot>` components.
    - Components should render to match the spec.
  - Style all components using TailwindCSS utility classes to match the spec.

## Implementation Notes

- Continue work in the `cookie-stand-admin` repository.
- IMPORTANT: Complete version 1 tasks before moving to version 2 features.
  - Pro tip: [Tailwind CSS Extension Pack](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)

## User Acceptance Tests

No testing required.

## Configuration

Continue work in the `cookie-stand-admin` repository in Github.

Refer to Lab Submission Instructions for detailed instructions.

## Stretch Goals

- Flesh out Overview page to do more.
- Remove hard coding from `<CreateForm>` and properly calculate hourly sales per cookie stand.
- Add delete icons.
  - Pro Tip: [Heroicons](https://heroicons.com/)
- Really stretch out and make delete icons functional.
- Persist Cookie Stand data.

