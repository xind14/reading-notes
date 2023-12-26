# Use Boolean logic in Python

## Write 'if' statements

To express conditional logic in Python, you use if statements. When you're writing an if statement, you're relying on another concept we cover in this module, mathematical operators. Python supports the common logic operators from math: equals, not equals, less than, less than or equal to, greater than, and greater than or equal to. You're probably used to seeing these operators displayed using symbols, which is how they’re represented in Python, too.

### Test expressions

You need to use an if statement to run code only if a certain condition is satisfied. The first thing you do when you write an if statement is to check the condition by using a test expression. You then determine whether the statement evaluates to True or False. If it's True, the next indented code block is run:

```python
a = 97
b = 55
# test expression
if a < b:
    # statement to be run
    print(b)
```

In this example, `a < b` is the test expression. The program evaluates the test expression and then runs the code within the if statement only if the test expression is True. If you evaluate the expression, you know that it's False, so any code you write in the if statement won't be run.

**Note:**
In Python, `None` and `0` are also interpreted as False.

### Write if statements

You use an if statement if you want to run code only if a certain condition is satisfied. The syntax of an if statement is always:

```python
if test_expression:
    # statement(s) to be run
```

For example:

```python
a = 93
b = 27
if a >= b:
    print(a)
```

Output: `93`

In Python, the body of an if statement must be indented. Any code following a test expression that isn't indented will always be run:

```python
a = 24
b = 44
if a <= 0:
    print(a)
print(b)
```

Output: `44`

In this example, the output is `44` because the test expression is False and the `print(b)` statement isn't indented at the same level as the if statement.

## What are 'else' and 'elif' statements?

### Work with else

You know that when you use an if statement, the body of the program will run only if the test expression is True. To add more code that will run when your test expression is False, you need to add an else statement.

Let's adapt an example from the previous section:

```python
a = 27
b = 93
if a >= b:
    print(a)
else:
    print(b)
```

Output: `93`

If the test expression is False, the code in the body of the if statement is skipped, and the program continues running from the else statement. The syntax of an if/else statement is always:

```python
if test_expression:
    # statement(s) to be run
else:
    # statement(s) to be run
```

### Work with elif

In Python, the keyword `elif` is short for else if. Using elif statements enables you to add multiple test expressions to your program. These statements run in the order in which they're written, so your program will enter an elif statement only if the first if statement is False. For example:

```python
a = 27
b = 93
if a <= b:
    print("a is less than or equal to b")
elif a == b:
    print("a is equal to b")
```

Output: `a is less than or equal to b`

In this variation, the `elif` statement in the block of code won't run, because the if statement is True.

The syntax of an if/elif statement is:

```python
if test_expression:
    # statement(s) to be run
elif test_expression:
    # statement(s) to be run
```

### Combine if, elif, and else statements

You can combine if, elif, and else statements to create programs with complex conditional logic. Remember that an `elif` statement is run only when the if condition is false. Also note that an if block can have only one else block, but it can have multiple elif blocks.

Let's look at an example with an if, an elif, and an else statement:

```python
a = 27
b = 93
if a < b:
    print("a is less than b")
elif a > b:
    print("a is greater than b")
else:
    print ("a is equal to b")
```

A code block that uses all three types of statements has the following syntax:

```python
if test_expression:
    # statement(s) to be run
elif test_expression:
    # statement(s) to be run
elif test_expression:
    # statement(s) to be run
else:
    # statement(s) to be run
```

### Work with nested conditional logic

Python also supports nested conditional logic, meaning that you can nest if, elif, and else statements to create even more complex programs. To nest conditions, indent the inner conditions, and everything at the same level of indentation will be run in the same code block:

```python
a = 16
b = 25
c = 27
if a > b:
    if b > c:
        print ("a is greater than b and b is greater than c")
    else:
        print ("a is greater than b and less than c")
elif a == b:
    print ("a is equal to b")
else:
    print ("a is less than b")
```

Nested conditional logic follows the same rules as regular conditional logic within each code block. Here's one example of the syntax:

```python
if test_expression:


    # statement(s) to be run
    if test_expression:
        # statement(s) to be run
    else:
        # statement(s) to be run
elif test_expression:
    # statement(s) to be run
    if test_expression:
        # statement(s) to be run
    else:
        # statement(s) to be run
else:
    # statement(s) to be run
```

### Exercise - Write 'if' statements

In the cell below, add a variable named `object_size` and set it to `10` to represent `10m3`. Then add an `if` statement to test if `object_size` is greater than `5`. If it is, display a message saying `We need to keep an eye on this object`. Otherwise, display a message saying `Object poses no threat`.

Your code could look like the following:

```python
object_size = 10
if object_size > 5:
    print('We need to keep an eye on this object')
else:
    print('Object poses no threat.')
```

Desired output:
When you run the notebook you should see the following result:

```
We need to keep an eye on this object
```

## What are 'and' and 'or' operators?

You might occasionally want to combine test expressions to evaluate multiple conditions in one if, elif, or else statement. In this case, you'd use the Boolean operators `and` and `or`.

### The `or` operator

You can connect two Boolean, or test, expressions by using the Boolean `or` operator. For the entire expression to evaluate to `True`, at least one of the subexpressions must be true. If none of the subexpressions is true, the whole expression evaluates to `False`. For example, in the following expression, the entire test expression evaluates to `True`, because one of the conditions in the subexpressions has been met:

```python
a = 23
b = 34
if a == 34 or b == 34:
    print(a + b)
```

If both subexpressions are true, the entire test expression also evaluates to `True`.

A Boolean expression that uses `or` has the following syntax:

```python
sub-expression1 or sub-expression2
```

### The `and` operator

You can also connect two test expressions by using the Boolean `and` operator. Both conditions in the test expression must be true for the entire test expression to evaluate to `True`. In any other case, the test expression is `False`. In the following example, the entire test expression evaluates to `False`, because only one of the conditions in the subexpressions is true:

```python
a = 23
b = 34
if a == 34 and b == 34:
    print (a + b)
```

A Boolean expression that uses `and` has the following syntax:

```python
sub-expression1 and sub-expression2
```

### The difference between `and` and `or`

To highlight the difference between the two Boolean operators, you can use a truth table. A truth table shows you what the entire test expression evaluates to based on the two subexpressions.

Here's the truth table for `and`:

| subexpression1 | Operator | subexpression2 | Result |
| --------------- | -------- | --------------- | ------ |
| True            | and      | True            | True   |
| True            | and      | False           | False  |
| False           | and      | True            | False  |
| False           | and      | False           | False  |

Here's the truth table for `or`:

| subexpression1 | Operator | subexpression2 | Result |
| --------------- | -------- | --------------- | ------ |
| True            | or       | True            | True   |
| True            | or       | False           | True   |
| False           | or       | True            | True   |
| False           | or       | False           | False  |

### Exercise - Use 'and' and 'or' operators

Add the code to the cell below to create two variables: `object_size` and `proximity`. Set `object_size` to `10` to represent `10m3`. Set `proximity` to `9000`.

Then add the code to display a message saying `Evasive maneuvers required` if both `object_size` is greater than `5` and `proximity` is less than `1000`. Otherwise display a message saying `Object poses no threat`.

Your code should look something like this:

```python
object_size = 10
proximity = 9000

if object_size > 5 and proximity < 1000:
    print('Evasive maneuvers required')
else:
    print('Object poses no threat')
```

Desired output:
When you run the notebook, you should see the following result displayed:

```
Object poses no threat
```

