let caseWeb;
let iframeLink;
let casepopup;
let closepopup;

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
}

function closethis() {
    // casepopup =  document.getElementById('casepopup')
    casepopup.classList.add('hidepopup');
    casepopup.classList.remove('showpopup');
    setTimeout(function (){casepopup.style.display = 'none'},300)
}