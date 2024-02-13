let caseWeb = document.getElementsByClassName('hx-at-case-web')
for (let i = 0; i < caseWeb.length; i++) {
    caseWeb[i].setAttribute('onclick', 'caseWebClick(this)')
}

function caseWebClick(el) {
    let l = el.querySelector('a');
    if (l && l.href) {
        if (!l.href.includes('adstarget'))
            window.open(l.href, '_blank');
        else
            window.open(l.href, '_self');
    }
}