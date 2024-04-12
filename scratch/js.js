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
    if (el && (el.getBoundingClientRect().top < window.innerHeight) ) {
        setInterval(() => {
            el.style.animation = 'showArticle .8s ease-out forwards';
        }, randomNumber(300))

    }
    if (el.getBoundingClientRect().top > window.innerHeight) {
        el.style.animation = 'hideArticle .5s ease-out forwards'
    }
}
const arrowCase = (el) => {
    let arrow = document.createElement('a')
    arrow.innerHTML = `
    
    `
}
//
//

articles.forEach((el) => {
    setTimeout(()=> {
        randomDeg(el)
        showArticle(el)
    },300)
})
window.addEventListener("scroll", () => {articles.forEach((el) => {
        showArticle(el)
    })
})