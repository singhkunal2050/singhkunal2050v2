---
title: Simple Debounce Implementation in Javascript
author: Kunal Singh
description: This is a simple implementation of Debounce Function Wrapper that
  helps you debounce functions which are called multiple times in a short
  interval.
tags:
  - snippet
  - javascript
  - performance
date: 2024-09-07T07:42:32.246Z
image: /img/post/carbon.png
imageAlt: Debounce
---
```javascript
function myDebounce(cb, timeout) {
    let timer = null;
    return function (...args) {  // Capture arguments
        const context = this;    // Preserve the calling context
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            cb.apply(context, args);  // Pass arguments and context to the callback
        }, timeout);
    }
}

function log(message) {
    console.log(message);
}

let debouncedLog = myDebounce(log, 3000);

for(let i = 0 ; i < 10 ; i++){
    debouncedLog("Hello");  // Will log "Hello" after 3 seconds only once
}
```