---
title: Image Masking on Hover Using CSS Clip Path and Javascript
author: Kunal Singh
description: Image Masking can be used to add fancy hover highlight effects to
  images for making them more interactive
tags:
  - post
  - javscript
  - css
  - html
date: 2022-07-23T16:47:02.436Z
image: /img/post/image-masking-effect.png
imageAlt: CSS-Image-Masking-Effect
readTime: 2 Minutes ⌚
---
![css-masking-on-hover-js](/img/post/css-masking-on-hover-js.gif)

Image Masking can be used to add fancy hover highlight effects to images for making them more interactive

We are doing these using simple css filter effects and javscript events. Lets understand how.

```html
<!--index.html -->
<div class="wrapper">
<img src="https://images.unsplash.com/photo-1627678984084-c1815e235444?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YnV0dGVyZmx5fHx8fHx8MTY1ODU5Mjg2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500" alt="">
<img src="https://images.unsplash.com/photo-1627678984084-c1815e235444?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8YnV0dGVyZmx5fHx8fHx8MTY1ODU5Mjg2MQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=500" alt="">
</div>
```

We are having two identical images placed inside a wrapper here. We will be stacking both of them using position relative to wrapper and absolute to both the images.

```css
.wrapper{
  position:relative;  
  padding:20px;
}

/* Make Images Stack */
.wrapper img{  
  position:absolute;
}

/*Grayscale the bottom image  */
.wrapper img:nth-child(1){
     filter:grayscale(1);
}

/* Hide Top Image */
.wrapper img:nth-child(2){
      opacity:0;
}
```

This will make both the images stack and make only one image visible which is in the bottom with \`grayscale\` effect. The top image is having \`opacity:0\`, Hence we can listen for events on top that image to apply clip-path based on the cursor location and also make its \`opacity;1\`.

```javascript
document.querySelectorAll('img')[1].addEventListener('mousemove' , function(e){
    let width = 500;
    let height = 500;
    let xPercentage = e.layerX/width * 100 ; 
    let yPercentage = e.layerY/height * 100 ;
    // console.log(xPercentage , yPercentage )
    this.style.clipPath = `circle(22% at ${xPercentage}% ${yPercentage}%)`
})

document.querySelectorAll('img')[1].addEventListener('mouseenter' , function(e){
    this.style.opacity = `1`;
})

// making top image back to as it was before hovering
document.querySelectorAll('img')[1].addEventListener('mouseleave' , function(e){
    this.style.clipPath = `unset`;
    this.style.opacity = `0`;
})
```

Andd thats it!! Hope this helped :)



<iframe height="300" style="width: 100%;" scrolling="no" title="CSS-Image-Masking-Effect" src="https://codepen.io/singhkunal2050/embed/wvmeQKN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/singhkunal2050/pen/wvmeQKN">
  CSS-Image-Masking-Effect</a> by Kunal SIngh  (<a href="https://codepen.io/singhkunal2050">@singhkunal2050</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



I hope you learned something new today if you did then please share this post with your friends who might find this useful aswell. Have any questions? Feel free to connect with me on     <a href="//linkedin.com/in/singhkunal2050" target="_blank">LinkedIn</a> <a href="//twitter.com/singhkunal2050" target="_blank">Twitter</a>  <a href="/" target="_blank">@singhkunal2050</a>. You can also write me <a href="/#contact" target="_blank">here</a>.

*Happy Coding 👩‍💻!*