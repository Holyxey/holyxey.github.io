const removeTilda = setInterval(() => {
    if (document.querySelector('#tildacopy')) {
        document.querySelector('#tildacopy').querySelector('img').setAttribute('alt', 'Made by Holyxey.com on Tilda.cc')
        console.log(document.querySelector('#tildacopy').querySelector('img').getAttribute('alt'))
        document.querySelector('#tildacopy').remove()
        clearInterval(removeTilda)
    }
}, 100)
if (document.location.href.includes('tproduct')) {
    document.location.href = '/menu'
}