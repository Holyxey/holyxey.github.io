function hxChechLang() {
    if (navigator.language.includes('ru'))
        location = '/ru'
    if (navigator.language.includes('en'))
        location = '/'
}
hxChechLang()