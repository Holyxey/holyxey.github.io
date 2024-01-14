
let findingCategories = document.getElementsByClassName('filter_button');
// Определили ко-во категорий для фильтрации



for (let i = 0; i < findingCategories.length; i++)
    findingCategories[i].setAttribute('onclick', 'onlyOneFilter(this)');
// Добавляем onClick для всех категорий



function categoryClick(element) {
    let categoryElements = document.getElementsByClassName(element.id);
    if (element.classList.contains('filterActive')) {
        element.classList.remove('filterActive');
    } else {
        element.classList.add('filterActive');
    }
    defaultVisible();
}  // Обрабатываем клики по кнопкам фильтров



function onlyOneFilter(element) {
    for (let i = 0; i < findingCategories.length; i++) {
        findingCategories[i].classList.remove('filterActive');
    }
        element.classList.add('filterActive');
    defaultVisible();
} // Добавляем в обработчик сверху, если нужен 'radio', а не чекбокс



console.log('Объявляем категории: (' + findingCategories.length + ') ед.')
for (let i = 0; i < findingCategories.length; i++) {
    findingCategories[i].id = 'holyxeyCategory_' + (i + 1);
    console.log((i + 1) + '.) ' + findingCategories[i].id)
}
// Объявляем ID для кнопок фильтров в соответствии с количеством категорий
// Эти же ID = элементам фильтрации





for (let i = 0; i < findingCategories.length; i++) {
    let categoryElements = document.getElementsByClassName(findingCategories[i].id);
    for (let h = 0; h < categoryElements.length; h++) {
        if (findingCategories[i].classList.contains('filterActive')) {
            categoryElements[h].classList.remove('hideThisElement');
            categoryElements[h].classList.add('showThisElement');
        } else {
            categoryElements[h].style.display = 'none';
            categoryElements[h].classList.add('hideThisElement');
            categoryElements[h].classList.remove('showThisElement');
        }
    }
}  // Проверяем видимость по умолчанию через поиск класса filterActive в кнопке фильтрации



function defaultVisible() {

    for (let i = 0; i < findingCategories.length; i++) {

        let categoryElements = document.getElementsByClassName(findingCategories[i].id);

        for (let h = 0; h < categoryElements.length; h++) {
            setTimeout(function () {
                if (findingCategories[i].classList.contains('filterActive')) {
                    categoryElements[h].classList.remove('hideThisElement');
                    categoryElements[h].classList.add('showThisElement');
                    categoryElements[h].style.display = '';
                } else {
                    categoryElements[h].classList.add('hideThisElement');
                    categoryElements[h].classList.remove('showThisElement');
                    setTimeout(function () {categoryElements[h].style.display = 'none';}, 200);
                }
            }, (50 * (h * 5)));
        }
    }
} // Работаем с кнопками фильтров