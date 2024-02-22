// =================== ADDING SCHEMA
//
function allCasesSchema() {
    let caseItem = document.querySelectorAll('.hx-at-allcases-item')

    caseItem.forEach(function (el) {
        let header = el.querySelector('.hx-at-case-h')
        let img = el.querySelector('.hx-at-case-img')
        let imgUrl = img.style.backgroundImage.slice(5, -2)
        let createMetaUrl = document.createElement('meta')
        let createMetaName = document.createElement('meta')
        let category = el.querySelector('.hx-at-case-category')
        let a = el.querySelector('a')

        if (header && img && imgUrl && category && a) {
            el.setAttribute('itemprop', 'itemListElement')
            el.setAttribute('itemscope', '')
            el.setAttribute('itemtype', 'http://schema.org/CreativeWork')

            header.setAttribute('itemprop', 'headline')

            img.setAttribute('itemprop', 'image')
            img.setAttribute('itemscope', '')
            img.setAttribute('itemtype', 'http://schema.org/ImageObject')
            createMetaUrl.setAttribute('itemprop', 'url')
            createMetaUrl.setAttribute('content', imgUrl)
            img.prepend(createMetaUrl)
            createMetaName.setAttribute('itemprop', 'name')
            createMetaName.setAttribute('content', header.innerText)
            img.prepend(createMetaName)

            category.setAttribute('itemprop', 'category')

            a.setAttribute('itemprop', 'url')
        }
    })
}


// =================== FILTER BUTTONS
//
function allCasesFilters() {
    let categories = document.querySelectorAll('button[active]')
    categories.forEach(function (el){
            if (el) {
                el.addEventListener('click', function (){
                        switch (el.getAttribute('active')) {
                            case ('false'):
                                el.setAttribute('active', 'true')
                                el.style.cssText += "color: var(--c-pk)!important; box-shadow: 0 0 1px #00000090; border-color: var(--c-pk)"
                                break
                            case ('true'):
                                el.setAttribute('active', 'false')
                                el.style.cssText -= ""
                                break
                            case ('all'):
                                categories.forEach((el)=> {
                                    if (el.getAttribute('active') === 'true') {
                                        el.setAttribute('active', 'false')
                                        el.style.cssText -= ""
                                    }
                                })
                                break
                        }
                    // allCasesCheck(el)
                })
            }
    })
}
// function allCasesCheck(el) {}



// =================== DOM LOADED
//
document.addEventListener("DOMContentLoaded", allCasesSchema)
document.addEventListener("DOMContentLoaded", allCasesFilters)