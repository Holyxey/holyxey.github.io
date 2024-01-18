let h_categoryCounter = document.getElementsByClassName('filter_button');
let h_allCategory = document.getElementById('h_all');
let h_filterActive = document.getElementsByClassName('filter_active');
let h_element = document.getElementsByClassName('h_element');

for (let i = 0; i < h_categoryCounter.length; i++) {
    let cgs = document.getElementsByClassName('holyxeyCategory_' + (i + 1));
    for (let j = 0; j < cgs.length; j++) {
        cgs[j].classList.add('h_element');
    }
}
// подсчет всех элементов


for (let i = 0; i < h_categoryCounter.length; i++) {
    h_categoryCounter[i].setAttribute('onclick', 'h_buttonClick(this)');
    h_allCategory.setAttribute('onclick', 'h_buttonClick(this)');
}

function h_buttonClick(element) {
    if (element.id === 'h_all') {
        for (let i = 0; i < h_categoryCounter.length; i++) {
          h_categoryCounter[i].classList.add('filter_active');
        }
    } else {
        element.classList.add('filter_active');
        for (let i = 0; i < h_categoryCounter.length; i++) {
            if (h_categoryCounter[i] !== element) {
                h_categoryCounter[i].classList.remove('filter_active');
                h_allCategory.classList.remove('filter_active');
            }
        }
    }
    h_checkActive();
}


// гл. элемент
function h_checkActive() {
    for (let i = 0; i < h_categoryCounter.length; i++) {
        let cgs = document.getElementsByClassName('holyxeyCategory_' + (i + 1));

        if (h_categoryCounter[i].classList.contains('filter_active')) {
            for (let j = 0; j < cgs.length; j++) {
                // h_showElement(cgs[j]);
                setTimeout(h_showElement, (20 * (j * 2)), cgs[j]);
                setTimeout(h_showDisplay, (20 * (j * 2)), cgs[j]);
                // h_showDisplay(cgs[j]);
            }
        }
        else {
            for (let j = 0; j < cgs.length; j++) {
                h_hideElement(cgs[j]);
                // setTimeout(h_hideElement, (20 * (j * 2)), cgs[j]);
                setTimeout(h_hideDisplay, (20 * (j * 2)), cgs[j]);
                // h_hideDisplay(cgs[j]);
            }
        }
    }
}


function h_showElement(element) {
    element.classList.add('h_showElement');
    element.classList.remove('h_hideElement');
} // keyframe show
function h_hideElement(element) {
    element.classList.add('h_hideElement');
    element.classList.remove('h_showElement');
} // keyframe hide
function h_showDisplay(element) {
    element.style.display = '';
} // display ''
function h_hideDisplay(element) {
    element.style.display = 'none';
} // display 'none'
if (h_allCategory !== '' && h_allCategory) {
    for (let i = 0; i < h_element.length; i++) {
        h_showElement(h_element[i]);
        setTimeout(h_showDisplay, (20 * (i * 2)), h_element[i]);
    }
        console.log('"Все категории" - присутствует');
} else {
    h_checkActive();
    console.log('"Все категории" - отсутствует');
}


console.log('Всего найдено категорий: ' + h_categoryCounter.length)
if (h_filterActive.length > 0)
    console.log('Есть активные фильтры по умолчанию');
// Все стартовые логи
console.log('_____ t.me/holyxey');