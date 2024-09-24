---
title: "Factory Function Pattern in Javascript "
author: Kunal Singh
description: Factory functions are a powerful design pattern in JavaScript for
  creating objects. Unlike constructor functions that require the new keyword,
  factory functions are regular functions that return a new object when called.
tags:
  - snippet
  - javascript
  - design-patterns
date: 2024-09-24T16:01:52.695Z
image: /img/post/factory-functions-js.png
imageAlt: Factory Functions in Javascript
---
```javascript
function createCar(make, model) {
    return {
        make,
        model,
        drive() {
            console.log(`Driving a ${this.make} ${this.model}!`);
        }
    };
}

const myCar = createCar('Toyota', 'Corolla');
myCar.drive(); // Output: Driving a Toyota Corolla!
```