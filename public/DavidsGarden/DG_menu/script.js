'use strict';
const tabsMenu = (pasteAfterRecId) => {
    let tabsByGDocs = [
        {
            language: 'ქართული',
            preview: 'https://drive.google.com/file/d/1Y3YUcjBbBUHVfqixKNK2XzbOu2jqrQNP/preview'
        },
        {
            language: 'English',
            preview: 'https://drive.google.com/file/d/1Y3YUcjBbBUHVfqixKNK2XzbOu2jqrQNP/preview'
        },
        {
            language: 'Русский',
            preview: 'https://drive.google.com/file/d/1M4n4h98E9dcFMlabwFXHeKoaGKkL9Rb5/preview'
        }
    ]
    try {
        !document.getElementById('tabsMenu')
            ? document.getElementById(pasteAfterRecId).insertAdjacentHTML('afterend', '<section id="tabsMenu"> </section>') : null

        const node = document.getElementById('tabsMenu')

        node.insertAdjacentHTML('beforeend', '<h3>Menu</h3>')
        node.insertAdjacentHTML('beforeend', '<section id="tabs"></section>')
        node.insertAdjacentHTML('beforeend', '<section id="menus"></section>')

        tabsByGDocs.forEach(doc => {
            const tabsNode = node.querySelector('#tabs')
            const menusNode = node.querySelector('#menus')
            tabsNode.insertAdjacentHTML('beforeend', `<button data-iframe="${doc.language}">${doc.language}</button>`)
            menusNode.insertAdjacentHTML('beforeend', `<iframe data-iframe="${doc.language}" src="${doc.preview}"></iframe>`)
        })

        const frames = node.querySelectorAll('iframe[data-iframe]')
        const buttons = node.querySelectorAll('button[data-iframe]')
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const chosen = e.target.getAttribute('data-iframe')
                frames.forEach(frame => {
                    frame.getAttribute('data-iframe') === chosen
                        ? frame.classList.add('chosenFrame')
                        : frame.classList.remove('chosenFrame')
                })
                buttons.forEach(button => {
                    button.getAttribute('data-iframe') === chosen
                        ? button.classList.add('selected')
                        : button.classList.remove('selected')
                })
            })
        })

        buttons[0]?.click()
    }
    catch (e) {
        console.error('Проблема с рендером меню: \n', e)
    }
}

tabsMenu('rec812454980')