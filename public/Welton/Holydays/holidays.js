let hldsBlock;
let hldsItem;
let hldsClose;
let hldsPopup;

window.addEventListener("DOMContentLoaded", hldsStart);

function hldsStart(el) {
    hldsBlock = document.getElementById('hx-wh-popup-info');
    hldsItem = document.querySelectorAll('.hx-wh-popup-item');
    hldsClose = document.getElementById('hx-wh-hlds-cls');
    hldsPopup = document.getElementById('hx-wh-popup');
    hldsClose.setAttribute('onclick', 'hldsCloseFun()')
    hldsPopup.setAttribute('onclick', 'hldsCloseFun()')
}

function hldsCloseFun() {
    hldsPopup.classList.add('hx-wh-hlds-hide')
    setTimeout(function () {
        hldsPopup.classList.remove('hx-wh-hlds-hide')
        hldsPopup.style.display = 'none'
    }, 400)
}