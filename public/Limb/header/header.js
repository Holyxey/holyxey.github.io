const headerInteraction = () => {
    const listHeaders = document.querySelectorAll(".listHeader");
    listHeaders.forEach((listHeader) => {
        const items = listHeader.querySelectorAll(".listHidden a");
        const listHidden = listHeader.querySelector(".listHidden");
        const header = listHeader.querySelector("p")
        const arrow = listHeader.querySelector(".arrow");
        if (!listHeader.querySelector("p")) {
            return
        }
        if (window.innerWidth > 1024) {
            header.onmouseenter = () => {
                listHidden.style.padding = '.5rem'
                items.forEach((item, index) => {
                    item.style.animation = 'showListItem .2s ease-out forwards';
                })
            }
            listHidden.onmouseleave = () => {
                listHidden.style.padding = '0'
                items.forEach((item, index) => {
                    item.style.animation = 'hideListItem .2s ease-out forwards';
                })
            }
        } else {
            header.ontouchstart = () => {
                listHidden.style.padding = '.5rem'
                items.forEach((item, index) => {
                    item.style.animation = 'showListItem .2s ease-out forwards';
                })
            }
        }
    })
}
const showMobileMenu = () => {
    const button = document.getElementById("mobileBurger");
    const menu = document.getElementById("headerMenu");
    const lines = button.querySelectorAll(".burgerLines");
    if (button.getAttribute('data-opened') === '1') {
        menu.style.cssText = ''
        button.setAttribute('data-opened', '0')
        lines.forEach((line, index) => {
            if (index === 0) {
                line.style.rotate = '0deg'
                line.style.translate = '0 0'
            }
            if (index === 1) {
                line.style.opacity = '1'
            }
            if (index === 2) {
                line.style.rotate = '0deg'
                line.style.translate = '0 0'
            }
        })
    }
    else {
        menu.style.cssText = `
            position: absolute;
            top: 4rem;
            padding-block: 2rem;
            left: 50%;
            translate: -50% 0;
            display: flex;
            min-width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            background-color: white;
            overflow-y: auto`
        button.setAttribute('data-opened', '1')
        lines.forEach((line, index) => {
            if (index === 0) {
                line.style.rotate = '45deg'
                line.style.translate = '0 10px'
            }
            if (index === 1) {
                line.style.opacity = '0'
            }
            if (index === 2) {
                line.style.rotate = '-45deg'
                line.style.translate = '0 -10px'
            }
        })
    }
}
const renderMenuItems = () => {
    const lists = document.querySelectorAll('[data-render]')
    if (window.location.href.includes('legs')) {
        lists.forEach(list => {
            list.setAttribute('data-render', '1')
        })
    }
    lists.forEach(list => {
        if (list.getAttribute('data-render') === '1') {
            list.style.display = ''
        } else {
            list.style.display = 'none'
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    headerInteraction()
    renderMenuItems()
})