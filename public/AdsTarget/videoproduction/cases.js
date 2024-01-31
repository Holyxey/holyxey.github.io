let caseWeb;
let iframeLink;
let casepopup;
let closepopup;
let popupvid;

document.addEventListener("DOMContentLoaded", q);
function q() {
    caseWeb = document.getElementsByClassName('hx-at-case-web')
    iframeLink = document.getElementById('popupiframe')
    casepopup =  document.getElementById('casepopup')


    for (let i = 0; i < caseWeb.length; i++) {
        caseWeb[i].setAttribute('onclick', 'caseWebClick(this)')
    }
}

function caseWebClick(el) {
    let a = el.querySelector('a');
    if (a && a.href) {
        let thiscase = a.href;
        iframeLink.src = thiscase;

        casepopup.classList.remove('hidepopup');
        casepopup.classList.add('showpopup');
        casepopup.style.display = 'flex';
    }
    closepopup = document.getElementById('closepopup');
    closepopup.setAttribute('onclick', 'closethis()')
    casepopup.setAttribute('onclick', 'closethis()')
    respons();
}

function closethis() {
    casepopup.classList.add('hidepopup');
    casepopup.classList.remove('showpopup');
    setTimeout(function (){casepopup.style.display = 'none'},300)
    iframeLink.src = '';
    popupvid.style.height = '';
}

function respons(el) {
    popupvid = document.getElementById('popupiframe');
    let w = getWidth(popupvid);
    let h = (w / 1.7777);
    popupvid.style.height = (h + 'px');
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 27)
        closethis();
});