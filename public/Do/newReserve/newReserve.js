const doLang = {
    check: () => {
        return localStorage.getItem("doMenuLanguage");
    },
    set: () => {
        const selectContact = document.querySelector('select[name="Контакт"]')
        const selectCounter = document.querySelector('select[name="Человек"]')

        const name = document.getElementById('field-title_1713899430621') // Как вас зовут?
        const method = document.getElementById('field-title_1713899464422') // Как лучше связаться?
        const counter = document.getElementById('field-title_1713899694268') // Сколько вас?
        const time = document.getElementById('field-title_1713899637660') // На какое время?
        const day = document.getElementById('field-title_1713900744188') // В какой день?

        if (!doLang.check()) {
            if (navigator.language.includes('ru')) {
                localStorage.setItem("doMenuLanguage", 'rus')
                doLang.set()
            } else {
                localStorage.setItem("doMenuLanguage", 'eng')
                doLang.set()
            }
        } else if (doLang.check() !== 'rus') {
            const contactOptions = selectContact.querySelectorAll('option')
            const counterOptions = selectCounter.querySelectorAll('option')
            contactOptions.forEach( option => {
                if (option.textContent === 'Выберите') {
                    option.textContent = 'Select'
                } else
                if (option.textContent === 'По телефону') {
                    option.textContent = 'Phone'
                } else
                if (option.textContent === 'Telegram') {
                    option.addEventListener("click", () => {
                        document.querySelector('input[name="TG"]').textContent = '@'
                    })
                }
            })
            counterOptions.forEach(option => {
                if (option.textContent === 'Выберите количество') {
                    option.textContent = 'Number of guests'
                }
            })
            name.textContent = 'Your name'
            method.textContent = 'Preferred contact matter'
            counter.textContent = 'Number of guests'
            time.textContent = 'Time'
            day.textContent = 'Day'
        } else {
            const contactOptions = selectContact.querySelectorAll('option')
            const counterOptions = selectCounter.querySelectorAll('option')
                contactOptions.forEach( option => {
                if (option.textContent === 'Select') {
                    option.textContent = 'Выберите'
                } else
                if (option.textContent === 'Phone') {
                    option.textContent = 'По телефону'
                } else
                if (option.textContent === 'Telegram') {
                    option.addEventListener("click", () => {
                        document.querySelector('input[name="TG"]').textContent = '@'
                    })
                }
            })
            counterOptions.forEach(option => {
                if (option.textContent === 'Number of guests') {
                    option.textContent = 'Выберите количество'
                }
            })
            name.textContent = 'Как вас зовут?'
            method.textContent = 'Как лучше связаться?'
            counter.textContent = 'Сколько вас?'
            time.textContent = 'На какое время?'
            day.textContent = 'В какой день?'
        }
    },
    change: () => {
        if (doLang.check() !== 'rus') {
            localStorage.setItem("doMenuLanguage", 'rus')
            doLang.set()
        } else {
            localStorage.setItem("doMenuLanguage", 'eng')
            doLang.set()
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    doLang.set()
})