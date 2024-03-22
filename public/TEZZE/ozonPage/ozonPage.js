// Ниже списком представлены ПО ПОРЯДКУ необходимые ссылки на озон.
// Их количество должно быть строго равным кол-ву товаров
let itemDynamicLink = [
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
    'https://ozon.ru/product/remen-tezze-naturalnaya-kozha-zhenskiy-951435482/',
];

//
let oldCatalog = document.querySelector('.t-rec_pb_135');
let oldCatalogParent;
let newCatalogCreate = document.createElement('section');
let newCatalog;
let imgSrc;
let imgFirst;
let imgSecond;
let oldItems;
let itemPrice;
let itemPriceOld;
let itemName;
let itemDynamicLinkThis;

function ozonStart() {
    oldCatalogParent = oldCatalog.parentNode;

    newCatalogCreate.id = 'ozonPage';
    oldCatalogParent.insertBefore(newCatalogCreate, oldCatalog.nextSibling);
    newCatalog = document.querySelector('#ozonPage');
    oldItems = document.querySelectorAll('.t-item');

    function reviewCounter() {
        const randomNumber = Math.floor(Math.random() * (15000 - 3000 + 1)) + 3000;
        const numberString = randomNumber.toString();
        const formattedNumber = numberString.slice(0, -3) + ' ' + numberString.slice(-3);
        return formattedNumber;
    }

    function itemRating() {
        const randomNumber = Math.floor(Math.random() * (50 - 43 + 1)) + 43;
        const numberString = randomNumber.toString();
        const formattedNumber = numberString.slice(0, -1) + '.' + numberString.slice(-1);
        return formattedNumber;
    }

    function itemOzonOnHover() {
        imgFirst = this.querySelector('.itemOzonImg').src
        this.querySelector('.itemOzonImg').src = (this.getAttribute('imgSecond'))
    }

    function itemOzonOnLeave() {
        this.querySelector('.itemOzonImg').src = imgFirst
    }

    function createNewItem() {
        let newItem = document.createElement('article');
        newItem.classList.add('itemOzon')
        newItem.setAttribute('imgSecond', imgSecond)
        newItem.addEventListener("mouseenter", itemOzonOnHover)
        newItem.addEventListener("mouseleave", itemOzonOnLeave)

        let newImg = document.createElement('img');
        newImg.src = imgSrc;
        newImg.classList.add('itemOzonImg')

        let newDescription = document.createElement('div')
        newDescription.classList.add('itemOzonDescription')

        let itemOzonPrice = document.createElement('p')
        itemOzonPrice.classList.add('itemOzonPrice')
        itemOzonPrice.textContent = itemPrice;

        let itemOzonPriceOld = document.createElement('span')
        itemOzonPriceOld.classList.add('itemOzonPriceOld')
        itemOzonPriceOld.textContent = itemPriceOld;

        let itemRouble = document.createElement('span')
        itemRouble.textContent = '₽'

        let itemRoubleSec = document.createElement('span')
        itemRoubleSec.textContent = '₽'

        let itemOzonCategory = document.createElement('p')
        itemOzonCategory.classList.add('itemOzonCategory')
        itemOzonCategory.textContent = 'Мужской кожаный ремень'

        let itemOzonName = document.createElement('p')
        itemOzonName.textContent = itemName;
        itemOzonName.classList.add('itemOzonName')

        let itemOzonLine = document.createElement('div')
        itemOzonLine.classList.add('itemOzonLine')

        let itemOzonRatingBlock = document.createElement('div')
        itemOzonRatingBlock.classList.add('itemOzonRatingBlock')

        let starOzon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="#FFA800FF" d="M8 2a1 1 0 0 1 .87.508l1.538 2.723 2.782.537a1 1 0 0 1 .538 1.667L11.711 9.58l.512 3.266A1 1 0 0 1 10.8 13.9L8 12.548 5.2 13.9a1 1 0 0 1-1.423-1.055l.512-3.266-2.017-2.144a1 1 0 0 1 .538-1.667l2.782-.537 1.537-2.723A1 1 0 0 1 8 2"/></svg>`

        let itemOzonRating = document.createElement('span')
        itemOzonRating.textContent = itemRating()
        itemOzonRating.classList.add('itemOzonRating')

        let itemOzonDot = document.createElement('div')
        itemOzonDot.classList.add('itemOzonDot')

        let itemOzonReviewsCounter = document.createElement('span')
        itemOzonReviewsCounter.classList.add('itemOzonReviewsCounter')
        itemOzonReviewsCounter.textContent = (reviewCounter() + '+');

        let itemOzonReviewsCounterDescr = document.createElement('span')
        itemOzonReviewsCounterDescr.classList.add('itemOzonReviewsCounterDescr')
        itemOzonReviewsCounterDescr.textContent = 'отзывов'

        let itemOzonLink = document.createElement('a')
        itemOzonLink.classList.add('itemOzonLink')
        itemOzonLink.setAttribute('target', '_blank')
        itemOzonLink.href = itemDynamicLinkThis;
        itemOzonLink.textContent = 'Купить на Ozon'

        newCatalog.appendChild(newItem)
        newItem.appendChild(newImg)
        newItem.appendChild(newDescription)
        newDescription.appendChild(itemOzonPrice)
        itemOzonPrice.appendChild(itemRouble)
        itemOzonPrice.appendChild(itemOzonPriceOld)
        itemOzonPriceOld.appendChild(itemRoubleSec)
        newDescription.appendChild(itemOzonCategory)
        newDescription.appendChild(itemOzonName)
        newDescription.appendChild(itemOzonLine)
        newDescription.appendChild(itemOzonRatingBlock)
        itemOzonRatingBlock.innerHTML = starOzon
        itemOzonRatingBlock.appendChild(itemOzonRating)
        itemOzonRatingBlock.appendChild(itemOzonDot)
        itemOzonRatingBlock.appendChild(itemOzonReviewsCounter)
        itemOzonRatingBlock.appendChild(itemOzonReviewsCounterDescr)
        newItem.appendChild(itemOzonLink)
    }

    for (let i = 0; i < oldItems.length; i++) {
        imgSrc = oldItems[i].querySelector('div.js-product-img').getAttribute('data-original');
        itemPrice = oldItems[i].querySelector('div.js-product-price').innerHTML;
        itemPriceOld = oldItems[i].querySelector('div.js-store-prod-price-old-val').innerHTML;
        itemName = oldItems[i].querySelector('.js-product-name').innerHTML.replace(/[\u0400-\u04FF]+/g, '');
        itemDynamicLinkThis = itemDynamicLink[i];
        imgSecond = oldItems[i].querySelector('.t-store__card__bgimg_second').getAttribute('data-original');
        createNewItem()
    }
}

window.addEventListener("load", function () {
    setTimeout(ozonStart, 1000)
})
