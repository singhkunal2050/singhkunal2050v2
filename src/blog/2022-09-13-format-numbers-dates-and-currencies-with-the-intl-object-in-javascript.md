---
title: Format Numbers, Dates and Currencies with the Intl Object in Javascript
author: Kunal Singh
description: Intl object can be used to format data into commonly used formats
  of dates, numbers and currencies, This saves a lot of time and makes working
  with Numbers a cake walk
tags:
  - post
  - javascript
  - html
  - web
date: 2022-09-13T15:53:07.671Z
image: /img/post/numbers-banner.png
imageAlt: Numbers Formatting
readTime: 2 Minutes ⌚
---
W﻿hen working with numbers, one of the many problems we have to work with is formatting. This can be formatting dates, date-time, numbers and so on. The `Intl` API helps solve exactly this problem. Be it formatting a date in the right way or formatting a number. 

A﻿ Simple example you can think of is formatting a number into a currency format. 

```javascript
Intl.NumberFormat().format(233333)
// '233,333'
Intl.NumberFormat('en-IN').format(233333)
// '2,33,333'
Intl.NumberFormat('en-IN' , {currency:"INR"}).format(233333)
// '2,33,333'
Intl.NumberFormat('en-IN' , {style:"currency", currency:"INR"}).format(233333)
// '₹2,33,333.00'
```

S﻿imilar to the above example we can format Dates as well 

```javascript
const options = {
    year: "2-digit",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    second:"2-digit",
    weekday: "long",
    hour12: true,
};
let formatter = Intl.DateTimeFormat("en-US", options);
console.log(formatter.format(new Date()));
// Tuesday, Sep 13, 22, 9:46:06 PM
```

W﻿e can also format our numbers into short forms like \`1k\` or \`1M\` etc using the Intl API. Let me show you an example 

```javascript
// Array of random numbers from 0 to Trillions
let numbers = [];
for(let  i = 0 ; i < 20 ; i++){
    numbers.push(parseInt(Math.random() + i**10));
}

let formatter = Intl.NumberFormat('en', {notation:"compact"})
let formattedNumbers = numbers.map(number=>{
    return formatter.format(number)
})

// formattedNumbers 
// ['0', '1', '1K', '59K', '1M', '9.8M', '60M', '282M',
// '1.1B', '3.5B', '10B', '26B', '62B', '138B', '289B',
// '577B', '1.1T', '2T', '3.6T', '6.1T']
```

A﻿s you might have already guessed the possibilities are endless and this can be a big time saver for a lot of day to day formatting problems which we run into and resolve using either custom helper functions or open source libraries.

B﻿rowser support 

![Intl Browser Support](/img/post/intl-browser-support.png)

F﻿or more details you can check the official docs at MDN [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)



I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*