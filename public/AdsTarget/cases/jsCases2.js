// ========================= FILTERS
//
function caseFilterStart() {
    let caseButtons = document.querySelectorAll('button[category]')
    caseButtons.forEach(function (el) {
        el.addEventListener('click', function () {
            let cat = el.getAttribute('category')
            if (cat !== 'all') {
                caseButtons.forEach(function (el){el.classList.remove('caseActiveFilter')})
                el.classList.add('caseActiveFilter')
                console.log(cat)

                let showCases = document.querySelectorAll('li[category]')
                showCases.forEach(function (el) {
                    if (el.getAttribute('category') === cat) {
                        el.style.display = ''
                    } else {
                        el.style.display = 'none'
                    }
                })
                window.location = '#cases'
                window.scrollBy(0, 1)
            } else {
                caseButtons.forEach(function (el) {
                    el.classList.remove('caseActiveFilter')
                })
                let showCases = document.querySelectorAll('li[category]')
                showCases.forEach(function (el) {
                    el.style.display = ''
                })
                el.classList.add('caseActiveFilter')
                window.location = '#cases'
                window.scrollBy(0, 1)
            }
        })
    })
}


// ================== MOBILE FILTERS
//
function mobFilters() {
    if (innerWidth < 1280) {
        let choseCategory = document.getElementById('choseCategory')
        choseCategory.addEventListener("click", function () {
            this.style.display = 'none'
            document.querySelectorAll("button[category]").forEach(function (el) {
                el.style.display = 'block'
                el.classList.add('scrollShow')
                el.addEventListener('click', function () {
                    let chosen = el.textContent;
                    document.querySelectorAll("button[category]").forEach((el)=>{
                        el.style.display = 'none'
                        choseCategory.textContent = chosen
                        choseCategory.style.display = ''
                    })
                })
            })
        })
    }
}


// ====================== DOM LOADED
//
// document.addEventListener("DOMContentLoaded", allCasesSchema)
document.addEventListener("DOMContentLoaded", caseFilterStart)
document.addEventListener("DOMContentLoaded", mobFilters)