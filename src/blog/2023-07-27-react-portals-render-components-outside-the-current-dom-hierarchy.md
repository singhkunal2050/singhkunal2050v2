---
title: "React Portals: Render Components Outside the current DOM Hierarchy"
author: Kunal Singh
description: The createPortal API in React allows you to render child elements
  into a different part of the DOM, outside the current component's DOM
  hierarchy
tags:
  - post
  - react
  - web
date: 2023-07-27T15:37:48.905Z
image: /img/post/portal-to-another-universe-cinematic-acrylic-painting-trending-on-pixiv-fanbox-palette-knife-1.png
imageAlt: React Portals
readTime: 2 Minutes ⌚
---
The `createPortal` API in React allows you to render child elements into a different part of the DOM, outside the current component's DOM hierarchy. This is particularly useful when you need to render content in a different DOM node, such as rendering a modal dialog or rendering React components into non-React server markup.

![](/img/post/instagram-post-210.png)

I﻿n the following example we see how we can use the createPortal API to render a Modal outside the current DOM hierarchy. 

<iframe src="https://codesandbox.io/embed/react-portal-f4p3qh?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-portal"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>