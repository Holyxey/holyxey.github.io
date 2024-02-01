$('.hx-at-review-block').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
});

// Картинки последовательно грузим
document.addEventListener("DOMContentLoaded", reviewImgWait)
let caseBackgr;
function reviewImgWait() {
    caseBackgr = document.getElementsByClassName('hx-at-case-web');
    for (let i = 0; i < caseBackgr.length; i++) {
        let elImg = caseBackgr[i].querySelector('div[laazy]')
        if (elImg) {
            let url = elImg.getAttribute('laazy')
            console.log(url)
            elImg.style.backgroundImage = url;
            elImg.classList.add('showpopup')
        }
    }
}