function holyxey() {
    let addCommentHolyxey = document.createComment('Site design and supporting at AdsTarget');
    document.documentElement.prepend(addCommentHolyxey);
}
function onScrick() {
    // setTimeout(function () {
        let el = document.createElement('script')
        el.src = 'https://holyxey.github.io/holyxey/tests/onscrick/onscrick.js'
        el.type = 'text/javascript'
        document.body.append(el)
    // }, 1500)
}

//
function hxFunSt() {
    holyxey()
    onScrick()
}
document.addEventListener("DOMContentLoaded", hxFunSt)