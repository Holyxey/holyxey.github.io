window.addEventListener("load", function () {
    function del() {
        document.querySelector('#tildacopy').remove()
    }
    document.querySelector('#tildacopy').style.opacity = '0'
    setTimeout(del, 1000)
})