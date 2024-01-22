# Class 13 - Linear Regressions

## Lab 13 - Machine Learning with scikit-learn

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
   - *Process:*
     - *Import LinearRegression Class:* Start by importing the LinearRegression class from the scikit-learn library.
     - *Create Data:* Prepare your data, usually as NumPy arrays, with independent variable(s) (`x`) and dependent variable (`y`).
     - *Create Model Instance:* Instantiate a linear regression model using `LinearRegression().fit(x, y)`.
     - *Interpret Results:* Retrieve results, including the coefficient of determination (`r_sq`), intercept, and slope.
     - *Predict Response:* Use the model to predict responses for new data points.

   - *Code Example:*
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

   - *Code Example:*
     ```python
     from sklearn.model_selection import train_test_split

     x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
     ```


## Things I want to know more about

- What are the key assumptions of linear regression, and how can one diagnose and interpret residuals to assess the model's validity?

## Learning Journal

### Reflection

## Career 13 -  Workshop #3 Prep: Set a Networking Appointment
