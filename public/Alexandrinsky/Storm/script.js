let buyFixed = document.getElementById('buy-fixed-button');
let buyStatic = document.querySelectorAll('.buy-button');
let heroBlock = document.getElementById('hero');

function showBuyButton() {
    buyFixed.classList.remove('hideFixedBuyButton');
    buyFixed.classList.add('showFixedBuyButton');
}

function hideBuyButton() {
    buyFixed.classList.remove('showFixedBuyButton');
    buyFixed.classList.add('hideFixedBuyButton');
}

let observer = new IntersectionObserver((entries, observer) => {
    let isVisible = entries.some(entry => entry.isIntersecting);

    if (isVisible) {
        hideBuyButton();
    } else {
        showBuyButton();
    }
}, {
    root: null,
    threshold: 0.1
});

observer.observe(heroBlock);

buyStatic.forEach(button => observer.observe(button));