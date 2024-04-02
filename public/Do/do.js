window.addEventListener("load", function () {

    setTimeout(()=>{
        if (document.querySelector('#tildacopy'))
            document.querySelector('#tildacopy').remove()
    }, 1000)

    if (document.querySelector('.wTime')) {
        let q = document.querySelector('.wTime');
        let d = document.querySelector('section[class="do"]');
        d.style.paddingTop = q.getBoundingClientRect().height + 'px'
    }

})