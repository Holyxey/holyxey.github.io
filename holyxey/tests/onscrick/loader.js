document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        let el = document.createElement('script')
        el.src = 'onscrick.js'
        // el.src = 'https://holyxey.github.io/holyxey/tests/onscrick/onscrick.js'
        el.type = 'text/javascript'
        document.body.prepend(el)
    }, 1500)
})