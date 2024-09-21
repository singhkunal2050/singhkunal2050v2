---
title: Find the maximum Depth of a Binary Tree
author: Kunal Singh
description: Given the root of a binary tree, return its maximum depth.  A
  binary tree's maximum depth is the number of nodes along the longest path from
  the root node down to the farthest leaf node.
tags:
  - snippet
  - dsa
  - problem-solving
  - javascript
date: 2024-09-21T09:45:39.945Z
image: /img/post/carbon-1-.png
imageAlt: Depth of Binary tree
---
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(root == null) return 0;
    
    if(root != null && root.left == null && root.right == null) return 1;
    
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    
    
};
```