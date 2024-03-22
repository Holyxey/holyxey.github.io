window.addEventListener("load", function () {
    setTimeout(function () {
        if (document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode) {
            document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode.style.transition = 'all 1s ease-out'
            document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode.style.paddingTop = ((document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().bottom - document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode.getBoundingClientRect().top) + 'px')
        }
        if (document.querySelector('.t-rec_pb_15')) {
            document.querySelector('.t-rec_pb_15').style.transition = 'all 1s ease-out'
            document.querySelector('.t-rec_pb_15').style.paddingTop = ((document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().bottom - document.querySelector('.t-rec_pb_15').getBoundingClientRect().top) + 'px')
        }
    }, 3000)
})