let blockBread = document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode.parentNode
let headerHeight = document.querySelector('[data-artboard-recid="633612477"]').clientHeight
let tHeaderHeight = document.querySelector('#t-header').clientHeight

window.addEventListener("load", function () {
    setTimeout(function () {
        if (headerHeight > tHeaderHeight) {
            blockBread.style.paddingTop = ((headerHeight - tHeaderHeight) + 'px')
            blockBread.style.paddingTop = ((headerHeight) + 'px')
            blockBread.style.transition = 'all .3s ease-out'
        } else {
            blockBread.style.paddingTop = ((headerHeight) + 'px')
            blockBread.style.transition = 'all .3s ease-out'
        }
    }, 1500)
})