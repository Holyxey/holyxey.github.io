function anishow(element) {
    const anishow = element.getBoundingClientRect();
    if (anishow.top >= 0 &&
        anishow.left >= 0 &&
        anishow.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        anishow.right <= (window.innerWidth || document.documentElement.clientWidth))
    {
        element.classList.add('anishow');
    } else {
        element.classList.remove('anishow');
    }
}