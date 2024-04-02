window.addEventListener("load", function () {

    setTimeout(()=>{
        if (document.querySelector('#tildacopy'))
            document.querySelector('#tildacopy').remove()
    }, 1000)

    // if (document.querySelector('.wTime') !== null && document.querySelector('.address') !== null) {
    //     if (document.querySelector('.phoneNumber') !== null) {
    //         let d = document.querySelector('.wTime');
    //         let a = document.querySelector('.address');
    //         let p = document.querySelector('.phoneNumber');
    //         p.style.top = a.getBoundingClientRect().height + 'px'
    //         d.style.top = a.getBoundingClientRect().height + p.getBoundingClientRect().height + 'px'
    //         window.addEventListener("resize", ()=> {
    //             p.style.top = a.getBoundingClientRect().height + 'px'
    //             d.style.top = a.getBoundingClientRect().height + p.getBoundingClientRect().height + 'px'
    //         })
    //     } else {
    //         let d = document.querySelector('.wTime');
    //         let a = document.querySelector('.address');
    //         d.style.top = a.getBoundingClientRect().height + 'px'
    //         window.addEventListener("resize", ()=> {
    //             d.style.top = a.getBoundingClientRect().height + 'px'
    //         })
    //     }
    // }
})