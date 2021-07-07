const showGreeting = () =>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
}

setTimeout( showGreeting , 20000);

document.querySelector('.close').addEventListener('click' , ()=>{
  document.querySelector('.greeting').classList.toggle('show-greeting')
})
