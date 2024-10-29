(() => {
    const node = document.querySelector('#forYou > article')
    const program = [
        {
            title: '&#x1F4CC; 14:00 — 15:00: <br/>мастер-классы для ребят 6-7 классов:',
            line: [
                'Разработка игр на Unity: познакомимся с интерфейсом программы, создадим игровой уровень и управляемого персонажа.',
                'Мастер-класс по Python: напишем калькулятор, которым можно пользоваться.',
            ]
        },
        {
            title: '&#x1F4CC; 15:00 — 16:00: <br/>мастер-классы для ребят 8-11 классов:',
            line: [
                'Информационные технологии: придумаем и реализуем приложение для realtime-опросов с помощью React и Express.',
                'Дизайн: разработаем логотип с помощью нейросетей, создадим визитку и добавим её на мокап в Photoshop.',
                'Разработка игр: создадим 3D-модели игровой локации с маяком, настроим материалы и освещение.',
            ]
        }]
    for (const prog of program) {
        const bullets = () => {
            let b = ''
            for (const bul of prog.line)
                b += `<li>${bul}<span class="after">&#x1F449;</span></li> `
            return b
        }

        node.insertAdjacentHTML('beforeend', `
<ul title="${prog.title}">
<h4>${prog.title}</h4>
    ${bullets()}
</ul>`)
    }
})()

