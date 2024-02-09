let atBreadReferrer;

function setBread(el) {
    if (document.referrer && (document.referrer !== document.location)) {
        setTimeout(alert(document.referrer), 1000)
    }
}
setBread(atBreadReferrer)



if (!localStorage.getItem('atBread')) {
    localStorage.setItem('atBread', document.referrer)
} else {
    for (let i = 0; i < 1; i++) {
        console.log('atBread is: ' + localStorage.getItem('atBread'))
        localStorage.setItem('atBread', document.referrer)
        console.log('** now atBread is: ' + localStorage.getItem('atBread'))
    }
}