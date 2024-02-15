let hxMainCasesLazy;

function hxCaseCounter() {
    let c = document.getElementsByClassName('hx-case-block')
    for (let i = 0; i < c.length; i++) {
        c[i].setAttribute('case', (i + 1))
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('** Alpha 0.35')
    hxCaseCounter()
})