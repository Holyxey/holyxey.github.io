let upButton;
let downButton;
let wbList;
let listScrollPosition;
let listScrollHeight;
let wbMainImg;
let wbListImg;
function prestart() {
    if (location.href.includes('muzhskie_remni_flat_charcoal/ab')) {
        document.querySelector('#rec716277636').display = 'none'
    }
}
function wbStart() {
    if (window.innerWidth > 900) {
        document.querySelector('.wbGallery').style.maxHeight += (document.querySelector('.wbMainImg').clientHeight + 'px')
    }

    upButton = document.querySelector('#wbListUP')
    downButton = document.querySelector('#wbListDown')
    upButton.setAttribute('onclick', 'arrowClick(this)')
    downButton.setAttribute('onclick', 'arrowClick(this)')

    wbList = document.querySelector('.wbList')
    listScrollPosition = wbList.firstElementChild.getBoundingClientRect().top;
    listScrollHeight = document.querySelector('.wbListImg').getBoundingClientRect().height;

    wbMainImg = document.querySelector('.wbMainImg');
    wbListImg = document.querySelectorAll('.wbListImg')
    for (let i = 0; i < wbListImg.length; i++) {
        wbListImg[i].setAttribute('onmouseenter', 'imgHover(this)')
    }
    if (window.innerWidth <= 650) {
        wbListImg = document.querySelectorAll('.wbListImg')
        for (let i = 0; i < wbListImg.length; i++) {
            wbListImg[i].setAttribute('orderImg', i)
        }
    }

}
function arrowClick(el) {
    if (window.innerWidth <= 650) {
        switch (el) {
            case (upButton): {
                break;
            }
            case (downButton): {
                break;
            }
        }
    } else {
        switch (el) {
            case (upButton): {
                wbList.scroll({
                    top: listScrollPosition - listScrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
                listScrollPosition-=listScrollHeight;
                break;
            }
            case (downButton): {
                wbList.scroll({
                    top: listScrollPosition + listScrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
                listScrollPosition+=listScrollHeight;
                break;
            }
        }
    }
}
function imgHover(el) {
    wbMainImg.setAttribute('src', el.getAttribute('src'))
}

//
//
window.addEventListener("load", wbStart)
document.addEventListener("DOMContentLoaded", prestart)