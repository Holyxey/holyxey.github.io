//
const readToken = '4d68a702-50a9-4a9f-9cb7-bcc1cbaa1387'
const docId = 'tHfdwb1AeV'
const TABLE_COACHES = document.getElementById('coaches')
const SECTION_COACHES = TABLE_COACHES.querySelector('section')
const TABLE_MANAGERS = document.getElementById('managers')
const SECTION_MANAGERS = TABLE_MANAGERS.querySelector('section')
const headers = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${readToken}`
    },
}

const getCoaches = async () => {
    try {
        let data = localStorage.getItem('coaches')
        data = JSON.parse(data)
        if (new Date().getTime() - data.timestamp < 3600000) {
            console.log(data.timestamp)
            return data.coaches
        }
    }
    catch (e) {
        console.log("Локала с тренерами не найдено / сгорели")
    }
    try {
        const response = await fetch(`https://coda.io/apis/v1/docs/tHfdwb1AeV/tables/grid-tW6eqJBP-m/rows?valueFormat=rich&sortBy=natural`, headers)
        let data = JSON.stringify(await response.json())
        data = {
            coaches: JSON.parse(data),
            timestamp: new Date().getTime()
        }
        localStorage.setItem('coaches', JSON.stringify(data))
        return data.coaches
    }
    catch (e) {
        console.log('Не удалось получить список тренеров')
        console.log(e.message)
    }
}
const openCoach = (el) => {

    toggleBodyScroll()

    // информация о тренере из локала
    const name = el.getAttribute('data-name')
    let info = JSON.parse(localStorage.getItem('coaches'))
    info = info.coaches
    for (const coach of info.items) {
        if (coach.name === name) {
            info = coach
        }
    }
    const position = info.values['c-dXgrOq6PNC'].slice(3, -3)
    let description = info.values['c-cgUmZq1LTo'].replaceAll('`', '')
    description = description.replaceAll('\n', '<br>')

    // создаем поп-ап с тренером
    document.body.insertAdjacentHTML('beforeend', `<section id="openCoach">
        <svg id="openCoachClose" fill="#232323" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="m12 11.293 4.146-4.147a.5.5 0 0 1 .708.708L12.707 12l4.147 4.146a.5.5 0 0 1-.708.708L12 12.707l-4.146 4.147a.5.5 0 0 1-.708-.708L11.293 12 7.146 7.854a.5.5 0 1 1 .708-.708z"/></svg>
        <div></div></section>`)
    const openCoachPop = document.getElementById('openCoach')
    const openCoachDiv = openCoachPop.querySelector('div')
    const openCoachClose = openCoachPop.querySelector('#openCoachClose')

    // лиснеры закрытия попапа
    window.addEventListener('keydown', toggleBodyScroll)
    openCoachClose.onclick = () => {
        toggleBodyScroll()
        openCoachPop.remove()
        // openCoachClose.remove()
    }

    // вставляем картинку
    // openCoachDiv.insertAdjacentHTML('beforeend', `<img src="${info.values['c-E-7fWZi-45'][0].url}" alt="Фото тренера: ${name}">`)
    openCoachDiv.insertAdjacentHTML('beforeend', `<div class="img" style="background-image: url(${info.values['c-E-7fWZi-45'][0].url})" alt="Фото тренера: ${name}"></div>`)

    // вставляем блок информации
    openCoachDiv.insertAdjacentHTML('beforeend', `<div id="openCoachInfo"></div>`)
    const openCoachInfo = openCoachPop.querySelector('#openCoachInfo')
    openCoachInfo.insertAdjacentHTML("beforeend", `<p class="openCoachName">${name}</p>`)
    position.length > 0
        ? openCoachInfo.insertAdjacentHTML("beforeend", `<p class="openCoachPosition"><b>${position}</b></p>`)
        : ''
    openCoachInfo.insertAdjacentHTML("beforeend", `<p class="openCoachDescription">${description}</p>`) // описание тренера
    openCoachInfo.insertAdjacentHTML("beforeend", `<a href="#popup:coachForm" class="openCoachButton">Записаться</a>`)

} // настрйока поп-апов для тренера через локалы
const toggleBodyScroll = (e) => {
    const body = document.querySelector('body')
    if (e && e.key && e.key === 'Escape') {
        document.getElementById('openCoach').remove()
        window.removeEventListener('keydown', toggleBodyScroll)
        body.style.overflow = 'auto'
    }
    else if (body.style.overflow !== 'hidden') {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }
}

//
const coaches = await getCoaches()
coaches.items.forEach(coach => {
    if (coach.values['c-M1CNT28j4g'] === false) return

    // сохраняем в локал тренера для всплывающих по openCoach()
    // localStorage.setItem(coach.name, JSON.stringify(coach))

    // изображение для фона блоков. Берется из <не определен>
    const VO_AVA = coaches.items[0].values['c-E-7fWZi-45'][0].url

    // создаем карточку тренера
    if (coach.values['c-o77_XIfN5Q'] === '```Руководители школы```') {
        SECTION_MANAGERS.insertAdjacentHTML('beforeend', `<div id="${coach.id}" data-name="${coach.name}" class="coach-card" style="animation: showUp .${coach.index}s ease forwards;background-image: url('${VO_AVA}')" >
        <div class="coach-info">
        <p class="coach-name">${coach.name}</p></div></div>`)
        if (TABLE_MANAGERS.querySelector('.loadingBlock')) {TABLE_MANAGERS.querySelector('.loadingBlock').remove()}
    } else {
        SECTION_COACHES.insertAdjacentHTML('beforeend', `<div id="${coach.id}" data-name="${coach.name}" class="coach-card" style="animation: showUp .${coach.index}s ease forwards;background-image: url('${VO_AVA}')" >
        <div class="coach-info">
        <p class="coach-name">${coach.name}</p></div></div>`)
        if (TABLE_COACHES.querySelector('.loadingBlock')) {TABLE_COACHES.querySelector('.loadingBlock').remove()}
    }

    const COACH_BLOCK = document.getElementById(coach.id)
    const COACH_BLOCK_INFO = COACH_BLOCK.querySelector('.coach-info')
    COACH_BLOCK.addEventListener('click', () => {
        setTimeout(() => {
            openCoach(COACH_BLOCK)
        }, 50)
    })

    // добавляем список арен из ячейки values['c-qE3gXn_rxM'][1].name
    // if (coach.values['c-qE3gXn_rxM']) {
    //     const ARENAS_LIST = coach.values['c-qE3gXn_rxM']
    //     COACH_BLOCK_INFO.insertAdjacentHTML('beforeend', `<div class="coach-arena-list"><p><b>Арены:</b></p></div>`)
    //     const COACH_ARENAS_DIV = COACH_BLOCK_INFO.querySelector('.coach-arena-list')
    //     for (let i = 0; i < ARENAS_LIST.length; i++) {
    //         COACH_ARENAS_DIV.insertAdjacentHTML('beforeend', `<div>${ARENAS_LIST[i].name}</div>`)
    //     }
    // }

    // вставляем картинку из values['c-E-7fWZi-45'][0].url
    if (coach.values['c-E-7fWZi-45']) {
        const COACH_AVATAR = coach.values['c-E-7fWZi-45'][0].url
        COACH_BLOCK.insertAdjacentHTML('afterbegin', `<div class="coach-avatar" style="background-image: url('${COACH_AVATAR}')"></div>`)
    } else COACH_BLOCK.insertAdjacentHTML('afterbegin', `<div class="coach-avatar"></div>`)

    // добавляем описание
    if (coach.values['c-cgUmZq1LTo']) {
        const COACH_DESCR = coach.values['c-cgUmZq1LTo']
        COACH_BLOCK_INFO.insertAdjacentHTML('beforeend', `<div class="coach-description"><p>${COACH_DESCR}</p></div>`)
    }

})