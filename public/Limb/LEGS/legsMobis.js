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




//
//

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