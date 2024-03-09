function wildClone() {
    let heightMainImg = getComputedStyle(document.querySelector('#abwb-mainimg')).height
    document.querySelector('#abwb-gallerylist').style.maxHeight = heightMainImg

    document.querySelectorAll('.abwb-galleryitem').forEach(function (el) {
        el.setAttribute('onclick', 'clickOnPrev(this)')
        el.setAttribute('onmouseenter', 'clickOnPrev(this)')
    })

    document.querySelector('#abwb-galleryup').setAttribute('onclick', 'abwpPrewArrow()')
    document.querySelector('#abwb-gallerydown').setAttribute('onclick', 'abwpNextArrow()')
}
function clickOnPrev(el) {
    document.querySelector('#abwb-mainimg').style.backgroundImage = (el.style.backgroundImage);
}
function abwpNextArrow() {
    document.querySelector('#abwb-gallerylist').scroll(0, +100)
}
function abwpPrewArrow() {
    document.querySelector('#abwb-gallerylist').scroll(0, -140)
}

document.addEventListener("DOMContentLoaded", wildClone)