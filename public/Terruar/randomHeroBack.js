let newHeroGen = Math.floor(Math.random() * 3 + 1);

const setBackHero = (src) => {
    if (src) {
        document.querySelector('.big_hero').style.backgroundImage = `url(${src})`;
    } else {
        setBackHero(Math.floor(Math.random() * 3 + 1))
    }
}

switch (newHeroGen) {
    case 1:
        setBackHero('https://thumb.tildacdn.com/tild6330-6234-4161-b739-366266373965/-/format/webp/5ZN_1560.jpg')
        break;
    case 2:
        setBackHero('https://thumb.tildacdn.com/tild6634-3031-4438-b961-646335656238/-/format/webp/DSC04420.jpg')
        break;
    case 3:
        setBackHero('https://thumb.tildacdn.com/tild3837-6638-4535-a238-663235623730/-/format/webp/KIR_3052.jpg')
        break;
}