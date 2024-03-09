

//
// Скрипт для ориг старницы товара
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function origPageABWB() {
    if (!localStorage.getItem('_holyxey_ab')) {
        switch (getRandomInt(2)) {
            case (0): {
                localStorage.setItem('_holyxey_ab', 'a')
                break;
            }
            case (1): {
                localStorage.setItem('_holyxey_ab', 'b')
                document.location += '#ab';
                break;
            }
        }
    } else {
        switch (localStorage.getItem('_holyxey_ab')) {
            case ('a') : {
                //
                break;
            }
            case ('b') : {
                document.location += '#ab';
                break;
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", origPageABWB)

//
// Скрипт категории Б
let imgUrls = [];
let colors = [];
let title;
let priceNow;
let priceBefore;
let descr;
function getBeforeWBData() {
    let block = document.querySelector('.t744')

    // заполняем переменные
    title = block.querySelector('.t744__title').innerHTML;
    descr = block.querySelector('.t744__descr[field="descr"]').innerHTML;

    // парсим изображения
    block.querySelectorAll('.t-slds__imgwrapper').forEach(function (el) {
        imgUrls.push(el.getAttribute('data-img-zoom-url'))
    });

    window.addEventListener("load", function () {
        priceNow = block.querySelector('.t744__price-value[field="price"]').innerHTML;
        priceBefore = block.querySelector('.t744__price-value[field="price_old"]').innerHTML;
        console.log(priceNow)
        newWB()
        let clrs = block.querySelectorAll('.t-product__option-checkmark_color')
        for (let i = 0; i < clrs.length; i++) {
            colors.push(clrs[i].style.backgroundColor)
        }
    })
}
function newWB() {
    let block = document.createElement('div')
    block.innerHTML = descr;
    document.body.append(block)
}

