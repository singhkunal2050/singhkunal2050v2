---
title: "How to Publish Your First npm Package: Creating Rainbow Highlight with
  Utilities"
author: Kunal Singh
description: Learn how to create and publish your first npm package. This
  step-by-step guide walks you through building a fun "Rainbow Highlight" text
  utility with nested dependencies.
tags:
  - post
  - npm
  - npm-package
  - web
  - javascript
date: 2024-09-22T07:59:05.330Z
image: /img/post/highlightpackage.png
imageAlt: Raibow Highlight NPM Package
readTime: 4 Minutes ⌚
---
Publishing your first npm package can be an exciting and rewarding experience. In this blog post, we'll walk through the process of creating and publishing a simple yet fun package called _"Rainbow Highlight"_ that adds colorful effects to text, along with some additional utilities.

#﻿# Example of Usage 

<iframe src="https://codesandbox.io/embed/nk7ttj?view=editor+%2B+preview"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Using Rainbow Hightlight NPM Library"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


## What We'll Build

Our _"Rainbow Highlight"_ package will include several functions:

1. A rainbow highlight effect for text
2. A random color highlight effect
3. A utility to strip highlights from text

We'll also demonstrate how to work with nested dependencies by incorporating lodash into our package.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js (version 12 or later)
- npm (usually comes with Node.js)
- A text editor of your choice

## Step 1: Set Up Your Project

1. Create a new directory for your project:

   ```bash
   mkdir rainbow-highlight
   cd rainbow-highlight
   ```

2. Initialize a new npm package:

   ```bash
   npm init -y
   ```

3. Open the `package.json` file and modify it as needed. For example:
   ```json
   {
     "name": "@yourusername/rainbow-highlight",
     "version": "1.0.0",
     "description": "A package to add colorful highlights to text, with additional utilities",
     "main": "index.js",
     "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1"
     },
     "keywords": ["rainbow", "highlight", "text", "color"],
     "author": "Your Name",
     "license": "MIT",
     "dependencies": {
       "lodash": "^4.17.21"
     }
   }
   ```

## Step 2: Create Your Package

1. First, let's install lodash as a dependency:

   ```bash
   npm install lodash
   ```

2. Create an `index.js` file in your project root:

   ```javascript
   const _ = require('lodash');

   function rainbowHighlight(text) {
     const rainbow = [
       'red',
       'orange',
       'yellow',
       'green',
       'blue',
       'indigo',
       'violet',
     ];
     let result = '';
     for (let i = 0; i < text.length; i++) {
       const color = rainbow[i % rainbow.length];
       result += `<span style="color: ${color};">${text[i]}</span>`;
     }
     return result;
   }

   function randomHighlight(text) {
     return _.map(text, (char) => {
       const randomColor = _.sample([
         'red',
         'orange',
         'yellow',
         'green',
         'blue',
         'indigo',
         'violet',
       ]);
       return `<span style="color: ${randomColor};">${char}</span>`;
     }).join('');
   }

   function stripHighlight(highlightedText) {
     return highlightedText.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
   }

   module.exports = {
     rainbowHighlight,
     randomHighlight,
     stripHighlight,
   };
   ```

3. Create a README.md file to describe your package:

   `````markdown
   # Rainbow Highlight

   A package to add colorful highlights to text, with additional utilities.

   ## Installation

   `npm install @yourusername/rainbow-highlight`

   ## Usage

   ````javascript
   const { rainbowHighlight, randomHighlight, stripHighlight } = require('@yourusername/rainbow-highlight');

   // Rainbow highlight
   const rainbowText = rainbowHighlight('Hello, World!');
   console.log(rainbowText);

   // Random highlight
   const randomText = randomHighlight('Random colors!');
   console.log(randomText);

   // Strip highlight
   const strippedText = stripHighlight(rainbowText);
   console.log(strippedText);```

   This package provides three main functions:

   - `rainbowHighlight`: Adds a rainbow color effect to the text.
   - `randomHighlight`: Adds random color highlights to each character.
   - `stripHighlight`: Removes highlight spans from the text.
   ````
   `````

   ```

   ```

## Step 3: Test Your Package Locally

1. Create a `test.js` file in your project:

   ```javascript
   const {
     rainbowHighlight,
     randomHighlight,
     stripHighlight,
   } = require('./index');

   console.log('Rainbow Highlight:');
   console.log(rainbowHighlight('Hello, World!'));

   console.log('\nRandom Highlight:');
   console.log(randomHighlight('Random colors!'));

   const highlighted = rainbowHighlight('Strip me!');
   console.log('\nStrip Highlight:');
   console.log('Before:', highlighted);
   console.log('After:', stripHighlight(highlighted));
   ```

2. Run the test file:

   ```bash
   node test.js
   ```

   You should see the output with different highlight effects and the stripped text.

## Step 4: Publish Your Package

1. Create an npm account if you haven't already: https://www.npmjs.com/signup

2. Log in to your npm account in the terminal:

   ```bash
   npm login
   ```

3. Publish your package:

   ```bash
   npm publish --access=public
   ```

   Note: If this is your first time publishing a scoped package, you'll need to use the `--access=public` flag.

## Step 5: Use Your Published Package

Now that your package is published, you can install and use it in any project:

1. Install the package:

   ```bash
   npm install @yourusername/rainbow-highlight
   ```

2. Use it in your code:

   ```javascript
   const {
     rainbowHighlight,
     randomHighlight,
     stripHighlight,
   } = require('@yourusername/rainbow-highlight');

   const rainbowText = rainbowHighlight('Hello, npm world!');
   console.log(rainbowText);

   const randomText = randomHighlight('Random npm colors!');
   console.log(randomText);

   const strippedText = stripHighlight(rainbowText);
   console.log(strippedText);
   ```

## Conclusion

Congratulations! You've just created and published your first npm package with multiple utilities and a nested dependency. The "Rainbow Highlight" package demonstrates how to structure a more complex package, work with external libraries, and provide various functionalities to your users.
As you continue to develop npm packages, you'll encounter more advanced topics like:

You can find the Package I had published here : [https://www.npmjs.com/package/@singhkunal2050/rainbow-highlight](https://www.npmjs.com/package/@singhkunal2050/rainbow-highlight) with the source code at [https://github.com/singhkunal2050/rainbowHighlight](https://github.com/singhkunal2050/rainbowHighlight)

- Writing comprehensive tests
- Setting up continuous integration
- Implementing semantic versioning
- Managing package updates and deprecations

Remember to maintain your package by addressing issues, adding new features, and updating dependencies as needed. Happy coding, and enjoy your journey in the world of npm package development!
