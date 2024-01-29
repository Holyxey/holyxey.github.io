// ***
//Прозрачность ненаведенных текстов этапов
// let bullet = document.getElementsByClassName('hx-at-price-bullet')
let price = document.getElementsByClassName('hx-at-price');
for (let i = 0; i < price.length; i++) {
    price[i].setAttribute('onmouseenter', 'priceHovered(this)');
    price[i].setAttribute('onmouseleave', 'priceOnMouseLeave()');
}
function priceHovered(el) {
    for (let i = 0; i < price.length; i++) {
        if (el !== price[i]) {
            let q = priceGetIn(price[i]);
            let b = priceGetBullet(price[i]);
            for (let j = 0; j < price.length; j++) {
                q[j].style.opacity = '0.5';
            }
            b[0].style.border = '2px solid var(--c-bl)';
        } else {
            let q = priceGetIn(price[i]);
            let b = priceGetBullet(price[i]);
            for (let j = 0; j < price.length; j++) {
                q[j].style.opacity = '1';
            }
            b[0].style.border = '';
        }
    }
}
function priceGetIn(el) {
    let q = el.getElementsByClassName('hx-at-price-in');
    return q;
}
function priceGetBullet(el) {
    let b = el.getElementsByClassName('hx-at-price-bullet');
    return b;
}
function priceOnMouseLeave(el) {
    for (let i = 0; i < price.length; i++) {
        let q = priceGetIn(price[i]);
        let b = priceGetBullet(price[i]);
        for (let j = 0; j < price.length; j++) {
            q[j].style.opacity = '1'
        }
        b[0].style.border = '';
    }
}