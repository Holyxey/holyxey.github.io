const mainNode = document.getElementById('campingPage');


function someMeta() {
    function changeTitle() {
        document.title = place.title + 'Golden Ice';
    }

    function changeDescription() {
        const d = document.querySelector('meta[name="description"]')
        const description = place.address + place.dates

        if (d && d.getAttribute('content')) {
            d.setAttribute('content', description);
        } else {
            const m = document.createElement('meta');
            m.name = 'description'
            m.setAttribute('content', description);
            document.head.append(m)
        }
    }

    changeTitle()
    changeDescription()
}


function renderHero() {
    function setTitle() {
        const t = document.createElement('h1');
        t.innerText = place.title;
        return t;
    }

    function setDescription() {
        const d = document.createElement('h2');
        d.innerText = place.address;
        return d;
    }

    function setDates() {
        const d = document.createElement('p');
        d.innerText = place.dates;
        d.classList.add('dates');
        return d;
    }

    function setCover() {
        const i = document.createElement('img');
        i.src = place.cover;
        i.alt = place.title + place.dates + place.address + ' Golden Ice';
        return i;
    }

    const title = setTitle();
    const description = setDescription();
    const dates = setDates();
    const cover = setCover();

    const hero = document.createElement('div');
    hero.id = 'hero'

    const heroTextContainer = document.createElement('div');
    heroTextContainer.classList.add('heroTextContainer');
    heroTextContainer.append(title, description, dates);

    hero.appendChild(heroTextContainer);
    hero.appendChild(cover);
    mainNode.appendChild(hero);
}

document.addEventListener('DOMContentLoaded', () => {
    someMeta()
    renderHero()
});