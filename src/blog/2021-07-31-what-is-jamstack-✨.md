---
title: What is JAMStack ✨
author: Kunal Singh
description: Jamstack stands for Javascript APIS and Markup and it is based on
  this idea of serving static sites to users which are not so static in real.
tags:
  - post
  - jamstack
date: 2021-07-31T15:47:57.602Z
image: /img/post/download.png
imageAlt: "Jamstack "
readTime: 2 Minutes ⌚
---
### What the heck is JAMStack?

A wise man once said 

> Why use Database for your public data when you can use github for hosting that data ;)

Jamstack stands for Javascript APIS and Markup and it is based on this idea of serving static sites to users which are not so static in real.

![](/img/post/1_tdrfv0lag7tg3us2yjmala.jpeg)

Okay let me break it down for you. Lets consider a conventional Website Architecture. You have a frontend, you have a database and you have some apis which interact with the database and the frontend takes care of the data. But you see in this architecture whenever the user goes to the site the same data is queried each time and the overall time and processing required is alot. 

In contrary to this idea **JAMStack** comes with this idea of building the site once and serving it statically through a CDN to the users. Now when a new blog comes up a new build is trigerred which creates a new version of your website which is statically served. 

Not only is this more optimized for better **performance , security** and **scalability** but with all that it has an amazing **developer experience** which is often hooked with your github repo.

![](/img/post/wl2tdlrxg.jfif)

### How it works?

Let me give you an example of this website.

* All the content of this site is hosted at github 
* Using Netlify CMS I can publish a new blog to my website which then pushes that data to github
* Which then triggers a build process for the website and kaboom the new blog is live with a build time of 5-10 seconds \[ Note this build time increases as the data of your site increases but the best part is the old version is live until new one is pushed :) ] 
* Also incase of any sourcecode changes are made even that triggers a netlify build resulting in a fresh version of the site.

### How can I get started ?

The best resources to get started would be the <a href="https://jamstack.org/" target="_blank">Jamstack.org</a> website and also  <a href="https://www.youtube.com/channel/UC-T8W79DN6PBnzomelvqJYw" target="_blank">James Quick</a> on Youtube Since Jamstack is not a new framework but just a philosophy for website architectures, Its very easy to pick up and especially if you are a frontend developer like me It gives you super powers 🦄

### Is it even used by companies ?

Yess and there is whole new ecosystem backing it up you will know more once you visit the <a href="https://jamstack.org/" target="_blank">Jamstack.org</a> website

I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.



*Happy Coding 👩‍💻!*