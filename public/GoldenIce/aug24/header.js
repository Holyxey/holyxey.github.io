const goldenHeader = document.getElementById('goldenHeader')
const listsHeaders = goldenHeader.querySelectorAll('menu li')
const logo = goldenHeader.querySelector('#headerLogo img')
const burger = goldenHeader.querySelector('#mobileBurger')
const menu = document.querySelector('#goldenHeader menu')

menu.setAttribute('isOpen', 'false')


if (window.innerWidth > 750)
    logo.style.maxHeight = goldenHeader.getBoundingClientRect().height/1.25 + 'px'

burger.onclick = (el) => {
    const isOpen = menu.getAttribute('isOpen')

    if (isOpen === 'true') {
        menu.style.display = 'none'
        menu.setAttribute('isOpen', 'false')
    }
    else {
        menu.style.display = 'flex'
        menu.setAttribute('isOpen', 'true')
    }

}


listsHeaders.forEach(header => {
    header.addEventListener('mouseenter', (e) => {
        const ul = header.querySelector('ul')
        if (ul) {
            ul.classList.toggle('showedList')
            ul.style.cssText +=
                `transform: translate(-50%, 0rem);
                opacity: 1;
                scale: 1;
                pointer-events: auto;
                background-color: #ffffff`

            if (window.innerWidth <= 750) {
                ul.insertAdjacentHTML('afterbegin',
                    '<svg class="closeMenuPup rotate" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="m6 6 12 12m0-12L6 18" stroke="#10121F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
                )
                const closeButton = ul.querySelector('.closeMenuPup')
                closeButton.addEventListener('click', () => {
                    closeButton.classList.add('rotateHide')
                    closeButton.remove()
                    ul.classList.toggle('showedList')
                    ul.style.cssText +=
                        `transform: translate(-50%, 2rem);
                    opacity: 0;
                    scale: 1;
                    pointer-events: none;
                    background-color: #ffffff20;`
                })
            }

            ul.addEventListener('mouseleave', (e) => {
                ul.classList.toggle('showedList')
                ul.style.cssText +=
                    `transform: translate(-50%, 2rem);
                    opacity: 0;
                    scale: 1;
                    pointer-events: none;
                    background-color: #ffffff20;`
            })
        }
    })
})
