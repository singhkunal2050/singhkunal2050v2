---
title: Fluid Typography in CSS 💧
author: Kunal Singh
description: CSS Best Practices in Fluid Typography
tags:
  - post
  - css
  - html
  - typography
date: 2021-08-15T15:03:58.197Z
image: /img/post/responsive-typography.jpeg
imageAlt: Fluid Typography
readTime: 2 Minutes ⌚
---
## What is Fluid Typography?
When your font size changes according to the size of the window then we call it as a fluid typography.

There are several ways to make your fonts fluid across all resolutions in your websites. Here are 5 ways that I use regularly in my projects with examples.

* [Good old media queries](#media-queries)
* [Using Relative Units vw, vh, Percentage (%)](#relative-units)
* [clamp() & calc()](#css-functions)
* [Using CSS Variables](#using-css-variables)

Enough talk lets see the code

# You can check this codepen for live example of all the points covered in this blog

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="bGWJvXO" data-preview="true" data-user="singhkunal2050" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/singhkunal2050/pen/bGWJvXO">
  Responsive Typography CSS</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<div id="media-queries">

## Good Old Media Queries `@media-queries`

`media-queries` may not be the most fluid of all these methods since they are based on changing the size based on breakpoints of `window` but they do come in handy and get the job done most of the time.

```css
/* 1. With Media Queries */
.media h2{
  font-size:2rem;
}
.media p{
  font-size:1.2rem;
}
/* Setting breakpoint for changing font size */

@media (max-width:768px) {
  .media h2{
    font-size:1.5rem;
  }

  .media p{
    font-size:.8rem;
  }
}
```

</div>

<div id="relative-units">

## Using Relative Units `vw` `vh` and `%`

This method uses relative units like percentage, vw and vh, we can set the font size on the basis of parent container(with %) or we can use the vw/vh unit which sets the sizes relative to the window. Although this method gives a completely fluid typography it has some pitfalls which we'll cover in the next point.

```css
/* Using Relative % Units */

.relative-units h2{
  font-size:5vw;
}

.relative-units p{
  font-size:2.5vw;
}
```

</div>

<div id="css-functions">

## Using CSS funtions `clamp()` and `calc()`

The most annoying part of using a relative unit is we can not set any upper/lower limit to the values that we want. This problem is solved with the `clamp()` function and the `calc()` function comes with its own advantage of allowing us to do mathematic operations with our units like 10vw + 10px , 40%+ 2rem etc

```css
/* Using clamp() , calc() & minmax() */
/* When this method is combined with relative units it gives the best results */

.css-functions h2{
  font-size:calc(1.8rem + 2vw);
  /*  gives min/max size 👇   */
  font-size:clamp(1.8rem, 5vw , 2.5rem );
}

.css-functions p{
  font-size:clamp(.8rem, 4vw , 1.5rem );
  /*  does not give min/max size 👇   */
  font-size:calc(.7rem + 1vw);        
}
```

</div>

<div id="using-css-variables">

## Using CSS Variables

Remember how we used media queries to swap font sizes on the basis of `window` width? Using the same technique with css variables gives you the same feature with a little better code maintance option. Lets see how.

```css
/* Using CSS Variables */

/* Setting Up Default Font size Variables  */
:root{
  --heading-2:2rem;
  --content:1rem;
}

/* Overidding Variables with Media Queries   */

@media(max-width:768px){
  :root{
    --heading-2:1.54rem;
    --content:.7rem;
  }
}

.css-var h2{
  font-size:var(--heading-2);
}

.css-var p{
  font-size:var(--content);
}
```

</div>

I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*