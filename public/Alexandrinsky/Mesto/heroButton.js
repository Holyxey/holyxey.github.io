const reButtonYandex = () => {
    let heroButton = document.querySelector('.button_1')
    heroButton.style.cssText += `cursor: pointer; opacity: 1;`
    let widgetButton = document.querySelector('.js-yaticket-button')
    heroButton.addEventListener('click', () => {
        widgetButton.click()
    })
}
const reButtonYandexInterval = setInterval(() => {
    if (document.querySelector('.js-yaticket-button')) {
        clearInterval(reButtonYandexInterval)
        reButtonYandex()
    }
}, 700)
