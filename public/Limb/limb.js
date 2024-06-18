// МЕЛОЧИ =======
// ================================================
// ================================================
// ================================================
const delFcknArrow = setInterval(() => {
    if (document.querySelector('.t794__arrow')) {
        clearInterval(delFcknArrow)
        document.querySelectorAll('.t794__arrow')[2].remove()
    }
}, 100) // костяль для разных Тильды пунктов меню
const setHeroPadding = () => {
    const check = (header, hero) => {
        if (header && hero) {
            hero.style.paddingTop = header.getBoundingClientRect().height + 'px'
        }
    }

    if (document.querySelector('.tmenu-mobile').getBoundingClientRect().height !== 0) {
        let header = document.querySelector('.tmenu-mobile')
        let hero;
        if (document.querySelector('#hx-limb-full-hero')) {
            hero = document.querySelector('#hx-limb-full-hero')
            check(header, hero)
        } else if (document.querySelector('.uc-hero')) {
            document.querySelector('.uc-hero').style.cssText += 'transition: padding .3s ease-out';
            hero = document.querySelector('.uc-hero')
            check(header, hero)
        }
    } else if (document.querySelector('.t228').getBoundingClientRect().height !== 0) {
        let header = document.querySelector('.t228')
        let hero;
        if (document.querySelector('#hx-limb-full-hero')) {
            hero = document.querySelector('#hx-limb-full-hero')
            check(header, hero)
        } else if (document.querySelector('.uc-hero')) {
            document.querySelector('.uc-hero').style.cssText += 'transition: padding .3s ease-out';
            hero = document.querySelector('.uc-hero')
            check(header, hero)
        }
    }
}
window.addEventListener("load", () => {
    // setHeroPadding();
})


// ВКЛАДКИ ОСНОВА (limbTabs.js) ===================
// ================================================
// ================================================
// ================================================
let limbTabs = document.getElementsByClassName('hx-limb-tab')
let limbTabsIn = document.getElementsByClassName('hx-limb-tab-in')

for (let i = 0; i < limbTabsIn.length; i++) limbTabsIn[i].style.display = 'none';

for (let i = 0; i < limbTabs.length; i++) limbTabs[i].setAttribute('onclick', 'limbTabsClick(this)')

for (let i = 0; i < limbTabsIn.length; i++) {
    limbTabsIn[i].setAttribute('counter', (1 + i))
    limbTabsIn[i].classList.add('anishow')
}
for (let i = 0; i < limbTabs.length; i++) limbTabs[i].setAttribute('counter', (1 + i))

function limbTabsClick(el) {
    let counter = getCounter(el);
    if (el.classList.contains('hx-limb-tab-active')) {
    } else {
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
let headerAbout;
let headerServices;
if (document.getElementById('headerAbout') && document.getElementById('headerServices')) {
    let headerAbout = document.getElementById('headerAbout');
    let headerServices = document.getElementById('headerServices');

    headerAbout.addEventListener('mouseenter', showHeaderList)
    headerServices.addEventListener('mouseenter', showHeaderList)

    function hideHeaderList(el) {
        this.style.display = 'none'
    }

    function showHeaderList() {
        let list = this.querySelector('ul')
        if (list) {
            list.addEventListener('mouseleave', hideHeaderList)
            let listList = list.querySelectorAll('*')
            list.style.cssText += `display: flex; opacity: 1; height: unset;`
            listList.forEach((el) => {
                el.classList.add('anishow')
            })
        }
    }
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
    responsive: [{
        breakpoint: 1025, settings: {
            arrows: false, centerMode: true, centerPadding: '2px', slidesToShow: 2, autoplay: true
        }
    }, {
        breakpoint: 700, settings: {
            arrows: false, centerMode: true, centerPadding: '2px', slidesToShow: 1, autoplay: true
        }
    }]
});

$('.hx-reviews-slider').slick({
    centerMode: true, arrows: true, centerPadding: '2px', slidesToShow: 4, adaptiveHeight: true, responsive: [{
        breakpoint: 1025, settings: {
            arrows: false, centerMode: true, centerPadding: '2px', slidesToShow: 2, autoplay: true
        }
    }, {
        breakpoint: 700, settings: {
            arrows: false, centerMode: true, centerPadding: '2px', slidesToShow: 1, autoplay: true
        }
    }]
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
        } else mobisCheckClick(null, mobisBlock[i])
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
    reviewIframe.src = ('https://vk.com/video_ext.php?' + dataembed + '&autoplay=1')
    reviewIframe.frameBorder = '0';
    reviewIframe.allowFullscreen = true;
    reviewIframe.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture"

    let closeButton = document.createElement("div")
    closeButton.classList.add('close-button')

    document.body.append(reviewCreate)
    reviewCreate.append(reviewIframe)
    reviewCreate.setAttribute('onclick', 'reviewClose(this)')

    document.documentElement.style.overflow = 'hidden'
    document.getElementById('header').setAttribute('hidden', '')
    document.getElementById('close-button').style.display = 'flex'
}

function reviewClose(el) {
    el.remove();
    document.documentElement.style.overflow = ''
    document.getElementById('header').removeAttribute('hidden')
    document.getElementById('close-button').style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function () {
    let reviews = document.getElementsByClassName('reviewShortsPreview')
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].setAttribute('onclick', 'reviewOpen(this)')
    }
})


// Auto generate links
const setForBread = (el) => {
    el.style.cssText += `cursor: pointer;`
    el.addEventListener('click', () => {
        location.href = '/n_legs'
    })
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#hx-limb-bread')) {
        let breadBlock = document.querySelector('#hx-limb-bread')
        let breadCounter = breadBlock.querySelectorAll('*')
        breadCounter.forEach((el) => {
            el.textContent === 'Протезы нижних конечностей' ? setForBread(el) : null
        })
    }
})