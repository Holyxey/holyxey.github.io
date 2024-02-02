//
//
// Картинки последовательно грузим
document.addEventListener("DOMContentLoaded", reviewImgWait)
let caseBackgr;
function reviewImgWait() {
    caseBackgr = document.getElementsByClassName('hx-at-case-web');
    for (let i = 0; i < caseBackgr.length; i++) {
        let elImg = caseBackgr[i].querySelector('div[laazy]')
        if (elImg) {
            let url = elImg.getAttribute('laazy')
            elImg.style.backgroundImage = url;
            elImg.classList.add('showpopup')
        }
    }
}