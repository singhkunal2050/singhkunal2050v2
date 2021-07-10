document.querySelector('.hamburger').addEventListener('click' , (e)=>{
  document.querySelector('.hamburger').classList.toggle('active')
  document.querySelector('.menu').classList.toggle('show-menu')
})

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
  update(); // execute animation only on desktop
}

// preloader

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
  // document is ready. Do your stuff here
  document.querySelector('.preloader').style.transform="translateY(-100vh)";
}
}