# Class 17 - Web Scraping

## Lab 17 - Automating collecting data from web page

### Overview - Chess Board

Today we’ll be constructing chess boards like it’s 1980.

No prebuilt images, just the power of arrays and pixel art.

### Feature Tasks and Requirements

1. Your job is to render out chess boards with red and blue queens on them.

2. We’re keeping it really basic here so the only pieces are queens and each queen is represented by a blue or red square.

3. Chess board is an 8 by 8 grid of alternating black and white squares. The queens are red and blue squares.

4. Each board will have one red and one blue queen at different coordinates. In addition to displaying the board you’ll need to identify if the queens are “under attack” based on their coordinates.

### Implementation Notes

- Define a ChessBoard class

- Should contain an 8x8 grid.

  - Each cell in the grid should have a color represented in RGB format.
    - Black: (0, 0, 0)
    - White: (1, 1, 1)
    - Blue: (0, 1, 1)
    - Red: (1, 0.2, 0)

- Should have an `add_red` method that accepts a row and column as input which colors the corresponding cell.
- Should have an `add_blue` method that accepts a row and column as input which colors the corresponding cell.
- Should have a `render` method that displays the chess board on the screen with red and blue shown in correct locations.
- Should have an `is_under_attack` method that returns a boolean if red is under attack by a blue piece horizontally, vertically, or diagonally.
- Diagonal attacks can come from four directions. Make sure to handle all of them.

- Render your board for each `is_under_attack` scenario:

  1. Horizontal (aka same row).
  2. Vertical (aka same column).
  3. Four Diagonals.
  4. A "Not Under Attack" scenario.

### User Acceptance Tests

There are no acceptance tests required. The notebook should clearly show that the various `is_under_attack` scenarios have been handled.

## Code Challenge

- **Branch Name:** stack-queue-pseudo
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Create a new class called pseudo queue.
2. Do not use an existing Queue.
3. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
4. Internally, utilize 2 Stack instances to create and manage the queue

- `enqueue`

  - **Arguments:** value
  - Inserts a value into the PseudoQueue, using a first-in, first-out approach.

- `dequeue`
  - **Arguments:** none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

**NOTE:** The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

### Example

```python
# Example
queue = PseudoQueue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(15)
value = queue.dequeue() # Output: 5
```

#### Enqueue

| Input            | Args | Internal State        |
| ---------------- | ---- | --------------------- |
| [10]->[15]->[20] | 5    | [5]->[10]->[15]->[20] |
|                  | 5    | [5]                   |

#### Dequeue

| Input                 | Output | Internal State  |
| --------------------- | ------ | --------------- |
| [5]->[10]->[15]->[20] | 20     | [5]->[10]->[15] |
| [5]->[10]->[15]       | 15     | [5]->[10]       |

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

Take 10-15 minutes at the end of lab to respond to the following questions, adapted from the article:

1. What went well, that I might forget if I don’t write down?
    - I liked learning the career stuff today, but I forgot to write most of it down so will rewatch recording later to take notes again.
2. What did I learn today?
    - No matter the skills you have most of your chances of getting hired is through networking, which I don't know how to do well so that's going to be such a challenge. 
3. What should I do differently next time?
    - Take screenshots of the slides.
4. What still puzzles me, or what do I need to learn more about?
    - I'm not understanding trees like I did stacks and queues so I will look at it more.
5. Thinking about each of your assignments for the day, reflect on:
   - Is the assignment complete? If not, where exactly did you leave off, and what work remains?
      - Assignments are complete. Will work on readings for next week. 

