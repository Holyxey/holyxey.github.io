const css = `
* {
    padding: 0;
    margin: 0;
}
body {
    background-color: #f5f1ed;
    font-family: 'Roboto', 'Helvetica', sans-serif;
}
.js-store {
    display: none;
}

::-webkit-scrollbar {
    width: 0;
    height: 0;
    margin: 0;
}
::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 1rem;
}
::-webkit-scrollbar-track {
    background: transparent;
    padding: 0;
}

.menu {
    display: flex;
    justify-content: space-around;

    list-style: none;
    margin: 0 auto;
    overflow-x: auto;

    background-color: #090712;

    position: sticky;
    top: 0;
    gap: .5rem;
    padding: .5rem;

    z-index: 5;

    color: #252323;
    font-size: 1rem;
}
.menuItem {
    flex: 1;
    max-width: fit-content;
    min-width: fit-content;
    padding: .5rem 1rem;

    /*background-color: #f5f1ed;*/
    border-radius: .5rem;
    color: #f8f8f8;

    transition: padding .3s ease-out;

    cursor: pointer;
}
.menuItemChosen {
    color: #1a1a1a;
    background-color: #e3dcd6;

    padding: .5rem 1.5rem;
    transition: padding .3s ease-out;
}

.catalogCategory {
    color: #252323;
    padding: .5rem;

    max-width: 1200px;
    margin: 2rem auto 4rem auto;
    position: relative;
}
.catHeader {
    font-size: 1rem;
    font-weight: 300;
    margin: -2.5rem 1rem 2rem 0;
    max-width: fit-content;

    padding: .3rem 1rem .5rem 1rem;
    border-radius: 0 0 1rem 1rem;

    background-color: #090712;
    color: #f8f8f8;
}
.catItemList {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: flex-start;

    opacity: 0;
    animation: showHeader .3s ease-out forwards;
}
.catItem {
    position: relative;
    flex: 1 1;
    padding: 0 0 0 0;
    border-radius: 2px;

    display: flex;
    flex-direction: column;
    gap: .25rem;

    min-width: 40%;
    max-width: calc(50% - 2rem);
    max-height: fit-content;

    cursor: default;
}
.catItem:hover {
    /*background-color: #f5f7f8;*/
    /*border-radius: 2rem;*/
}
.itemName {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1;

    margin-right: 30%;
}
.itemDescription {
    font-size: 1rem;
    line-height: 1;
    font-weight: 300;
    padding: .5rem 0;

    color: #334139;

    border-top: 1px solid #999999;
}
.itemVariantList {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem 0;
    overflow: hidden;

    /*margin-top: 5rem;*/
    border: 1px solid #d5d4d4;
    padding: .5rem;
    border-radius: .5rem;
}
.itemVariant {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    color: #334139;

    line-height: 1;
    padding: 0 .5rem 0 .5rem;
    font-weight: 300;
    font-size: .9rem;
}
.itemPrice {
    max-width: 30%;
    text-align: right;
    font-weight: 600;
    border-radius: .25rem .25rem .25rem .5rem;

    position: absolute;
    top: 0;
    right: 1rem;
}
.itemImg {
    display: block;
    position: relative;
    overflow: hidden;
    height: 200px;
    padding: 0 0 .25rem 1rem;
}
    .itemImg img {
        display: block;
        max-height: 100%;
        border-radius: .5rem;
    }
#fullItemImg {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    height: 100dvh;
    width: 100dvw;
    background-color: #1a1a1a80;

    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
    #fullItemImg img {
        display: block;
        position: relative;

        max-width: 98%;
        max-height: 98%;

        border-radius: 1rem;
        z-index: 101;

        animation: showFullItemImg .3s ease-out forwards;
    }

.doHr {
    height: 2px;
    background-color: #090712;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    position: sticky;
    top: -.5rem;
    width: calc(100% - 2rem);
    margin-block: 1rem;
    padding-inline: 1rem;
}
.backButton {
    display: flex;
    align-items: center;
    justify-content: center;
}
.backButton:nth-child(1) {
    /*display: none;*/
}
.backButton svg {
    width: 2rem;
}

#menuf {
    position: fixed;
    bottom: 0;

    width: 100dvw;
    z-index: 100;
}
#menuf ul {
    display: flex;
    list-style: none;
    gap: 1rem;
    justify-content: space-between;
    padding-left: 0!important;
    margin-bottom: 0!important;
    margin-block-start: 0!important;
    margin-block-end: 0!important;
    padding-inline-start: 0!important;
}
#menuf a {
    padding: 1rem;

    display: flex;
    animation: backButton 5s ease-in-out infinite;
}
/*
*/
@keyframes showHeader {
    from {translate: 0 -5px; opacity: 0;}
    to {translate: 0 0; opacity: 1;}
}
@keyframes backButton {
    from {}
    30% {
        translate: 0;
        rotate: 0deg;
    }
    60% {
        translate: 0 5%;
        rotate: 15deg;
    }
    90% {
        translate: 0;
        rotate: 0deg;
    }
    to {}
}
@keyframes showFullItemImg {
    from {opacity: 0; transform: scale(.8);}
    to {opacity: 1;}
}

/*
*/
@media screen and (max-width: 1280px) {
    header {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        padding-right: 1rem;
    }
}
@media screen and (max-width: 800px) {
    .catHeader {
        margin-left: 1rem;
    }
    .catItemList {
        padding-left: 0;
    }
    .catItem {
        min-width: 50%;
        max-width: 100%;
    }
    .itemVariantList {
        padding: 1rem .5rem;
    }
    .itemVariant {
        text-align: center;
    }
    .menu {
        justify-content: left;
    }
}
`
const addCss = () => {
    let style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
}
addCss()

// Удали весь код выше перед публикацией
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

const openImgFull = (el) => {
    let src = el.getAttribute('src')
    let imgElement =
        `
        <div id="fullItemImg" onclick="this.remove()">
            <img src="${src}" alt="alt">
        </div>
        `

    document.documentElement.insertAdjacentHTML('afterbegin', imgElement)
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

            if (doItems[j].querySelector('.js-product-img')) {
                let img = doItems[j].querySelector('.js-product-img')
                let name = doItems[j].querySelector('.js-store-prod-name').textContent
                let itemImg =
                    `<div class="itemImg">
                        <img loading="lazy" src="${img.getAttribute('data-original')}" alt="${name}" onclick="openImgFull(this)">
                    </div>`
                createCatItem.insertAdjacentHTML('beforeend', itemImg)
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
                createItemPrice.textContent = ''
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