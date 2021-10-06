---
title: "CSS Logical Properties "
author: Kunal Singh
description: CSS logical properties are properties which are used to design
  element on the basis of a particular logic. This logic is related to the
  writing-mode/language of the content etc.
tags:
  - post
  - css
  - html
date: 2021-10-05T14:09:46.169Z
image: /img/post/pexels-photo-6190327.jpeg
imageAlt: CSS Logical Properties
readTime: 5 Minutes ⌚
---
## CSS Logical Properties

### What are logical properties

CSS logical properties are properties which are used to design element on the basis of a particular logic. This logic is usually related to the writing-mode/language of the content etc.

According to MDN Docs

> CSS Logical Properties and Values is a module of CSS introducing logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings.

#### Example 

```css

/* Physical Dimensions */
section{
 margin-top:2px solid; 
 margin-bottom:2px solid; 
}

/* Logical Directions */ 
section{
 margin-block:2px solid; 
}
```





To go further you have to understand the two types of flow we have in CSS.

#### 1. Block Flow

Block flow is perpendicular to the flow of the text. Usually \[for English] it is the vertical flow. So when you use `display:block` the element takes up the entire width and renders the next element below. 

#### 2. Inline Flow

Inline flow is parallel to the flow of the text. Usually \[for English] it is the horizontal flow. So when you use `display:inline` the element takes the minimum width and the next element is rendered adjacent to it.

The box model will give you a good idea of this 

![CSS Box Model](/img/post/group-1.png)

```css

/* The logical properties can be used with margin padding width height border etc */ 

section{
 margin-block:10px; /* shorthand for margin  block start and end */ 
 margin-inline:20px; /* shorthand for margin inline start and end */
 /* 
 For explicity selecting single dimension use : 

margin-block-start | margin-block-end | margin-inline-start | margin-inline-end
*/    
}

/* similarly for all other properties */

```

### Why CSS Logical Properties

The more you use logical properties the more you will realize how easy ,intuitive and robust your UI has become after adding them 🚀. 

Okay enough theory let me share an example with you.

Consider a paragraph with which has a margin left of 20px. Now if you were to make the website multilingual and had converted it into Arabic\[right to left language] or Japanese\[top to bottom language] not only will this margin cause the UI to break but also make the user experience terrible.

I know it can be difficult getting your head around these new properties let alone using them in your projects 😁. Lets consider an even simpler example. 

We all had a margin in the left side of the note-book since we write in English\[left to right]. Now if someone is writing in Arabic\[right to left] this margin is useless. css logical properties simply suggests us to use `margin-inline-start` instead of `margin-left` , So when the writing starts from  ◀left the margin will be added to ◀left and when the language starts from right▶ the margin is added to right▶. Same for Top🔝 to bottom bottom languages as well.  

In summary if you start using logical properties in your css. You will have a more accessible UI which works across different languages and writing modes.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="RwgmowR" data-user="singhkunal2050" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/singhkunal2050/pen/RwgmowR">
  Logical Properties CSS Examples</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Example of CSS Logical Properties

Here you just have to remember the rules for block and inline flow. These are paired up with start and end. When you use something like   `margin-block-start` or   `margin-block-end`. You can also use  `margin-block` which adds  margin to the start and end of the block, same applies for inline flow as well.

`min-height`  ,
`max-height`  ,
`min-width`  ,
`max-width`  ,
`border-block` ,
`border-block-color` ,
`border-block-end` ,
`border-block-end-color` ,
`border-block-end-style` ,
`border-block-end-width` ,
`border-block-start` ,
`border-block-start-color` ,
`border-block-start-style` ,
`border-block-start-width` ,
`border-block-style` ,
`border-block-width` ,
`border-color` ,
`border-inline` ,
`border-inline-color` ,
`border-inline-end` ,
`border-inline-end-color` ,
`border-inline-end-style` ,
`border-inline-end-width` ,
`border-inline-start` ,
`border-inline-start-color` ,
`border-inline-start-style` ,
`border-inline-start-width` ,
`border-inline-style` ,
`border-inline-width` ,
`border-start-start-radius` ,
`border-start-end-radius` ,
`border-end-start-radius` ,
`border-end-end-radius` ,
`border-style` ,
`border-width` ,
`margin-block` ,
`margin-block-end` ,
`margin-block-start` ,
`margin-inline` ,
`margin-inline-end` ,
`margin-inline-start` ,
`padding-block` ,
`padding-block-end` ,
`padding-block-start` ,
`padding-inline` ,
`padding-inline-end` ,
`padding-inline-start`

I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*