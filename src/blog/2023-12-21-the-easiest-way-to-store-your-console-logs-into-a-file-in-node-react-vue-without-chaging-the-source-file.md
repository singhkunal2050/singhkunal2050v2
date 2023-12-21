---
title: The easiest way to store your console logs into a file in node/react/vue,
  WITHOUT chaging the source file
author: Kunal Singh
description: Often, developers face challenges when dealing with a flood of logs
  in the console, making it difficult to locate specific information. Integrated
  terminals in VSCode, by default, tend to remove old logs as new ones are
  rendered, exacerbating the problem.
tags:
  - post
  - productivity
date: 2023-12-21T17:05:46.582Z
image: /img/post/group-48.png
imageAlt: Logging node logs to file without changing source code
readTime: 2 Minutes ⌚
---
Often, developers face challenges when dealing with a flood of logs in the console, making it difficult to locate specific information. Integrated terminals in VSCode, by default, tend to remove old logs as new ones are rendered, exacerbating the problem.

A common solution involves modifying your code to use the fs module:

```javascript
const fs = require('fs');

const dataToWrite = 'This is the data you want to write to the file.';
const filePath = 'output.txt';

fs.writeFile(filePath, dataToWrite, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Data has been written to the file successfully.');
  }
});
```

However, making such changes to your code can be cumbersome.

## A Simpler Solution

Assuming you have an npm script named dev in your Node.js project, you can capture its output in a log file using a simple command in the terminal:

```csharp
npm run dev > log.txt
```

This command directly redirects the output of the npm run dev script to a file named log.txt. This way, you can easily review the logged information without modifying your source code.