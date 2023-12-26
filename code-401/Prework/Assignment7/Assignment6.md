
# Use Mathematical Operations in Python

In this module, you'll learn to:

- Understand the mathematical operators available in Python.
- Be aware of the order of operations.
- Convert strings to numbers.

## What are Operators in Python?

### Addition

```python
answer = 30 + 12
print(answer)
```

Output: 42

### Subtraction

```python
difference = 30 - 12
print(difference)
```

Output: 18

### Multiplication

```python
product = 30 * 12
print(product)
```

Output: 360

### Division

```python
quotient = 30 / 12
print(quotient)
```

Output: 2.5

### Work with Division

```python
seconds = 1042
display_minutes = 1042 // 60
display_seconds = 1042 % 60

print(display_minutes)
print(display_seconds)
```

Output:

```
17
22
```

## Order of Operation

Python honors the order of operation for math. The order dictates that expressions should be evaluated in the following order:

1. Parentheses
2. Exponents
3. Multiplication and division
4. Addition and subtraction

```python
result_1 = 1032 + 26 * 2
print(result_1)
```

Output: 1084

```python
result_2 = 1032 + (26 * 2)
print(result_2)
```

Output: 1084

### Exercise - Use Arithmetic Operators

Calculate the distance between two planets: Earth (149,597,870 km) and Jupiter (778,547,200 km).

```python
first_planet = 149597870
second_planet = 778547200

distance = second_planet - first_planet
print(distance)
```

Desired output:

```
628949330
390810995.0389724
```

## Work with Numbers in Python

In this scenario, you'll accept input from a user, convert it to a number, and handle negative values.

### Convert Strings to Numbers

```python
demo_int = int('215')
print(demo_int)

demo_float = float('215.3')
print(demo_float)
```

Output:

```
215
215.3
```

### Absolute Values

```python
print(abs(39 - 16))
print(abs(16 - 39))
```

Output:

```
23
23
```

### Rounding

```python
print(round(1.4))
print(round(1.5))
print(round(2.5))
print(round(2.6))
```

Output:

```
1
2
2
3
```

### Math Library

```python
from math import ceil, floor

round_up = ceil(12.5)
print(round_up)

round_down = floor(12.5)
print(round_down)
```

Output:

```
13
12
```

### Exercise - Convert Strings to Numbers and Use Absolute Values

Read the values from the user, convert to numbers, and calculate the absolute value.

```python
first_planet_input = input("Enter the distance from the sun for the first planet: ")
second_planet_input = input("Enter the distance from the sun for the second planet: ")

first_planet = int(first_planet_input)
second_planet = int(second_planet_input)

distance_km = second_planet - first_planet
print(abs(distance_km))
```

