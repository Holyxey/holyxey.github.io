const lists = {
    renders: [
        'https://thumb.tildacdn.com/tild3438-3165-4763-a332-663237373639/-/format/webp/r-architecture-Y8MJF.jpg',
        'https://thumb.tildacdn.com/tild3638-6166-4130-a263-316231616530/-/format/webp/7_25_-_.jpg',
        'https://thumb.tildacdn.com/tild3761-3261-4762-b139-373530313334/-/format/webp/75.jpg',
        'https://thumb.tildacdn.com/tild3535-6231-4564-a564-656266313161/-/format/webp/84.jpg',
        'https://thumb.tildacdn.com/tild3539-6330-4531-b333-313263613931/-/format/webp/1.jpg',
        'https://thumb.tildacdn.com/tild6161-6532-4536-b835-343136356334/-/format/webp/q_60_.jpg',
        'https://thumb.tildacdn.com/tild3365-3032-4339-a166-653137366131/-/format/webp/james-baldwin-WUImyU.jpg',
        'https://thumb.tildacdn.com/tild3935-3239-4331-b130-306563303630/-/format/webp/rs___50_-_.jpg',
        'https://thumb.tildacdn.com/tild6430-3333-4031-a365-373336623662/-/format/webp/benjamin-richle-izZk.jpg',
        'https://thumb.tildacdn.com/tild6136-3561-4963-b337-386138343864/-/format/webp/collov-home-design-4.jpg',
        'https://thumb.tildacdn.com/tild3665-3939-4739-b363-313365663061/-/format/webp/r-architecture-wJAOe.jpg',
    ],
    photos: [
        'https://thumb.tildacdn.com/tild6635-3762-4662-b935-313465613335/-/format/webp/151515151515.jpg',
        'https://thumb.tildacdn.com/tild3030-3736-4566-b461-633964343535/-/format/webp/9999999_999.jpg',
        'https://thumb.tildacdn.com/tild3230-3164-4338-a661-343963616462/-/format/webp/2023-07-20_20-58-42.png',
        'https://thumb.tildacdn.com/tild3063-6632-4731-a263-643535326563/-/format/webp/IMG-4288.jpg',
        'https://thumb.tildacdn.com/tild3333-3430-4430-b363-656665646366/-/format/webp/11111111-1111111.jpg',
    ]
}

const randomMath = (num) => {
    return Math.floor(Math.random() * num)
}
const randomHeroImage = (listName) => {
    const block = document.querySelector('#heroImage')
    if (listName === 'renders') {
        block.style.backgroundImage = `url(${lists.renders[randomMath(lists.renders.length - 1)]})`
    } else if (listName === 'photos') {
        block.style.backgroundImage = `url(${lists.photos[randomMath(lists.photos.length - 1)]})`
    } else {
        switch (randomMath(2)) {
            case 2:
                block.style.backgroundImage = `url(${lists.photos[randomMath(lists.photos.length - 1)]})`
                return
            default:
                block.style.backgroundImage = `url(${lists.renders[randomMath(lists.renders.length - 1)]})`
                return
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    randomHeroImage()
})