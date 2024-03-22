window.addEventListener("load", function () {
    setTimeout(function () {
        let blockBread = document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode
        let headerHeight = document.querySelector('[data-artboard-recid="633612477"]').clientHeight
        let tHeaderHeight = document.querySelector('#t-header').clientHeight

        let headerBottom = document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().bottom
        let breadTop = blockBread.getBoundingClientRect().top

        let paddingDifference = (headerBottom - breadTop)

        blockBread.style.transition = 'all 1s ease-out'
        blockBread.style.paddingTop = (paddingDifference + 'px')
    }, 3000)
})