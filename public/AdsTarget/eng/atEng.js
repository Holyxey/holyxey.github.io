if (location.href.includes('/eng'))
    localStorage.setItem('_atLang', 'eng')

if (document.location.href.includes('adstarget-ru')) {
    setTimeout(()=>{
        document.querySelectorAll('a').forEach((el)=>{
            if (el.getAttribute('href').includes('#popup:menu') || el.getAttribute('href').includes('#popup:cover'))
            el.href = 'mailto:mail@adstarget.ru'
        })
    },500)
}