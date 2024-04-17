let tabLinksHelpPage;
let tabButtonsHelpPage;

const isHelpPage = () => {
    tabLinksHelpPage = document.querySelectorAll('a[href*="/info#!/tab/"]')
    tabLinksHelpPage.forEach((el) => {
        el.onclick = () => {
            tabButtonsHelpPage = document.querySelectorAll('li[role="presentation"]')
            let n = Number(el.href.split('-')[1])
            if (tabButtonsHelpPage[n - 1]) {
                tabButtonsHelpPage[n - 1].click()
            }
        }
    })
}

window.addEventListener('load', () => {
    if (document.location.href.includes('/info')) {
        isHelpPage();
    }

})