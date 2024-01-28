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