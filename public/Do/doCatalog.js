let doCatalogDiv;
let doCatalog;
let doCategories;
let doItems;
let catId;
let catHeader;
let moreButton;
let menuItems;
let createMenu = document.createElement('ul')
    createMenu.classList.add('menu')
if (document.querySelector('#allrecords'))
    document.querySelector('#allrecords').parentNode.prepend(createMenu)

function menuItemClick(el) {
    let q = document.querySelectorAll('.catHeader')
    for (let i = 0; i < q.length; i++) {
        if (q[i].textContent === el.textContent) {
            q[i].scrollIntoView()
            window.scrollBy({
                top: - document.querySelector('.menu').clientHeight,
                left: 0,
                behavior: 'smooth'
            });
            break;
        }
    }
}

//
//
function findCategories() {
        if (document.querySelector('.js-store')) {
            doCatalog = document.querySelector('.js-store')
            doCatalogDiv = document.querySelector('.js-store').parentNode.parentNode
            if (doCatalogDiv) {
                // doCatalogDiv.style.display = 'none'
                doCategories = document.querySelectorAll('[data-storepart-uid]')

                setTimeout(() => {
                    if (doCategories.length > 0) {
                        newProductArray()
                    }
                }, 500)
            }
            menuItems = document.querySelectorAll('.menuItem')
        }
}
function newProductArray() {
    clearInterval(startTimer)

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

        let createMenuItem = document.createElement('li')
        createMenuItem.classList.add('menuItem')
        createMenuItem.textContent = doCategories[i].textContent
        createMenuItem.setAttribute('onclick', 'menuItemClick(this)')
        createMenu.append(createMenuItem)

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
            } else {
                let createItemDescription = document.createElement('p')
                createItemDescription.classList.add('itemDescription')
                createItemDescription.textContent = ''
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

        let doDeviver = document.createElement('div')
        doDeviver.classList.add('doHr')
        createCatalogCategory.parentNode.append(doDeviver)
    }
}

//
//
function menuCatChose(chosen) {
    if (menuItems && chosen) {
        menuItems.forEach((el)=>{
            el.classList.remove('menuItemChosen')
        })
        chosen.classList.add('menuItemChosen')
        let q = document.querySelector('.menu')
        q.scrollBy({
            behavior: "smooth",
            left: document.querySelector('.menuItemChosen').getBoundingClientRect().left,
            top: 0
        })
    }
}
window.addEventListener("scroll", () => {
    if (document.querySelector('.menuItem')) {
        menuItems = document.querySelectorAll('.menuItem')
        let c = document.querySelectorAll('.catalogCategory')
        for (let i = 0; i < c.length; i++) {
            if (c[i].getBoundingClientRect().bottom > 0) {
                let chosenText = c[i].querySelector('.catHeader').textContent;
                for (let j = 0; j < menuItems.length; j++) {
                    if (menuItems[j].textContent === chosenText) {
                        menuCatChose(menuItems[j])
                    }
                }
                break;
            }
        }
    }
})

//
//
const startTimer  = setInterval(()=>{
    findCategories()
},1000)
findCategories()
//
//