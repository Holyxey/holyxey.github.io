let checkedLink;
// let checkedFooter;
function atCheckSameLinks(el) {
    // checkedFooter = document.getElementById('footer')
    checkedLink = document.querySelectorAll('a')
    for (let i = 0; i < checkedLink.length; i++) {
        if (checkedLink[i].href && location.href === checkedLink[i].href) {
            checkedLink[i].href = '#'
        }
    }
}

document.addEventListener("DOMContentLoaded", atCheckSameLinks)