let hxScroll = false;
let hxMove = false;
let onScrickCounter = 0;

function hxOnScr() {
    hxScroll = true
    onScrick()
    onScrickCounter++
}
function hxOnMv() {
    hxMove = true
    onScrick()
    onScrickCounter++
}

function onScrick() {
    document.addEventListener("scroll", hxOnScr)
    document.addEventListener("mousemove", hxOnMv)
    if (hxScroll === false && hxMove === false ) {
        let el = document.createElement('a')
        el.href = 'https://holyxey.github.io/'
        el.text = 'Designed by Holyxey.'
        el.style.textDecoration = 'none'
        el.id = 'hxPopuper'
        document.body.append(el)
    } else {
        if (document.getElementById('hxPopuper') && onScrickCounter > 30) {
            document.getElementById('hxPopuper').remove()
            document.querySelector("script[src='https://holyxey.github.io/holyxey/tests/onscrick/onscrick.js']").remove()
        }
    }
}


onScrick()