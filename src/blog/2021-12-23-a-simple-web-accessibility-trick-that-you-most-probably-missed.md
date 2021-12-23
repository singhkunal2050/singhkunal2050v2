---
title: A Simple Web Accessibility Trick that you most probably missed!
author: Kunal Singh
description: Imagine that you cannot use the mouse and have to Navigate a
  Website with the keyboard. Be ready to always go through the nested menu items
  everytime before reaching the actual content.
tags:
  - post
  - html
  - css
  - web-accessibility
  - user-experience
date: 2021-12-23T08:39:29.418Z
image: /img/post/accessibilty.png
imageAlt: Web Accessibilty
readTime: 2 Minutes ⌚
---
At regular users we tend to ignore the problems which we do not come across, one such problem can be related to accessibility. I was approached by a visually disabled individual who had a feedback for a website that we recently built. The guy was working in the same organization as a Sales Associate and was a good friend. 

**The problem was he had to always navigate through the long menu items before reaching the content of any page.** 

For example : 
Menu has 20 links which he had to `tab `through to get to the blog content or the page content. 

This little problem is what we can solve for our users who for some reason can not navigate with the mouse. 

![](/img/post/web-accessibilty-skip-menu-btn.gif)

To skip the menus for `keyboard `users we can add a `button `which only pops up when we `focus `on it with the `tab `key. Once the user hits `enter `they can skip the menu and jump to the main content without going through long nested menu items.
This little `accessibility button `can help save a lot of time for the users which are not using their `mouse `and may have accessibility related problems.

This trick is seen in most of the modern web applications we use

Check live example at <a href="https://tvrd7.csb.app/" target="_blank">https://tvrd7.csb.app/</a>

<iframe src="https://codesandbox.io/embed/zealous-blackburn-tvrd7?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="zealous-blackburn-tvrd7"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*
