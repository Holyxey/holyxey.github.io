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

const checkVisibilityAndShow = () => {
    showThisScroll.forEach(el => {
        el.style.opacity = '0';
        if (atOnScroll(el, true)) {
            el.classList.add('scrollShow');
        }
    });
};
window.addEventListener('scroll', checkVisibilityAndShow);