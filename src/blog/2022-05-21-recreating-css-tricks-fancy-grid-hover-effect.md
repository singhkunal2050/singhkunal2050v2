---
title: Recreating CSS Tricks Fancy Grid Hover Effect
author: Kunal Singh
description: CSS Trick had a simple yet cool grid layout which I found dope. So
  lets try to recreate and understand how it can made with some CSS combinators.
tags:
  - post
  - html
  - css
  - UI
  - recreation
date: 2022-05-21T03:28:57.927Z
image: /img/post/default-social-css-tricks.webp
imageAlt: CSS Tricks Fancy Grid Layout
readTime: 2 Minutes ⌚
---
So while I was exploring the internet for ideas, I came across this cool grid effect which caught my attention. I have been planning to create a section in my blog for recreation of interesting UI and UX  So here we go :)

<img src="/img/post/CSS Tricks Fancy Grid Compressed.gif" >

So here the interesting part is how the current element rotates a little on hover and all the leading card elements slide ahead to give the current card some breathing space. This effect is where <a href="https://www.w3schools.com/css/css_combinators.asp" target="_blank"> CSS Combinators </a> can be used. \
\
But before that lets have some basic markup and styling done 

```html
<!-- index.html  -->
<section>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</section>
```

Now add some styling 

```css
section{
  display:flex;
  gap:20px;
}

div{
  background:#80808033;
  min-width:200px;
  min-height:300px;
  box-shadow:2px 2px 10px #efefef;
  transition:300ms ease-in-out;
}
```

Alright things look good now. 

![Basic Grid](/img/post/grid.png)

Now lets make this \`div\`s overlap.

```css
/* start from 2nd and have overlapping divs */
div+div{
  margin-left:-10%;
}
```

Cool we have some overlapping \`div\`s now which always start from second div. 

![grid overlapping](/img/post/grid-overlapping.png)

Now comes the fun part lets add hover effect and use CSS combinators to adjust all siblings after the current hover element. Enough talking lets see the code. 

```css
/* on hover rotate current */
div:hover{
  background:yellow;
  transform:rotate(-4deg)
}

/* on hover translate all siblings after the current */
div:hover~div{
  background:red;
  z-index:1;
  transform:translate(60px);
}
```

![Recreated Fancy Grid GIF](/img/post/recreated-fancy-grid.gif)

Here is the Codepen example in case you need to try it

<iframe height="300" style="width: 100%;" scrolling="no" title="CSS Tricks Recreating Fancy Blog Grid" src="https://codepen.io/singhkunal2050/embed/JjpJyvM?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/singhkunal2050/pen/JjpJyvM">
  CSS Tricks Recreating Fancy Blog Grid</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*