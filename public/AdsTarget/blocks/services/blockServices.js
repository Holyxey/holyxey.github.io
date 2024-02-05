let blockServices;
let servicesItem;

function blockServicesJS() {
    blockServices = document.querySelector('.hx-at-services-block');
    servicesItem = document.querySelectorAll('.hx-at-services-item');
    console.log(servicesItem[2])

    let createArrow = document.createElement('img')
    createArrow.src = '/public/AdsTarget/elements/arrow.svg';
    createArrow.alt = 'Decorative arrow';
    createArrow.width = '25px';

    for (let i = 0; i < servicesItem.length; i++) {
        servicesItem[i].append(createArrow)
    }
}

document.addEventListener("DOMContentLoaded", blockServicesJS);