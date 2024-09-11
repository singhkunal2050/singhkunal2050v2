---
title: Using document.createDocumentFragment for Batch updating DOMs without the
  wrapper div
author: Kunal Singh
description: The DocumentFragment is an interface that represents a temporary
  container for holding a group of DOM nodes. It acts like a mini-document but
  is not part of the actual DOM tree. This allows developers to construct and
  manipulate multiple nodes or elements in memory without immediately adding
  them to the visible DOM.  The main performance advantage of using
  DocumentFragment is that it avoids triggering reflows and repaints during the
  construction phase. By batching multiple DOM operations and appending them all
  at once, you significantly reduce the overhead caused by repeated DOM
  mutations, which can be costly in terms of performance, especially with large
  or frequent updates.
tags:
  - snippet
  - javascript
  - performance
  - dom
date: 2024-09-11T05:09:20.621Z
image: /img/post/documentfragment-snippet.png
imageAlt: document.createDocumentFragment API in javascript
---
```javascript
const element = document.getElementById("ul"); // assuming ul exists
const fragment = document.createDocumentFragment();
const browsers = ["Firefox", "Chrome", "Opera", "Safari"];

browsers.forEach((browser) => {
  const li = document.createElement("li");
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment); // Mutates the DOM only once

```