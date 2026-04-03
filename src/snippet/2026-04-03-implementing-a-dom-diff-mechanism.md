---
title: "Implementing a DOM Diff Mechanism "
author: Kunal Singh
description: Asked in one of the interviews for Lead Frontend Engineer Rou nd
tags:
  - snippet
  - javascript
  - dom
  - problem-solving
date: 2026-04-03T14:19:58.101Z
image: /img/post/css-units-cover.jpeg
imageAlt: DOM DIff
---
`﻿``javascript

function findDiff(oldTree, newTree, level = []) {
  console.log({oldTree, newTree, level});
//   debugger;
  let output = [];

  let isTypeSame = oldTree?.type === newTree?.type;

  if(!isTypeSame){
    if(!oldTree){
        output.push({
            type: "ADD_NODE", path : [...level], node : newTree
        })
    } else if(!newTree){
        output.push({
            type: "REMOVE_NODE", path : [...level]
        })
    } else {
        output.push({
            type: "REPLACE_NODE", path : [...level], node : newTree
        })
    }
    return output;
  }

  let maxLength = Math.max(oldTree.children.length, newTree.children.length)

  for(let i = 0 ; i < maxLength ; i++){
    if(typeof oldTree.children[i] === 'string' && typeof newTree.children[i] === 'string' ){
      if(oldTree.children[i] != newTree.children[i]){
        output.push({
          type: "UPDATE_TEXT", path : [...level, i], value: newTree.children[i]
        })
      }
      continue;
    } else {
      output.push(...findDiff(oldTree.children[i], newTree.children[i], [...level, i]))
    }
  }
  return output;
}


// Input 
// const oldTree = {
//   type: "div",
//   children: [
//     {
//       type: "section",
//       children: [
//         { type: "h2", children: ["Title"] },
//         { type: "ul", children: [
//           { type: "li", children: ["A"] },
//           { type: "li", children: ["B"] }
//         ]}
//       ]
//     },
//     { type: "footer", children: ["v1"] }
//   ]
// };
// const newTree = {
//   type: "div",
//   children: [
//     {
//       type: "section",
//       children: [
//         { type: "h2", children: ["New Title"] }, // text update
//         { type: "ul", children: [
//           { type: "li", children: ["A"] },      // unchanged
//           { type: "li", children: ["B2"] },     // text update
//           { type: "li", children: ["C"] }       // add
//         ]}
//       ]
//     }
//     // footer removed
//   ]
// };

// / Output
// [
//   { type: "UPDATE_TEXT", path: [0, 0, 0], value: "New Title" },
//   { type: "UPDATE_TEXT", path: [0, 1, 1, 0], value: "B2" },
//   { type: "ADD_NODE", path: [0, 1, 2], node: { type: "li", children: ["C"] } },
//   { type: "REMOVE_NODE", path: [1] }
// ]


`﻿``