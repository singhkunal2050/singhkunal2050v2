---
title: Event Delegation in Javascript
author: Kunal Singh
description: Handling multiple Events in Javascript with minimal CPU Usage
tags:
  - post
  - javscript
  - css
  - html
  - web
  - performance
date: 2022-03-06T16:15:13.464Z
image: /img/post/javascript-logo-banner-1-.webp
imageAlt: Event Delegation in Javascript
readTime: 2 Minutes ⌚
---
Javascript Events can get really messy when and may also lead to performance issues at times. Event Delegation is a good solution for countering these issues and making our websites and webapps more performant and robust.

#### What is Event Delegation?

If we are having similar events to a bunch of elements then instead of adding listeners to each element with Event Delegation we can delegate the event of all these elements to its common ancestor. This drastically reduces the count of event listeners making the page more performant.

The normal way of handling the same Events for multiple elements is by adding Event Listeners for each element.

```html
<ul>
  <li>LIST ITEM 1</li>
  <li>LIST ITEM 2</li>
  <li>LIST ITEM 3</li>
</ul>
```

```javascript
  
let listItems = document.querySelectorAll('li');
listItems.forEach(function(listItem){
  listItem.addEventListener('click', function(event){
    alert(event.target.innerText);
  });
});
  
```

Event Delegation **Delegates** the event to the common ancestor of the elements for which we need the same event listeners. Let's look at the solution to the above problem.

```javascript
// Handling same case with Event Delegation with 
// Single Event Listener to the common ancestor

let list = document.querySelector('ul');

list.addEventListener('click', function(event){
  if(event.target.tagName=="LI"){
    console.log(event.target.innerText);
    hightlight(event.target)
  }
})

function hightlight(targetElement){
  targetElement.classList.toggle('active')
}
```

Check out the codepen link for the live example <https://codepen.io/singhkunal2050/pen/QWOoBPM?editors=0110>

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="QWOoBPM" data-user="singhkunal2050" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/singhkunal2050/pen/QWOoBPM">
  Event Delegation in JS</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on [LinkedIn](https://linkedin.com/in/singhkunal2050) [Twitter](https://twitter.com/singhkunal2050) [@singhkunal2050](https://singhkunal2050.dev/). You can also write me [here](https://singhkunal2050.dev/#contact).

*Happy Coding 👩‍💻!*