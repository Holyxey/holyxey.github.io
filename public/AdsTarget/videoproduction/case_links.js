
function caseLink(el) {
    var linkElement = el.querySelector('a');

    if (linkElement && linkElement.href) 
        window.open(linkElement.href, '_blank');
}
