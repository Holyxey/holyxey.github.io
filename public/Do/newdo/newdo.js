const doLang = {
    content: {
        ru: {
            h1: 'Винный бар "Do Wine Bar" в Санкт-Петербурге',
            p: 'ул. Восстания 24/27, второй двор, пространство «Флигель»',
            openHours: [
                'ПН-ЧТ 17-01',
                'ПТ 18-03',
                'СБ 16-03',
                'ВС 16-01',
            ],
            menu: 'Меню',
            reserve: 'Резерв',
        },
        en: {
            h1: 'Do Wine Bar has been established in St. Petersburg since 2013',
            p: '24/27 Vosstaniya Street, second courtyard, ‘Fligel’ art space',
            openHours: [
                'Mon-Thu 18-01',
                'Fri 18-03',
                'Sat 16-03',
                'Sun 16-01',
            ],
            menu: 'Menu',
            reserve: 'Reserve',
        },
    },
    check: () => {
        return localStorage.getItem("doMenuLanguage");
    },
    set: () => {
        if (!doLang.check()) {
            if (navigator.language.includes('ru')) {
                localStorage.setItem("doMenuLanguage", 'rus')
                doLang.set()
            } else {
                localStorage.setItem("doMenuLanguage", 'eng')
                doLang.set()
            }
        } else if (doLang.check() !== 'rus') {
            const openHoursList = document.getElementById('workingTime')
            const reservation = document.getElementById('reservation')
            const menu = document.getElementById('menu')
            const changeLangButton = document.getElementById('mainChangeLang')
            changeLangButton.textContent = 'In RUS'
            document.querySelector('#address h1').textContent = `${doLang.content.en.h1}`
            document.querySelector('#address p').textContent = `${doLang.content.en.p}`

            openHoursList.querySelectorAll('*').forEach(el => {el.remove()})
            doLang.content.en.openHours.forEach(li => {
                openHoursList.insertAdjacentHTML('beforeend', `<li>${li}</li>`)
            })

            menu.textContent = `${doLang.content.en.menu}`
            reservation.textContent = `${doLang.content.en.reserve}`
        } else {
            const openHoursList = document.getElementById('workingTime')
            const reservation = document.getElementById('reservation')
            const menu = document.getElementById('menu')
            const changeLangButton = document.getElementById('mainChangeLang')
            changeLangButton.textContent = 'In ENG'
            document.querySelector('#address h1').textContent = `${doLang.content.ru.h1}`
            document.querySelector('#address p').textContent = `${doLang.content.ru.p}`

            openHoursList.querySelectorAll('*').forEach(el => {el.remove()})
            doLang.content.ru.openHours.forEach(li => {
                openHoursList.insertAdjacentHTML('beforeend', `<li>${li}</li>`)
            })

            menu.textContent = `${doLang.content.ru.menu}`
            reservation.textContent = `${doLang.content.ru.reserve}`
        }
    },
    change: () => {
        if (doLang.check() !== 'rus') {
            localStorage.setItem("doMenuLanguage", 'rus')
            doLang.set()
        } else {
            localStorage.setItem("doMenuLanguage", 'eng')
            doLang.set()
        }
    }
}
const randomNumber = (max) => {
    if (max) {
        return  Math.floor(Math.random() * max);
    }
}
const images = [
    'https://thumb.tildacdn.com/tild3736-6437-4531-a234-396638353763/-/format/webp/Movement.jpeg',
    'https://thumb.tildacdn.com/tild3432-6132-4431-b363-663537666335/-/format/webp/Freedom.jpeg',
    'https://thumb.tildacdn.com/tild6436-3662-4865-b563-653263306338/-/format/webp/Love.jpeg',
]
const randomBodyBack = () => {
    const b = document.querySelector('#mainSection')
    b.style.animation = 'easeChange .3s ease-in-out';
    b.style.cssText = `background-image: url('${images[randomNumber(images.length)]}')`
}
const logoLettersAnimation = () => {
    let letters = document.querySelectorAll('.logoDo')
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.cssText += `animation: logo 2.2s ${i / 5}s ease-in-out infinite;`
    }
}
const nextImg = (img) => {
    const randomImg = images[randomNumber(images.length)]
    if (img === randomImg) return nextImg(images[randomNumber(images.length)])
    else return randomImg
}
const desktopImage = () => {
    document.querySelector('body').insertAdjacentHTML('beforeend',
        `<img src="${images[1]}" id="desktopImage" alt="Main image - decorative">`)

    const image = document.querySelector('#desktopImage')
    const headerLi = document.querySelectorAll('header li')
    headerLi.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            image.style.animation = 'easeChange .6s ease-out';
            setTimeout(() => {
                image.style.rotate = `${randomNumber(5) / 5}deg`
                image.src = nextImg(image.src)
                image.style.animation = 'unset';
            },300)
        })
    })
    // image.style.rotate = `${randomNumber(5) / 5}deg`
    image.style.maxHeight = `calc(${window.innerHeight}px - 2rem)`

    let addressBlock = document.querySelector('#address p')
    addressBlock.style.maxWidth = `calc(${window.innerWidth - image.clientWidth}px - 2rem)`
}

if (window.innerWidth < 1280) {
    randomBodyBack();
} else {
    desktopImage()
    logoLettersAnimation();
}

document.addEventListener("DOMContentLoaded", () => {
    doLang.set()
})