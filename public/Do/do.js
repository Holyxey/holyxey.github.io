window.addEventListener("load", function () {

    setTimeout(()=>{
        if (document.querySelector('#tildacopy'))
            document.querySelector('#tildacopy').remove()
    }, 1000)

    // if (document.querySelector('.wTime')) {
    //     let q = document.querySelector('.wTime');
    //     let d = document.querySelector('section[class="do"]');
    //     d.style.paddingTop = q.getBoundingClientRect().height + 'px'
    // }

    if (document.querySelector('.wTime') && document.querySelector('.address')) {
        let d = document.querySelector('.wTime');
        let a = document.querySelector('.address');
        d.style.paddingTop = a.getBoundingClientRect().height + 'px'
    }
})