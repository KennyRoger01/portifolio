/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle= document.getElementById('nav-toggle'),
    navClose= document.getElementById('nav-close')


    /*====MENU SHOW====*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== SHADOW HEADER ===============*/

const shadowHeader = ()=> {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)


/*=============== EMAIL JS ===============*/
//const contactForm = document.getElementById('contact-form'),
//    contactMessage = document.getElementById('contact-message')


//const sendEmail = (e) => {
//    e.preventDefault();
//    emailjs.sendForm('service_ib44l6q', 'template_0n7c9l4', '#contact-form', 'FMWh2aQNDtGM64Sc6')
 //   .then(() =>{
  //      contactMessage.textContent = 'Mensagem enviada com sucesso ✅'
//
    //    setTimeout(() => {
 //           contactMessage.textContent = ''
 //       }, 5000)

 //       contactForm.requestFullscreen()


 //   }, () => {
 //       contactMessage.textContent = 'Mensagem não enviada ( erro de serviço ) ❌'
   // })
    
//}

//contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp =() => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

                if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                    sectionsClass.classList.add('active-link')
                }else {
                    sectionsClass.classList.remove('active-link')
                }

    })

}

window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME   ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme= 'ri-sun-line'


const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '130px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home__perfil, .about__image`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .section__title-2, .section__title-1, .about__info`, {origin: 'left'})

sr.reveal(`.services__card, .projects__card, .contact__social`, {interval:100})