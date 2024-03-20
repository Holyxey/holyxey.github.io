function logoLoaded() {
    document.querySelector('.logoLoader').style.animation = 'logoLoaded 2s forwards ease-out'
}
window.addEventListener("load", function () {
    setTimeout(logoLoaded, 3000)
})