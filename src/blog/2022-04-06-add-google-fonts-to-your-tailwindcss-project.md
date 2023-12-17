---
title: Add Google Fonts to Your React & NextJS + TailwindCSS Project (Next 14)
author: Kunal Singh
description: Use Google Fonts in Your TailwindCSS Projects
tags:
  - post
  - css
  - tailwindcss
  - react
  - nextjs
  - tailwind
  - design
date: 2022-04-06T06:40:36.253Z
image: /img/post/css-units-cover.jpeg
imageAlt: Using Google Fonts with TailwindCSS
readTime: 2 Minutes ⌚
---
## Using Google Fonts in Next.js

Next.js provides a convenient way to handle font imports, whether they are Google Fonts or local fonts. This guide will walk you through the process of installing and using Google Fonts in a Next.js project.

### Step 1: Choose a Google Font

Visit the Google Fonts website and choose the font you want to use. For this example, we'll use the "Farro" font.

### Step 2: Import and Use the Font in `_app.js`/`layout.js` depending upon your Next Version

Open your _app.js (or _app.jsx for JSX) file in the pages directory, and use the `Farro` font as an example:

```jsx
// pages/_app.js
import { Farro} from 'next/font/google';
import '../styles/globals.css'; // Import your global styles here

const farro = Farro({
  subsets: ['latin'],
  // define weights are other configurations if needed
  // weight: ['400', '700'],
  // style: ['normal', 'italic'],
  // display: 'swap',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={farro.className}>
      <Component {...pageProps} />
    </main>
  );
}
```

Replace 'Farro' with the name of the Google Font you have chosen. Adjust the subsets and other options as needed.

Now, the "Farro" font will be applied globally to your entire application.

![](/img/post/font-example-next-js.webp)



### Step 3: Use the Font in Specific Components or Pages

You can use the font in specific components or pages by applying the font's className. For example, in pages/index.js:

```jsx
// pages/index.js

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className={inter.className}>
      <p>Hello World</p>
    </div>
  );
}
```

### Step 4: Specifying a Subset (Optional)

Google Fonts are automatically subset, reducing the font file size for better performance. You can specify the subsets you want to preload. Add the subset to the function call:

```jsx
const inter = Inter({ subsets: ['latin'] });
```

### Step 5: Using Multiple Fonts

You can import and use multiple fonts by creating utility functions. For example:

```jsx
// app/fonts.js

import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
});
```

Then, use them in your application:

```jsx
// pages/_app.js

import { inter, roboto_mono } from '../app/fonts';
// ...
```

### Step 6: With Tailwind CSS

If you're using Tailwind CSS, you can integrate the font with your styles:

```jsx
// pages/_app.js

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
```

Then, add the CSS variable to your Tailwind CSS config.

That's it! You've successfully installed and used Google Fonts in your Next.js project. Feel free to customize the fonts, weights, and styles according to your design preferences.