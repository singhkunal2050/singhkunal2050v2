---
title: Find the Duplicate in a sequence of 1 to n with size n+1
author: Kunal Sing
description: "This problem focuses on the series formula for getting the sum of
  the series of length n and then finding the duplicate by using that sum as
  refernce "
tags:
  - snippet
  - problem-solving
  - mathematics
date: 2024-09-12T16:43:02.195Z
image: /img/post/number-series-duplicate.png
imageAlt: Number Series Problem
---
```javascript
/* 
* For a series of 1 - n with size n + 1, find the duplicate item in the series
* [1,2,3,4,5,3] -> 3
* [1,2,3,4,1] -> 1
*/

function getDuplicate(arr){
    const sum = ((arr.length - 1) * (arr.length))/2
    let diff = 0;
    
    for(let i = 0 ; i < arr.length ; i++) {
        diff = diff - arr[i];
        
    }
    let duplicate = sum + diff;
    return Math.abs(duplicate); // gives back the duplicate element
}
```