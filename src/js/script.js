document.querySelector('.hamburger').addEventListener('click' , (e)=>{
  document.querySelector('.hamburger').classList.toggle('active')
  document.querySelector('.menu').classList.toggle('show-menu')
})

document.querySelector('.menu').addEventListener('click' , (e)=>{
  document.querySelector('.hamburger').classList.toggle('active')
  document.querySelector('.menu').classList.toggle('show-menu')
})


// show greeting

const showGreeting = () =>{
  if(!localStorage.greeted){
    document.querySelector('.greeting').classList.toggle('show-greeting')
    localStorage.setItem('greeted', true);
  }
}
setTimeout( showGreeting , 20000);
document.querySelector('.close').addEventListener('click' , ()=>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
})


// show latest blog 
const showLatestBlog = () =>{
  if(document.URL.split('/').length == 4 ) { // if at home 
    document.querySelector('.latest-blog-strip-container').classList.toggle('show-blog-strip')
  }
}
setTimeout( showLatestBlog , 2000);
document.querySelector('.close-blog-strip').addEventListener('click' , ()=>{
  document.querySelector('.latest-blog-strip-container').classList.toggle('show-blog-strip')
})


// skew on scroll

const section = document.querySelectorAll('section');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.35;
	
	section.forEach((elem) => {
    elem.style.transform = `skewY(${ speed % 15 }deg)`
  });
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

if(window.innerWidth>748){
  if(!document.URL.split('/').includes('blog') )  // if its not the article page
    update(); // execute animation only on desktop
}

// preloader

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
  // document is ready. Do your stuff here
  document.querySelector('.preloader').style.transform="translateY(-100vh)";
  document.querySelector('.preloader').style.display="none";
  }
}

// share on social media 

function shareonfb(){
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL)); return false;
}
  // twitter has probably blocked this source but it will work for u ;)
  function shareontwitter(){
   window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20 ' + encodeURIComponent(document.URL)); return false;
  }
  
  function shareonlinkedin (){
    window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' + encodeURIComponent(document.title)); return false;
  }

  function shareonpinterest(){
    window.open('http://pinterest.com/pin/create/button/?url=' + encodeURIComponent(document.URL) + '&description=' + encodeURIComponent(document.title)); return false;
  }



