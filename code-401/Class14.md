# Class 14 - Data Visualization

## Lab 14 - Visualizing statistical data with Seaborn

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


## Read 14 - Visualizing statistical data with Seaborn

## Resources Link/Pages

- [Matplotlib Tutorial](https://www.labri.fr/perso/nrougier/teaching/matplotlib/)

**Bookmark and Review**


- [Seaborn Tutorial](https://seaborn.pydata.org/tutorial.html)
- [Bokeh Tutorial](https://mybinder.org/v2/gh/bokeh/bokeh-notebooks/master?filepath=tutorial%2F00%20-%20Introduction%20and%20Setup.ipynb)
- [Seaborn Cheat Sheet](https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf)


## Answer

Statement on why this topic matter as it relates to what I'm studying in this module:

Seaborn provides a high-level interface for drawing informative and attractive statistical graphics. It allows you to create complex visualizations with minimal code, making it easier to explore and understand the underlying patterns in your data.

## Reading Questions

1. What are the key differences between Matplotlib, Seaborn, and Bokeh libraries in terms of their features and use cases? Provide an example of a specific visualization that is more suitable for each library.

    - Matplotlib
        - **Key Features:** Fundamental plotting library, highly customizable.
        - **Use Cases:** General-purpose plotting, complex visualizations.
        - **Example:** A complex, customized line chart displaying multiple trends over time with custom markers, colors, and annotations.

          ```python
          import matplotlib.pyplot as plt
          import numpy as np

          x = np.linspace(0, 10, 100)
          y1 = np.sin(x)
          y2 = np.cos(x)

          plt.plot(x, y1, marker='o', color='b', label='Sin(x)')
          plt.plot(x, y2, marker='s', color='r', label='Cos(x)')
          plt.title('Customized Trends Over Time')
          plt.xlabel('Time')
          plt.ylabel('Values')
          plt.legend()
          plt.show()
          ```

    - Seaborn
        - **Key Features:** High-level interface for statistical graphics, based on Matplotlib.
        - **Use Cases:** Statistical data visualization, aesthetically pleasing plots.
        - **Example:** A regression plot showing the relationship between two variables along with a linear fit and confidence intervals.

          ```python
          import seaborn as sns
          import matplotlib.pyplot as plt
          import pandas as pd

          tips = sns.load_dataset("tips")
          sns.set(style="whitegrid")
          g = sns.lmplot(x="total_bill", y="tip", data=tips)
          plt.title('Linear Relationship Between Total Bill and Tip')
          plt.show()
          ```


    - Bokeh
        - **Key Features:** Interactive, browser-based visualizations.
        - **Use Cases:** Web-based interactive visualizations, dashboards.
        - **Example:** An interactive scatter plot where points can be clicked to reveal additional information, suitable for a web-based dashboard.

          ```python
          from bokeh.plotting import figure, output_file, show
          from bokeh.models import ColumnDataSource

          output_file("interactive_scatter_plot.html")

          source = ColumnDataSource(data=dict(x=[1, 2, 3, 4, 5], y=[2, 4, 6, 8, 10]))

          plot = figure(tooltips=[("x", "@x"), ("y", "@y")])
          plot.circle('x', 'y', size=10, source=source)

          show(plot)
          ```


2. In the Seaborn library, what are the main functions to create relational, categorical, and distribution plots? Briefly explain the purpose of each type of plot and provide an example use case.


    - Relational Plots
        - **`sns.lmplot`**: Creates a scatter plot with a linear fit.
          - *Example:* Visualizing the relationship between tip and total bill using `lmplot`.

    - Categorical Plots
        - **`sns.barplot`**: Shows point estimates and confidence intervals with bars.
          - *Example:* Plotting survival rates based on class and gender using `barplot`.

    - Distribution Plots
        - **`sns.distplot`**: Plots univariate distribution (histogram or kernel density).
          - *Example:* Displaying the distribution of 'y' variable using `distplot`.


3. Discuss the role of the Seaborn Cheat Sheet in a Python developer’s workflow. What are some key sections or elements featured in the cheat sheet that can help a developer quickly reference Seaborn functionalities?

    - Quick reference for Seaborn functions and parameters.
    - Helps developers efficiently create aesthetically pleasing statistical visualizations.
    - Streamlines the process of preparing data, controlling aesthetics, and customizing plots.
    - Key sections:

        - **Figure Aesthetics:** Controlling overall plot aesthetics.
        - **Plotting With Seaborn:** Basic steps for creating plots.
        - **Context Functions:** Setting the visual context for plots.
        - **Axis Grids:** Customizing axis grids and labels.
        - **Color Palette:** Managing color schemes for plots.
        - **Categorical Plots, Regression Plots, Distribution Plots:** Specific functions for each plot type.


## Things I want to know more about

- I guess we'll find out once we start using it but what are the potential challenges or limitations when working with Seaborn, and how can we overcome them to create effective visualizations?

## Learning Journal

### Reflection

## Career 14 - Workshop #3 Prep - Targeted Job Search
