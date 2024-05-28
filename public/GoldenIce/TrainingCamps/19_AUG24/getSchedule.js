const schedule = {
    today: function (toNumber = false) {
        if (!toNumber) return Date().split(' ')[2]
        return Number(Date().split(' ')[2])
    },
    scale: function () {
        const width = window.innerWidth
        const table = document.getElementById('popupCampsTable')
        let scale = 1
        while (table.clientWidth > width) {
            scale = Number(scale) -+ 0.1
            table.style.scale = scale.toString();
            scale = Number(scale)
        }
    },

    scheduleButtons: function () {
        let buttons = document.querySelectorAll('[data-id]')
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                this.scheduleButtonsClick(event)
            })

            const hasSchedule = function () {
                const id = button.getAttribute('data-id')
                const s = schedule.scheduleFindArena(id).schedule
                if (s) {
                    return true;
                }
            }
            if (hasSchedule()) {
                button.style.opacity = '1'
                button.classList.contains('arena-schedule') ? button.textContent = 'Расписание' : '';
            }
        })
    },
    scheduleButtonsClick: function (event) {
        const id = event.target.getAttribute("data-id")
        this.scheduleScheduleRender({...this.scheduleFindArena(id)})
    },
    scheduleScheduleRender: function (arena) {
        if (!arena.schedule)
            return;

        const scheduleList = arena.schedule
        const arenaID = arena.id
        document.body.insertAdjacentHTML('beforeend',
            `<article id="popupCamps"><div id="scheduleVariants"></div></article>`);

        const popup = document.getElementById('popupCamps')
        const scheduleVariants = document.getElementById('scheduleVariants')
        let variantID = 0;
        let timeOutAnimation = 0;
        scheduleList.forEach(schedule => {
            const textContent = schedule[0][1]
            scheduleVariants.insertAdjacentHTML("beforeend", `<div data-variant="${variantID}" data-arena="${arena.id}" class="variant" style="animation: showPopupSchedule .5s ${timeOutAnimation}s ease-out forwards;">${textContent}</div>`)
            variantID++
            timeOutAnimation += 0.04
        })
        document.querySelectorAll('.variant').forEach(variant => {
            variant.addEventListener('click', (e) => {
                const dataArena = e.target.getAttribute('data-arena')
                const dataVariant = e.target.getAttribute('data-variant')
                this.getVariantSchedule(dataArena, dataVariant)
            })
        })

        document.body.style.cssText = 'overflow: hidden'
    },
    scheduleTableClose: function () {
        document.body.style.overflow = 'auto'
        const popup = document.getElementById('popupCamps')
        const first = popup.firstChild
        first.style.animation = 'hidePopupSchedule .2s ease-out'
        setTimeout(() => {
            popup.remove()
        },200)
    },
    scheduleFindArena: function (id) {
        return this.arenas.find((element) => element.id === id)
    },

    getVariantSchedule: function (arena, dataVariant) {
        const objArena = this.scheduleFindArena(arena)
        const objVariant = objArena.schedule[dataVariant]
        const scheduleVariants = document.getElementById('scheduleVariants')
        const popup = document.getElementById('popupCamps')

        scheduleVariants.remove()
        popup.insertAdjacentHTML("beforeend",
            `<table id="popupCampsTable"></table>`)

        const variantTable = document.getElementById('popupCampsTable')
        let timeOutAnimation = 0;
        objVariant.forEach((variant, index) => {
            const Day = variant[0]
            let Event = variant[1]
            const Time = variant[2]
            variantTable.insertAdjacentHTML('beforeend',
                `<tr style="animation: showPopupSchedule .5s ${timeOutAnimation}s ease-out forwards;">
                ${index === 0 ? Event = '' : ''}
                <td class="popDate">${Day}</td>
                <td class="popTitle">${Event}</td>
                ${Time === 'Закрыть' ? `<td class="popTime closeButton" onclick="schedule.scheduleTableClose()" >${Time}</td>` : `<td class="popTime">${Time}</td>`}
                </tr>`)
            timeOutAnimation += 0.03;
        })

    },
    arenas: [
        {
            id: "chance",
            name: "Шанс",
            month: ".08",
            schedule: [
                [
                    ['','Новички<br>(1+1 час днем)','Закрыть'],
                    ['19.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['20.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['21.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['22.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['23.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['24.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['27.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['28.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['29.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['30.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                    ['31.08', 'Лёд, зал', '13:00-14:00 зал<br>14:15-15:15 лёд'],
                ],
                [
                    ['','Юношеские и спортивные разряды<br>(1,5+1,5 часа днем)','Закрыть'],
                    ['19.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['20.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['21.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['22.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['23.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['24.08', '', 'Выходной'],
                    ['25.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['26.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['27.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['28.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['29.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['30.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                    ['31.08', 'Лёд, зал', '11:45-12:15 зал<br>12:30-14:00 лёд<br>14:15-15:15 зал'],
                ],
            ]
        },
        {
            id: "border",
            name: "Рубеж",
            month: ".08",
            schedule: [
                [
                    ['','Юношеские и спортивные разряды (вечер)','Закрыть'],
                    ['19.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['20.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['21.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['22.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['23.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['24.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['27.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['28.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['29.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['30.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                    ['31.08', 'Лёд, зал', '14:00-15:30 лед<br>15:45-17:15 зал'],
                ],
                [
                    ['','Новички и юный фигурист<br>(1,5+1,5 часа утром)','Закрыть'],
                    ['19.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['20.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['21.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['22.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['23.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['24.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['27.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['28.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['29.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['30.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                    ['31.08', 'Лёд, зал', '08:45-10:15 зал<br>10:30-12:00 лёд'],
                ],
                [
                    ['','Новички и юный фигурист<br>(1,5+1,5 часа днём)','Закрыть'],
                    ['19.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['20.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['21.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['22.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['23.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['24.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['27.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['28.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['29.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['30.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                    ['31.08', 'Лёд, зал', '12:15-13:45 лед<br>14:00-15:30 зал'],
                ],
                [
                    ['','Новички<br>(1+1 час утром)','Закрыть'],
                    ['19.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['20.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['21.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['22.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['23.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['24.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['27.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['28.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['29.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['30.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                    ['31.08', 'Лёд, зал', '09:15-10:15 лед<br>10:30-11:30 зал'],
                ],
                [
                    ['','Новички<br>(1+1 час днём)','Закрыть'],
                    ['19.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['20.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['21.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['22.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['23.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['24.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['27.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['28.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['29.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['30.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                    ['31.08', 'Лёд, зал', '12:45-13:15 лед<br>14:00-15:00 зал'],
                ]
            ] // table
        },
        {
            id: "iceberg",
            name: "Айсберг",
            month: ".08",
        },
        {
            id: "redstar",
            name: "Красная звезда",
            month: ".08",
            schedule: [
                [
                    ['','Юношеские и спортивные разряды<br>(1,5+1,5 часа утром)','Закрыть'],
                    ['19.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['20.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['21.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['22.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['23.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['24.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['25.08', '', 'Выходной'],
                    ['26.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['27.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['28.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['29.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['30.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                    ['31.08', 'Лёд, зал', '09:30-10:15 зал<br>10:30-12:00 лёд<br>12:15-13:00 зал'],
                ]
            ]
        },
    ]
}
const arenaBullets = {
    arenaList: document.querySelectorAll('.arena-item'),
    checkActiveBullets: function () {
        const list = this.arenaList
        const arenaBullet = document.querySelectorAll('.arenaBullet')
        const blockList = list[0].parentNode;

        setTimeout(()=>{
            list.forEach((element, index) => {
                if (element.getBoundingClientRect().left + 10 <= blockList.getBoundingClientRect().left
                    || element.getBoundingClientRect().right - 10 >= blockList.getBoundingClientRect().right) {
                    arenaBullet[index].style.opacity = '1'
                    arenaBullet[index].style.scale = '1.2'
                } else {
                    arenaBullet[index].style.opacity = '.4'
                    arenaBullet[index].style.scale = '.8'
                }
            })
        },700)
    },
    clickOnBullet: function (count) {
        const list = this.arenaList
        list[count].scrollIntoView({block: 'center'})
        this.checkActiveBullets()
    },
    renderBullets: function () {
        const list = this.arenaList
        const arenaListBullets = document.getElementById('arenaListBullets')
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            arenaListBullets.insertAdjacentHTML("beforeend", `<div onclick="arenaBullets.clickOnBullet(${count})" data-counter="${count}" class="arenaBullet"></div>`)
            count++;
        }
        list.forEach((element, index) => {
            element.addEventListener('touchstart', (e) => {
                this.checkActiveBullets()
            })
            element.addEventListener('mouseenter', (e) => {
                this.checkActiveBullets()
            })
        })
        this.checkActiveBullets()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    schedule.scheduleButtons()
    arenaBullets.renderBullets()
    const linkTags = document.getElementsByTagName('link');
    for (let i = 0; i < linkTags.length; i++) {
        if (linkTags[i].getAttribute('href') === 'https://holyxey.github.io/public/GoldenIce/tableStyles.css') {
            linkTags[i].parentNode.removeChild(linkTags[i]);
        }
    } // Удалить стили таблиц под другие страницы
})
