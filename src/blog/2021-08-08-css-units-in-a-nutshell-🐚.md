---
title: CSS Units in a Nutshell 🐚
author: Kunal Singh
description: "Are you still writing your css units in pixels and percentages? if
  you are then I would recommend you check out this article where we will "
tags:
  - post
  - css
  - html
date: 2021-08-08T10:29:10.938Z
image: /img/post/css-units-cover.jpeg
imageAlt: CSS Units
readTime: 2 Minutes ⌚
---
# CSS Units in a nutshell 🐚

Are you still writing your css units in pixels and percentages? if you are then I would recommend you check out this article where we will cover all  possible CSS units with example and its details of use cases.

There are two types of length units: **absolute** and **relative**.
1 to 6 in the list are absolute units while the remaining ones are relative to other elements in the DOM

## List of Units

<div style="columns:70px">

1. [px](#px)
2. [in](#in)
3. [mm](#mm)
4. [cm](#cm)
5. [pt](#pt)
6. [pc](#pc)
7. [%](#percentage)
8. [em](#em)
9. [rem](#rem)
10. [ch](#ch)
11. [vh](#vh)
12. [vw](#vw)
13. [vmin](#vmin)
14. [vmax](#vmax)
15. [ex](#ex)
16. [fr](#fr)

</div>
 
<br><br>

<h1 style="scroll-margin-top: 100px;"  id="px">
	Pixels
</h1>

Pixels are the most commonly used way to assign length in css. A pixel represents the smallest possible unit of the screen.

> a minute area of illumination on a display screen, one of many from which an image is composed.

```css
/* Used for defining absolute values */
h1{
  padding:10px;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="in">
	Inches
</h1>

1 Inch =  96px = 2.54cm

Inch is not so commonly used but it has the same behaviour as px just a different unit of measurement.

```css
/* Used for defining absolute values */
h1{
  padding:10in;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="mm">
	Milimeters
</h1>

```css
/* Used for defining absolute values */
h1{
  padding:10mm;
}
```

<br><br><h1 style="scroll-margin-top: 100px;"  id="cm">
	Centimeters

</h1>

```css
/* Used for defining absolute values */
h1{
  padding:5cm;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="pt">
	Points | 1pt = 1/72 of 1in
</h1>

```css
/* Used for defining absolute values */
h1{
  padding:10pt;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="pc">
	picas | 1pc = 12pt
</h1>

```css
/* Used for defining absolute values */
h1{
  padding:10pc;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="percentage">
	Percentage
</h1>

```css
/* Sizes the child on the basis of its parents parent element's length. */
img{
  max-width:100%;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="em">
	em
</h1>

```css
/* Relative to the font size of the current element  */
/* if font size is 16px then 1em = 16px and 2em = 32px */

h1{
  padding:10em;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="rem">
	rem
</h1>

```css
/* Relative to the font size of the root element  */
/* if font size is 16px then 1rem = 16px and 2em = 32px */

:root{
  font-size:35px
}

h1{
  padding:3rem; 
  /* This will be equal to 3*35 = 105px */
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="ch">
	ch
</h1>

```css
/* Relative to the width of the a character "_" */
h1{
  padding:1ch;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="vh">
	vh : View Height
</h1>

```css
/* Relative to the height of the window  */
section{
  min-height:70vh;
  /* covers 70% of the screen height */
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="vw">
	vw : View Width
</h1>

```css
/* Relative to the width of the window  */
section{
  max-width:90vw;
  margin:0 auto; 
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="vmin">
	vmin : Minimum width out of vw and vh
</h1>

```css
/* Used for selecting Minimum width out of vw and vh */
h1{
  padding:5vmin;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="vmax">
	vmax : Maximum width out of vw and vh
</h1>

```css
/* Used for selecting Maximum width out of vw and vh */
h1{
  padding:5vmax;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="ex">
	ex: x-height of current font 
</h1>

```css
/* Relative to  x-height of current font */
h1{
  padding:10ex;
}
```

<br><br>

<h1 style="scroll-margin-top: 100px;"  id="fr">
	fr: Frames used in grid
</h1>

```css
/* Used for defining absolute values */
section{
    display:grid;
    grid-template-columns:1fr 1fr;
    /* creates a 2 col layout */
}
```


I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*