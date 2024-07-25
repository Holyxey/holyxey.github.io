const header = document.querySelector('header');
const menu = document.querySelector('menu');
const menuButtons = document.getElementById('headerButtons');
const burger = document.getElementById('burger');
let isBurgerOpened = false

header.onclick = () => {
    if (!isBurgerOpened && window.innerWidth < 960) {
        menu.style.transition = 'all .3s ease-out'
        menu.style.height = 'inherit'
        menu.style.width = '100%'
        menu.style.display = 'flex'
        menuButtons.style.height = 'inherit'
        menuButtons.style.width = 'inherit'
        menuButtons.style.display = 'flex'
        isBurgerOpened = true
    } else if (window.innerWidth < 960) {
        menu.style.height = '0px'
        menu.style.width = '0px'
        menu.style.display = 'none'
        menuButtons.style.height = '0px'
        menuButtons.style.width = '0px'
        menuButtons.style.display = 'none'
        isBurgerOpened = false
    }
}