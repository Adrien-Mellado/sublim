const menuHambuerger = document.querySelector(".menu-hamburger")
const navlinks= document.querySelector(".nav-links")

menuHambuerger.addEventListener('click', ()=>{
    navlinks.classList.toggle('mobile_menu')
})