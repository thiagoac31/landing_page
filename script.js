const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.nav-menu')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativado')
    navMenu.classList.toggle('ativado')
})