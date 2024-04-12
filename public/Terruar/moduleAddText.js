const renameIt = setInterval(() => {
    if (document.querySelector('a[href="https://bronirui-online.ru/module?utm_source=hotel&utm_medium=mod"]')) {
        clearInterval(renameIt)
        let q = document.querySelectorAll('a[href="https://bronirui-online.ru/module?utm_source=hotel&utm_medium=mod"]')
        q.forEach((el)=> {
            el.textContent = 'В выходные дни и праздники бронирование от 2 дней'
            el.href = '?znms_widget_open=5428'
        })
        q.style.cssText = 'line-height: 1'
    } else
        setTimeout(()=>{
            clearInterval(renameIt)
        }, 5000)
}, 700)