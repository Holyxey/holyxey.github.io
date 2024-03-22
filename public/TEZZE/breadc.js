let blockBread;
let blockItemBread;
let headerHeight;
let tHeaderHeight;
let headerBottom;
let breadTop;
let breadItemTop;
let paddingDifference;
let paddingSecondDifference;


window.addEventListener("load", function () {
    setTimeout(function () {
        blockBread = document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode
        blockItemBread = document.querySelector('.t-rec_pb_15')

        headerHeight = document.querySelector('[data-artboard-recid="633612477"]').clientHeight
        tHeaderHeight = document.querySelector('#t-header').clientHeight

        headerBottom = document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().bottom
        breadTop = blockBread.getBoundingClientRect().top
        breadItemTop = blockItemBread.getBoundingClientRect().top

        paddingDifference = (headerBottom - breadTop)
        paddingSecondDifference = (headerBottom - breadItemTop)

        if (blockBread) {
            blockBread.style.transition = 'all 1s ease-out'
            blockBread.style.paddingTop = (paddingDifference + 'px')
        }
        if (blockItemBread) {
            blockItemBread.style.transition = 'all 1s ease-out'
            blockItemBread.style.paddingTop = (paddingSecondDifference + 'px')
        }
    }, 3000)
})