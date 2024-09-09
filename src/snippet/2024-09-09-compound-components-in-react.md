---
title: Compound Components in React
author: Kunal Singh
description: Compound components in React offer a powerful design pattern for
  creating flexible and reusable UI elements, allowing multiple components to
  work together as a cohesive unit while maintaining a clean API - a simple
  example is a Tabs component that manages its own state and renders child Tab
  components based on user interaction, enabling encapsulation, flexibility, and
  readability in your React applications.
tags:
  - snippet
  - react
  - components
  - machine-coding
date: 2024-09-09T17:53:51.640Z
image: /img/post/compoundcomp-react.png
imageAlt: Compound Components in React
---
```jsx
import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="tab-titles">
        {React.Children.map(children, (child, index) => (
          <button onClick={() => handleTabClick(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {React.Children.toArray(children)[activeIndex]}
      </div>
    </div>
  );
};

const Tab = ({ children }) => <div>{children}</div>;

// Usage
const App = () => (
  <Tabs>
    <Tab label="Tab 1">Content for Tab 1</Tab>
    <Tab label="Tab 2">Content for Tab 2</Tab>
    <Tab label="Tab 3">Content for Tab 3</Tab>
  </Tabs>
);

export default App;
```