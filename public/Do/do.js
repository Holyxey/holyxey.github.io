window.addEventListener("load", function () {

    setTimeout(()=>{
        if (document.querySelector('#tildacopy'))
            document.querySelector('#tildacopy').remove()
    }, 1000)

    if (document.querySelector('.wTime') && document.querySelector('.address')) {
        let d = document.querySelector('.wTime');
        let a = document.querySelector('.address');
        d.style.top = a.getBoundingClientRect().height + 'px'
    }
})