const atOnScroll = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) ||
            (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
// atOnScroll(el);
// atOnScroll(el, true);

let showThisScroll = document.querySelectorAll('.showThisScroll')
showThisScroll.forEach(el=>{el.style.opacity = '0'})

const checkVisibilityAndShow = () => {
    let tmt = 2;
    showThisScroll.forEach(el => {
        // el.style.opacity = '0';
        if (atOnScroll(el, true)) {
            setTimeout(() => {el.classList.add('scrollShow')}, 50 * tmt)
            tmt += 2;
        } else {
            el.classList.remove('scrollShow')
            el.style.opacity = '0';
        }
    });
};
window.addEventListener('scroll', checkVisibilityAndShow);