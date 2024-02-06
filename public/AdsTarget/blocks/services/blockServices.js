let blockServices;
let servicesItem;

function blockServicesJS() {
    blockServices = document.querySelector('.hx-at-services-block');
    servicesItem = document.querySelectorAll('.hx-at-services-item');

    for (let i = 0; i < servicesItem.length; i++) {
        let createArrow = document.createElement('img')
        createArrow.src = 'https://holyxey.github.io/public/AdsTarget/elements/arrow.svg';
        createArrow.alt = 'Decorative arrow';
        createArrow.classList.add('createArrow')
        //
        servicesItem[i].prepend(createArrow)
    }
}

document.addEventListener("DOMContentLoaded", blockServicesJS);