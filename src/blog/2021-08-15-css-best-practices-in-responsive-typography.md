---
title: Responsive Typography in CSS 💧
author: Kunal Singh
description: CSS Best Practices in Responsive Typography
tags:
  - post
  - css
  - html
  - typography
date: 2021-08-15T15:03:58.197Z
image: /img/post/responsive-typography.jpeg
imageAlt: Responsive Typography
readTime: 2 Minutes ⌚
---
There are several ways to make your fonts fluid across all resolutions in your websites. Here are 5 ways that use regularly in my projects with examples.

* [Good old media queries](#media-queries)
* [Using Relative Units vw, vh, Percentage (%)](#relative-units)
* [clamp() , calc() & minmax() ](#css-functions)
* [Using CSS Variables](#using-css-variables)

Enough talk lets see the code

<div id="media-queries">

## Good Old Media Queries `@media-queries`



</div>

<div class="relative-units">

## Using Relative Units `vw` `vh` and `%`


This method uses relative units like percentage, vw and vh and we can set the font size on the basis of parent container(with %) or we can use the vw/vh unit which is used to get sizes relative to the window. Although this method gives a completely fluid typography it has some pitfalls which we can be covered with funtion like minmax coming up next.


</div>


# You can check this codepen for live example of all the points covered in this blog 

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="html,result" data-slug-hash="bGWJvXO" data-preview="true" data-user="singhkunal2050" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/singhkunal2050/pen/bGWJvXO">
  Responsive Typography CSS</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
