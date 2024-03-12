let upButton;
let downButton;
let wbList;
let listScrollPosition;
let listScrollHeight;
let wbMainImg;
let wbListImg;
function prestart() {
        document.querySelector('#rec716277636').style.display = 'none'
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
        wbListImg[0].classList.add('wbListImgChosen')
        for (let i = 0; i < wbListImg.length; i++) {
            wbListImg[i].setAttribute('orderImg', i)
            wbListImg[i].setAttribute('onclick', 'wbMobImgChosen(this)')
        }
    }

}
function arrowClick(el) {
    if (window.innerWidth <= 650) {
        wbListImg = document.querySelectorAll('.wbListImg')
        wbMobImgChosen()
        switch (el) {
            case (upButton): {
                for (let i = 0; i < wbListImg.length; i++) {
                    if (wbListImg[i].classList.contains('wbListImgChosen')) {
                        wbListImg[i].classList.remove('wbListImgChosen')
                        wbListImg[i - 2].classList.add('wbListImgChosen')
                        wbMobImgChosen()
                        break;
                    }
                }
            }
            case (downButton): {
                for (let i = 0; i < wbListImg.length; i++) {
                    if (wbListImg[i].classList.contains('wbListImgChosen') && wbListImg[i + 1]) {
                        wbListImg[i].classList.remove('wbListImgChosen')
                        wbListImg[i + 1].classList.add('wbListImgChosen')
                        wbMobImgChosen()
                        break;
                    }
                }
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
function wbMobImgChosen(el) {
    if (window.innerWidth <= 650) {
        wbMainImg = document.querySelector('.wbMainImg');
        wbListImg = document.querySelectorAll('.wbListImg')
        if (el) {
            for (let i = 0; i < wbListImg.length; i++) {
                wbListImg[i].classList.remove('wbListImgChosen')
                el.classList.add('wbListImgChosen')
                if (wbListImg[i].classList.contains('wbListImgChosen')) {
                    wbMainImg.setAttribute('src', wbListImg[i].getAttribute('src'))
                }
            }
        } else {
            chosenImg = document.querySelector('.wbListImgChosen')
            wbMainImg.setAttribute('src', chosenImg.getAttribute('src'))
        }
    }
}

//
//
if (location.href.includes('muzhskie_remni_flat_charcoal/ab') || location.href.includes('muzhskie_remni_Flat_charcoal/ab')) {
    window.addEventListener("load", wbStart)
    document.addEventListener("DOMContentLoaded", prestart)
}