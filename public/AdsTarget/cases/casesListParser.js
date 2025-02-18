const casesNodes = document.querySelectorAll('.hx-at-allcases-item')
const cases = []

function makeAList() {
    casesNodes.forEach(node => {
        const title = node.querySelector('.hx-at-case-h').textContent
        const category = node.querySelector('.hx-at-case-category').textContent
        const caseLink = 'https://adstarget.ru/' + node.querySelector('.hx-at-case-btn')?.href.split('/').pop().replace('?utm_source=AdsTarget', '')
        const linkToWeb = node.querySelector('.hx-at-case-btn').href.replace('?utm_source=AdsTarget', '')

        if (caseLink !== 'https://adstarget.ru/') {
            cases.push({
                'Заголовок': title,
                'Категория': category,
                'Кейс на сайте': caseLink,
                'Результат': '---',
            })
        }
        else {
            cases.push({
                'Заголовок': title,
                'Категория': category,
                'Кейс на сайте': '---',
                'Результат': linkToWeb,
            })
        }
        try {
        }
        catch {
            console.log('Ошибка с ' + title)
        }
    })
    console.log(cases)
}

makeAList()
