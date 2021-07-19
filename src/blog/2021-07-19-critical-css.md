---
title: "Critical CSS "
author: Kunal Singh
description: Critical CSS is a technique to  extract  the CSS for above-the-fold
  content in order t
tags:
  - post
  - css
  - html
  - performance
date: 2021-07-19T14:19:32.908Z
image: https://source.unsplash.com/400x400?code
imageAlt: Critical CSS
readTime: 1 Minutes ⌚
---
### Critical [\#](https://web.dev/extract-critical-css/#critical)

[Critical](https://github.com/addyosmani/critical) extracts, minifies and inlines above-the-fold CSS and is available as [npm module](https://www.npmjs.com/package/critical). It can be used with Gulp (directly) or with Grunt (as a [plugin](https://github.com/bezoerb/grunt-critical)) and there's a [webpack plugin](https://github.com/anthonygore/html-critical-webpack-plugin) too.

It's a simple tool that takes a lot of thinking out of the process. You don't even have to specify the stylesheets, Critical automatically detects them. It also supports extracting critical CSS for multiple screen resolutions.

```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    /* inline css */
  </style>
  <link rel="stylesheet" href="/css/style.css" media="print" onload="this.media='all'">
  <link rel="shortcut icon" href="/img/icon.png" type="image/x-icon">
```