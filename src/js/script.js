const showGreeting = () =>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
}

setTimeout( showGreeting , 10);

document.querySelector('.close').addEventListener('click' , ()=>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
})
