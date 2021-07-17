---
title: Testing Code Snippets
author: Kunal Singh
description: Blog 2 is a godd blog  type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially un
tags:
  - post
  - android
  - code
date: 2021-02-02
image: /img/post/post-2.jfif
imageAlt: demo
readTime: 1 minutes ⌚
---
<p> Blog 2 is a godd blog  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap </p>

<!--StartFragment-->

```javascript
function getUserById(id) {
    if (typeof id !== 'number' || id <= 0) {
        throw new Error('Invalid id argument');
    }

    return new Promise((resolve, reject) => {
        resolve({
            id: id,
            username: 'admin'
        });
    });
}
```

<!--EndFragment-->