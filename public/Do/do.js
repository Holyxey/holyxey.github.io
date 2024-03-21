
function logoLoaded() {
    document.querySelector('.logoLast').style.animation = 'logoLast 1s 1s forwards ease-in-out'

    let letter = document.querySelectorAll('.logoLetter')
    for (let i = 0; i < letter.length; i++) {
        letter[i].style.animation = 'logoLetter .' + i + 's forwards ease-in-out';
    }

    document.querySelector('#DoStart').style.animation = 'DoStart 1.5s 2s ease-out forwards'
    document.querySelector('.logoAfterLoad').style.animation = 'logoAfterLoad 3s 1s forwards ease'
}
window.addEventListener("load", function () {
    setTimeout(logoLoaded, 3000)
})
