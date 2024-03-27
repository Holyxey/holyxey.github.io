let doCatalogDiv;
let doCatalog;
let doCategories;
let doItems;
let catId;
let catHeader;
let moreButton;
//
//
function findCategories() {
    if (document.querySelector('.js-store-load-more-btn') && document.querySelector('.js-store-load-more-btn').style.display !== 'none') {
        moreButton = document.querySelector('.js-store-load-more-btn');
        setTimeout(() => {
            moreButton.click()
        },1500)
        return;
    } else {
        doCatalogDiv = document.querySelector('.js-store').parentNode.parentNode
        if (doCatalogDiv) {
            doCatalogDiv.style.display = 'none'
            doCatalog = document.querySelector('.js-store')
            doCategories = document.querySelectorAll('[data-storepart-uid]')

            setTimeout(() => {
                if (doCategories.length > 0) {
                    newProductArray()
                    clearInterval(startDoCatalog)
                }
            }, 500)
        }

    }
}

function newProductArray() {
    for (let i = 1; i < doCategories.length; i++) {
        catId = doCategories[i].getAttribute('data-storepart-uid')
        doItems = document.querySelectorAll('[data-product-part-uid="' + catId + '"]')

        catHeader = doCategories[i].innerHTML;

        let createCatalogCategory = document.createElement('section');
        createCatalogCategory.classList.add('catalogCategory')
        document.querySelector('#allrecords').parentNode.append(createCatalogCategory)

        let createHeader = document.createElement('h3')
        createHeader.classList.add('catHeader')
        createHeader.textContent = catHeader
        createCatalogCategory.append(createHeader)

        let createCatItemList = document.createElement('article')
        createCatItemList.classList.add('catItemList')
        createCatalogCategory.append(createCatItemList)

        for (let j = 0; j < doItems.length; j++) {
            let createCatItem = document.createElement('div')
            createCatItem.classList.add('catItem')
            let createItemName = document.createElement('h4')
            createItemName.classList.add('itemName')
            createItemName.textContent = doItems[j].querySelector('.js-store-prod-name').textContent

            createCatItemList.append(createCatItem)
            createCatItem.prepend(createItemName)

            if (doItems[j].querySelector('.js-store-prod-descr')) {
                let createItemDescription = document.createElement('p')
                createItemDescription.classList.add('itemDescription')
                createItemDescription.textContent = doItems[j].querySelector('.js-store-prod-descr').textContent
                createCatItem.append(createItemDescription)
            }

            if (doItems[j].querySelectorAll('.t-product__option-item').length > 0) {
                let variants = doItems[j].querySelectorAll('.t-product__option-item')

                let createItemVariantList = document.createElement('div')
                createItemVariantList.classList.add('itemVariantList')
                createCatItem.append(createItemVariantList)

                for (let k = 0; k < variants.length; k++) {
                    let createItemVariant = document.createElement('p')
                    createItemVariant.classList.add('itemVariant')
                    createItemVariant.textContent = variants[k].querySelector('.t-product__option-title').textContent;
                    createItemVariantList.append(createItemVariant)
                }
            }

            if (doItems[j].querySelector('.js-product-price').textContent) {
                let createItemPrice = document.createElement('p')
                createItemPrice.classList.add('itemPrice')
                createItemPrice.textContent = doItems[j].querySelector('.js-product-price').textContent + 'p.'
                createCatItem.append(createItemPrice)
            } else {
                let createItemPrice = document.createElement('p')
                createItemPrice.classList.add('itemPrice')
                createItemPrice.textContent = 'уточните у сотрудника'
                createCatItem.append(createItemPrice)
            }
        }
    }
}

//
//
const startDoCatalog = setInterval(findCategories, 200)