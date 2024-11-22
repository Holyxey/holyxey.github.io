const clearList = () => {
    const links = () => { return partnersNode.querySelectorAll('a') }
    const right = partnersNode.getBoundingClientRect().right
    for (const link of links())
        if (link.getBoundingClientRect().right > right) link.remove()

    const gap = Number(window.getComputedStyle(partnersNode).gap.replace('px',''))
    console.log(gap)
}
const partnersArrow = () => {
    partnersNode.onmouseenter = () => {
        partnersNode.insertAdjacentHTML('beforeend',
            `<div class="arrow left"><</div><div class="arrow right">></div>`)
    }
    partnersNode.onmouseleave = () => {
        const arrows = partnersNode.querySelectorAll('.arrow')
        for (const arrow of arrows) arrow.style.cssText += 'animation: showArrow reverse .3s ease-out '
        setTimeout(() => {
            partnersNode.querySelectorAll('.arrow').forEach(el => el.remove())
        }, 300)

    }
}
if (partnersNode) {
    for (const {name, link, image} of partners)
        partnersNode.insertAdjacentHTML('beforeend',  `<a href="${link}" title="${name}" target="_blank"><img src="${image}" alt="${name}"></a>` )

    partnersArrow()
    setTimeout(clearList, 500)
}