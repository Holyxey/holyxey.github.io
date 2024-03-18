let atCat = localStorage.getItem('_atFirstCat');
function setCat(cat) {
    return function() {
        if (cat) {
            localStorage.setItem('_atFirstCat', cat);
            atCat = localStorage.getItem('_atFirstCat');
            atCatPrior()
        }
    }
}
function atCatPrior() {
    if (atCat) {
        document.querySelectorAll('.hx-at-case-web[category="' + atCat + '"]').forEach(function (el) {
            el.style.cssText += 'order: -10'
            console.log(el)
        })
    }
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('[type="caseButton"]').forEach(function (el) {
        let cat = el.getAttribute('category')
        el.addEventListener('click', setCat(cat))
    })
    document.querySelectorAll('.hx-at-services-item').forEach(function (el) {
        let cat = el.getAttribute('category')
        el.addEventListener('click', setCat(cat))
    })
    document.querySelectorAll('.hx-at-case-web').forEach(function (el) {
        let cat = el.getAttribute('category')
        el.addEventListener('click', setCat(cat))
    })
    atCatPrior()
})