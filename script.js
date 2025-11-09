//Logique d'affichage des page


const buttons = document.querySelectorAll('.button')
const pages = document.querySelectorAll('.page')


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetPageId = button.getAttribute('data-page')
    
    buttons.forEach(btn => {
      btn.classList.remove('fw-bold')
      btn.classList.add('text-muted')
    })
   
    button.classList.remove('text-muted')
    button.classList.add('fw-bold')
   
    pages.forEach(page => {
      page.classList.add('d-none')
    })

    document.getElementById(targetPageId).classList.remove('d-none')
  })
})

const projectButton = document.getElementById('project-button')
const contactButton = document.getElementById('contact-button')


projectButton.addEventListener('click', () => {
const buttons = document.querySelectorAll('.button')
buttons.forEach(btn => {
  btn.classList.remove('fw-bold')
  btn.classList.add('text-muted')
})
document.getElementsByClassName('button')[3].classList.remove('text-muted')
document.getElementsByClassName('button')[3].classList.add('fw-bold')
  
})

contactButton.addEventListener('click', () => {
  const buttons = document.querySelectorAll('.button')
  buttons.forEach(btn => {
    btn.classList.remove('fw-bold')
    btn.classList.add('text-muted')
  })
  document.getElementsByClassName('button')[4].classList.remove('text-muted')
  document.getElementsByClassName('button')[4].classList.add('fw-bold')
    
  })


  const bars = document.querySelector('.i1')
  const times = document.querySelector('.i2')
  const navbar = document.querySelector('.navbar-sm')

  bars.addEventListener('click',()=>{
    bars.classList.add('d-none')
    times.classList.remove('d-none')

    document.querySelector('.ul-sm').classList.remove('t1')
    document.querySelector('.ul-sm').classList.add('t2')

    navbar.classList.remove('height-1')
    navbar.classList.add('height-2')
  })
  times.addEventListener('click',()=>{
    bars.classList.remove('d-none')
    times.classList.add('d-none')

    document.querySelector('.ul-sm').classList.remove('t2')
    document.querySelector('.ul-sm').classList.add('t1')

    navbar.classList.remove('height-2')
    navbar.classList.add('height-1')
  })