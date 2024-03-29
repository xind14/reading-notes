# Class 41 - Full Stack Deployment

## Lab 41 - Deploying Front End, Back End and Database: React IV - Deployment

It’s time to go live with your Cookie Stand front and back ends!

There are a lot of great (and cheap) deployment options. One of the easiest to use is Vercel.

In fact, we can use it for both our client and server applications.

### Feature Tasks and Requirements

#### API

- Create a new Vercel project by importing your `cookie-stand-api` project from GitHub.
  - Note: The project name `cookie-stand-api` will likely be taken so choose something sensible like `cookie-stand-api-awesome-dev`.
- Set the Environment Variables.
  - TIP: paste the contents of your `.env` file.
- Don’t forget to include `vercel.json` and update `wsgi.py`. See the demo for examples.
- Manually test Django Admin panel.
- Manually test api routes.

#### Front End

- Create a new Vercel project by importing your `cookie-stand-admin` project from GitHub.
  - Note: The project name `cookie-stand-admin` will likely be taken so choose something sensible like `cookie-stand-admin-awesome-dev`.
- Set the Environment Variables.
  - TIP: paste the contents of your `.env.local` file.
  - TIP: check that locally running front end works with deployed API prior to deploying front end.

### Implementation Notes

- You’ll need a Vercel account and to authorize it with Github.
- The Deployment instructions above will walk you through it.

### Stretch Goals

- Deploy a preview build (include URL in README)
- Use a competing host (e.g. AWS, Digital Ocean, Netlify, etc.)

### User Acceptance Tests

- No automated testing today.

### Configuration

- Customize `README.md` for your apps.
- Include deployed URL in README files.

## Code Challenge - Mock Interview

## Written Class Notes

## Read 41 - React 4

## Resources Link/Pages

- chatgpt
- [Next.js - Dynamic Routes](https://nextjs.org/learn/basics/dynamic-routes)
- [Next.js - Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)

**Bookmark and Review**

- [Optional: Next.js 10 is here](https://www.youtube.com/watch?v=JWCS5IdECVI)
- [Next.js - Static File Serving](https://nextjs.org/docs/basic-features/static-file-serving)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Understanding dynamic routes in Next.js enables developers to create more flexible and efficient web applications by generating pages based on patterns and parameters.

## Reading Questions

1. Explain the concept of dynamic routes in Next.js and how they differ from static routes.

   - Static routes in Next.js are the conventional routes where each page of the application corresponds to a specific URL.
   - Dynamic routes allow for pages to be created based on a pattern rather than a specific file.
     - This means that a single page component can handle multiple routes based on the URL parameters.
     - They are ideal for scenarios where you have pages that share the same layout but display different content based on the URL.- Dynamic routes are created using brackets `[]` in the filename. For example, `pages/posts/[id].js` would match `/posts/1`, `/posts/2`, etc., dynamically rendering the content based on the `id` parameter.
   - Differences: - Static routes are pre-built at build time, while dynamic routes are generated on-the-fly based on the incoming request. - Static routes have fixed URLs, while dynamic routes use patterns and parameters to generate content. - Dynamic routes often involve fetching data based on the URL parameter, allowing for customized content.

2. Describe the process of deploying a Next.js application. What are the key steps involved, and what are some deployment platforms you can use?

   - Create a Next.js application or use an existing one.
   - Create a repository on GitHub and push your Next.js app code to it.
   - Use Vercel, the platform developed by Next.js creators, for deployment. - Vercel automatically detects your Next.js app, sets up optimal build settings, and deploys.
   - After successful deployment, Vercel provides you with deployment URLs.

3. How does Next.js handle static file serving? Discuss the default folder structure for storing static assets and explain how to reference them in a Next.js application.

   - Next.js allows the serving of static files, like images, from a folder named `public` in the root directory.
     - Files within the `public` folder can be referenced in code starting from the base URL (`/`).
     - Only assets present in the `public` directory at build time will be served by Next.js.
     - For example, `public/images/profile.jpg` can be accessed at `/images/profile.jpg`.

## Things I want to know more about

- How does Next.js handle client-side routing and what are the benefits compared to traditional server-side routing?

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
