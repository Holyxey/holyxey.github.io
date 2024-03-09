let upButton;
let downButton;
let wbList;
let listScrollPosition;
let listScrollHeight;
let wbMainImg;
let wbListImg;
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
}
function arrowClick(el) {
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
function imgHover(el) {
    wbMainImg.setAttribute('src', el.getAttribute('src'))
}

//
//
window.addEventListener("load", wbStart)