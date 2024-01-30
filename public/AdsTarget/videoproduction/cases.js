let caseWeb = document.getElementsByClassName('hx-at-case-vid')
for (let i = 0; i < caseWeb.length; i++) {
    caseWeb[i].setAttribute('onclick', 'caseWebClick(this)')
}

function caseWebClick(el) {
    let l = el.querySelector('a');
    if (l && l.href)
        window.open(l.href, '_blank');
}