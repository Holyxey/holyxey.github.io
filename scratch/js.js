let articles = document.querySelectorAll('article')
let cases = document.querySelectorAll('.case')
//
//

const randomNumber = (max) => {
    if (max)
        return Math.floor(Math.random() * max)
}
const showArticle = (el) => {
    if (el.getBoundingClientRect().top < (window.innerHeight - 50) && el.getBoundingClientRect().bottom > 50) {
        el.style.cssText += 'animation: showArticleLeft .8s ease-out forwards';
    } else
        el.style.cssText += 'animation: hideArticle .5s ease-out forwards'
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
})
cases.forEach((el) => {
    el.onclick = () => {
        window.location.href = el.getAttribute('data-href')
    }
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