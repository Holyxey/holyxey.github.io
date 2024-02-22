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


// =================== DOM LOADED
//
document.addEventListener("DOMContentLoaded", allCasesSchema)