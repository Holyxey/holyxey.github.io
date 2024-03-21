
function logoLoaded() {
    document.querySelector('.logoLast').style.animation = 'logoLast 1s 1s forwards ease-in-out'

    let letter = document.querySelectorAll('.logoLetter')
    for (let i = 0; i < letter.length; i++) {
        letter[i].style.animation = 'logoLetter .' + i + 's forwards ease-in-out'
    }
}
window.addEventListener("load", function () {
    setTimeout(logoLoaded, 3000)
})
