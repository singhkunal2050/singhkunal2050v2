---
title: 20 JavaScript Interview Questions You Should Know in 2025
author: Kunal Singh
description: A practical guide to 20 core JavaScript interview questions — with
  clear examples and detailed explanations to sharpen your fundamentals.
tags:
  - post
date: 2025-07-24T04:57:06.109Z
image: /img/post/download-10-.png
imageAlt: Javascript Interview Qestions
readTime: 2 Minutes ⌚
---
# 20 JavaScript Interview Questions You Better Know

You don’t need to memorize these questions. You need to understand them deeply. This post explains each concept clearly with examples.

- - -

## 1. What is the difference between `var`, `let`, and `const`?

* `var` is function-scoped and allows redeclaration. It’s hoisted and initialized with `undefined`.
* `let` is block-scoped and can be reassigned but not redeclared within the same scope. It’s hoisted but not initialized.
* `const` is also block-scoped but cannot be reassigned or redeclared. It must be initialized during declaration.

```js
var x = 1;
if (true) {
  var x = 2;
  console.log(x); // 2
}
console.log(x); // 2 (var leaks out)

let y = 1;
if (true) {
  let y = 2;
  console.log(y); // 2
}
console.log(y); // 1
```

- - -

## 2. How does JavaScript handle closures in loops?

Closures inside loops can be tricky, especially with `var`, because it doesn't create a new binding per iteration.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // prints 3 three times
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // prints 0, 1, 2
}
```

- - -

## 3. What is the difference between `==` and `===`?

* `==` allows type coercion (loose equality).
* `===` is strict equality, no type coercion.

```js
0 == false;  // true
0 === false; // false
```

Use `===` for predictable results.

- - -

## 4. What does `this` refer to in different contexts?

* In global context, `this` refers to the global object (`window` in browsers).
* Inside a method, it refers to the object calling the method.
* In arrow functions, `this` is lexically scoped (inherits from the parent).

```js
const obj = {
  name: 'Kunal',
  greet() {
    console.log(this.name);
  },
};
obj.greet(); // Kunal
```

- - -

## 5. What is event delegation and why does it matter?

Event delegation uses a parent element to handle events from its child elements using event bubbling.

Why it matters:

* Less memory usage
* Cleaner code

```js
document.getElementById('list').addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    console.log('Item clicked:', e.target.textContent);
  }
});
```

- - -

## 6. What is the call stack, and how does it relate to async code?

* The **call stack** is where JavaScript keeps track of function calls.
* When async functions are called (e.g., `setTimeout`, `fetch`), they don’t block the call stack. Instead, they're handled by browser APIs and callbacks are queued.

```js
function a() {
  b();
}
function b() {
  console.log('b');
}
a(); // pushes a -> b -> logs b -> pops b -> pops a
```

- - -

## 7. How does JavaScript handle asynchronous operations?

* It uses **callbacks**, **Promises**, and **async/await**.
* All async operations are handled outside the call stack (via Web APIs or the event loop).

```js
setTimeout(() => console.log('Done'), 1000);
fetch('/api').then(res => res.json()).then(data => console.log(data));
```

- - -

## 8. What’s the event loop and how does it work with the call stack and task queue?

The **event loop** enables JavaScript to handle async operations without blocking.

### Key Components:

* **Call Stack**: Executes functions one by one.
* **Web APIs**: Handle async events like timers or fetch.
* **Task Queue**: Queues tasks like `setTimeout`.
* **Microtask Queue**: Queues Promises and mutation observers.

### Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("End");
```

**Output:**

```
Start
End
Promise callback
Timeout callback
```

- - -

## 9. How is prototypal inheritance different from classical inheritance?

JavaScript uses prototypal inheritance: objects inherit directly from other objects.

```js
const parent = {
  sayHi() {
    console.log('Hi');
  }
};

const child = Object.create(parent);
child.sayHi(); // 'Hi'
```

- - -

## 10. What is the difference between `null` and `undefined`?

* `null` is an intentional absence of value.
* `undefined` is a variable that has been declared but not assigned.

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

- - -

## 11. What are higher-order functions?

A higher-order function:

* Takes one or more functions as arguments.
* Returns a function.

```js
function greet(name) {
  return function(message) {
    console.log(`${message}, ${name}`);
  };
}
const greetKunal = greet('Kunal');
greetKunal('Hello'); // Hello, Kunal
```

- - -

## 12. What is a closure, and where have you used it?

A closure is a function that remembers variables from its lexical scope even when executed outside that scope.

```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const inc = counter();
inc(); // 1
inc(); // 2
```

- - -

## 13. What’s the difference between `call`, `apply`, and `bind`?

* `call` invokes a function immediately with given `this` and arguments.
* `apply` is like `call` but takes arguments as an array.
* `bind` returns a new function with bound `this`.

```js
const obj = { name: 'Kunal' };
function greet(msg) {
  console.log(`${msg}, ${this.name}`);
}
greet.call(obj, 'Hi'); // Hi, Kunal
greet.apply(obj, ['Hello']); // Hello, Kunal
const boundGreet = greet.bind(obj);
boundGreet('Hey'); // Hey, Kunal
```

- - -

## 14. How does `Promise.all` differ from `Promise.race`?

* `Promise.all`: resolves when **all** promises resolve, or rejects if any fail.
* `Promise.race`: resolves/rejects as soon as one resolves/rejects.

```js
Promise.all([p1, p2]).then(...);
Promise.race([p1, p2]).then(...);
```

- - -

## 15. What is a pure function?

A pure function:

* Has no side effects.
* Returns same output for same input.

```js
function add(a, b) {
  return a + b;
}
```

- - -

## 16. What does immutability mean in JavaScript?

Immutability means data is never modified, only copied with changes.

```js
const a = [1, 2, 3];
const b = [...a, 4];
```

Useful in React and functional programming.

- - -

### 17. How does **debounce** differ from **throttle**?

**Debounce** and **throttle** are techniques to control how often a function is executed. They’re especially useful when dealing with events like scrolling, resizing, or typing.

#### Debounce:

Delays the function execution until a certain period has passed since the last time the function was invoked.

**Use case**:  Search bar input – Only send API requests after the user stops typing for 300ms.

```js
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

#### Throttle:

Ensures the function is called at most once every `n` milliseconds.

**Use case**: Scroll position tracker – Only update the scroll position once every 200ms.

```js
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

> **Summary**: Debounce *waits* before running; throttle *limits* how often it runs.

- - -

### 18. What are the differences between **shallow copy** and **deep copy**?

#### 🔹 Shallow Copy:

Only one level deep. If the object has nested objects, the nested references are still shared.

```js
const original = { name: 'John', address: { city: 'NY' } };
const copy = { ...original };
copy.address.city = 'LA';

console.log(original.address.city); // LA (Oops!)
```

#### Deep Copy:

Recursively copies all nested properties so the original and copy are fully independent.

```js
const original = { name: 'John', address: { city: 'NY' } };
const deepCopy = JSON.parse(JSON.stringify(original));
depCopy.address.city = 'LA';

console.log(original.address.city); // NY ✅
```

Use `structuredClone()` or `_.cloneDeep()` in real-world apps.

- - -

### 19. What is a **memory leak** and how do you prevent it in JS apps?

A **memory leak** happens when memory that is no longer needed is not released, causing your app’s memory usage to grow indefinitely.

#### Common causes:

* Forgotten DOM references
* Global variables
* Closures holding references
* Detached DOM nodes still in memory

#### Example:

```js
let cachedNode = null;

function cache() {
  const el = document.getElementById('header');
  cachedNode = el; // If not cleared, this element stays in memory
}
```

#### Prevention techniques:

* **Use `let`/`const` and avoid global variables**
* **Remove event listeners** on unmount:

```js
useEffect(() => {
  const handler = () => {};
  window.addEventListener('resize', handler);

  return () => {
    window.removeEventListener('resize', handler);
  };
}, []);
```

* **Use WeakMap/WeakSet** for caching to allow garbage collection
* **Profile memory** in Chrome DevTools regularly

- - -

Y﻿ou made it through!! All the best for your next interview!!

![](/img/post/celebrating-excited.gif)