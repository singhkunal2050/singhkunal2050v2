---
title: "# Add Google Fonts to Your TailwindCSS Project"
author: Kunal Singh
description: Use Google Fonts in Your TailwindCSS Projects
tags:
  - post
  - css
  - tailwindcss
  - react
  - nextjs
  - tailwind
  - design
date: 2022-04-06T06:40:36.253Z
image: /img/post/css-units-cover.jpeg
imageAlt: Using Google Fonts with TailwindCSS
readTime: 2 Minutes ⌚
---
Tailwind makes it super easy to use and import google fonts in our projects.

## Just Follow these 4 steps

1. Get the cdn and insert in the `<head>` section of the entry point 
   file for eg `index.html`.

![](/img/post/google-fonts.png)

CDN link can be taken from <a href="https://fonts.google.com/" target="_blank">Google Fonts</a>

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/jpg" href="//source.unsplash.com/20x20?smiley" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Moonrocks&display=swap" rel="stylesheet">
    <title>FriendList</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

2. Modify You Tailwind Config File to Create a new class name for our new font 

```js
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'rubrik': ['"Rubik Moonrocks"', 'cursive']
      }
    }
  }
};
```

3. Restart Server and You are ready with the new Classes

![font-classes select tailwind](/img/post/font.png)

<p>I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on&nbsp;<a href="https://linkedin.com/in/singhkunal2050">LinkedIn</a>&nbsp;<a href="https://twitter.com/singhkunal2050">Twitter</a>&nbsp;<a href="https://singhkunal2050.dev/">@singhkunal2050</a>. You can also write me&nbsp;<a href="https://singhkunal2050.dev/#contact">here</a>.</p>