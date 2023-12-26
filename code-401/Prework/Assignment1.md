# Introduction to SQL - SQL Practice

## Reading - SQL Database Tutorials

[SQL Database Tutorial for Beginners](https://www.computer-pdf.com/3-sql-database-tutorial-for-beginners)

### Create a new database

To create a new database, you must open up a SQL editor, such as MySQL Workbench or pgAdmin. Once you have the editor open, the following command can be used to create a new database:

```sql
CREATE DATABASE sql_name;
```

Replace "sql_name" with the name you want to give your database. This will create a fresh database with the given name.

#### Create a table

To create a table in your database, you will need to run the following command:

```sql
CREATE TABLE table_name ( column_name1 data_type, column_name2 data_type, ... );
```

Replace "table_name" with the name you want to give your table and "column_name" and "data_type" with the name and type of each column in your table. For instance, you might create a table called "users" with columns for "id", "username", and "password":

```sql
CREATE TABLE users ( id INTEGER PRIMARY KEY, username VARCHAR(255), password VARCHAR(255) );
```

#### Insert data into a table

To insert data into a table, you need to use the INSERT INTO command. For example, to insert a new user into the "users" table, you might run the following command:

```sql
INSERT INTO users (username, password) VALUES ('username', 'password');
```

This will insert a new row into the "users" table with the given username and password.

#### Query data from a table

You need to use the SELECT command to query data from a table. For example, to retrieve all rows from the "users" table, you might run the following command:

```sql
SELECT * FROM users;
```

This will return all rows in the "users" table. You can also specify specific columns to retrieve or add a WHERE clause to filter the results.

#### Update data in a table

To update data in a table, you must use the UPDATE command. For example, to update the password for a specific user, you might run the following command:

```sql
UPDATE users SET password = 'new_password' WHERE username = 'username';
```

This will update the password for the user with the given username.

#### Delete data from a table

You need to use the DELETE command to delete data from a table. For example, to delete a specific user from the "users" table, you might run the following command:

```sql
DELETE FROM users WHERE username = 'username';
```

This will delete the user with the given username from the "users" table.

### Introduction to SQL

SQL is a database programming language that is used to manipulate and manage data stored in relational databases.

SQL is a standard language used by most relational database management systems (RDBMS) such as MySQL, Oracle, MS SQL Server, and others.

#### Basic SQL commands

- **INSERT**: used to add new data to a database.
- **SELECT**: used to retrieve data from a database.
- **DELETE**: used to delete data from a database.
- **UPDATE**: used to modify existing data in a database.

#### Data types

- **VARCHAR**: stores character strings (such as names or addresses).
- **INTEGER**: used to store numerical data.
- **DATE**: used to store date values.

#### Operators

- **AND**: used to combine two or more conditions.
- **OR**: used to specify that either of the two conditions can be true.
- **BETWEEN**: used to specify a range of values.

#### Creating tables

- **CREATE TABLE**: used to create a new table in a database.

#### Modifying tables

- **ALTER TABLE**: used to modify an existing table in a database.

#### Querying data

- **WHERE**: used to filter the results of a SELECT statement based on specified conditions.

#### Joining tables

- **INNER JOIN**: combines rows from two or more tables based on a common column.
- **LEFT JOIN**: return all the rows from the left table and any rows from the right table that match them.

## Practice running common SQL commands using the following SQL Bolt tutorials

![Task 1 SQL Bolt Tutorial](/img/task1.png)

![Task 2 SQL Bolt Tutorial](/img/task2.png)

![Task 3 SQL Bolt Tutorial](/img/task3.png)

![Task 4 SQL Bolt Tutorial](/img/task4.png)

![Task 5 SQL Bolt Tutorial](/img/task5.png)

![Task 6 SQL Bolt Tutorial](/img/task6.png)

![Task 13 SQL Bolt Tutorial](/img/task13.png)

![Task 14 SQL Bolt Tutorial](/img/task14.png)

![Task 15 SQL Bolt Tutorial](/img/task15.png)

![Task 16 SQL Bolt Tutorial](/img/task16.png)

![Task 17 SQL Bolt Tutorial](/img/task17.png)

![Task 18 SQL Bolt Tutorial](/img/task18.png)

### Lessons 1 through 6 - SQL Queries

#### SQL Lesson 1: SELECT queries 101

To retrieve data from a SQL database, we need to write SELECT statements, which are often colloquially referred to as queries. A query in itself is just a statement that declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned. It has a specific syntax, which is what we are going to learn in the following exercises.

As we mentioned in the introduction, you can think of a table in SQL as a type of an entity (i.e., Dogs), and each row in that table as a specific instance of that type (i.e., A pug, a beagle, a different colored pug, etc). This means that the columns would then represent the common properties shared by all instances of that entity (i.e., Color of fur, length of tail, etc).

Given a table of data, the most basic query we could write would be one that selects for a couple of columns (properties) of the table with all the rows (instances).

**Select query for specific columns:**

```sql
SELECT column, another_column, …
FROM mytable;
```

The result of this query will be a two-dimensional set of rows and columns, effectively a copy of the table, but only with the columns that we requested.

If we want to retrieve absolutely all the columns of data from a table, we can then use the asterisk (\*) shorthand in place of listing all the column names individually.

**Select query for all columns:**

```sql
SELECT *
FROM mytable;
```

This query, in particular, is really useful because it's a simple way to inspect a table by dumping all the data at once.

TASK 1

```sql
SELECT title FROM movies;
SELECT director FROM movies;
SELECT director, title FROM movies;
SELECT year, title FROM movies;
SELECT * FROM movies;
```

#### SQL Lesson 2: Queries with constraints (Pt. 1)

In order to filter certain results from being returned, we need to use a WHERE clause in the query. The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.

**Select query with constraints:**

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

More complex clauses can be constructed by joining numerous AND or OR logical keywords (i.e., num_wheels >= 4 AND doors <= 2). Below are some useful operators that you can use for numerical data (i.e., integer or floating point):

| Operator            | Condition                                            | SQL Example                   |
| ------------------- | ---------------------------------------------------- | ----------------------------- |
| =, !=, <, <=, >, >= | Standard numerical operators                         | col_name != 4                 |
| BETWEEN … AND …     | Number is within range of two values (inclusive)     | col_name BETWEEN 1.5 AND 10.5 |
| NOT BETWEEN … AND … | Number is not within range of two values (inclusive) | col_name NOT BETWEEN 1 AND 10 |
| IN (...)            | Number exists in a list                              | col_name IN (2, 4, 6)         |
| NOT IN (...)        | Number does not exist in a list                      | col_name NOT IN (1, 3, 5)     |

In addition to making the results more manageable to understand, writing clauses to constrain the set of rows returned also allows the query to run faster due to the reduction in unnecessary data being returned.

_Did you know?_
As you might have noticed by now, SQL doesn't require you to write the keywords all capitalized, but as a convention, it helps people distinguish SQL keywords from column and table names, and makes the query easier to read.

TASK 2

```sql
SELECT title FROM movies
WHERE id=6;

SELECT Title FROM movies
WHERE Year BETWEEN 2000 AND 2010;

SELECT Title FROM movies
WHERE Year NOT BETWEEN 2000 AND 2010;

SELECT Title FROM movies
WHERE id BETWEEN 1 AND 5;
```

#### SQL Lesson 3: Queries with Constraints (Pt. 2)

When writing WHERE clauses with columns containing text data, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching. We show a few common text-data specific operators below:

| Operator     | Condition                                                                                             | Example                                                            |
| ------------ | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| =            | Case sensitive exact string comparison (notice the single equals)                                     | col_name = "abc"                                                   |
| != or <>     | Case sensitive exact string inequality comparison                                                     | col_name != "abcd"                                                 |
| LIKE         | Case insensitive exact string comparison                                                              | col_name LIKE "ABC"                                                |
| NOT LIKE     | Case insensitive exact string inequality comparison                                                   | col_name NOT LIKE "ABCD"                                           |
| %            | Used anywhere in a string to match a sequence of zero or more characters (only with LIKE or NOT LIKE) | col_name LIKE "%AT%" (matches "AT", "ATTIC", "CAT" or even "BATS") |
| \_           | Used anywhere in a string to match a single character (only with LIKE or NOT LIKE)                    | col*name LIKE "AN*" (matches "AND", but not "AN")                  |
| IN (...)     | String exists in a list                                                                               | col_name IN ("A", "B", "C")                                        |
| NOT IN (...) | String does not exist in a list                                                                       | col_name NOT IN ("D", "E", "F")                                    |

_Did you know?_
All strings must be quoted so that the query parser can distinguish words in the string from SQL keywords.

**TASK 3:**

```sql
SELECT title FROM movies
WHERE title LIKE "%Toy Story%";
```

```sql
SELECT title FROM movies
WHERE director LIKE "%Lasseter%";
```

```sql
SELECT title FROM movies
WHERE director NOT LIKE "%Lasseter%";
```

```sql
SELECT title FROM movies
WHERE title LIKE "%WALL%";
```

#### SQL Lesson 4: Filtering and Sorting Query Results

Even though the data in a database may be unique, the results of any particular query may not be – take our Movies table for example, many different movies can be released the same year. In such cases, SQL provides a convenient way to discard rows that have a duplicate column value by using the DISTINCT keyword.

**Select query with unique results:**

```sql
SELECT DISTINCT column, another_column, …
FROM mytable
WHERE condition(s);
```

Since the DISTINCT keyword will blindly remove duplicate rows, we will learn in a future lesson how to discard duplicates based on specific columns using grouping and the GROUP BY clause.

##### Ordering Results

Unlike our neatly ordered table in the last few lessons, most data in real databases are added in no particular column order. As a result, it can be difficult to read through and understand the results of a query as the size of a table increases to thousands or even millions rows.

To help with this, SQL provides a way to sort your results by a given column in ascending or descending order using the ORDER BY clause.

**Select query with ordered results:**

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC;
```

When an ORDER BY clause is specified, each row is sorted alpha-numerically based on the specified column's value. In some databases, you can also specify a collation to better sort data containing international text.

##### Limiting Results to a Subset

Another clause which is commonly used with the ORDER BY clause are the LIMIT and OFFSET clauses, which are a useful optimization to indicate to the database the subset of the results you care about. The LIMIT will reduce the number of rows to return, and the optional OFFSET will specify where to begin counting the number rows from.

**Select query with limited rows:**

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

If you think about websites like Reddit or Pinterest, the front page is a list of links sorted by popularity and time, and each subsequent page can be represented by sets of links at different offsets in the database. Using these clauses, the database can then execute queries faster and more efficiently by processing and returning only the requested content.

_Did you know?_
If you are curious about when the LIMIT and OFFSET are applied relative to the other parts of a query, they are generally done last after the other clauses have been applied. We'll touch more on this in Lesson 12: Order of execution after introducing a few more parts of the query.

**TASK 4**

```sql
SELECT DISTINCT director FROM movies
ORDER BY director ASC;
```

```sql
SELECT title FROM movies
ORDER BY year DESC
LIMIT 4;
```

```sql
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5;
```

```sql
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5
OFFSET 5;
```

#### SQL Review: Simple SELECT Queries

The basic structure of a SELECT query:

```sql
SELECT column, another_column, …
FROM mytable
WHERE condition(s)
ORDER BY column ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

**TASK 5**

```sql
SELECT city, population FROM north_american_cities
WHERE country = "Canada";
```

```sql
SELECT city FROM north_american_cities
WHERE country LIKE "%United States%"
ORDER BY latitude DESC;
```

```sql
SELECT city, longitude FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;
```

```sql
SELECT city, population FROM north_american_cities
WHERE country LIKE "%Mexico%"
ORDER BY population DESC
LIMIT 2;
```

```sql
SELECT city, population FROM north_american_cities
WHERE country = "United States"
ORDER BY population DESC;
```

#### SQL Lesson 6: Multi-table queries with JOINs

Up to now, we've been working with a single table, but entity data in the real world is often broken down into pieces and stored across multiple orthogonal tables using a process known as normalization.

**Database normalization:**
Database normalization is useful because it minimizes duplicate data in any single table, and allows for data in the database to grow independently of each other (i.e., Types of car engines can grow independent of each type of car). As a trade-off, queries get slightly more complex since they have to be able to find data from different parts of the database, and performance issues can arise when working with many large tables.

In order to answer questions about an entity that has data spanning multiple tables in a normalized database, we need to learn how to write a query that can combine all that data and pull out exactly the information we need.

##### Multi-table queries with JOINs

Tables that share information about a single entity need to have a primary key that identifies that entity uniquely across the database. One common primary key type is an auto-incrementing integer (because they are space efficient), but it can also be a string, hashed value, so long as it is unique.

Using the JOIN clause in a query, we can combine row data across two separate tables using this unique key. The first of the joins that we will introduce is the INNER JOIN.

**Select query with INNER JOIN on multiple tables:**

```sql
SELECT column, another_table_column, …
FROM mytable
INNER JOIN another_table
    ON mytable.id = another_table.id
WHERE condition(s)
ORDER BY column, … ASC/DESC
LIMIT num_limit OFFSET num_offset;
```

The INNER JOIN is a process that matches rows from the first table and the second table which have the same key (as defined by the ON constraint) to create a result row with the combined columns from both tables. After the tables are joined, the other clauses we learned previously are then applied.

_Did you know?_
You might see queries where the INNER JOIN is written simply as a JOIN. These two are equivalent, but we will continue to refer to these joins as inner-joins because they make the query easier to read once you start using other types of joins, which will be introduced in the following lesson.

**TASK 6**

```sql
SELECT title, domestic_sales, international_sales FROM movies
INNER JOIN boxoffice ON movies.id=boxoffice.movie_id;
```

```sql
SELECT title, domestic_sales, international_sales FROM movies
INNER JOIN boxoffice ON movies.id=boxoffice.movie_id
WHERE international_sales > domestic_sales;
```

```sql
SELECT title, rating FROM movies
INNER JOIN boxoffice ON movies.id=boxoffice.movie_id
ORDER BY rating DESC;
```

### Lessons 13 through 18 - Database Management

#### SQL Lesson 13: Inserting Rows

**What is a Schema?**
We previously described a table in a database as a two-dimensional set of rows and columns, with the columns being the properties and the rows being instances of the entity in the table. In SQL, the database schema is what describes the structure of each table, and the datatypes that each column of the table can contain.

_Example: Correlated Subquery_
For example, in our Movies table, the values in the Year column must be an Integer, and the values in the Title column must be a String. This fixed structure is what allows a database to be efficient and consistent despite storing millions or even billions of rows.

**Inserting New Data**
When inserting data into a database, we need to use an INSERT statement, which declares which table to write into, the columns of data that we are filling, and one or more rows of data to insert. In general, each row of data you insert should contain values for every corresponding column in the table. You can insert multiple rows at a time by just listing them sequentially.

_Insert statement with values for all columns:_

```sql
INSERT INTO mytable
VALUES (value_or_expr, another_value_or_expr, …),
       (value_or_expr_2, another_value_or_expr_2, …),
       …;
```

In some cases, if you have incomplete data and the table contains columns that support default values, you can insert rows with only the columns of data you have by specifying them explicitly.

_Insert statement with specific columns:_

```sql
INSERT INTO mytable
(column, another_column, …)
VALUES (value_or_expr, another_value_or_expr, …),
      (value_or_expr_2, another_value_or_expr_2, …),
      …;
```

In these cases, the number of values needs to match the number of columns specified. Despite this being a more verbose statement to write, inserting values this way has the benefit of being forward compatible. For example, if you add a new column to the table with a default value, no hardcoded INSERT statements will have to change as a result to accommodate that change.

In addition, you can use mathematical and string expressions with the values that you are inserting. This can be useful to ensure that all data inserted is formatted a certain way.

_Example Insert statement with expressions:_

```sql
INSERT INTO boxoffice
(movie_id, rating, sales_in_millions)
VALUES (1, 9.9, 283742034 / 1000000);
```

**TASK 13:**

```sql
INSERT INTO movies
VALUES (4, "Toy Story 4", "John Lasseter", 2015, 90);

INSERT INTO boxoffice
VALUES (4, 8.7, 340000000, 270000000);
```

#### SQL Lesson 14: Updating Rows

In addition to adding new data, a common task is to update existing data, which can be done using an UPDATE statement. Similar to the INSERT statement, you have to specify exactly which table, columns, and rows to update. In addition, the data you are updating has to match the data type of the columns in the table schema.

**Update statement with values:**

```sql
UPDATE mytable
SET column = value_or_expr,
    other_column = another_value_or_expr,
    …
WHERE condition;
```

The statement works by taking multiple column/value pairs and applying those changes to each and every row that satisfies the constraint in the WHERE clause.

_Taking Care_
Most people working with SQL will make mistakes updating data at one point or another. Whether it's updating the wrong set of rows in a production database or accidentally leaving out the WHERE clause (which causes the update to apply to all rows), you need to be extra careful when constructing UPDATE statements.

One helpful tip is to always write the constraint first and test it in a SELECT query to make sure you are updating the right rows, and only then writing the column/value pairs to update.

**TASK 14:**

```sql
UPDATE movies
SET director = "John Lasseter"
WHERE title = "A Bug's Life";

UPDATE movies
SET year = 1999
WHERE title = "Toy Story 2";

UPDATE movies
SET director = "Lee Unkrich", title = "Toy Story 3"
WHERE title = "Toy Story 8";
```

#### SQL Lesson 15: Deleting Rows

When you need to delete data from a table in the database, you can use a DELETE statement, which describes the table to act on, and the rows of the table to delete through the WHERE clause.

**Delete statement with condition:**

```sql
DELETE FROM mytable
WHERE condition;
```

If you decide to leave out the WHERE constraint, then all rows are removed, which is a quick and easy way to clear out a table completely (if intentional).

_Taking Extra Care_
Like the UPDATE statement from the last lesson, it's recommended that you run the constraint in a SELECT query first to ensure that you are removing the right rows. Without a proper backup or test database, it is downright easy to irrevocably remove data, so always read your DELETE statements twice and execute once.

**TASK 15:**

```sql
DELETE FROM movies
WHERE year < 2005;

DELETE FROM movies
WHERE director = "Andrew Stanton";
```

#### SQL Lesson 16: Creating Tables

When you have new entities and relationships to store in your database, you can create a new database table using the CREATE TABLE statement.

**Create table statement w/ optional table constraint and default value:**

```sql
CREATE TABLE IF NOT EXISTS mytable (
    column DataType TableConstraint DEFAULT default_value,
    another_column DataType TableConstraint DEFAULT default_value,
    …
);
```

The structure of the new table is defined by its table schema, which defines a series of columns. Each column has a name, the type of data allowed in that column, an optional table constraint on values being inserted, and an optional default value.

If there already exists a table with the same name, the SQL implementation will usually throw an error, so to suppress the error and skip creating a table if one exists, you can use the IF NOT EXISTS clause.

In databases, different data types and constraints are crucial for defining the structure and rules for the tables. Below are the common data types and constraints used in SQL.

| Data Type                                      | Description                                                                                     |
| ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| INTEGER, BOOLEAN                               | Integer datatypes store whole integer values. Boolean values are often represented as integers. |
| FLOAT, DOUBLE, REAL                            | Floating-point datatypes store precise numerical data, suitable for measurements or fractions.  |
| CHARACTER(num_chars), VARCHAR(num_chars), TEXT | Text-based datatypes store strings and text in various locales.                                 |
| DATE, DATETIME                                 | Date and datetime datatypes store timestamps for time series and event data.                    |
| BLOB                                           | Binary Large Object datatypes store binary data like images or documents.                       |

| Constraint         | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| PRIMARY KEY        | Ensures values in the column are unique, identifying each row uniquely.                    |
| AUTOINCREMENT      | For integer values, automatically increments with each row insertion.                      |
| UNIQUE             | Values in the column must be unique, preventing duplicate entries.                         |
| NOT NULL           | Ensures the inserted value cannot be NULL.                                                 |
| CHECK (expression) | Allows running a complex expression to validate inserted values.                           |
| FOREIGN KEY        | Enforces consistency, ensuring values in this column correspond to another table's column. |

_Note: Constraints are rules applied to columns to maintain data integrity._

Docs for data types: [MySQL](https://dev.mysql.com/doc/refman/8.0/en/data-types.html), [Postgres](https://www.postgresql.org/docs/current/datatype.html), [SQLite](https://www.sqlite.org/datatype3.html), [Microsoft SQL Server](https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15)

_Example Schema:_

```sql
CREATE TABLE example_table (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER CHECK (age >= 0),
    registration_date DATE,
    CONSTRAINT unique_name UNIQUE (name)
);

```

**TASK 16:**

```sql
CREATE TABLE IF NOT EXISTS Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);
```

#### SQL Lesson 17: Altering Tables

As your data changes over time, SQL provides a way for you to update your corresponding tables and database schemas by using the ALTER TABLE statement to add, remove, or modify columns and table constraints.

**Adding Columns:**

```sql
ALTER TABLE mytable
ADD column DataType OptionalTableConstraint
    DEFAULT default_value;
```

The syntax for adding a new column is similar to the syntax when creating new rows in the CREATE TABLE statement. You need to specify the data type of the column along with any potential table constraints and default values to be applied to both existing and new rows. In some databases like MySQL, you can even specify where to insert the new column using the FIRST or AFTER clauses, though this is not a standard feature.

**Removing Columns:**

```sql
ALTER TABLE mytable
DROP column_to_be_deleted;
```

Dropping columns is as easy as specifying the column to drop; however, some databases (including SQLite) don't support this feature. Instead, you may have to create a new table and migrate the data over.

**Renaming the Table:**

```sql
ALTER TABLE mytable
RENAME TO new_table_name;
```

If you need to rename the table itself, you can also do that using the RENAME TO clause of the statement.

**Other Changes:**
Each database implementation supports different methods of altering their tables, so it's always best to consult your database docs before proceeding: MySQL, Postgres, SQLite, Microsoft SQL Server.

**TASK 17:**

```sql
ALTER TABLE movies
ADD column Aspect_ratio FLOAT;

ALTER TABLE movies
ADD column Language TEXT DEFAULT "English";
```

#### SQL Lesson 18: Dropping Tables

In some rare cases, you may want to remove an entire table including all of its data and metadata, and to do so, you can use the DROP TABLE statement, which differs from the DELETE statement in that it also removes the table schema from the database entirely.

**Drop Table Statement:**

```sql
DROP TABLE IF EXISTS mytable;
```

Like the CREATE TABLE statement, the database may throw an error if the specified table does not exist, and to suppress that error, you can use the IF EXISTS clause.

In addition, if you have another table that is dependent on columns in the table you are removing (for example, with a FOREIGN KEY dependency), then you will have to either update all dependent tables first to remove the dependent rows or to remove those tables entirely.

**TASK 18:**

```sql
DROP TABLE IF EXISTS movies;

DROP TABLE IF EXISTS BoxOffice;
```
