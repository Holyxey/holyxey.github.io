let articles = document.querySelectorAll('article')
//
//

const randomNumber = (max) => {
    if (max)
        return (Math.random() * max - 1)
}
const randomDeg = (el) => {
    if (el) {
        el.style.transform = `rotate(${randomNumber(2)}deg)`;
    }
}
const showArticle = (el) => {
    if (el.getBoundingClientRect().top < (window.innerHeight - 50) && el.getBoundingClientRect().bottom > -50) {
        // setInterval(() => {
            el.style.cssText = 'animation: showArticle .8s ease-out forwards';
        // }, randomNumber(100))

    } else
        el.style.cssText = 'animation: hideArticle .5s ease-out forwards'
}
const showUpArrow = () => {
    let arrow = document.querySelector('#up')
    arrow.style.animation = 'showArticle .3s ease-out forwards'
}
const hideUpArrow = () => {
    let arrow = document.querySelector('#up')
    arrow.style.animation = 'hideArticle .3s ease-out forwards'
}
//
//

articles.forEach((el) => {
    showArticle(el)
    randomDeg(el)
})
window.addEventListener("scroll", () => {
    articles.forEach((el) => {
        showArticle(el)
        if (document.querySelector('#menu').getBoundingClientRect().bottom < 0) {
            showUpArrow()
        } else {
            hideUpArrow()
        }
    });
})