---
title: "Browser Feature Identification using API check instead of Browser Version "
author: Kunal Singh
description: As engineers, we know the struggle of dealing with backward
  compatibility and legacy web apps. Hours spent on browser version issues can
  be frustrating! Instead, let’s focus on feature detection—checking if a
  specific API or feature is available in the browser at runtime. This approach
  makes our code more reliable and future-proof. It’s time to move beyond
  version numbers and build smarter, more adaptable web applications!
tags:
  - snippet
  - browser
  - web
  - javascript
date: 2025-01-27T06:08:52.765Z
image: /img/post/browser-api-detecting.png
imageAlt: "Browser Feature Identification using API check instead of Browser Version "
---
```javascript
if ('share' in navigator) {
  console.log("navigator.share is supported!");
  navigator.share({ title: "Check this out!", url: "https://example.com" });
} else {
  console.log("navigator.share is not supported.");
}
```