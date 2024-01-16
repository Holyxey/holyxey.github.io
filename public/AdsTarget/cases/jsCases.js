let allCases = document.getElementsByClassName('caseBlock');

for (let i = 0; i < allCases.length; i++) {
    allCases[i].setAttribute('onclick', 'caseLink(this)');

    let caseBlockHeader = allCases[i].querySelectorAll('.caseBlockHeader');
    let caseBlockImg = allCases[i].querySelectorAll('.caseBlockImg')
    let caseBlockLink = allCases[i].querySelectorAll('.caseBlockLink')

    for (let r = 0; r < caseBlockLink.length; r++)
        caseBlockLink[r].setAttribute('target', '_blank')

    for (let j = 0; j < caseBlockHeader.length; j++)
        caseBlockImg[j].setAttribute('alt', caseBlockHeader[j].innerHTML)
}