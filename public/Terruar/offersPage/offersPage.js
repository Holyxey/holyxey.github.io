let offersPopup;
let offersPopupButton;
let offersPopupButtonLines;
let offersSocials;
let offersMMenuItems;

let offersOpened = false;

function offersMenuLet() {
    offersPopup = document.getElementById('header-m')
    offersPopupButton = document.getElementsByClassName('open-menu')[0]
    offersPopupButtonLines = document.getElementsByClassName('open-menu-line')
    offersSocials = document.getElementById('offers-social')
    offersMMenuItems = document.getElementById('header-m').querySelectorAll('li')

    offersPopupButton.addEventListener('click', offersMenuClick)
}

function offersMenuClick(el) {
    if (offersOpened === false) {
        offersShowMenu()
    } else {
        offersHideMenu()
    }
}
function offersShowMenu() {
    offersPopupButtonLines[0].style.translate = '0 5px'

    offersPopup.style.display = 'flex'
    offersPopup.classList.add('offersOpacity')
    offersPopup.classList.remove('offersOpacityB')

    offersSocials.style.display = 'flex'
    offersSocials.style.opacity = '0'
    offersSocials.classList.add('offersOpacity')
    offersSocials.classList.remove('offersOpacityB')

    document.body.style.overflow = 'hidden'

    offersOpened = true;

    for (let i = 0; i < offersMMenuItems.length; i++) {
        offersMMenuItems[i].style.opacity = '0'
        setTimeout(function () {
            offersMMenuItems[i].classList.add('offersMenuItems')
        }, 50 * i)
    }
}
function offersHideMenu() {
    for (let i = 0; i < offersMMenuItems.length; i++) {
        setTimeout(function () {
            offersMMenuItems[i].classList.remove('offersMenuItems')
        }, 50 * i)
    }
    offersPopup.style.display = ''

    offersPopupButtonLines[0].style.translate = ''

    offersPopup.classList.remove('offersOpacity')
    offersPopup.classList.add('offersOpacityB')

    offersSocials.classList.add('offersOpacityB')
    offersSocials.classList.remove('offersOpacity')

    offersOpened = false;
    document.body.style.overflow = ''
}


document.addEventListener("DOMContentLoaded", offersMenuLet)