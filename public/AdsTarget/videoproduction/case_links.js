
function caseLink(el) {
    let linkElement = el.querySelector('a');

    if (linkElement && linkElement.href) 
        window.open(linkElement.href, '_blank');
}
