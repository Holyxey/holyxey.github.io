
let findingCategories = document.getElementsByClassName('filter_button');
// Определили ко-во категорий для фильтрации



for (let i = 0; i < findingCategories.length; i++)
    findingCategories[i].setAttribute('onclick', 'categoryClick(this)');
// Добавляем onClick для всех категорий для функции выше



for (let i = 0; i < findingCategories.length; i++) {
    findingCategories[i].id = 'holyxeyCategory_' + (i + 1);
    console.log('Объявили категорию: ' + findingCategories[i].id)
}
// Объявляем ID в соответствии с количеством категорий



function defaultVisible() {
    for (let i = 0; i < findingCategories.length; i++) {

        let categoryElements = document.getElementsByClassName(findingCategories[i].id);

        for (let h = 0; h < categoryElements.length; h++) {
            setTimeout(function () {
                if (findingCategories[i].classList.contains('filterActive')) {
                    console.log('Показываем все элементы в категории ' + findingCategories[i].innerHTML);
                    categoryElements[h].classList.add('showThisElement');
                    categoryElements[h].style.display = '';
                    categoryElements[h].style.order = '';
                } else {
                    console.log('Класс не найден, скрываем все элементы в категории ' + findingCategories[i].innerHTML);
                    categoryElements[h].style.display = 'none';
                    categoryElements[h].style.order = '-' + findingCategories.length;
                    categoryElements[h].classList.remove('showThisElement');
                }
            }, (50 * h));
        }

    }
}  // Проверяем видимость по умолчанию через поиск класса filterActive в кнопке фильтрации
defaultVisible();



function categoryClick(element) {
    let categoryElements = document.getElementsByClassName(element.id);
    if (element.classList.contains('filterActive')) {
        element.classList.remove('filterActive');
    } else {
        element.classList.add('filterActive');
    }
    defaultVisible();
}  // Обрабатываем клики по кнопкам фильтров


