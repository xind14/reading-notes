# Class 12 - Data Analysis

## Lab 12 - Data Frames with Pandas

Today we’re taking a tour into Data Science to learn a bit more about the field and tools used in this space!

The best way to hone your data analysis skills is consistent, deliberate practice.

One of the best places to acquire data for analysis is Kaggle, so practice your abilities with some Kaggle data sets.

- Sign up for a Kaggle account (if you don’t already have one).

###  Feature Tasks and Requirements

Use the following data set:
[Video Game Sales - Sales data from more than 16,500 games](https://www.kaggle.com/gregorut/videogamesales)

1. Create new Notebook called `vg-stats`.
2. Add a markdown cell at the top of notebook with the title of this assignment, an appropriate name for the data set, as well as your name and the date.

In the `vg-stats` notebook answer the following questions/do the following tasks. Note that the numbers quoted for sales are in the millions, and apply only for those games with over 10,000 sales.:

- Which company is the most common video game publisher?
- What’s the most common platform?
- What about the most common genre?
- What are the top 20 highest grossing games?
- For North American video game sales, what’s the median?
- Provide a secondary output showing ten games surrounding the median sales output.
  - Assume that games with same median value are sorted in descending order.
- For the top-selling game of all time, how many standard deviations above/below the mean are its sales for North America?
- The Nintendo Wii seems to have outdone itself with games. How does its average number of sales compare with all of the other platforms?
- Come up with 3 more questions that can be answered with this data set.

When you’re done answering all of the questions for each data set, clean up your notebooks leaving only cells that contain relevant data and calculations. Then restart and run your notebook so that the cell numbering is sequential from top to bottom.

Have fun with the data!! Play around a bit, and see if there’s anything else you can/want to do with the info available!

### Publish with Kaggle

1. Create an account (if you haven’t already) at [Kaggle](https://www.kaggle.com/).
2. Create a new Notebook.
   - Easiest way is by choosing New Notebook option from Video Game Sales page.
   - Alternately, create a new project by clicking + Create button.
3. Use File: Add or Upload Data in menu to store data sets using the links above in Feature Tasks and Requirements section.
4. Name project `Video Game Stats`.
5. Click Share button and select Public access.
6. Submit the Public URLs for Notebooks.

### User Acceptance Tests

No tests are required. But all questions in Feature Tasks and Requirements must be clearly answered in your notebook.

### Stretch

Cycle Share Data set - Bicycle Trip Data from Seattle’s Cycle Share System
In the `bike-stats` notebook, answer the following questions/do the following tasks:
- What is the average trip duration for a borrowed bicycle?
- What’s the most common age of a bicycle-sharer?
- Given all the weather data here, find the average precipitation per month, and the median precipitation.
- What’s the average number of bikes at a given bike station?
- When a bike station is modified, is it more likely that it’ll lose bikes or gain bikes? How do you know?
- Come up with 3 more questions that can be answered with this data set.

**NOTE:** There’s an issue with one of the CSV files. You will need to find a way to handle that error… Google it, and work around it!

## Code Challenge

- **Branch Name:** stack-queue-animal-shelter
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Create a class called AnimalShelter which holds only dogs and cats.
2. The shelter operates using a first-in, first-out approach.
3. Implement the following methods:
    - enqueue
      - Arguments: animal
        - animal can be either a dog or a cat object.
        - It must have a species property that is either "cat" or "dog"
        - It must have a name property that is a string.
    - dequeue
      - Arguments: pref
        - pref can be either "dog" or "cat"
      - Return: either a dog or a cat, based on preference.
        - If pref is not "dog" or "cat" then return null.

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

For this journal entry, no specific prompt other than to start off with “Today I learned…” or “Recently I learned…” and go from there.

- Today I learned how to use the pandas library. I found it funny how much math skills I've lost but it was fine, I just had to google. I liked learning all the different pandas functions and data manipulation but analysis still feels a bit daunting since it's still new syntax I'm looking at. I'm interested in what the rest of the week will be like with data learning though.

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
