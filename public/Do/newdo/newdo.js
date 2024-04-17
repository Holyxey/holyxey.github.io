const randomNumber = (max) => {
    if (max) {
        let result;
        result = Math.floor(Math.random() * max);
        return result;
    }
}
const randomBodyBack = () => {
    let b = document.querySelector('#mainSection')
    let images = ['https://thumb.tildacdn.com/tild3736-6437-4531-a234-396638353763/-/format/webp/Movement.jpeg', 'https://thumb.tildacdn.com/tild3432-6132-4431-b363-663537666335/-/format/webp/Freedom.jpeg', 'https://thumb.tildacdn.com/tild6436-3662-4865-b563-653263306338/-/format/webp/Love.jpeg',]
    b.style.cssText = `background-image: url('${images[randomNumber(images.length)]}')`
}
const logoLettersAnimation = () => {
    let letters = document.querySelectorAll('.logoDo')
    for (let i = 0; i < letters.length; i++) {
        letters[i].style.cssText += `animation: logo 2.2s ${i / 5}s ease-in-out infinite;`
    }
}
const desktopImage = () => {
    let createImage = document.createElement("img")
    createImage.id = 'desktopImage'
    createImage.alt = 'Main image - decorative'
    createImage.src = `https://thumb.tildacdn.com/tild3432-6132-4431-b363-663537666335/-/format/webp/Freedom.jpeg`
    createImage.setAttribute('loading', 'lazy');
    document.querySelector('body').append(createImage)

    let image = document.querySelector('#desktopImage')
    let imageList = ['https://thumb.tildacdn.com/tild3736-6437-4531-a234-396638353763/-/format/webp/Movement.jpeg', 'https://thumb.tildacdn.com/tild3432-6132-4431-b363-663537666335/-/format/webp/Freedom.jpeg', 'https://thumb.tildacdn.com/tild6436-3662-4865-b563-653263306338/-/format/webp/Love.jpeg',]
    let headerLi = document.querySelectorAll('header li')

    headerLi.forEach((el) => {
        el.addEventListener('mouseenter', () => {
            image.src = `${imageList[randomNumber(imageList.length)]}`
            image.style.cssText += `
                rotate: ${randomNumber(5) / 5}deg;
                `
        })
    })

    image.style.cssText = `
        max-height: calc(${window.innerHeight}px - 2rem);
        rotate: ${randomNumber(5) / 5}deg;
        `

    let addressBlock = document.querySelector('#address p')
    addressBlock.style.cssText = `max-width: calc(${window.innerWidth - image.clientWidth}px - 2rem)`
}

logoLettersAnimation();
document.addEventListener("load", () => {
    logoLettersAnimation();
})
if (window.innerWidth < 1280) {
    randomBodyBack();
} else {
    desktopImage()
}