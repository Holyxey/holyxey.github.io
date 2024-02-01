document.addEventListener("DOMContentLoaded", partnerStart);
const rootStyles = document.documentElement.style;
let partners;
let partnersBlock;
let partnersMaxOnScreen = 7;
let windowWidth = window.innerWidth;

function partnerStart() {
    console.log('Partners autoscroll enabled')
    partners = document.getElementsByClassName('hx-at-partner'); // поменяй обратно на 'hx-at-partner'      -----------------------------------
    partnersBlock = document.getElementsByClassName('hx-at-partners-block')[0]

    // Назначаем порядковые
    for (let i = 0; i < partners.length; i++) {
        partners[i].setAttribute('partner', (i))
    }
    setBetween()
    setInterval(getScroll, 3200)
}

function getWidth(el) {
    let widthWPX = window.getComputedStyle(el).width;
    let width = parseInt(widthWPX.match(/\d+/));
    return width;
}

function getPaddingRight(el) {
    let paddingWPX = window.getComputedStyle(el).paddingRight;
    let padding = parseInt(paddingWPX.match(/\d+/));
    return padding;
}

function getGap(el) {
    let gapWPX = window.getComputedStyle(el).gap;
    let gap = parseInt(gapWPX.match(/\d+/));
    return gap;
}

function getScroll(el) {
    let gap = getGap(partnersBlock);
    let fp = document.querySelector('[partner="0"]')
    let width = getWidth(fp)
    rootStyles.setProperty('--partnermoov', ('-' + (gap + width) + 'px'))
    addScroll();
    setTimeout(renamePartners,1000)
}

function addScroll(el) {
    setBetween()
    for (let i = 0; i < partners.length; i++) {
        partners[i].classList.add('scroll')
    }
}
function removeScroll(el) {
    for (let i = 0; i < partners.length; i++) {
        partners[i].classList.remove('scroll')
    }
}

function renamePartners(el) {
    let fp = document.querySelector('[partner="0"]')
    partnersBlock.appendChild(fp)
    for (let i = 0; i < partners.length; i++) {
        partners[i].setAttribute('partner', (i))
    }
    removeScroll();
}

function setBetween() {
    let q = getWidth(partnersBlock); // ширина общего контейнера
    let w = (q / 20); // Желаемое расстояние между элементами
    let f = (w * (partnersMaxOnScreen - 1)); // сумма растояний между элементами
    let z = ((q - f) / partnersMaxOnScreen);

    partnersBlock.style.gap = (w + 'px');

    for (let i = 1; i <= partnersMaxOnScreen; i++) {
        let element = document.querySelector('[partner="'+ i + '"]')
        element.style.minWidth = (z + 'px');
    }
}