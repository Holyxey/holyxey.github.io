function reviewOpen(el) {
    let reviewCreate = document.createElement('div')
    reviewCreate.classList.add('reviewShortsEmbedDiv')

    let reviewIframe = document.createElement('iframe')
    let dataembed = el.getAttribute('dataEmbed')
    reviewIframe.classList.add('reviewShortsEmbed')
    reviewIframe.src = ('https://www.youtube.com/embed/' + dataembed + '?playsinline=1&autoplay=1&muted=1')
    reviewIframe.frameBorder = false;
    reviewIframe.title = 'YouTube video player'
    reviewIframe.allowFullscreen = true;

    document.body.append(reviewCreate)
    reviewCreate.append(reviewIframe)
    reviewCreate.setAttribute('onclick', 'reviewClose(this)')

    document.documentElement.style.overflow = 'hidden'
}
function reviewClose(el) {
    el.remove();
    document.documentElement.style.overflow = ''
}

document.addEventListener("DOMContentLoaded", function (){
    let reviews = document.getElementsByClassName('reviewShortsPreview')
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].setAttribute('onclick', 'reviewOpen(this)')
    }
})