let caseWeb = document.getElementsByClassName('hx-at-case-web')
for (let i = 0; i < caseWeb.length; i++) {
    caseWeb[i].setAttribute('onclick', 'caseWebClick(this)')
}

function caseWebClick(el) {
    let l = el.querySelector('a');
    if (l && l.href && !document.location.href.includes('videoproduction')) {
        if (!l.href.includes('adstarget'))
            window.open(l.href, '_blank');
        else
            window.open(l.href, '_self');
    }
}

let butt = document.querySelectorAll('.hx-at-case-btn')
butt.forEach(function (el) {
    if (!el.href.includes('adstarget'))
        el.textContent = 'смотреть результат'
})