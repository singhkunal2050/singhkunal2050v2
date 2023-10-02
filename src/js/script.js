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

function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const showLatestBlog = () =>{
  if(document.URL.split('/').length == 4  && !getCookie('latest-blog-shown')) { // if at home 
    document.querySelector('.latest-blog-strip-container').classList.toggle('show-blog-strip')
  }
}
setTimeout( showLatestBlog , 4000);

document.querySelector('.close-blog-strip').addEventListener('click' , ()=>{
  document.querySelector('.latest-blog-strip-container').classList.toggle('show-blog-strip')
  setCookie('latest-blog-shown',true,1);
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

// if(window.innerWidth>748){
//   if(!document.URL.split('/').includes('blog') )  // if its not the article page
//     update(); // execute animation only on desktop
// }

// preloader

// document.onreadystatechange = function () {
//   if (document.readyState == "complete") {
//   // document is ready. Do your stuff here
//   document.querySelector('.preloader').style.transform="translateY(-100vh)";
//   document.querySelector('.preloader').style.display="none";
//   }
// }

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

// blog finish indicator

var totalHeight = document.documentElement.scrollHeight;
var header = document.querySelector('.blog-indicator');

if(document.URL.split('/').includes('blog') ){
  document.addEventListener('scroll' , (e)=>{
  let percentage =   (Number(window.scrollY)) / (Number(totalHeight) - 100) * 100
   percentage = (percentage + 7.8) % 100 - 100
  //  console.log(percentage);
   header.style.transform= `translateX(${percentage}vw)` ;
 });
 
}  // if its  the article page


// toggle theme 

function checkTheme(){
  if(localStorage.theme){
    document.querySelector('html').classList.add(localStorage.theme)
  }else{
    document.querySelector('html').classList.add('default')
  }
}

checkTheme()

function changeTheme(targetTheme){
  document.querySelector('html').classList = [ targetTheme ]
  localStorage.theme = targetTheme;
}

function toggleColorContainer(){
  document.querySelector('.theme-selector-container').classList.toggle('active')
}


document.body.addEventListener('click', (e)=>{
    if(e.target.matches('.set-theme')){
      let targetTheme = e.target.closest('.theme-pallete-wrapper').id
      console.log(targetTheme)
      changeTheme(targetTheme)
    }else if(e.target.matches('.close-theme-selector') || e.target.matches('.toggle-btn')){
      toggleColorContainer()
    }
})


// document.querySelector('.toggle-btn').addEventListener('click' , changeTheme)
// document.querySelector('.close-theme-selector').addEventListener('click' , toggleColorContainer)
// document.querySelector('.toggle-btn').addEventListener('click' , toggleColorContainer)

