---
title: "File Explorer Recursive React Component  "
author: Kunal Singh
description: How to create a recursive folder Component using react.
tags:
  - post
  - react
  - javascript
  - web
date: 2022-04-16T03:16:38.022Z
image: /img/post/download.jpg
imageAlt: React Recursive Components
readTime: 3 Minutes ⌚
---
Lets Create a Recursive React Component for our File Explorer or Folders.

![Recursive Folder Structure Component Using React](/img/post/chrome-capture-5-.gif "Recursive Folder Structure Component Using React")

Lets Get a Sample JavaScript Variable for our Filesystem first. You can use API data or import a JSON if you wish to.

```javascript
let Files = {
    type: "folder",
    name: "parent",
    data: [
      {
        type: "folder",
        name: "root",
        data: [
          {
            type: "folder",
            name: "src",
            data: [
              {
                type: "file",
                name: "index.js",
              },
            ],
          },
          {
            type: "folder",
            name: "public",
            data: [
              {
                type: "file",
                name: "index.ts",
              },
            ],
          },
          {
            type: "file",
            name: "index.html",
          },
          {
            type: "folder",
            name: "data",
            data: [
              {
                type: "folder",
                name: "images",
                data: [
                  {
                    type: "file",
                    name: "image.png",
                  },
                  {
                    type: "file",
                    name: "image2.webp",
                  },
                ],
              },
              {
                type: "file",
                name: "logo.svg",
              },
            ],
          },
          {
            type: "file",
            name: "style.css",
          },
        ],
      },
    ],
  };
```

Alright so we got the files. Next we need to create a Component for our files.

```jsx
  function FileExplorer({ files }) {
    const [expanded, setExpanded] = useState(false);
    if (files.type === "folder") {
          return (
            <div key={files.name}>
              <span onClick={() => setExpanded(!expanded)}>
                {files.name}📂
              </span>
              <div
                className="expanded"
                style={{ display: expanded ? "block" : "none" }}
              >
                {files.data.map((file) => {
                  if (file.type === "file")
                    return <div key={file.name}>{file.name}</div>;
                  else if (file.type === "folder")
                    return <FileExplorer key={file.name} files={file} />;
                })}
              </div>
            </div>
          );
    } else if (files.type === "file") {
      return <div>{files.name}</div>;
    }
  }
```

```jsx
  export default function App() {
    return (
      <div className="App">
        <FileExplorer files={Files} />
      </div>
    );
  }
```

All we are trying to do here is simply is.

1. Pass the File JSON to our Component as props.
2. Inside the component check if the file passed is a folder or a file 
3. If its a file just render it and do nothing 
4. But if its a folder 📁📁 that's when the fun part begins. 
5. If its a folder then first show the label of the folder and below it render the `data` part of the folder. Here to toggle the data part we are using state in our component called as `expanded`.
6. Now comes the part when we need the recursion. Now while we are rendering the data we just need to check if the current file is a folder and if it is then simple call the `<FileExplorer/>` Component with the corresponding folder in the data.
7. And thats how it is done.

### Check out this Codesandbox Example

<iframe src="https://codesandbox.io/embed/recursive-folder-react-component-007pb?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="zealous-blackburn-tvrd7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*