function oddCasesStart(el) {
    if (document.getElementsByClassName('hx-at-case-web').length % 2 !== 0) {
        let casesBlock = document.getElementsByClassName('hx-at-cases-block')[0];

        let oddCaseLi = document.createElement("li");
        oddCaseLi.classList.add('hx-at-case-web')
        oddCaseLi.classList.add('hx-at-case-plag')
        oddCaseLi.classList.add('showThisScroll')
        oddCaseLi.style.justifyContent = 'flex-end'

        let oddCaseP = document.createElement("p");
        oddCaseP.textContent = 'Получите бесплатную консультацию'
        oddCaseP.classList.add('hx-at-case-h')

        let oddCaseDiv = document.createElement("div");
        oddCaseDiv.classList.add('hx-at-case-img')
        oddCaseDiv.style.backgroundImage = 'url("https://static.tildacdn.com/tild6663-6639-4166-a462-316239353461/SVG_logo_1.svg")'
        oddCaseDiv.style.cssText += `
        background-size: 120%;
        opacity: .5;`

        let oddCaseA = document.createElement("a");
        oddCaseA.classList.add('hx-at-btn-bl', 'hx-at-case-btn');
        oddCaseA.innerHTML = 'Получить консультацию'
        oddCaseA.href = '#popup:menu'
        oddCaseA.style.cssText +=
            `color: var(--c-wht)!important;
            background-color: var(--c-pk);
            border: 1px solid transparent`

        //
        casesBlock.append(oddCaseLi)
        oddCaseLi.append(oddCaseP)
        oddCaseLi.append(oddCaseDiv)
        oddCaseLi.append(oddCaseA)
    }
}

window.addEventListener('load', oddCasesStart)