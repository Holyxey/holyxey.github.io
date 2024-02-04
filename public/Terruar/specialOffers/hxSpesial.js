let hxSpecialOffers;
let hxSpecialPopupClose;
let hxSpecialPopup;
let hxSpecialItem;
// 

function hxSpecialOnload() {
    document.getElementById('hxSpecialPopupClose').setAttribute('onclick', 'hxClickSpecialPopupClose(this)')
    hxSpecialPopup = document.getElementById('hxSpecialPopup')

    getSpecialCounter();
    hxSpecialItemHide();
}
// 
function hxSpecialItemHide() {
    let items = document.getElementsByClassName('hxSpecialItem')
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    hxSpecialItem = items;
}
function getSpecialCounter() {
    hxSpecialOffers = document.getElementsByClassName('hx-special')
    for (let i = 0; i < hxSpecialOffers.length; i++) {
        hxSpecialOffers[i].setAttribute('offercounter', i)
        hxSpecialOffers[i].setAttribute('onclick', `clickSpecialOffer(this, ${i})`);
    }
}
function clickSpecialOffer(el, counter) {
    hxSpecialPopup.classList.add('hxSpecialPopupShow');
    hxSpecialPopup.style.display = 'flex'
    let items = hxSpecialPopup.querySelectorAll('article[class="hxSpecialItem"]')
    items[counter].style.display = ''
}
function hxClickSpecialPopupClose() {
    hxSpecialPopup.classList.add('hxSpecialPopupHide')
    setTimeout(function () {
        hxSpecialPopup.style.display = 'none'
        hxSpecialPopup.classList.remove('hxSpecialPopupHide')
        hxSpecialItemHide()
    }, 500)
}


// 
document.addEventListener("DOMContentLoaded", hxSpecialOnload)