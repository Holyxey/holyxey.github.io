let hxSpecialOffers;
function clickSpecialOffer(el) {
    console.log(el.getAttribute('offercounter'))
}
function getSpecialCounter() {
    hxSpecialOffers = document.getElementsByClassName('hx-special')
    for (let i = 0; i < hxSpecialOffers.length; i++) {
        hxSpecialOffers[i].setAttribute('offercounter', i)
        hxSpecialOffers[i].setAttribute('onclick', 'clickSpecialOffer(this)')
    }
}
document.addEventListener("DOMContentLoaded", getSpecialCounter)