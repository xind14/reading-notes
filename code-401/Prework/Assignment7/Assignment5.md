
# Use Strings in Python

In this module, you'll learn to:

- Use special string methods.
- Use variables to introduce values in text.
- Apply other advanced formatting techniques to change how text is presented.

## String Basics in Python

Although strings in Python appear to be simple and straightforward, there's some complexity in string rules that's important to grasp. Knowing the rules helps you avoid being surprised by string behavior when you're modifying values or formatting text.

### A Simple String

In our example for this unit, you have a single fact about the Moon that's assigned to a variable, like this:

```python
fact = "The Moon has no atmosphere."
print(fact)
```

The output shows that the text has been assigned to the variable: "The Moon has no atmosphere."

### Immutability of Strings

In Python, strings are immutable. That is, they can't change. This property of the string type can be surprising because Python doesn't give you errors when you alter strings.

You need to add another fact (sentence) to the single fact that's assigned to a variable. It seems as though adding the second fact would alter the variable, as in the following example:

```python
fact = "The Moon has no atmosphere."
fact + "No sound can be heard on the Moon."
```

You might expect the output to be: "The Moon has no atmosphere. No sound can be heard on the Moon."

Although it might look as though we've modified the variable fact, a quick check of the value reveals that the original value is unchanged:

```python
fact = "The Moon has no atmosphere."
fact + "No sound can be heard on the Moon."
print(fact)
```

Output: "The Moon has no atmosphere."

The trick is that you must use a return value. When you add strings, Python doesn't modify any string, but it returns a new string as the result. To keep this new result, assign it to a new variable:

```python
fact = "The Moon has no atmosphere."
two_facts = fact + "No sound can be heard on the Moon."
print(two_facts)
```

Output: "The Moon has no atmosphere. No sound can be heard on the Moon."

Operations on strings always produce new strings as a result.

### About Using Quotation Marks

You can enclose Python strings in single, double, or triple quotation marks. Although you can use them interchangeably, it's best to use one type consistently within a project.

For example, the following string uses double quotation marks:

```python
moon_radius = "The Moon has a radius of 1,080 miles."
```

However, when a string contains words, numbers, or special characters (a substring) that are also enclosed in quotation marks, you should use a different style. For example, if a substring uses double quotation marks, enclose the entire string in single quotation marks, as shown here:

```python
'The "near side" is the part of the Moon that faces the Earth.'
```

Similarly, if there are single quotation marks (or an apostrophe, as in Moon's in the following example) anywhere within the string, enclose the entire string in double quotation marks:

```python
"We only see about 60% of the Moon's surface."
```

Failure to alternate single and double quotation marks can cause the Python interpreter to raise a syntax error.

### Multiline Text

There are a few different ways to define multiple lines of text as a single variable. The most common ways are:

- Use a newline character (\n).
- Use triple quotation marks (""").

Newline characters separate the text into multiple lines when you print the output:

```python
multiline = "Facts about the Moon:\n There is no atmosphere.\n There is no sound."
print(multiline)
```

Output:

```
Facts about the Moon:
 There is no atmosphere.
 There is no sound.
```

You can achieve the same result by using triple quotation marks:

```python
multiline = """Facts about the Moon:
 There is no atmosphere.
 There is no sound."""
print(multiline)
```

## String Methods in Python

String methods are one of the most common method types in Python. You'll often need to manipulate strings to extract information or fit a certain format. Python includes several string methods that are designed to do the most common and useful transformations.

String methods are part of the str type. This means that the methods exist as string variables or part of the string directly.

### Examples of String Methods

#### Title Case

```python
print("temperatures and facts about the moon".title())
```

Output: "Temperatures And Facts About The Moon"

#### Split a String

A common string method is `.split()`. Without arguments, the method will separate the string at every space. This would create a list of every word or number that's separated by a space:

```python
temperatures = "Daylight: 260 F Nighttime: -280 F"
temperatures_list = temperatures.split()
print(temperatures_list)
```

Output: `['Daylight:', '260', 'F', 'Nighttime:', '-280', 'F']`

#### Search for a String

```python
print("Moon" in "This text will describe facts about the Moon")
```

Output: `True`

```python
temperatures = """Saturn has a daytime temperature of -170 degrees Celsius, while Mars has -28 Celsius."""
print(temperatures.find("Mars"))
```

Output: `64`

#### Check Content

```python
temperatures = """Saturn has a daytime temperature of -170 degrees Celsius, while Mars has -28 Celsius."""
print(temperatures.count("Mars"))
print(temperatures.count("Moon"))
```

Output:

```
1
0
```

Strings in Python are case-sensitive, which means that Moon and moon are considered different words.

#### Transform Text

```python
text = "Temperatures on the Moon can vary wildly."
print("temperatures" in text.lower())
```

Output: `True`

#### Join Strings

```python
moon_facts = ["The Moon is drifting away from the Earth.", "On average, the Moon is moving about 4cm every year."]
print(' '.join(moon_facts))
```

Output: "The Moon is drifting away from the Earth. On average, the Moon is moving about 4cm every year."

### Exercise - Transform Text by Using String Methods

Start by storing the following paragraph in a variable named text:

```python
text = """Interesting facts about the Moon. The Moon is Earth's only satellite. There are several interesting facts about the Moon and how it affects life here on Earth.
On average, the Moon moves 4cm away from the Earth every year. This yearly drift is not significant enough to cause immediate effects on Earth. The highest daylight temperature of the Moon is 127 C."""
```

#### Separate the Paragraph into Sentences

```python
sentences = text.split('. ')
print(sentences)
```

Desired output:

```
['Interesting facts about the Moon', "The Moon is Earth's only satellite", 'There are several interesting facts about the Moon and how it affects life here on Earth', 'On average, the Moon moves 4cm away

 from the Earth every year', 'This yearly drift is not significant enough to cause immediate effects on Earth', 'The highest daylight temperature of the Moon is 127 C.']
```

#### Find Keywords

```python
for sentence in sentences:
    if 'temperature' in sentence:
        print(sentence)
```

Desired output:

```
The highest daylight temperature of the Moon is 127 C.
```

## String Format in Python

Besides transforming text and performing basic operations, such as matching and searching, it's essential to format the text when you're presenting information. The simplest way to present text information with Python is to use the `print()` function. You'll find it critical to get information in variables and other data structures into strings that `print()` can use.

### Percent Sign (%) Formatting

The placeholder for the variable in the string is `%s`. After the string, use another `%` character followed by the variable name. The following example shows how to format by using the `%` character:

```python
mass_percentage = "1/6"
print("On the Moon, you would weigh about %s of your weight on Earth." % mass_percentage)
```

Output: "On the Moon, you would weigh about 1/6 of your weight on Earth."

Using multiple values changes the syntax, as it requires parentheses to surround the variables that are passed in:

```python
print("""Both sides of the %s get the same amount of sunlight, but only one side is seen from %s because the %s rotates around its own axis when it orbits %s.""" % ("Moon", "Earth", "Moon", "Earth"))
```

Output: "Both sides of the Moon get the same amount of sunlight, but only one side is seen from Earth because the Moon rotates around its own axis when it orbits Earth."

**Tip:** Although this method is still a valid way to format strings, it can lead to errors and decreased clarity in code when you're dealing with multiple variables. Either of the other two formatting options described in this unit would be better suited to this purpose.

### The `.format()` Method

The `.format()` method uses braces (`{}`) as placeholders within a string, and it uses variable assignment for replacing text.

```python
mass_percentage = "1/6"
print("On the Moon, you would weigh about {} of your weight on Earth.".format(mass_percentage))
```

Output: "On the Moon, you would weigh about 1/6 of your weight on Earth."

You don't need to assign repeated variables multiple times, making it less verbose because fewer variables need to be assigned:

```python
mass_percentage = "1/6"
print("""You are lighter on the {0}, because on the {0} you would weigh about {1} of your weight on Earth.""".format("Moon", mass_percentage))
```

Output: "You are lighter on the Moon, because on the Moon you would weigh about 1/6 of your weight on Earth."

Instead of empty braces, the substitution is to use numbers. The `{0}` means to use the first (index of zero) argument to `.format()`, which in this case is Moon. For simple repetition `{0}` works well, but it reduces readability. To improve readability, use keyword arguments in `.format()` and then reference the same arguments within braces:

```python
mass_percentage = "1/6"
print("""You are lighter on the {moon}, because on the {moon} you would weigh about {mass} of your weight on Earth.""".format(moon="Moon", mass=mass_percentage))
```

Output: "You are lighter on the Moon, because on the Moon you would weigh about 1/6 of your weight on Earth."

### About F-strings

As of Python version 3.6, it's possible to use f-strings. These strings look like templates and use the variable names from your code. Using f-strings in the preceding example would look like this:

```python
print(f"On the Moon, you would weigh about {mass_percentage} of your weight on Earth.")
```

Output: "On the Moon, you would weigh about 1/6 of your weight on Earth."

The variables go within braces, and the string must use the `f` prefix.

Aside from f-strings being less verbose than any other formatting option, it's possible to use expressions within the braces. These expressions can be functions or direct operations. For example, if you want to represent the 1/6 value as a percentage with one decimal place, you can use the `round()` function directly:

```python
print(round(100/6, 1))
```

Output: 16.7

With f-strings, you don't need to assign a value to a variable beforehand:

```python
print(f"On the Moon, you would weigh about {round(100/6, 1)}% of your weight on Earth.")
```

Output: "On the Moon, you would weigh about 16.7% of your weight on Earth."

Using an expression doesn't require a function call. Any of the string methods are valid as well. For example, the string could enforce a specific casing for creating a heading:

```python
subject = "interesting facts about the moon"
heading = f"{subject.title()}"
print(heading)
```

Output: "Interesting Facts About The Moon"

### Exercise - Format Strings

Create the variables:

```python
name = 'Ganymede'
planet = 'Mars'
gravity = '1.43'
```

Use the template to display information about the moon:

```python
template = "Gravity Facts about {name}
-------------------
Planet Name: {planet}
Gravity on {name}: {gravity} m/s2"
print(template.format(name=name, planet=planet, gravity=gravity))
```

Desired output:

```
Gravity Facts about Ganymede
--------------------------
Planet Name: Mars
Gravity on Ganymede: 1.43 m/s2
```


