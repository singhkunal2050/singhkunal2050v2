---
title: Controlled Versus Uncontrolled Components in React
author: "Kunal Singh "
description: Understanding State Management Within Forms Comparing controlled
  and uncontrolled components in react
tags:
  - post
  - react
  - forms
date: 2022-11-05T05:45:49.842Z
image: /img/post/reacttoolkit_banner03-1200x500.png
imageAlt: react-controlled-uncontrolled-components
readTime: 2 Minutes ⌚
---
H﻿andling Forms can be challenging in `react` as we usually have to maintain the state of each form element using the `useState` hook. For simple use-cases this may be simple enough, but when we try to work with other forms of inputs like `checkbox`,`radio` things start getting complex. This can be avoided using an alternate method.But before that let us understand what do we mean by Controlled and Uncontrolled Components.

### What are `Controlled Components`?

T﻿o put it simply, It is a component whose state is managed and updated via the `useState` hook in react.

```jsx
// Controlled Component 

import * as React from 'react';

export default function ControlledForm() {
  let [name, setname] = React.useState('');
  let [age, setage] = React.useState('');
  let [gender, setgender] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { name, age, gender };
    console.log(payload);
    // sendDatatoAPI(payload)
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setname(e.target.value);
        break;
      case 'age':
        setage(e.target.value);
        break;
      case 'gender':
        setgender(e.target.value);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Controlled Form</legend>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="age"
        name="age"
        value={age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="gender"
        name="gender"
        value={gender}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
```

A﻿s we can see here, we are taking care of the form state, changes via the useState hook.Now lets understand what are Uncontrolled Components.

### What are `Uncontrolled Components`?

Uncontrolled Components stores their own state internally using native Browser API support just like a HTML page would do, and you query the DOM for the \`form\` element using a ref to find its current value when you need it. This is a bit more like traditional HTML.

```jsx
// Uncontrolled Component 


import * as React from 'react';

export default function UncontrolledForm() {
  const formRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = formRef.current;
    let formData = new FormData(form);
    let values = [...formData.entries()];
    let valuesToJSON = Object.fromEntries(values);
    console.log(values);
    console.log(valuesToJSON);
    // sendDatatoAPI(valuesToJSON)
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <legend>Uncontrolled Form</legend>
      <input type="text" placeholder="name" name="name" />
      <input type="number" placeholder="age" name="age" />
      <input type="text" placeholder="gender" name="gender" />
      <button>Submit</button>
    </form>
  );
}
```

To understand this example a little better, I have created a codesandbox example which you can check out



### L﻿ive Example 

<﻿iframe src="https://stackblitz.com/edit/react-ts-k3ioh6?embed=1&file=components/UncontrolledForm.tsx"></iframe>