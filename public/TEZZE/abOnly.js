let linkHrefNow = document.location.href
let ranum = getRandomInt(2);
let cat = localStorage.getItem('_holyxey_ab');
let findEnd = linkHrefNow.indexOf('?')
let beforeUrl = linkHrefNow.substring(0, findEnd)
let afterUrl = linkHrefNow.substring(findEnd)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function goab() {
    if (!linkHrefNow.includes('?')) {
        document.location.href = (document.location.href + '/ab')
    } else {
        document.location.href = (beforeUrl + '/ab' + afterUrl)
    }
}

if (cat === 'b') {
    goab()
} else {
    if (!cat && ranum > 0) {
        localStorage.setItem('_holyxey_ab', 'b');
        goab()
    } else {
        localStorage.setItem('_holyxey_ab', 'a');
    }
}
