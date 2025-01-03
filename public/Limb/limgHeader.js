// ХЕДЕР (limbHeader.js) ==========================
// ================================================
// ================================================
// ================================================
let headerAbout = document.getElementById('headerAbout');
let headerServices = document.getElementById('headerServices');

headerAbout.addEventListener('mouseenter', showHeaderList)
headerServices.addEventListener('mouseenter', showHeaderList)

function hideHeaderList(el) {
    this.style.display = 'none'
}
function showHeaderList() {
    let list = this.querySelector('ul')
    if (list) {
        list.addEventListener('mouseleave', hideHeaderList)
        let listList = list.querySelectorAll('*')
        list.style.cssText += `display: flex; opacity: 1; height: unset;`
        listList.forEach( (el) => {el.classList.add('anishow')})
    }
}