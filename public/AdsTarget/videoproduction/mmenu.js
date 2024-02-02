let hxMMenuButton;
let hxMMenuList;
let hxMMenuBack;
function getmmenu(el) {
    hxMMenuButton = document.getElementById('headerMenuButton');
    hxMMenuBack = document.getElementById('hx-at-hdr-mobile-back');
    hxMMenuList = document.getElementsByClassName('hx-at-hdr-mobile-menu')[0];
    hxMMenuButton.addEventListener('click', hxShowMMenu)
    hxMMenuBack.addEventListener('click', hxHideMMenu)
}
//
document.addEventListener("DOMContentLoaded", getmmenu)

//
// *** *** *** *** ***
//
function hxShowMMenu() {
    hxMMenuBack.style.display = 'block';
    hxMMenuList.style.display = 'flex';
    hxMMenuBack.classList.remove('hidepopup');
    hxMMenuList.classList.remove('hidepopup');
    hxMMenuBack.classList.add('showpopup');
    hxMMenuList.classList.add('showpopup');
}
function hxHideMMenu() {
    hxMMenuBack.classList.remove('showpopup');
    hxMMenuList.classList.remove('showpopup');
    hxMMenuBack.classList.add('hidepopup');
    hxMMenuList.classList.add('hidepopup');
    setTimeout(function () {
        hxMMenuBack.style.display = 'none';
        hxMMenuList.style.display = 'none';
    }, 300)
}