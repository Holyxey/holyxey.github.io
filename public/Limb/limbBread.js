// Auto generate links
const setForBread = (el) => {
    el.style.cssText += `cursor: pointer;`
    el.addEventListener('click', () => {location.href = '/n_legs'})
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.querySelector('#hx-limb-bread')) {
        let breadBlock = document.querySelector('#hx-limb-bread')
        let breadCounter = breadBlock.querySelectorAll('*')
        breadCounter.forEach((el)=>{
            el.textContent === 'Протезы нижних конечностей'
                ? setForBread(el)
                : null
        })
    }
})