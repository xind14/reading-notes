# Lab 5C - CSS Diner Notes

> Complete all 32 levels of the [CSS Diner](https://flukeout.github.io/) tutorial. Reference [MDN CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

1. `Type Selector`: select elements by their type 
    - `A`

    - Selects all elements of type A. Type refers to the type of tag, so `div`, `p` and `ul` are all different element types.
    - select the plates: `plate`

2. Same as above

3. `ID Selector`: select elements with an ID
    - `#id`

    - Selects the element with a specific id. You can also combine the ID selector with the type selector.
    - select the fancy plate: `#fancy`

4. `Descendant Selector`: select an element inside another element 
    - `A  B`

    - Selects all B inside of A. B is called a descendant because it is inside of another element.
    - select the apple on the plate: `plate apple`

5. `Combine the Descendant & ID Selectors`: you can combine any selector with the descendent selector.
    - `#id  A`

    - select the pickle on the fancy plate: `#fancy pickle`

6. `Class Selector`: select elements by their class 
    - `.classname`

    - The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.
    - select the small apples: `.small`

7. `Combine the Class Selector`: you can combine the class selector with other selectors, like the type selector.
    - `A.className`

8. Select the small oranges in the bentos: `bento orange.small`

9. `Comma Combinator`: combine, selectors, with... commas! 
    - `A, B`

    - Thanks to Shatner technology, this selects all A and B elements. You can combine any selectors this way, and you can specify more than two.
    - select all the plates and bentos: `plate, bento`

10. `Universal Selector`: you can select everything! 
    - `*`

    - You can select all elements with the universal selector!
    - select all the things: `*`

11. `Combine the Universal Selector` 
    - `A  *`

    - This selects all elements inside of A.
    - select everything on a plate: `plate *`

12. `Adjacent Sibling Selector`: select an element that directly follows another element   
    - `A + B`

    - This selects all B elements that directly follow A. Elements that follow one another are called siblings. They're on the same level, or depth.
    - In the HTML markup for this level, elements that have the same indentation are siblings.
    - select every apple that's next to a plate: `plate+apple`

13. `General Sibling Selector`: select elements that follows another element
    - `A ~ B`

    - You can select all siblings of an element that follow it. This is like the `Adjacent Selector (A + B)` except it gets all of the following elements instead of one.
    - select the pickles besides the bento: `bento~pickle`

14. `Child Selector`: select direct children of an element
    - `A > B` 

    - You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element.
    - Elements that are nested deeper than that are called descendant elements.
    - select the apple directly on a plate: `plate>apple`

15. `First Child Pseudo-selector`: select a first child element inside of another element
    - `:first-child`

    - You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.
    - select the top orange: `orange:first-child`

16. `Only Child Pseudo-selector`: select an element that are the only element inside of another one. 
    - `:only-child`

    - You can select any element that is the only element inside of another one.
    - select the apple and the pickle on the plates: `plate apple, plate pickle:only-child`

17. `Last Child Pseudo-selector`: select the last element inside of another element
    - `:last-child`

    - You can use this selector to select an element that is the last child element inside of another element.
    - Pro Tip → In cases where there is only one element, that element counts as the first-child, only-child and last-child!
    - select small apple on plate and pickle: `apple:last-child, pickle:last-child`

18. `Nth Child Pseudo-selector`: select an element by its order in another element
    - `:nth-child(A)`

    - Selects the nth (Ex: 1st, 3rd, 12th etc.) child element in another element.
    - select the 3rd plate: `plate:nth-child(3)`

19. `Nth Last Child Selector`: select an element by its order in another element, counting from the back 
    - `:nth-last-child(A)`

    - Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!
    - select the first bento from (plate bento plate bento line): `bento:nth-last-child(3)`

20. `First of Type Selector`: select the first element of a specific type
    - `:first-of-type`

    - Selects the first element of that type within another element.
    - select first apple: `apple:first-of-type`

21. `Nth of Type Selector`: selects a specific element based on its type and order in another element - or even or odd instances of that element.
    - `:nth-of-type(A)`

    - select all even plates:  `plate:nth-of-type(even)`

22. `Nth-of-type Selector with Formula`: the nth-of-type formula selects every nth element, starting the count at a specific instance of that element.
    - `:nth-of-type(An+B)`

    - select every 2nd plate, starting from the 3rd: `plate:nth-of-type(2n+3)`

23. `Only of Type Selector`: select elements that are the only ones of their type within of their parent element 
    - `:only-of-type`

    - Selects the only element of its type within another element.
    - select the apple on the middle plate `plate apple:only-of-type`

24. `Last of Type Selector`: select the last element of a specific type 
    - `:last-of-type`

    - Selects each last element of that type within another element. Remember type refers the kind of tag, so p and span are different types.
    - select the last apple and orange orange: `last-of-type, apple:last-of-type`

25. `Empty Selector`: select elements that don't have children 
    - `:empty`

    - Selects elements that don't have any other elements inside of them.
    - select the empty bentos: `bento:empty`

26. `Negation Pseudo-class`: select all elements that don't match the negation selector     
    -`:not(X)`

    - You can use this to select all elements that do not match selector "X".
    - select the big apples: `apple:not(.small)`

27. `Attribute Selector`: select all elements that have a specific attribute
    - `[attribute]`

    - Attributes appear inside the opening tag of an element, like this: `span attribute="value"`. An attribute does not always have a value, it can be blank!
    - select the items for someone ex `<apple for="name"/>`: `[for]`

28. `Attribute Selector`: select all elements that have a specific attribute. Combine the attribute selector with another selector (like the tag name selector) by adding it to the end. 
    - `A[attribute]`

    - select plates for sarah and luke only: `plate[for]`

29. `Attribute Value Selector`: select all elements that have a specific attribute value  
    - `[attribute="value"]`

    - Attribute selectors are case sensitive, each character must match exactly.
    - select vitaly's meal: `[for="Vitaly"]`

30. `Attribute starts With Selector`: select all elements with an attribute value that starts with specific characters 
    - `[attribute^="value"]`

    - select the items for names that start with "Sa": `[for^="Sa"]`

31. `Attribute Ends With Selector`: select all elements with an attribute value that ends with specific characters 
    - `[attribute$="value"]`

    - Select the items for names that end with 'ato': `[for$="ato"]`

32. `Attribute Wildcard Selector`: select all elements with an attribute value that contains specific characters anywhere 
    - `[attribute*="value"]`
    
    - A useful selector if you can identify a common pattern in things like `class`, `href` or `src` attributes.
    - Select the meals for names that contain 'obb': `[for*="obb"]`
