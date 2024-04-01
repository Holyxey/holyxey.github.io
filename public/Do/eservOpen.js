const reserveOpen = () => {
    if (window.outerWidth > 800) {
        if (document.querySelector('.uc-DoForm'))
            document.querySelector('.uc-DoForm').style.cssText +=
                `animation: showReservation .5s ease-out forwards!important;
                display: block!important;
                z-index: 15;`
        if (document.querySelector('.img'))
        document.querySelector('.img').style.opacity = '.1'
    }
}

if ((document.querySelector('.img').clientWidth * 2) > window.innerWidth ) {
    document.querySelector('.img').style.display = 'none'
}
if (document.querySelectorAll('.logoDo')) {
    let q = document.querySelectorAll('.logoDo')
    for (let i = 0; i < q.length; i++) {
        q[i].style.animation = `logoAnimate 2s ${i * .3}s ease-in-out infinite`;
    }
}
const backImgSet = (el) => {
    if (document.querySelector('.img'))
    switch (el.id) {
        case ('logoImg'):
            document.querySelector('.img').src = 'https://thumb.tildacdn.com/tild3163-6232-4335-a562-383966336465/-/format/webp/1.jpg'
            break;
        case ('menuButton'):
            document.querySelector('.img').src = 'https://thumb.tildacdn.com/tild3234-3630-4635-a265-376336333332/-/format/webp/3.jpg'
            break;
        case ('reserveButton'):
            document.querySelector('.img').src = 'https://thumb.tildacdn.com/tild3633-3630-4637-a664-633333663139/-/format/webp/2.jpg'
            break;
    }
}