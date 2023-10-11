# Class 5 - Design Web Pages with CSS

![Example CSS for a Header](https://media.snl.no/media/186024/standard_css.png)

## Lab 5 - Design Web Pages with CSS

### Setup

1. Recreate your wireframe, and work with your partner to identify what styles you can apply.
2. Label your wireframe with what colors go where.

### Resources Link/Pages

1. [Coolors Color Palette](https://coolors.co/)
2. [CSS Properties](https://css-tricks.com/almanac/properties/)

### Written Class Notes

- CSS: `sector {property: value;}` make sure p:v are in formated in different lines so not all smushed together
- **Inline**: inside an element tag `<body style="background-color:red>`
- **Internal**: `<style></style>` at beginning code
- **External**: separate `style.css file` need to link in html `<link rel="stylesheet" href="style.css">`
- Inline overides other two. Styles declared later in document overides styles declared earlier. 
- Use `* {border:1px solid black;}` to show how much space an element is taking. * means to grab all. 
- Float element lets other elements invade selectors space `h1{float:left;}`
- Can specify location before selector in css to narrow down what it applies to like nav li affects lists in nav section
- **Class**: Groups attributes that are similar. ex `<section class "can make up name of class">` then in css use the class selector which is a period `.made up name`
- **ID**: Gives name to element that is unique no other element should have the same ID. Use ID selector `#`
- **Margin** is space outside element

## Read 5 - Design Web Pages with CSS Discussion and Reflection

### Resources Link/Pages

1. [What is CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS)
    - Includes a selector {property: value;}
    - CSS is divided into modules that have specific styling choices 
2. [How to Add CSS](https://www.w3schools.com/css/css_howto.asp)
3. [CSS Color](https://www.w3schools.com/cssref/pr_text_color.php)
4. [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
5. [Myers Web Reset Stylesheet](https://meyerweb.com/eric/tools/css/reset/)

### Answer

1. What is the purpose of CSS?
    - Cascading Style Sheets: changes how HTML elements are shown by adding style and manipulate HTML into something visually pleasing and readable.
2. What are the three ways to insert CSS into your project?
    - External: creating a separate css file and use the link element.
    - Internal: applies styles for multiple elements on a page. Used inside style element inside head section
    - Inline: apply to a single element using style attribute
3. Write an example of a CSS rule that would give all "< p >" elements red text.
    - P {
      color: read;
      }

