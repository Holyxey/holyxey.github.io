let limbTabs = document.getElementsByClassName('hx-limb-tab')
let limbTabsIn = document.getElementsByClassName('hx-limb-tab-in')

for (let i = 0; i < limbTabsIn.length; i++)
    limbTabsIn[i].style.display = 'none';

for (let i = 0; i < limbTabs.length; i++)
    limbTabs[i].setAttribute('onclick', 'limbTabsClick(this)')

for (let i = 0; i < limbTabsIn.length; i++) {
    limbTabsIn[i].setAttribute('counter', (1 + i))
    limbTabsIn[i].classList.add('anishow')
}
for (let i = 0; i < limbTabs.length; i++)
    limbTabs[i].setAttribute('counter', (1 + i))

function limbTabsClick(el) {
    let counter = getCounter(el);
    if (el.classList.contains('hx-limb-tab-active')) {}
    else {
        for (let i = 0; i < limbTabs.length; i++) {
            limbTabs[i].classList.remove('hx-limb-tab-active');
            el.classList.add('hx-limb-tab-active')
        }
    }
    for (let i = 0; i < limbTabsIn.length; i++) {
        if (counter === (limbTabsIn[i].getAttribute('counter'))) {
            limbTabsIn[i].style.display = '';
        } else {
            limbTabsIn[i].style.display = 'none';
        }
    }
}

function getCounter(el) {
    let counter = el.getAttribute('counter');
    return counter;
}


// 
// Изначальное положение вкладок

function presentTabs() {
    let active = 0;
    for (let i = 0; i < limbTabs.length; i++) {
        if (limbTabs[i].classList.contains('hx-limb-tab-active')) {
            active = getCounter(limbTabs[i])
            for (let j = 0; j < limbTabsIn.length; j++) {
                if (getCounter(limbTabsIn[j]) === active) {
                    limbTabsIn[j].style.display = ''
                }
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', presentTabs)