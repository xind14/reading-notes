# Class 14 - Data Visualization

## Lab 14 - Visualizing statistical data with Seaborn

Today you’ll be telling a story visually. Choose two datasets and visualize them as effectively as you can.

### Feature Tasks and Requirements

- Select 2 [Kaggle data sets](https://www.kaggle.com/datasets){:target="\_blank"} that are suitable for the stories you want to tell.
  - **Note**: Make sure the data set has csv file/s to download.
  - Optionally use a dataset from another source.
- Load the data you receive into a Pandas DataFrame.
- Analyze dataset.
- Verbalize your insights in Markdown cells.
- Visualize your insights in several ways.
  - Have at least two visualizations per data set.
  - Use [Seaborn Example Gallery](https://seaborn.pydata.org/examples/index.html) for inspiration.
- Notebook should have professional polish.
  - In other words, imagine you are presenting it on the job.

### User Acceptance Tests

No automated tests

### Configuration

1. Create an account (if you haven’t already) at [Kaggle](https://www.kaggle.com/).
2. Create two new Notebooks named as you choose.
3. Click Share button and select Public access.
4. Submit the Public URLs for Notebooks.

### Stretch Goals

- Use a different visualization library.
  - E.g. Plotly, Bokeh.
- Stream data from URL instead of csv file.
- Join a Kaggle competition.

## Code Challenge - Mock Interview

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
       - _Example:_ Visualizing the relationship between tip and total bill using `lmplot`.

   - Categorical Plots

     - **`sns.barplot`**: Shows point estimates and confidence intervals with bars.
       - _Example:_ Plotting survival rates based on class and gender using `barplot`.

   - Distribution Plots
     - **`sns.distplot`**: Plots univariate distribution (histogram or kernel density).
       - _Example:_ Displaying the distribution of 'y' variable using `distplot`.

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

Write a brief reflection on your learning today, or use the prompt below to get started.

Sometimes, something is easier to learn than we expected it to be. Sometimes, something is more difficult to learn than we expected it to be. Briefly write about an experience with each extreme that you have had in this course.

- I didn't find anything easier to learn than I expected in terms of important concepts, I don't know if I should feel better that I've been hearing others feeling the same way too or just discouraging to hear that so many feel this way. I feel lost because it feels like I'm given a shovel to build a house and I'm expected to know how to use that shovel to do so many tasks after being shown said task what feels like only once. I sound like a broken record but it isn't a I don't know what I am doing anymore but a collective we don't know what are we doing. But again like last week it was only week 2, it's only week 3 this week. I hope I'm not feeling this way still and saying later "it's only week 8"

## Career 14 - Workshop #3 Prep - Targeted Job Search
