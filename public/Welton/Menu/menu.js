const menuIs = 'Барная карта'
const weltonMenu = {
    link: '59225ed1-a107-4d1c-9503-73612f028692',
    page: 'k0xsluIpRm',
}
const weltonRender = async () => {
}

const getInfo = async (link) => {
    const response = await fetch(link, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${weltonMenu.link}`},
    })
    return response.json()
}

let tables = []

document.addEventListener("DOMContentLoaded", async () => {
    getInfo('https://coda.io/apis/v1/docs/k0xsluIpRm/tables')
        .then(res => {
            for (let table in res.items) {
                tables.push(res.items[table]);
                getInfo(res.items[table].href)
                document.getElementById('weltonMenu').insertAdjacentHTML('beforeend',
                    `<section id="${res.items[table].id}">
                        <p class="menuCategoryTitle">${res.items[table].name}</p>
                        <section class="menuCategoryColumns"></section>
                        <section class="menuPositionList"></section>
                    </section>`
                )
            }
        }) // пушим таблицы в tables и рендерим разделы меню без позиций
        .then(async () => {
            for (let i = 0; i < tables.length; i++) {
                await getInfo(tables[i].href + "/columns").then(res => {
                    tables[i].WeltonColumns = res.items
                    for (let j = 0; j < tables[i].WeltonColumns.length; j++) {
                        if (tables[i].WeltonColumns[j].format.type !== 'checkbox') {
                            const columnSector = document.getElementById(`${tables[i].id}`).querySelector('.menuCategoryColumns')
                            columnSector.insertAdjacentHTML('beforeend',
                                `<p>${tables[i].WeltonColumns[j].name}</p>`)
                        }
                    }
                })
                await getInfo(tables[i].href + "/rows").then(res => {
                    tables[i].WeltonRows = res.items
                    for (let j = 0; j < tables[i].WeltonRows.length; j++) {
                        const columnSector = document.getElementById(`${tables[i].id}`).querySelector('.menuPositionList')
                        columnSector.insertAdjacentHTML('beforeend',
                            `<div class="menuPosition" style="order: ${tables[i].WeltonRows[j].index}">
                                ${tables[i].WeltonRows[j].values['c-nX37Ggh_BR']
                                    ? `<p class="menuPositionName">${tables[i].WeltonRows[j].values['c-nX37Ggh_BR']}</p>`
                                    : '<p class="menuPositionName"></p>'
                                }
                                ${tables[i].WeltonRows[j].values['c-MBWD6JbN-h']
                                    ? `<p class="menuPositionName">${tables[i].WeltonRows[j].values['c-MBWD6JbN-h'] + 'p.'}</p>`
                                    : '<p class="menuPositionName"></p>'
                                }
                                ${tables[i].WeltonRows[j].values['c-Ww2xO_wOM-']
                                    ? `<p class="menuPositionName">${tables[i].WeltonRows[j].values['c-Ww2xO_wOM-'] + 'p.'}</p>`
                                    : '<p class="menuPositionName"></p>'
                                }
                            </div>
                            `)
                    }
                })
            }
        }) // пушим в таблицы и рендерим колонки и строки

        .then(weltonRender)
})