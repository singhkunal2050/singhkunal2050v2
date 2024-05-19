---
title: "Debugging Web Apps with Browser Dev Tools: 6 Amazing Tricks"
author: Kunal Singh
description: Debugging web applications can be a challenging task, with errors
  like "undefined" or syntax bugs often causing frustration. However, knowing
  the right set of tools and tricks can greatly enhance your debugging process.
tags:
  - post
  - browser
  - debugging
  - web
date: 2023-07-13T16:05:08.168Z
image: /img/post/group-4-1-.png
imageAlt: Browser Dev Tools
readTime: 2 Minutes ⌚
---
Debugging web applications can be a challenging task, with errors like "undefined" or syntax bugs often causing frustration. However, knowing the right set of tools and tricks can greatly enhance your debugging process. In this blog post, we will explore seven amazing tricks that can help you debug your web apps effectively. While we will focus on general web apps, these examples and tricks can be applied to any frontend application.

#### What are Browser Dev Tools

Browser Dev Tools, short for Browser Developer Tools, are a set of built-in tools that come with web browsers and are used by developers and web designers to inspect, debug, and analyze websites or web applications.

\####1. Using the Browser Console Effectively

Logging with Context: Instead of simply logging data, consider using the console.log({ data }) syntax to log with context. This provides more information about the logged data. This method although might look simple but it comes in handy when we want to search our logs in the console with the key.

```javascript
console.log(data) // instead of this 
console.log({ data }) // use this 
```

#### 2. Using Shorthands in Browser Console

When using Browser Console, Instead of using `document.querySelector`  or `document.querySelectorAll`  we can  use jquery like shorthands `$('.selector')` or `$$('.selector')`  to quickly select and manipulate elements on the page.
Some other examples of browser shorthands are `$0` which is a reference to the last selected element in the Element Section. Also `$_` can be used to refer the value returned by the last expression in the browser console.

![](/img/post/shorthands.png)

#### 3. Leveraging Browser Command Palette

We can take advantage of the browser's command palette to open files or execute browser commands directly from the console.   We can use the Shortcut `Cmd` + `Shift` + `P` for Command Mode to run commands and `Cmd` + `P` for File mode to open any of the source files.

#### 4. Live Expressions

Ever tried logging the same value like the `window.screenY` in the console multiple times, This can be avoided with the amazing Live Expression Feature. Instead of repetitive logging, we can use live expressions to check the value of any variable or expression in real-time in the Browser Console

#### 5. Using Debuggers to Understand Code Flow

 Rather than relying on console logs, you can set breakpoints in your code using the browser's debugger. This allows you to pause and inspect variables and the program's execution flow during runtime. Advantages of Debugger: Real-time value inspection during code execution. No need for multiple console.log statements. We can add a debugger to the code by simple adding the `debugger` statement in the code wherever we want to pause the code execution or we can inpect a source file in the browser and click on the line number to add a breakpoint to the file. There are also `conditional debuggers` which we can add which pauses the execution only if a condition is met, this can be a very useful feature while debugging.  

<!-- Attach Image -->

You can check the following example and open the dev tools before the clicking the button to see how it stops the code execution and we can see see the code extension state with the variables state and other details.
https://codepen.io/singhkunal2050/pen/qBQxRPN?editors=1010

#### 6. Streamline Development with Browser Overrides 🤯

When making changes to your app's UI or logic, constantly switching between the IDE and the browser can be tedious. Instead, leverage browser overrides for CSS and JavaScript. This way, you can instantly see the changes in the browser and later update your source code accordingly. 

Remember, debugging is an essential skill for developers, and with the right tools, you can squash bugs more efficiently and deliver high-quality web apps. Happy debugging!