---
title: "Build Your Own Pinterest-Style Masonry Grid: A Step-by-Step Guide"
author: Kunal Singh
description: Create a masonary grid layout with left to right content flow,
  supporting pagination and resposive layouts.
tags:
  - post
  - css
  - web
  - layout
date: 2023-12-10T08:56:42.929Z
image: /img/post/masonry.jfif
imageAlt: Masonry Grid Layout with CSS Grid
readTime: 2 Minutes ⌚
---
So I have been trying to create a grid which has a masonry structure and was trying to find a simple way to create it without having any `DOM` related heavy lifting, ie wihout any javascript. I wanted to use CSS to do this and I thought it might be simple but it's not the simplest of things to achieve with CSS alone.

![Final Masonry Layout with Infinite Scroll](/img/post/masonry-grid-layout-infinite-scroll-1-.gif)



It's very simple to achieve a column layout with pure masonry but the catch is your content flows from top to bottom and then to the next column

![Masonry Wall Layout](/img/post/image-275.png)

```css
.container{
    columns: 3 300px;
}
```

Just this one line can give you a masonry structure, but AT WHAT COST?

![At what cost ](https://media1.tenor.com/m/dW-Pb6qvsq8AAAAd/thanos-infinity-war.gif)

You will have a layout that will not support pagination, This means when ever new content is added, the last column will have more children and the last row that user expects to be populated with new childrens will not be working as expected.

To solve this problem we can use a different approach of css `grid`. Here we use a grid container.

```html
<div id="masonary-container">
    <!-- Children -->
</div>
```

```css
#masonary-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  grid-auto-rows: 10px;
}

/* this will avoid overflow of images in the grid */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Here

**grid-template-columns: repeat(auto-fill, 280px):** This instructs the browser to automatically fill the available space with as many columns as possible with minimum width of 280px.

**grid-auto-rows: 10px:** This specifies the minimum height of each row. The rows will be at least 10px high, but they can be taller if there is enough content to fill them.

### Here is where the magic happens

We create three classes in our CSS File

```css
.small {
  grid-row-end: span 16;
}

.medium {
  grid-row-end: span 23;
}

.large {
  grid-row-end: span 35;
}
```

This will help us get the masonry layout. In our javascript code, we can add a logic to add `.small` | `.medium` | `.large` class depending upon the where its the the `nth` | `n+1th`| `n+2th` child.

```js
const container = document.querySelector('.container');
let xwidth = 400;
let ywidth = 400;
let currentCount = 0;

container.innerHTML = getCatsCards();

function getCatsCards() {
  const cardsMarkup = Array.from({ length: 10 }).map((_, i) => {
    xwidth++;
    ywidth++;

    let sizeClass = getCurrentSizeClass(i)
    return `
      <div id="card-${i}" key="${i}" class="${sizeClass} card">
        <img src="//source.unsplash.com/${xwidth}x${ywidth}?cat" alt="Cat Image">
        <span>${currentCount + i+1}</span>
      </div>
    `;
  }).join('');

  currentCount = currentCount + 10;
  return cardsMarkup;
}


function getCurrentSizeClass(i) {
    if (i % 3 === 0) {
      sizeClass = 'large';
    } else if (i % 2 === 0) {
      sizeClass = 'medium';
    } else {
      sizeClass = 'small';
    }
  return sizeClass;
}
```

With some fine tuning we can get a final result which is almost as good as the pinterest masonry layout. This can handle pagination and logical flow of data in the DOM.

<iframe height="300" style="width: 100% !important;" scrolling="no" title="masonary-grid-with-left-to-right-flow" src="https://codepen.io/singhkunal2050/embed/vYbPVNd?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/singhkunal2050/pen/vYbPVNd">
  masonary-grid-with-left-to-right-flow</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>