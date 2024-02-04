function hxChechLang() {
    if (navigator.language.includes('ru') && !navigator.language.includes('en'))
        location = '/ru'
    if (navigator.language.includes('en') && !navigator.language.includes('ru'))
        location = '/'
}
// hxChechLang()