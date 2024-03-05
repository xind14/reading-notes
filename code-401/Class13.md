# Class 13 - Linear Regressions

## Lab 13 - Machine Learning with scikit-learn

Today you’ll perform exploratory analysis by using Linear Regressions on the Kaggle data set of your choice.

### Feature Tasks and Requirements

- Select a Kaggle data set that is suitable for Linear Regression.
  - **Note**: Make sure the data set is stored as csv file/s.
  - Data set must be continuous values appropriate for a Linear Regression. If you’re not sure then ask Instructor or TA.
- Load the data you receive into a Pandas DataFrame.
- Show the first five rows of the data set.
- Show the description and the info of the data set.
- Ensure that any date columns have been cast into a datetime object in your DataFrame.
- Using a regression model, split your data into train and test portions.
- Fit your training split to the regression model.
- Show your regression model’s score.
- Draw at least three conclusions from your regression model.
- Your notebook should be clutter-free and polished.

### User Acceptance Tests

No acceptance tests today, but Notebook should clearly display its conclusions.

### Configuration

1. Create an account (if you haven’t already) at [Kaggle](https://www.kaggle.com/).
2. Create a new Notebook named `Linear Regression`.
3. Click Share button and select Public access.
4. Submit the Public URL for Notebook.

### Stretch

- Use a data set from a source other than Kaggle.
- Use a data set not stored as csv, e.g. sqlite.
- Find an existing Linear Regression Notebook on Kaggle and explain it (or add to it).

## Code Challenge

- **Branch Name:** stack-queue-brackets
- **Challenge Type:** Code Challenge / Algorithm

### Feature Tasks

Implement a Queue using two Stacks.

1. Write a function called validate brackets
2. Arguments: string
3. Return: boolean
    - representing whether or not the brackets in the string are balanced
4. There are 3 types of brackets:

    - Round Brackets : ()
    - Square Brackets : []
    - Curly Brackets : {}

## Written Class Notes

## Read 13 - Machine Learning with scikit-learn

## Resources Link/Pages

- [How to Run Linear Regression in Python](https://www.activestate.com/resources/quick-reads/how-to-run-linear-regressions-in-python-scikit-learn/) NOTE: The content to read ends at the Regression vs Classification section. After that it’s a product pitch for ActiveState which is not required, though you may find it interesting.
- [Linear Regression in Python](https://realpython.com/linear-regression-in-python/)
- [Introduction to Simple Linear Regressions](https://www.youtube.com/watch?v=KsVBBJRb9TE)

**Bookmark and Review**

- [Understanding Train Test Split](https://builtin.com/data-science/train-test-split)
- [What is Linear Regression](https://www.statisticssolutions.com/what-is-linear-regression/)

## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Linear regression is a fundamental algorithm in machine learning. It provides a simple and intuitive introduction to the concepts of modeling relationships between variables.

## Reading Questions

1. Can you explain the basic concept of linear regression and its purpose in the context of machine learning and data analysis?

   - a machine learning algorithm used for predictive data analysis. It aims to find the best-fit straight line that minimizes the deviation between scattered data points. The core idea is to model the relationship between an independent variable (predictor) and a dependent variable (response). This line can then be used to predict new data points.

2. Describe the process of implementing a linear regression model using Python’s Scikit Learn library, including the necessary steps and functions.

   - _Process:_

     - _Import LinearRegression Class:_ Start by importing the LinearRegression class from the scikit-learn library.
     - _Create Data:_ Prepare your data, usually as NumPy arrays, with independent variable(s) (`x`) and dependent variable (`y`).
     - _Create Model Instance:_ Instantiate a linear regression model using `LinearRegression().fit(x, y)`.
     - _Interpret Results:_ Retrieve results, including the coefficient of determination (`r_sq`), intercept, and slope.
     - _Predict Response:_ Use the model to predict responses for new data points.

   - _Code Example:_

     ```python
     import numpy as np
     from sklearn.linear_model import LinearRegression

     x = np.array([6, 16, 26, 36, 46, 56]).reshape((-1, 1))
     y = np.array([4, 23, 10, 12, 22, 35])

     model = LinearRegression().fit(x, y)
     r_sq = model.score(x, y)
     print('coefficient of determination:', r_sq)
     print('intercept:', model.intercept_)
     print('slope:', model.coef_)
     y_pred = model.predict(x)
     print('Predicted response:', y_pred, sep='\n')
     ```

3. What is the purpose of splitting the dataset into train and test sets, and how does this contribute to the evaluation of a machine learning model’s performance?

   - to evaluate the model's performance. The training set is used to train the model, while the testing set is used to assess how well the model generalizes to new, unseen data. This helps detect overfitting or underfitting issues. Commonly used functions for splitting include `train_test_split` from scikit-learn.

   - _Code Example:_

     ```python
     from sklearn.model_selection import train_test_split

     x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
     ```

## Things I want to know more about

- What are the key assumptions of linear regression, and how can one diagnose and interpret residuals to assess the model's validity?

## Learning Journal

### Reflection

Write a brief reflection on your learning today, or use the prompt below to get started.

There’s an old saying: **“Experience is what you get when you didn’t get what you wanted.”** What strategies do you use for learning from disappointments (both big and small) so that the net experience becomes productive and positive?

- This is something I need still learn to do often but I think acknowledging and accepting the failures and disappointments and reflect on the experience later on as well. I also want to learn to celebrate my wins, but I still focus on my failures more. When I do remember to do this, I find that I tell myself maybe next time I can do better and what can I do which I think is heading towards the right direction of becoming more positive. For example, in today's lab although I needed a lot of help from gpt on how to display data in a readable way, I learned what capabilities were possible in pyplot such as the different properties you can include like color, transparency, legend. Now I know what I can use next time.

## Career 13 - Workshop #3 Prep: Set a Networking Appointment
