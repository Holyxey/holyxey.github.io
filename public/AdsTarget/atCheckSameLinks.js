let checkedLink;
let checkedFooter;
function atCheckSameLinks(el) {
    checkedFooter = document.getElementById('footer')
    checkedLink = checkedFooter.querySelectorAll('a')
    for (let i = 0; i < checkedLink.length; i++) {
        if (location.href === checkedLink[i].href) {
            checkedLink[i].href = '#'
        }
    }
}

document.addEventListener("DOMContentLoaded", atCheckSameLinks)