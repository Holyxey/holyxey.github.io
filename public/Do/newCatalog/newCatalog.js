let categories = {};
let body = document.querySelector('body');

const query = (selector) => {
    return document.querySelectorAll(selector);
}

const getProducts = (categoryId) => {
    let products = {};
    query(`[data-product-part-uid="${categoryId}"]`).forEach((productEl, number) => {
        let elName = productEl.querySelector('.js-store-prod-name')
        let elDescr = productEl.querySelector('.js-store-prod-descr')
        let elPrice = productEl.querySelector('.js-product-price');

        let variants = {}
        const getVariants = () => {
            let variant = productEl.querySelectorAll('.t-product__option-item');
            if (variant && variant.length > 0) {
                variant.forEach((variant, number) => {
                    variants[`variant_${number + 1}`] = {
                        variant: variant.querySelector('.t-product__option-title').textContent,
                    }
                })
            return variants;
            }
        }

        let images = {};
        const getImages = () => {
            let image = productEl.querySelectorAll('.js-product-img');
            if (image && image.length > 0) {
                image.forEach((imageEl, number) => {
                    images[`image_${number + 1}`] = {
                        image: imageEl.getAttribute('data-original'),
                    }
                })
            return images;
            }
        }

        products[`product_${number + 1}`] = {
            name: elName ? elName.textContent : '',
            description: elDescr ? elDescr.textContent : '',
            price: elPrice ? elPrice.textContent + ' p.' : '',
            variants: getVariants(),
            images: getImages(),
        };
    });
    return products;
}

const getCategories = () => {
    query('.js-store-parts-switcher').forEach((el, number) => {
        let categoryId = el.getAttribute('data-storepart-uid');
        categories[`category_${number + 1}`] = {
            name: el.textContent,
            id: categoryId,
            products: getProducts(categoryId),
        };
    });
    return categories;
}

const appendTo = (el, where) => {
    where ? where.insertAdjacentHTML('beforeend', el) : body.insertAdjacentHTML('beforeend', el)
}

const renderTheMenu = () => {
    appendTo(`<ul class="menu"></ul>`)
    Object.keys(categories).forEach((key) => {
        const category = categories[key];
        if (Object.keys(category.products).length > 0)
            appendTo(`<li class="menuItem" onclick="menuItemClick('${category.name}')">${category.name}</li>`, document.querySelector('.menu'));
    })
    appendTo(`<div id="newCatalog"></div>`)
    Object.keys(categories).forEach((key) => {
        const products = Object.keys(categories[key].products);
        const catName = categories[key].name
        if (products.length > 0) {
            appendTo(`<section class="catalogCategory" data-category="${catName}">
                <h3 class="catHeader">${catName}</h3>
                <article class="catItemList">
                    
                </article>
            </section>
            <div class="doHr"></div>
            `, document.querySelector('#newCatalog'));
        }
        // Object.keys(products).forEach((key) => {
        //     appendTo(`<p>q</p>`, querySelector('.catItemList'));
        // })
    })
}

const findStoreModule = setInterval(() => {
    if (document.querySelector('.js-store-prod-name') && document.querySelector('.js-store-prod-name').textContent.length > 0 ) {
        clearInterval(findStoreModule)
        console.log(getCategories())
        // getCategories()
        renderTheMenu();
    }
}, 500)
