// CASES PARAMETERS ==========
let phCaseItem = document.getElementsByClassName('hx-at-photo-case-item')
for (let i = 0; i < phCaseItem.length; i++) {
    phCaseItem[i].classList.add('case_' + (i + 1))
    phCaseItem[i].style.cssText += ('background-image: url("imgs/' + (i + 1) + '.jpg")')
}