window.addEventListener("load", function () {
    setInterval(function () {
        if (document.querySelector('[data-elem-id="1690796453018"]')) {
            let item = document.querySelector('[data-elem-id="1690796453018"]').parentNode.parentNode;
            item.style.transition = 'all 1s ease-out'
            item.style.paddingTop = ((document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().height - item.offsetTop) + 'px')
        }
        if (document.querySelector('.t-rec_pb_15')) {
            document.querySelector('.t-rec_pb_15').style.transition = 'all 1s ease-out'
            document.querySelector('.t-rec_pb_15').style.paddingTop = ((document.querySelector('[data-artboard-recid="633612477"]').getBoundingClientRect().height - document.querySelector('.t-rec_pb_15').offsetTop) + 15 + 'px')
        }
    }, 1000)
})