---
title: Are You Still Using Basic CSS? Here Are 7 Tricks to Get Ahead of the Curve
author: Kunal Singh
description: Bored of the same old CSS? Unleash 7 hidden gems to take your
  designs to the next level!
tags:
  - post
  - css
date: 2023-12-27T11:44:31.344Z
image: /img/post/css.png
imageAlt: "CSS "
readTime: 2 Minutes ⌚
---
**1. Aspect-Ratio:**

* **Description:** Maintain perfect proportions with ease.
* **Example:**  `img { aspect-ratio: 16/9; }` creates a responsive 16:9 image container.

<iframe height="300" style="width: 100% !important;" scrolling="no" title="Aspect Ratio Images with CSS" src="https://codepen.io/ved-craig/embed/oRPqVo?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/ved-craig/pen/oRPqVo">
  Aspect Ratio Images with CSS</a> by Craig (<a href="https://codepen.io/ved-craig">@ved-craig</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**2. Gap:**

* **Description:** Streamline spacing for flexbox and grid items.
* **Example:**  `.grid { gap: 10px 20px; }` creates 10px vertical and 20px horizontal gaps.

<iframe height="300" style="width: 100%;" scrolling="no" title="gap" src="https://codepen.io/origamid/embed/ZyRQLB?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/origamid/pen/ZyRQLB">
  gap</a> by Andre  Origamid (<a href="https://codepen.io/origamid">@origamid</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**3. :has():**

* **Description:** Target elements based on their content.
* **Example:**  `button:has(.disabled) { opacity: 0.5; }` styles disabled buttons.

<iframe height="300" style="width: 100%;" scrolling="no" title=":has() pseudo-class" src="https://codepen.io/alam_tahera/embed/qByMzrP?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/alam_tahera/pen/qByMzrP">
  :has() pseudo-class</a> by Tahera Alam (<a href="https://codepen.io/alam_tahera">@alam_tahera</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**4. Scroll-Snap:**

* **Description:** Create smooth, controlled scrolling experiences.
* **Example:**  `.slideshow { scroll-snap-type: y mandatory; }` enables snapping for vertical scrolling.

<iframe height="300" style="width: 100%;" scrolling="no" title="scroll snap slider vertical" src="https://codepen.io/singhkunal2050/embed/qBpraEa?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/singhkunal2050/pen/qBpraEa">
  scroll snap slider vertical</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**5. Logical Properties:**

* **Description:** Ensure consistent layout across languages.
* **Example:**  `body { margin-inline-start: 20px; }` sets margin for the start edge, considering language direction.

<iframe height="300" style="width: 100%;" scrolling="no" title="Support: CSS Logical Properties" src="https://codepen.io/chharvey/embed/PJojpJ?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/chharvey/pen/PJojpJ">
  Support: CSS Logical Properties</a> by chharvey (<a href="https://codepen.io/chharvey">@chharvey</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**6. Container Queries:**

* **Description:** Adapt layouts based on container dimensions.
* **Example:**  `@container (width > 600px) { .sidebar-card { display: flex; } }` adjusts card layout within a wider sidebar.

<iframe height="300" style="width: 100%;" scrolling="no" title="container-query-css" src="https://codepen.io/singhkunal2050/embed/BaGMRXw?default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/singhkunal2050/pen/BaGMRXw">
  container-query-css</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

**7. color-mix():**

* **Description:** The  **`color-mix()`**  functional notation takes two  [`<color>`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)  values and returns the result of mixing them in a given colorspace by a given amount.
* **Example:**  

```css
li:nth-child(5) {
  background-color: color-mix(in srgb, #34c9eb 100%, white);
}

/*
Find more examples here 

https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix
*/
```

**Remember:** Check browser compatibility with caniuse.com before using these features. Happy styling!