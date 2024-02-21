            // ВКЛАДКИ ОСНОВА (limbTabs.js) ===================
            // ================================================
            // ================================================
            // ================================================
let limbTabs = document.getElementsByClassName('hx-limb-tab')
let limbTabsIn = document.getElementsByClassName('hx-limb-tab-in')

for (let i = 0; i < limbTabsIn.length; i++)
    limbTabsIn[i].style.display = 'none';

for (let i = 0; i < limbTabs.length; i++)
    limbTabs[i].setAttribute('onclick', 'limbTabsClick(this)')

for (let i = 0; i < limbTabsIn.length; i++) {
    limbTabsIn[i].setAttribute('counter', (1 + i))
    limbTabsIn[i].classList.add('anishow')
}
for (let i = 0; i < limbTabs.length; i++)
    limbTabs[i].setAttribute('counter', (1 + i))

function limbTabsClick(el) {
    let counter = getCounter(el);
    if (el.classList.contains('hx-limb-tab-active')) {}
    else {
        for (let i = 0; i < limbTabs.length; i++) {
            limbTabs[i].classList.remove('hx-limb-tab-active');
            el.classList.add('hx-limb-tab-active')
        }
    }
    for (let i = 0; i < limbTabsIn.length; i++) {
        if (counter === (limbTabsIn[i].getAttribute('counter'))) {
            limbTabsIn[i].style.display = '';
        } else {
            limbTabsIn[i].style.display = 'none';
        }
    }
}

function getCounter(el) {
    let counter = el.getAttribute('counter');
    return counter;
}

//
// Изначальное положение вкладок

function presentTabs() {
    let active = 0;
    for (let i = 0; i < limbTabs.length; i++) {
        if (limbTabs[i].classList.contains('hx-limb-tab-active')) {
            active = getCounter(limbTabs[i])
            for (let j = 0; j < limbTabsIn.length; j++) {
                if (getCounter(limbTabsIn[j]) === active) {
                    limbTabsIn[j].style.display = ''
                }
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', presentTabs)



            // КАУНТЕР (linersCounter.js) =====================
            // ================================================
            // ================================================
            // ================================================
let linersCounter = document.getElementsByClassName('hx-limb-liners-point')
for (let i = 0; i < linersCounter.length; i++) {

    const newDiv = document.createElement("div");
    newDiv.classList.add('hx-limb-liners-point-before');
    setTimeout(function () {
        newDiv.classList.add('anishow');
    }, (300 * i))
    newDiv.innerHTML = (i + 1);
    linersCounter[i].appendChild(newDiv);

}



            // ХЕДЕР (limbHeader.js) ==========================
            // ================================================
            // ================================================
            // ================================================
let headerAbout = document.getElementById('headerAbout');
let headerServices = document.getElementById('headerServices');

headerAbout.addEventListener('mouseenter', showHeaderList)
headerServices.addEventListener('mouseenter', showHeaderList)

function showHeaderList() {
    let list = this.querySelector('ul')
    if (list) {
        list.addEventListener('mouseleave', hideHeaderList)
        let listList = list.querySelectorAll('*')
        list.style.cssText += `display: flex; opacity: 1; height: unset;`
        listList.forEach( (el) => {el.classList.add('anishow')})
    }
}

function hideHeaderList() {
    this.style.display = 'none'
}


            // НАСТРОЙКИ СЛИК СЛАЙДЕРА (scriptSlide.js) =======
            // ================================================
            // ================================================
            // ================================================
$('.hx-limb-slider').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '2px',
    slidesToShow: 3,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 2,
                autoplay: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 1,
                autoplay: true
            }
        }
    ]
});

$('.hx-reviews-slider').slick({
    centerMode: true,
    arrows: true,
    centerPadding: '2px',
    slidesToShow: 4,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 2,
                autoplay: true
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '2px',
                slidesToShow: 1,
                autoplay: true
            }
        }
    ]
});


            // НЕ ПОМНЮ ШО ЭТО (structure.js) =======
            // ================================================
            // ================================================
            // ================================================
let structureTabs = document.getElementsByClassName('hx-limb-structure-block-info-in');
let structureNumbers = document.getElementsByClassName('hx-limb-structure-block-img-select');

for (let i = 0; i < structureTabs.length; i++) {
    structureTabs[i].setAttribute('structureTabs', (i + 1))
    structureTabs[i].setAttribute('onmouseenter', 'msIn(this)')
    structureTabs[i].setAttribute('onmouseleave', 'msLv(this)')
    structureTabs[i].style.transition = 'all .3s ease-out';
}

for (let i = 0; i < structureNumbers.length; i++) {
    structureNumbers[i].style.transition = 'all .3s ease-out';
}

function msIn(el) {
    let tabN = el.getAttribute('structureTabs');

    chckNmbr(el, tabN);

    el.classList.add('hovered')
    el.style.boxShadow = 'none';
}
function msLv(el) {
    let tabN = el.getAttribute('structureTabs');

    chckNmbr(el, tabN);

    el.classList.remove('hovered')
    el.style.boxShadow = '';
}

function chckNmbr(el, tabN) {

    for (let i = 0; i < structureNumbers.length; i++) {
        if (structureNumbers[i].innerHTML === tabN) {
            structureNumbers[i].classList.add('hovered')
        } else {
            structureNumbers[i].classList.remove('hovered')
        }
    }

}



            // ВКЛАДКИ МОБИС (legsMobis.js) =======
            // ================================================
            // ================================================
            // ================================================
let mobisTab;
let mobisBlock;

function mobisTabClick(el) {
    let active = el.classList.contains('hx-limb-mobis-tabs-item-active')
    if (!active) {
        el.classList.add('hx-limb-mobis-tabs-item-active')
    }
    mobisCheckStart(el)
}
function mobisCheckStart(el) {
    for (let i = 0; i < mobisTab.length; i++) {
        if (mobisTab[i] !== el) {
            mobisTab[i].classList.remove('hx-limb-mobis-tabs-item-active')
            mobisCheckClick(mobisBlock[i], null)
        } else
            mobisCheckClick(null, mobisBlock[i])
    }
}
function mobisCheckClick(hide, show) {
    if (hide) hide.style.display = 'none'
    if (show) show.style.display = 'flex'
}

document.addEventListener("DOMContentLoaded", () => {
                mobisTab = document.getElementsByClassName('hx-limb-mobis-tabs-item')
                mobisBlock = document.getElementsByClassName('hx-limb-mobis-block-item')
                mobisCheckStart(document.getElementsByClassName('hx-limb-mobis-tabs-item-active')[0])
                for (let i = 0; i < mobisTab.length; i++) {
                    mobisTab[i].setAttribute('onclick', 'mobisTabClick(this)')
                }
                for (let i = 0; i < mobisBlock.length; i++) {
                    mobisBlock[i].setAttribute('mobisBlockCounter', i)
                }
            })



            // ОТЗЫВЫ YOUTUBE (legsReview.js) =======
            // ================================================
            // ================================================
            // ================================================
function reviewOpen(el) {
    let reviewCreate = document.createElement('div')
    reviewCreate.classList.add('reviewShortsEmbedDiv')

    let reviewIframe = document.createElement('iframe')
    let dataembed = el.getAttribute('dataEmbed')
    reviewIframe.classList.add('reviewShortsEmbed')
    reviewIframe.src = ('https://www.youtube.com/embed/' + dataembed + '?playsinline=1&autoplay=1&muted=1')
    reviewIframe.frameBorder = false;
    reviewIframe.title = 'YouTube video player'
    reviewIframe.allowFullscreen = true;

    document.body.append(reviewCreate)
    reviewCreate.append(reviewIframe)
    reviewCreate.setAttribute('onclick', 'reviewClose(this)')
}
function reviewClose(el) {
    el.remove();
}

document.addEventListener("DOMContentLoaded", function (){
    let reviews = document.getElementsByClassName('reviewShortsPreview')
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].setAttribute('onclick', 'reviewOpen(this)')
    }
})