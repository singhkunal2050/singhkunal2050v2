const showGreeting = () =>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
}

setTimeout( showGreeting , 10000);

document.querySelector('.close').addEventListener('click' , ()=>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
})

// skew 

const section = document.querySelectorAll('section');

let currentPos = window.pageYOffset;

const update = () => {
	const newPos = window.pageYOffset;
	const diff = newPos - currentPos;
	const speed = diff * 0.35;
	
	section.forEach((elem) => {
    elem.style.transform = `skewY(${ speed % 10 }deg)`
  });
	
	currentPos = newPos;
	
	requestAnimationFrame(update);
}

if(window.innerWidth>748){
  update(); // execute animation only on desktop
}