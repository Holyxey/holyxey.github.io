const subMenusHeader = () => {
    const lists = document.querySelectorAll('nav li');
    const listLinks = document.querySelectorAll('nav li a');
    lists.forEach(list => {
        const block = list.querySelector('.headerSubmenus');
        const points = list.querySelectorAll('a');

        if (!block) return;

        list.addEventListener('mouseenter', () => {
            block.style.display = 'block';
            block.style.animation = 'dropDownMenusShow .5s ease-in-out forwards';

            list.addEventListener('mouseleave', () => {
                block.style.animation = 'dropDownMenusHide .3s ease-in-out forwards';
                setTimeout(() => {
                    block.style.display = 'none';
                }, 300)
            })
        })
    })
    listLinks.forEach((point) => {
        point.addEventListener('click', () => {mobileBurger()})
    })
}
const getRecNode = (element) => {
    while (!element.getAttribute('id') || !element.getAttribute('id').includes('rec')) {
        element = element.parentNode;
    }
}
const heroMargin = (hero) => {
    if (window.innerWidth > 600) {
        hero.style.marginTop = document.getElementById('header').getBoundingClientRect().height + 'px'
    } else {
        return null
    }
}
const headerOnScroll = () => {
    const header = document.getElementById('header');
    const logoDiv = header.querySelector('div');
    const menu = header.querySelector('ul');
    const upButton = document.getElementById('upButton');
    const height = logoDiv.getBoundingClientRect().height
    header.style.transition = 'all .5s ease-in-out';
    menu.style.transition = 'padding .5s ease-in-out';
    let checkScroll = setInterval(() => {
        if (window.innerWidth < 600) {
            if ( window.scrollY > 100 ) {
                upButton.style.display = 'flex'
            } else {
                upButton.style.display = 'none'
            }
        } else {
            if ( window.scrollY > 10 ) {
                header.style.top = `-${height}px`
                menu.style.paddingBlock = '.75rem'
                upButton.style.display = 'flex'
                header.style.borderBottom = '.5px solid var(--text)'
            } else {
                header.style.top = `0px`
                menu.style.paddingBlock = '0'
                upButton.style.display = 'none'
                header.style.borderBottom = '.5px solid transparent'
            }
        }
    }, 500)

}
const mobileBurger = (mobileBurger = document.getElementById('mobileBurger')) => {
    const nav = document.querySelector('nav');
    nav.style.transition = 'all 15s ease-in-out';
    if (mobileBurger.getAttribute('data-showed') === 'false') {
        mobileBurger.setAttribute('data-showed', 'true')
        mobileBurger.style.top = '1rem'
        nav.style.display = 'flex';
    } else {
        mobileBurger.setAttribute('data-showed', 'false')
        mobileBurger.style.top = '.5rem'
        nav.style.display = 'none';
    }
}
const changeLanguage = (lang) => {
    lang === 'ru' ? document.location.host = 'weltonhotel.ru' : null
    lang === 'en' ? document.location.host = 'en.weltonhotel.ru' : null
    localStorage.setItem('lang', 'changed')
}
const closeChangeWindow = () => {
    document.getElementById("langChange").style.display = "none";
    localStorage.setItem('lang', 'changed')
}
const firstLangChose = () => {
    let lang = navigator.language || navigator.userLanguage
    if (localStorage.getItem('lang') === 'changed') return
    if (!lang.includes('ru') && !location.host.includes('en.welton')) {
        document.body.insertAdjacentHTML('afterbegin',
            `<div id="langChange">
            <p>Would you like to change the language to English?</p>
            <div>
                <button id="changeLangYes" onclick="changeLanguage('en')">Change</button>
                <button id="changeLangNo" onclick="closeChangeWindow()">Оставить русский</button>
            </div>
            </div>`);
    }
    if (lang.includes('ru') && location.host.includes('en.welton')) {
        document.body.insertAdjacentHTML('afterbegin',
            `<div id="langChange">
            <p>Хотите изменить язык на русский?</p>
            <div>
                <button id="changeLangYes" onclick="changeLanguage('ru')">Да</button>
                <button id="changeLangNo" onclick="closeChangeWindow()">Keep english</button>
            </div>
            </div>`);
    }
}


//
document.addEventListener('DOMContentLoaded', async () => {
    await subMenusHeader();
    await firstLangChose();
    await function () {
        const headerBottom =  document.querySelector('#header > div').getBoundingClientRect().bottom
        const hero = document.querySelector('.hero')
        const padTop = Number(hero.style.paddingTop.replace('px', ''))
        hero.style.paddingTop = `${headerBottom}px`
    }()
})
window.onload = async () => {
    try {
        if (document.querySelector('.contact_hero'))
        await heroMargin(document.querySelector('.contact_hero'));
    } catch (e) {
        console.error(e)
    }
    await headerOnScroll()
}