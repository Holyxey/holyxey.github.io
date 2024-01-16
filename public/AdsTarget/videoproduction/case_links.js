
function caseLink(el) {
    // if (document.documentElement.clientWidth > 500) {
    let linkElement = el.querySelector('a');

    if (linkElement && linkElement.href) 
        window.open(linkElement.href, '_blank');
    // }
}
