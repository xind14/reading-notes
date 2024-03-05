# Class 17 - Web Scraping

## Lab 17 - Automating collecting data from web page

### Overview - Web Scraping

It’s wonderful when someone has gone to the effort to expose their site’s data through an API.

But not everyone can (or wants to) do that.

No problem. Let’s code up a web scraper that can automate the process of manually using the site.

### Feature Tasks and Requirements

1. Scrape a Wikipedia page of your choosing and record which passages need citations.

   - E.g. History of Mexico has a few “citations needed”.

2. Your web scraper should report the number of citations needed.
3. Your web scraper should identify those cases AND include the relevant passage.
   - E.g. Citation needed for “lorem spam and impsum eggs”
   - Consider the “relevant passage” to be the parent element that contains the passage, often a paragraph element.

### Implementation Notes

1. Module must be named `scraper.py`
2. Create function named `get_citations_needed_count`
   - Takes in a url string and returns an integer.
3. Create function named `get_citations_needed_report`

   - Takes in a url string and returns a report string
   - The string should be formatted with each citation listed in the order found.
   - For example:

     ```
     The first people to settle in Mexico encountered a climate far milder than the current one. In particular, the Valley of Mexico contained several large paleo-lakes (known collectively as Lake Texcoco) surrounded by dense forest. Deer were found in this area, but most fauna were small land animals and fish and other lacustrine animals were found in the lake region.[citation needed][6] Such conditions encouraged the initial pursuit of a hunter-gatherer existence.

     The Mexica people arrived in the Valley of Mexico in 1248 AD. They had migrated from the deserts north of the Rio Grande[citation needed] over a period traditionally said to have been 100 years. They may have thought of themselves as the heirs to the prestigious civilizations that had preceded them.[citation needed] What the Aztec initially lacked in political power, they made up for with ambition and military skill. In 1325, they established the biggest city in the world at that time, Tenochtitlan.
     ```

### Stretch Goals

- Organize the needed citations by section (i.e. the parent heading tag)
- Name additional function `get_citations_needed_by_section`
- Automatically do a citation scan for any links from the main section of Wikipedia page.

### Configuration

1. Create a project named `web-scraper`.
2. Refer to Lab Submission Instructions for detailed instructions.

## Code Challenge

- **Branch Name:** tree-breadth-first
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Write a function called breadth first
2. Arguments: tree
3. Return: list of all values in the tree, in the order they were encountered
4. NOTE: Traverse the input tree using a Breadth-first approach

## Written Class Notes

## Read 17 - Web Scraping

## Resources Link/Pages

- [Scrape a Dynamic Website with Python](https://scrapingant.com/blog/scrape-dynamic-website-with-python)
- [What is Web Scraping?](https://en.wikipedia.org/wiki/Web_scraping)
- [How to scrape websites without getting blocked](https://www.scrapehero.com/how-to-prevent-getting-blacklisted-while-scraping/)

CHOOSE ONE VIDEO

- [Login and Scrape Data with Playwright and Python](https://www.youtube.com/watch?v=H2-5ecFwHHQ&t=60s)
- [Python Playwright Tutorial For Beginners](https://www.youtube.com/watch?v=yp1o9biMMWU)
- [Beautiful Soup](https://www.crummy.com/software/BeautifulSoup/)
- [Playwright XPath Selectors](https://www.programsbuzz.com/article/playwright-xpath-selectors)

- [Xpath Cheatsheet](https://devhints.io/xpath)

Next Two videos use requests_html library instead of playwright but are too cool to leave out.

- [Render Dynamic Pages - Web Scraping Product Links with Python](https://www.youtube.com/watch?v=MeBU-4Xs2RU)
- [Rendering Dynamic Pages 2! - Web Scraping ALL products with Python](https://www.youtube.com/watch?v=B14mtXA7Tyw)
- [Selecting an element containing certain text](https://stackoverflow.com/questions/1520429/is-there-a-css-selector-for-elements-containing-certain-text)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Web scraping allows you to extract data from websites, turning unstructured web data into a structured format that can be analyzed and used for various purposes. Python Playwright and XPath help automate the interaction with web pages, making the data extraction process efficient and accurate.

## Reading Questions

1. What are the key differences between scraping static and dynamic websites?

   - "It is a form of copying in which specific data is gathered and copied from the web, typically into a central local database or spreadsheet, for later retrieval or analysis." - Wiki

   - HTML Source Code:

     - **Static Websites:** The HTML source code contains all the content, making it easy to parse with traditional HTML parsers.
     - **Dynamic Websites:** The initial HTML source code may not contain the complete content, and additional data is loaded dynamically, requiring special handling.

   - Javascript Execution:

     - **Static Websites:** No need for executing Javascript since all content is present in the HTML.
     - **Dynamic Websites:** Execution of Javascript is often necessary to load and render content dynamically.

   - Parsing Complexity:

     - **Static Websites:** Parsing is straightforward using HTML parsing libraries like BeautifulSoup or lxml.
     - **Dynamic Websites:** Parsing dynamic content may require tools capable of rendering and executing Javascript, such as headless browsers or specialized APIs.

   - Data Accessibility:

     - **Static Websites:** All data is readily available in the HTML source code.
     - **Dynamic Websites:** Data may be hidden or loaded asynchronously, requiring additional steps to locate and retrieve it.

   - Page Load Speed:

     - **Static Websites:** Generally faster as all content is loaded at once.
     - **Dynamic Websites:** May have slower initial load times, but subsequent content loads dynamically for a smoother user experience.

   - Caching:

     - **Static Websites:** Content can be cached as it remains unchanged.
     - **Dynamic Websites:** Content may vary, and caching strategies need to consider dynamic updates.

   - User Experience:
     - **Static Websites:** Simple and faster for users.
     - **Dynamic Websites:** Provide a more interactive and engaging user experience.

2. Explain at least three techniques or best practices that can be employed to avoid getting blocked while scraping websites.

   - Respect Robots.txt:

     - **Explanation:** The robots.txt file is a standard used by websites to communicate with web crawlers and scrapers. It contains rules and directives that specify which parts of the website can or cannot be crawled. Respecting the rules outlined in the robots.txt file is crucial for ethical web scraping. Websites often use this file to convey their preferences regarding scraping frequency, allowed pages, and more.
     - **Implementation:** Before scraping a website, check its robots.txt file. Ensure that your scraper adheres to the rules mentioned in the file. Avoid scraping pages or content explicitly disallowed by the website.

   - Throttle Crawling Speed:

     - **Explanation:** Crawling a website too quickly can overwhelm its server and trigger anti-scraping measures. To mimic human behavior and avoid detection, it's essential to slow down the crawling speed. By incorporating random delays between requests, adding sleep calls, and limiting the number of concurrent requests, you can make your scraper appear more human-like.
     - **Implementation:** Introduce random pauses or sleep periods between your scraper's requests. Adjust the crawling speed based on the website's response times, ensuring that your scraper does not generate an unusually high volume of requests in a short period.

   - Rotate IPs and User Agents:
     - **Explanation:** Websites often track and block suspicious activities based on IP addresses and user agents. To avoid being detected, rotate your IP addresses and user agents regularly. Using proxies can help mask your scraper's original IP, making it more challenging for websites to link multiple requests to the same source. Additionally, rotating user agents mimics the diversity seen in real user traffic.
     - **Implementation:** Utilize a pool of IP addresses and switch between them during scraping. Rotate user agents and corresponding HTTP request headers between requests. This diversification makes it harder for websites to identify and block your scraper based on consistent patterns.

3. What is Playwright, and how does it assist in web scraping tasks? Provide an example of a use case where Playwright would be particularly beneficial.

   - Playwright is a browser automation tool that can be used for web scraping, testing, and automating browser tasks. It provides a Python API (as well as APIs for other programming languages) to interact with web pages, simulate user actions, and extract information. It assists in web scraping tasks by providing a high-level, user-friendly API to control browsers without the need for external drivers. It handles browser automation more efficiently and allows for easy switching between different browser engines.

   - A use case is when scraping dynamic websites that heavily rely on JavaScript for rendering content. Playwright can interact with pages in a way that simulates user behavior, enabling it to handle dynamic content, makes it suitable for scraping modern web applications where traditional scraping methods may fall short.

4. Describe the purpose of using Xpath in web scraping, and provide an example of an Xpath expression to select a specific HTML element from a webpage.

   - XPath (XML Path) is a language used to navigate and query XML documents.

     - commonly employed to locate and extract specific elements from an HTML document.
     - useful for handling dynamic content, such as elements generated by JavaScript. It enables you to navigate through the document structure, even as it changes dynamically.
     - allows users to traverse up and down the HTML document tree. This is beneficial when the desired element's location is relative to other elements on the page.
     - Example of an XPath expression to select a specific HTML element:

       select the first `<a>` element with the class attribute set to "navigation-link" from the provided HTML:

       ```html
       <div class="main-navigation">
         <a href="/home" class="navigation-link">Home</a>
         <a href="/tutorials" class="navigation-link">Tutorials</a>
         <a href="/search" class="navigation-link">Search</a>
       </div>
       ```

       **XPath Expression:**

       ```xpath
       //div[@class='main-navigation']/a[@class='navigation-link'][1]
       ```

       **Explanation:**

       - `//div[@class='main-navigation']`: Locate the `<div>` element with the class attribute set to "main-navigation."
       - `/a[@class='navigation-link']`: Traverse to the `<a>` elements with the class attribute set to "navigation-link" within the selected `<div>`.
       - `[1]`: Select the first matching `<a>` element.

## Things I want to know more about

- Why do companies still prevent web scraping if they know methods exist out there that allows web scraping?

## Learning Journal

### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.

For this one, let’s go meta: What have you learned from the process of keeping a learning journal? Consider what you have learned about learning and what you have learned about yourself.

- I've learned that I complain a lot because I still don't know how I learn and what works for me. There's a lot of struggles and my list of need to improve is growing. Learning is still fun I think when it's something I want to learn, but when it's something I don't want to learn I think "this sucks but at least I know what it is and why it sucks for me". I'm recognizing I still have a fixed mindset, I don't have a positive attitude toward learning but I'm not so pessimistic that I want to quit. I don't want to quit and think there's still some benefit to this.
