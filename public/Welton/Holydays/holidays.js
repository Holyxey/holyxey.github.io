let hldsBlock;
let hldsItem;
let hldsClose;
let hldsPopup;
let hldsOpen;

document.addEventListener("DOMContentLoaded", hldsStart);

function hldsStart(el) {
    hldsBlock = document.getElementById('hx-wh-popup-info');
    hldsItem = document.querySelectorAll('.hx-wh-popup-item');
    hldsClose = document.getElementById('hx-wh-hlds-cls');
    hldsPopup = document.getElementById('hx-wh-popup');
    hldsOpen = document.querySelector("a[data='hlds']");

    hldsClose.setAttribute('onclick', 'hldsCloseFun()')
    hldsPopup.setAttribute('onclick', 'hldsCloseFun()')
    hldsOpen.setAttribute('onclick', 'hldsOpenPopup()')
}

function hldsCloseFun() {
    hldsPopup.classList.add('hx-wh-hlds-hide')
    setTimeout(function () {
        hldsPopup.classList.remove('hx-wh-hlds-hide')
        hldsPopup.style.display = 'none'
    }, 400)
}

function hldsOpenPopup() {
    hldsPopup.style.display = 'flex'
    hldsPopup.classList.add('hx-wh-hlds-show')
    setTimeout(function () {
        hldsPopup.classList.remove('hx-wh-hlds-show')
    }, 400)
}