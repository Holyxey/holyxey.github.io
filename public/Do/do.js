const removeTilda = setInterval(() => {
    if (document.querySelector('.t-tildalabel')) {
        document.querySelector('.t-tildalabel').querySelector('img').setAttribute('alt', 'Made by Holyxey.com on Tilda.cc')
        console.log(document.querySelector('.t-tildalabel').querySelector('img').getAttribute('alt'))
        document.querySelectorAll('.t-tildalabel').forEach((el) => {
            el.remove()
        })
    }
    
}, 700)
if (document.location.href.includes('tproduct')) {
    document.location.href = '/menu'
}