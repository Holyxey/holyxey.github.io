let withShadow = document.querySelectorAll('.contactShadow')

withShadow.forEach((el) => {
    let parent = el.parentNode
    let back = getComputedStyle(parent).backgroundColor
    let numbers = back.split('rgb(').filter(n => n).toString().split(')').filter(n => n).toString().split(',')
    let firstNumber = Number(numbers[0])
    let newFirstNumber
    let tone = 15;
    if (firstNumber > tone) {
        newFirstNumber = (firstNumber - tone)
    }
    else {
        for (let i = tone; i > firstNumber; i--) {
            newFirstNumber = firstNumber - i
        }
    }
    let secondNumber = numbers.splice(1, 1).toString();
    let thirdNumber = numbers.splice(1, 1).toString();
    let newBackColor = 'rgb(' + newFirstNumber + ',' + secondNumber + ',' + thirdNumber + ')';
    el.style.cssText += `box-shadow: 0 15px 25px ${newBackColor}`
})

// const headerHeightFix = () => {
//     let q = setInterval(() => {
//         if (document.querySelector('header').clientHeight < document.querySelector('header .t396__artboard').clientHeight) {
//             document.querySelector('header').style.cssText +=
//                 `
//                 transition: height .3s ease-in-out;
//                 height: ${document.querySelector('header .t396__artboard').clientHeight}px !important;
//                 `
//         } else {
//             clearInterval(q)
//         }
//     }, 500)
// }
// setTimeout(headerHeightFix, 1500)

document.querySelector('header .t396__artboard').onload = () => {
    let q = setInterval(() => {
        if (document.querySelector('header').clientHeight < document.querySelector('header .t396__artboard').clientHeight) {
            document.querySelector('header').style.cssText +=
                `
        transition: height .3s ease-in-out;
        height: ${document.querySelector('header .t396__artboard').clientHeight}px !important;
        `
        } else {
            clearInterval(q)
        }
    }, 500)
}