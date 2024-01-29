// ***
// Номера шагов разработки
let stepNumber = document.getElementsByClassName('hx-at-step-number')
for (let i = 0; i < stepNumber.length; i++)
    stepNumber[i].innerHTML = ('0' + (i + 1));

// ***
//Прозрачность ненаведенных текстов этапов
let step = document.getElementsByClassName('hx-at-step')
for (let i = 0; i < step.length; i++) {
    step[i].setAttribute('onmouseenter', 'stepHovered(this)')
    step[i].setAttribute('onmouseleave', 'stepOnMouseLeave()')
}
function stepHovered(el) {
    for (let i = 0; i < step.length; i++) {
        if (el !== step[i]) {
            let q = stepGetIn(step[i]);
            q.style.opacity = '0.5'
        } else {
            let q = stepGetIn(step[i]);
            q.style.opacity = '1'
        }
    }
}
function stepGetIn(el) {
    let q = el.getElementsByClassName('hx-at-step-in');
    return q[0];
}
function stepOnMouseLeave(el) {
    for (let i = 0; i < step.length; i++) {
        let q = stepGetIn(step[i]);
        q.style.opacity = '1'
    }
}