
# Python Functions

In this module, you'll learn to:

- Use default, required, and wildcard inputs.
- Make code reusable by extracting common patterns into separate functions.
- Return values, data structures, or computed results.

## Basics of Python Functions

Functions are the next step after you've learned Python's programming basics. In its simplest form, a function contains code that always returns a value (or values). In some cases, a function also has optional or required inputs.

When you start writing code that duplicates other parts of the program, it becomes a perfect opportunity to extract the code into a function. Although sharing common code through functions is useful, you can also limit the size of code by extracting parts out into smaller (more readable) functions.

Programs that avoid duplication and prevent large functions by using smaller functions are more readable and maintainable. They're also easier to debug when things aren't working right.

Several rules about function inputs are critical for you to fully take advantage of everything that functions have to offer.

**Important:** Although we're using the term input to describe what functions take in, these elements are usually called arguments or parameters. For consistency in this module, we'll refer to inputs as arguments.

### Functions with No Arguments

To create a function, you use the `def` keyword followed by a name, parentheses, and then the body with the function code:

```python
def rocket_parts():
    print("payload, propellant, structure")
```

In this case, `rocket_parts` is the name of the function. That name is followed by the empty parentheses, which indicate that no arguments are needed. To use the function, you must call it by its name using parentheses:

```python
rocket_parts()
```

The `rocket_parts()` function doesn't take any arguments and prints a statement about rocket parts. If you need to use a value that a function is returning, you can assign the function output to a variable:

```python
output = rocket_parts()
```

It might seem surprising that the value for the output variable is `None`. This is because the `rocket_parts()` function didn't explicitly return a value. In Python, if a function doesn't explicitly return a value, it implicitly returns `None`. Updating the function to return the string instead of printing it causes the output variable to have a different value:

```python
def rocket_parts():
    return "payload, propellant, structure"

output = rocket_parts()
print(output)
```

If you need to use the value of a function, that function must return explicitly. Otherwise, `None` is returned.

**Note:** You don't need to always assign the return of a function. In most cases where a function doesn't return a value (or values) explicitly, it means that you don't need to assign or use the implicit `None` that's returned.

### Required and Optional Arguments

In Python, several built-in functions require arguments. Some built-in functions make arguments optional.

An example of a built-in function that requires an argument is `any()`. This function takes an iterable (for example, a list) and returns `True` if any item in the iterable is `True`. Otherwise, it returns `False`.

```python
any([True, False, False])
# Output: True
```

If you call `any()` without any arguments, a helpful exception is raised. The error message explains that you need at least one argument:

```python
any()
# Output:
# TypeError: any() takes exactly one argument (0 given)
```

You can verify that some functions allow the use of optional arguments by using another built-in function called `str()`. This function creates a string from an argument. If no argument is passed in, it returns an empty string:

```python
str()
# Output: ''
```

```python
str(15)
# Output: '15'
```

## Use Function Arguments in Python

### Requiring an Argument

If you're piloting a rocket ship, a function without required inputs is like a computer with a button to tell you the time. If you press the button, a computerized voice tells you the time. But a required input can be a destination to calculate travel distance. Required inputs are called arguments to the function.

To require an argument, put it within the parentheses:

```python
def distance_from_earth(destination):
    if destination == "Moon":
        return "238,855"
    else:
        return "Unable to compute to that destination"
```

Try calling the `distance_from_earth()` function without any arguments:

```python
distance_from_earth()
# Output:
# TypeError: distance_from_earth() missing 1 required positional argument: 'destination'
```

Python raises a `TypeError` with an error message that says the function requires an argument named `destination`. If the rocket ship's computer is asked to compute the travel distance with a destination, it should prompt that a destination is a requirement. The example code has two paths for a response, one for the Moon and the other one for anything else. Use the Moon as input to get an answer:

```python
distance_from_earth("Moon")
# Output: '238,855'
```

Because there's a catch-all condition, try using any other string as the destination to check that behavior:

```python
distance_from_earth("Saturn")
# Output: 'Unable to compute to that destination'
```

### Multiple Required Arguments

To use multiple arguments, you must separate them by using a comma. Let's create a function that can calculate how many days it takes to reach a destination, given distance and a constant speed:

```python
def days_to_complete(distance, speed):
    hours = distance / speed
    return hours / 24
```

Now use the distance from Earth to the Moon to calculate how many days it would take to get to the Moon at a speed limit of 75 miles per hour:

```python
days_to_complete(238855, 75)
# Output: 132.69722222222222
```

### Functions as Arguments

You can use the value of the `days_to_complete()` function and assign it to a variable, and then pass it to `round()` (a built-in function that rounds to the closest whole number) to get a whole number:

```python
total_days = days_to_complete(238855, 75)
round(total_days)
# Output: 133
```

However, a useful pattern is to pass functions to other functions instead of assigning the returned value:

```python
round(days_to_complete(238855, 75))
# Output: 133
```

**Tip:** Although passing functions directly into other functions as input is useful, there is potential for reduced readability. This pattern is especially problematic when the functions require many arguments.

### Exercise - Use Functions in Python

#### Create a Report Generation Function

Your spaceship has three tanks: Main, External, and Hydrogen. You want to create an app to display the amount of fuel in each tank, and the average amount of fuel between the three tanks. Because you wish to reuse this code in other projects, you want to create a function with the logic.

Create a function named `generate_report`. The function will take three parameters named `main_tank`, `external_tank`, and `hydrogen_tank`. When run, the function will display output which resembles the

 following:

```
Fuel report:
    Main tank: ##
    External tank: ##
    Hydrogen tank: ##
```

Your code should resemble the following:

```python
def generate_report(main_tank, external_tank, hydrogen_tank):
    output = f"""Fuel Report:
    Main tank: {main_tank}
    External tank: {external_tank}
    Hydrogen tank: {hydrogen_tank}
    """
    print(output)
```

**Run the Function**

With the function created, add the code to run the function with the following values:

- Main tank: 80
- External tank: 70
- Hydrogen tank: 75

Your code should look like the following:

```python
generate_report(80, 70, 75)
```

**Desired Output**

The output when run should look like this:

```
Fuel Report:
    Main tank: 80
    External tank: 70
    Hydrogen tank: 75
```

## Use Keyword Arguments in Python

Optional arguments require a default value assigned to them. These named arguments are called keyword arguments. Keyword argument values must be defined in the functions themselves. When you're calling a function that's defined with keyword arguments, it isn't necessary to use them at all.

The Apollo 11 mission took about 51 hours to get to the Moon. Let's create a function that returns the estimated time of arrival by using the same value as the Apollo 11 mission as the default:

```python
from datetime import timedelta, datetime

def arrival_time(hours=51):
    now = datetime.now()
    arrival = now + timedelta(hours=hours)
    return arrival.strftime("Arrival: %A %H:%M")
```

The function uses the `datetime` module to define the current time. It uses `timedelta` to allow the addition operation that results in a new time object. After computing that result, it returns the arrival estimation formatted as a string. Try calling it without any arguments:

```python
arrival_time()
# Output: Arrival: Saturday 16:42
```

Even though the function defines a keyword argument, it allows not passing one when you're calling a function. In this case, the `hours` variable defaults to 51. To verify that the current date is correct, use 0 as the value for `hours`:

```python
arrival_time(hours=0)
# Output: Arrival: Thursday 13:42
```

### Mixing Arguments and Keyword Arguments

Sometimes, a function needs a combination of arguments and keyword arguments. In Python, this combination follows a specific order. Arguments are always declared first, followed by keyword arguments.

Update the `arrival_time()` function to take a required argument, which is the name of the destination:

```python
from datetime import timedelta, datetime

def arrival_time(destination, hours=51):
    now = datetime.now()
    arrival = now + timedelta(hours=hours)
    return arrival.strftime(f"{destination} Arrival: %A %H:%M")
```

Because you added a required argument, it's no longer possible to call the function without any arguments:

```python
arrival_time()
# Output:
# TypeError: arrival_time() missing 1 required positional argument: 'destination'
```

Use "Moon" as the value for `destination` to avoid the error:

```python
arrival_time("Moon")
# Output: Moon Arrival: Saturday 16:54
```

You can also pass more than two values, but you need to separate them with a comma. It takes about 8 minutes (0.13 hours) to get to orbit, so use that as an argument:

```python
arrival_time("Orbit", hours=0.13)
# Output: Orbit Arrival: Thursday 14:11
```

## Use Variable Arguments in Python

In Python, you can use any number of arguments and keyword arguments without declaring each one of them. This ability is useful when a function might get an unknown number of inputs.

### Variable Arguments

Arguments in functions are required. But when you're using variable arguments, the function allows any number of arguments (including 0) to be passed in. The syntax for using variable arguments is prefixing a single asterisk (`*`) before the argument's name.

The following function prints the received arguments:

```python
def variable_length(*args):
    print(args)
```

**Note:** It isn't required to call variable arguments `args`. You can use any valid variable name. Although it's common to see `*args` or `*a`, you should try to use the same convention throughout a project.

In this case, `*args` is instructing the function to accept any number of arguments (including 0). Within the function, `args` is now available as the variable that holds all arguments as a tuple. Try out the function by passing any number or type of arguments:

```python
variable_length()
# Output: ()
```

```python
variable_length("one", "two")
# Output: ('one', 'two')
```

```python
variable_length(None)
# Output: (None,)
```

As you can see, there's no restriction on the number or type of arguments passed in.

A rocket ship goes through several steps before a launch. Depending on tasks or delays, these steps might take longer than planned. Let's create a variable-length function that can calculate how many minutes until launch, given how much time each step is going to take:

```python
def sequence_time(*args):
    total_minutes = sum(args)
    if total_minutes < 60:
        return f"Total time to launch is {total_minutes} minutes"
    else:
        return f"Total time to launch is {total_minutes/60} hours"
```

Try out the function by passing any number of minutes:

```python
sequence_time(4, 14, 18)
# Output: Total time to launch is 36 minutes.
```

```python
sequence_time(4, 14, 48)
# Output: Total time to launch is 1.1 hours.
```

**Note:** When you use variable arguments, each value is no longer assigned a variable name. All values are now part of the catch-all variable name that uses the asterisk (`args` in these examples).

### Variable Keyword Arguments

For a function to accept any number of keyword arguments, you use a similar syntax. In this case, a double asterisk is required:

```python
def variable_length(**kwargs):
    print(kwargs)
```

Try the example function, which prints the names and values passed in as `kwargs`:

```python
variable_length(tanks=1, day="Wednesday", pilots=3)
# Output: {'tanks': 1, 'day': 'Wednesday', 'pilots': 3}
```

If you're already familiar with Python dictionaries, you'll notice that variable-length keyword arguments are assigned as a dictionary. To interact with the variables and values, use the same operations as a dictionary.

**Note:** As with variable arguments, you're not required to use `kwargs` when you're using variable keyword arguments. You can use any valid variable name. Although it's common to see `**kwargs` or `**kw`, you should try to use the same convention throughout a project.



In this function, let's use variable keyword arguments to report the astronauts assigned to the mission. Because this function allows any number of keyword arguments, it can be reused regardless of the number of astronauts assigned:

```python
def crew_members(**kwargs):
    print(f"{len(kwargs)} astronauts assigned for this mission:")
    for title, name in kwargs.items():
        print(f"{title}: {name}")
```

Try it out with the crew of the Apollo 11:

```python
crew_members(captain="Neil Armstrong", pilot="Buzz Aldrin", command_pilot="Michael Collins")
# Output:
# 3 astronauts assigned for this mission:
# captain: Neil Armstrong
# pilot: Buzz Aldrin
# command_pilot: Michael Collins
```

Because you can pass any combination of keyword arguments, make sure to avoid repeated keywords. Repeated keywords result in an error:

```python
crew_members(captain="Neil Armstrong", pilot="Buzz Aldrin", pilot="Michael Collins")
# Output:
# SyntaxError: keyword argument repeated: pilot
```

### Exercise - Work with Keyword Arguments

#### Create an Updated Fuel Report Function

Create a new function named `fuel_report`. The function will accept a keyword arguments parameter named `fuel_tanks`. Add the code to loop through the entries provided to generate the following output, where `name` is the name of the keyword argument and `value` is the value:

```python
def fuel_report(**fuel_tanks):
    for name, value in fuel_tanks.items():
        print(f'{name}: {value}')
```

#### Call the Function

With the function created, it's time to call it! Pass in the following values for the keyword arguments:

```python
main = 50
external = 100
emergency = 60
```

Your code should look like the following:

```python
fuel_report(main=50, external=100, emergency=60)
```

#### Desired Output

When run, the result should look like the following:

```
main: 50
external: 100
emergency: 60
```



