let revBlock;
let revItem;
let revMaxItemOnScr = 3;

document.addEventListener("DOMContentLoaded", revFunc)

function revFunc() {
    revBlock = document.querySelector('.hx-at-review-block')
    revItem = document.querySelectorAll('.hx-at-review')
    for (let i = 0; i < revItem.length; i++) {
        revItem[i].setAttribute('review', (i + 1))
    }
    verStart();
}

function verStart() {
    let wBlock = getWidth(revBlock);
    let gapBlock = (wBlock / 20);
    let gapSum = (gapBlock * (revMaxItemOnScr - 1));
    let wItem = ((wBlock - gapSum) / revMaxItemOnScr);
    // alert(wItem)

    revBlock.style.gap = (gapBlock + 'px');

    for (let i = 1; i <= revMaxItemOnScr; i++) {
        let element = document.querySelector('[review="'+ i + '"]');
        console.log(element)
    }
}