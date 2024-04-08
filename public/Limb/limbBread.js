// Auto generate links
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#hx-limb-bread')) {
        let breadBlock = document.querySelector('#hx-limb-bread')
        let breadCounter = breadBlock.querySelectorAll('*')
        breadCounter.forEach((el)=>{
            el.textContent === 'Протезы нижних конечностей'
                ? el.addEventListener('click', () => {location.href = '/n_legs'})
                : null
        })
    }
})