let step = document.getElementsByClassName('step');
let stepS = document.getElementById('dev-steps');

//
for (let i = 0; i < step.length; i++) {
    step[i].setAttribute('step-n', (1 + i));
    step[i].addEventListener('mouseenter', function() { stepHover(this); });
    step[i].addEventListener('mouseleave', function() { stepLeave(this); });
    // step[i].setAttribute('onmouseenter', 'stepHover(this)');
    // step[i].setAttribute('onmouseleave', 'stepLeave(this)');
}
function stepHover(el) {
    el.classList.add('step-hover');
    // let n = el.getAttribute('step-n');
    // if (n < step.length) {
    //     let nxt = stepS.querySelector('[step-n="' + (parseInt(n) + 1) + '"]');
    //     nxt.classList.add('step-hover-sec');
    // }
}
function stepLeave(el) {
    el.classList.remove('step-hover')
    // let n = el.getAttribute('step-n');
    // if (n < step.length) {
    //     let nxt = stepS.querySelector('[step-n="' + (parseInt(n) + 1) + '"]');
    //     nxt.classList.remove('step-hover-sec');
    // }
}