
# Introduction to Lists in Python

In this module, you'll learn to:

- Identify when to use a list.
- Create a list.
- Access a particular item in a list by using indexes.
- Push items to the end of a list.
- Sort and slice a list.

## Introducing Lists

### Create a List

You create a list by assigning a sequence of values to a variable. Each value is separated by a comma and surrounded by brackets ([]).

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
```

### Access List Items by Index

You can access any item in a list by putting the index in brackets [] after the list variable's name. Indexes start from 0.

```python
print("The first planet is", planets[0])
print("The second planet is", planets[1])
print("The third planet is", planets[2])
```

### Modify Values in a List

You can modify values in a list by using an index.

```python
planets[3] = "Red Planet"
print("Mars is also known as", planets[3])
```

### Determine the Length of a List

To get the length of a list, use the built-in function `len()`.

```python
number_of_planets = len(planets)
print("There are", number_of_planets, "planets in the solar system.")
```

### Add Values to Lists

Lists in Python are dynamic. To add an item to a list, use the method `.append(value)`.

```python
planets.append("Pluto")
number_of_planets = len(planets)
print("There are actually", number_of_planets, "planets in the solar system.")
```

### Remove Values from Lists

You can remove the last item in a list by calling the `.pop()` method on the list variable.

```python
planets.pop()  # Goodbye, Pluto
number_of_planets = len(planets)
print("No, there are definitely", number_of_planets, "planets in the solar system.")
```

### Use Negative Indexes

Negative indexes start at the end of the list and work backward.

```python
print("The last planet is", planets[-1])
print("The penultimate planet is", planets[-2])
```

### Find a Value in a List

To determine where in a list a value is stored, use the list's `index()` method.

```python
jupiter_index = planets.index("Jupiter")
print("Jupiter is the", jupiter_index + 1, "planet from the sun")
```

## Exercise - Create and Use Python Lists

### Add All Planets to a List

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
print(planets)
```

### Display the Number of Planets

```python
print("There are", len(planets), "planets")
```

### Add a Planet to the List

```python
planets.append("Pluto")
print("Actually, there are", len(planets), "planets")
print(planets[-1], "is the last planet")
```

## Work with Numbers in Lists

To store numbers with decimal places in Python, use the `float` type.

```python
gravity_on_earth = 1.0
gravity_on_the_moon = 0.166
```

Create a list that shows the gravitational forces of all eight planets in the solar system.

```python
gravity_on_planets = [0.378, 0.907, 1, 0.377, 2.36, 0.916, 0.889, 1.12]
```

Calculate the weight of a double-decker bus on different planets.

```python
bus_weight = 124054  # in Newtons, on Earth

print("On Earth, a double-decker bus weighs", bus_weight, "N")
print("On Mercury, a double-decker bus weighs", bus_weight * gravity_on_planets[0], "N")
```

### Use `min()` and `max()` with Lists

Calculate the minimum and maximum weights in the solar system.

```python
bus_weight = 12650  # in Newtons, on Earth

print("On Earth, a double-decker bus weighs", bus_weight, "N")
print("The lightest a bus would be in the solar system is", bus_weight * min(gravity_on_planets), "N")
print("The heaviest a bus would be in the solar system is", bus_weight * max(gravity_on_planets), "N")
```

## Manipulate List Data

### Slice Lists

Retrieve a portion of a list by using a slice.

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
planets_before_earth = planets[0:2]
print(planets_before_earth)
```

Display all planets up to the selected one.

```python
print("Here are the planets closer than " + user_planet)
print(planets[0:planet_index])
```

Display planets farther from the sun.

```python
print("Here are the planets further than " + user_planet)
print(planets[planet_index + 1:])
```

### Join Lists

Join two lists by using the `+` operator.

```python
amalthea_group = ["Metis", "Adrastea", "Amalthea", "Thebe"]
galilean_moons = ["Io", "Europa", "Ganymede", "Callisto"]

regular_satellite_moons = amalthe

a_group + galilean_moons
print("The regular satellite moons of Jupiter are", regular_satellite_moons)
```

### Sort Lists

Sort a list using the `.sort()` method.

```python
regular_satellite_moons.sort()
print("The regular satellite moons of Jupiter are", regular_satellite_moons)
```

Sort a list in reverse order.

```python
regular_satellite_moons.sort(reverse=True)
print("The regular satellite moons of Jupiter are", regular_satellite_moons)
```

## Exercise - Work with List Data

### Create the List of Planets

```python
planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
```

### Prompt the User for the Reference Planet

```python
user_planet = input("Please enter the name of the planet (with a capital letter to start)")
```

### Find the Location of the Selected Planet

```python
planet_index = planets.index(user_planet)
```

### Display Planets Closer to the Sun

```python
print("Here are the planets closer than " + user_planet)
print(planets[0:planet_index])
```

### Display Planets Further

```python
print("Here are the planets further than " + user_planet)
print(planets[planet_index + 1:])
```
