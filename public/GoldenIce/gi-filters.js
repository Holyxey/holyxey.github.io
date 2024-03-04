let giFilters = document.getElementsByClassName('gi-filter');
//
for (let i = 0; i < giFilters.length; i++) {
    giFilters[i].setAttribute('onclick', 'giClick(this)')
    giFilters[i].setAttribute('gi-button', ('gi-' + i))
}


//
function giClick(el) {
    giClickAnim(el);

    if (el.classList.contains('gi-active')) {
    } else {
        for (let i = 0; i < giFilters.length; i++) {
            let objects = document.getElementsByClassName('gi-' + (i + 1))
            for (let j = 0; j < objects.length; j++) {
                let qwe = objects[j];
                giHide(qwe);
            }
        }
        for (let i = 0; i < giFilters.length; i++) {
            giFilters[i].classList.remove('gi-active');
        }
        el.classList.add('gi-active');
    }

    giCheck();
}
function giCheck(el) {
    if (el) {

    } else {
        // изначальная проверка видимости

        for (let i = 0; i < giFilters.length; i++) {
            let objects = document.getElementsByClassName('gi-' + (i + 1))
            if (giFilters[i].classList.contains('gi-active')) {
                for (let j = 0; j < objects.length; j++) {
                    let qwe = objects[j];
                    giShow(qwe);
                }
            } else  {
                for (let j = 0; j < objects.length; j++) {
                    let qwe = objects[j];
                    giHide(qwe);
                }
            }
        }
    }
}


//
function giClickAnim(el) {
    el.style.animation = ('clicked .3s');
    setTimeout(function () {
        el.style.animation = ('');
    }, 300)
}
function giHide(el) {
    el.style.display = 'none';
}
function giShow(el) {
    el.style.display = '';
}

//
giCheck();

// Прячем картинку, если высота таблицы меньше 500px
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#golden-horizontal').getBoundingClientRect().height < 500) {
        document.querySelector('.golden-h-img').style.opacity = '0';
    }

})