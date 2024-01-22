# Class 12 - Data Analysis

## Lab 12 - Data Frames with Pandas

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

## Read 12 - Data Frames with Pandas

## Resources Link/Pages

- [Pandas in 10](https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html)
- [Pandas - Getting Started](https://pandas.pydata.org/pandas-docs/stable/getting_started/intro_tutorials/index.html)
- [Corey Schafer - Pandas Tutorials](https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS)
- [What is Pandas](https://www.youtube.com/watch?v=dcqPhpY7tWk&t=391s)

**Bookmark and Review**

- [Master Pandas](https://towardsdatascience.com/be-a-more-efficient-data-scientist-today-master-pandas-with-this-guide-ea362d27386)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Pandas provides powerful data structures (DataFrame and Series) for efficient data manipulation and analysis.

## Reading Questions

1. Explain the purpose and basic functionality of the Pandas library. What are some common operations that can be performed on data using Pandas, and how do they contribute to data analysis and manipulation?

   - Pandas is a Python library designed for data manipulation and analysis. Its primary purpose is to provide data structures (Series and DataFrame) that make it easy to handle and analyze structured data. Pandas facilitates tasks such as data cleaning, exploration, and transformation. It excels in handling tabular and time-series data.

   - Common Operations:

     ```python
     import pandas as pd

     # Loading data
     data = pd.read_csv('data.csv')

     # Handling missing data
     data.dropna()

     # Selecting data
     data[['column_name']]

     # Grouping and aggregating
     data.groupby('category').mean()
     ```

2. What are the primary data structures in Pandas, and how do they differ in terms of use cases?

   - **Series**: A one-dimensional labeled array capable of holding any data type. It is similar to a column in a spreadsheet or a single-column table in a database.

     ```python
     # Creating a Series
     series_data = pd.Series([1, 2, 3, 4], name='column_name')
     ```

   - **DataFrame**: A two-dimensional labeled data structure with columns that can be of different types. It is akin to a spreadsheet or SQL table.

     ```python
     # Creating a DataFrame
     df = pd.DataFrame({'column1': [1, 2, 3], 'column2': ['a', 'b', 'c']})
     ```

   - Differences in Use Cases:
     - Use Series when dealing with a single variable or column.
     - Use DataFrame when dealing with multiple variables or columns organized in a tabular format.

3. Describe the process of loading a dataset into a Pandas DataFrame. What are some common file formats that can be used, and which Pandas functions are utilized to read these formats?

- processes:

  ```python
  # Reading data from CSV
  data_csv = pd.read_csv('data.csv')

  # Reading data from Excel
  data_excel = pd.read_excel('data.xlsx')

  # Reading data from SQL
  data_sql = pd.read_sql('SELECT * FROM table', connection)
  ```

- Common File Formats:
  - CSV (Comma-Separated Values)
  - Excel
  - SQL databases
  - JSON
  - HTML
  - And more

## Things I want to know more about

- How is Pandas used for data visualization, and are there any built-in plotting functions that Pandas provides?

## Learning Journal

### Reflection

## Career 12 - Workshop #3 Prep - Professional and Personal Development

**All Podcasts from codenewbie.org**

> Coding Bootcamps and Coding Journeys - Mark Thompson

In this podcast, Mark touched upon coding projects, career guidance, and the future landscape of coding education. He underscored the significance of crafting distinctive and impactful coding projects for portfolios and discouraged generic projects, urging a focus on completeness and tackling real problems with innovative solutions. Mark recommended to proactively manage one's career, nurturing relationships with managers, and documenting accomplishments for career progression. He stressed the importance of setting one's pace and avoiding comparisons with others when embarking on a coding journey.

“You can go at your own pace and don’t compare yourself to other people. I spent so much time looking at the people who were just better than me. Like objectively, there are people who are better than you at code. And I would look at those people and feel like, “Ah, if they’re in the job market or if they’re going after this, there’s no way I can make it.” Bump that don’t spend any time thinking like that because like I had mentioned before, that person can only hold one job and there are thousands of jobs. So don’t worry about it. You be your best. Go at the pace that you need to go at to be successful.”

> What Your Bootcamp Isn't Teaching You - Caitlyn Greffly

Caitlyn reflected on the emotional aspects of coding, debunking the stereotype of tech as purely logical and emotionless. She shared her discovery of the creative side of coding, especially in UX/UI design and the joy found in creating aesthetically pleasing interfaces and the sense of accomplishment in completing projects. Which is where I’m at right now exactly.

One part she said bootcamps aren’t teaching is how to handle a company’s existing code. The interview concludes with insights into dealing with legacy codebases, emphasizing the need for patience and adapting to a slower-paced, collaborative work environment.

She discussed her approach to starting a new job in tech. She prefers to get a broad overview initially, understanding the structure of repositories and team focus. Then choose a small, simple task to dive into the code and gain practical experience, using it as a guide to learn about the company's processes and standards. Caitlyn emphasized the importance of exploring different areas within the first few months to understand how everything fits together. She gave advice on how to deal with tech jargon and advised jotting down unfamiliar terms, asking questions, and utilizing online resources. She recommended a targeted job hunt, especially seeking or have hired bootcampers in the past.

> What are Some Common Mistakes People Make When Learning to Code - Ceora Ford

Ceora emphasized the importance of overcoming common mistakes, such as jumping between languages, lack of consistency, and not building or finishing projects. She recommends project-based learning and staying motivated through habits and incentives.

She said “Even if you are a super senior super experienced developer, you’re always going to run into problems. You’re always going to run into bugs and those bugs can make you feel like you don’t know what you’re doing, which contributes to the whole imposter syndrome thing. “I’m afraid to code in front of this person, because what if I really don’t know what I’m doing and they’re going to think I faked my way to this position or whatever?” And that’s been something that I have literally let take over more times than I would like to admit. And it’s something I’ve been actively working on now for the past couple of months. For instance, I was like deathly afraid of coding live for a really long time, which is something you need to do for interviews.” This is me word for word. I really was having imposter syndrome this entire time. I also have social anxiety so I’m insanely anxious to code in front of people.
