'use strict'

const heroBack = {
    landscape: {
        img: 'https://static.tildacdn.com/tild6563-3261-4766-b365-663064393131/vlcsnap-2024-11-07-1.jpeg',
        vid: 'https://player.vimeo.com/video/1026916631?muted=1&controls=0&loop=1&app_id=122963',
        id: 1026916631,
        mode: 'landscape'
    },
    portrait: {
        img: 'https://static.tildacdn.com/tild3963-6634-4138-a433-333434623461/vlcsnap-2024-11-07-1.jpeg',
        vid: 'https://player.vimeo.com/video/1026916631?muted=1&controls=0&loop=1&app_id=122963',
        id: 1026853009,
        mode: 'portrait'
    },
}
const heroNode = document.getElementById('heroVideo')

const setBgStatic = (link = '') => {
    heroNode.style.backgroundImage = `url(${link})`
}
const setBgVideo = (objId = {}) => {
    const id = objId.id
    const iframe = heroNode.querySelector('iframe')

    if (iframe && iframe.src && iframe.src === objId.vid) {
        return false
    } else {
        const options = {
            id: id,
            loop: true,
            muted: true,
            controls: false,
            autoplay: true,
            quality: '720p',
        };
        if (typeof Vimeo !== 'undefined') {
            const player = new Vimeo.Player('iframe', options);

            player.on('playing', (e) => {
                // console.log(e)
                document.getElementById('iframe').style.opacity = '1'
            })
        }
    }
}

const setLand = async () => {
    setBgStatic(heroBack.landscape.img)
    setBgVideo(heroBack.landscape)
}
const setPort = async () => {
    setBgStatic(heroBack.portrait.img)
    setBgVideo(heroBack.portrait)
}

const setHeroVideo = () => {
    if (!heroNode) return false
    switch (window.innerWidth > 600) {
        case true:
            return setLand()
        case false:
            return setPort()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setHeroVideo()
})
window.onresize = setHeroVideo