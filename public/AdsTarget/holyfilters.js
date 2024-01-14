
let findingCategories = document.getElementsByClassName('filter_button');
// Определили ко-во категорий для фильтрации



function makeIdFilters() {
    for (let i = 0; i < findingCategories.length; i++) {
        findingCategories[i].id = 'holyxeyCategory_' + (i + 1);
        console.log('Объявили категорию: ' + findingCategories[i].id);
    }
}  // Объявляем ID в соответствии с количеством категорий
makeIdFilters();



function defaultVisible() {
    for (let i = 0; i < findingCategories.length; i++) {

        let categoryElements = document.getElementsByClassName(findingCategories[i].id);

        for (let h = 0; h < categoryElements.length; h++) {
            if (findingCategories[i].classList.contains('filterActive')) {
                console.log('Класс найден, показываем все элементы в категории ' + findingCategories[i].innerHTML);
                categoryElements[h].style.cssText += ('animation: showElements .5s ease-out forwards');
                categoryElements[h].removeAttribute('hidden');
            } else {
                console.log('Класс не найден, скрываем все элементы в категории ' + findingCategories[i].innerHTML);
                categoryElements[h].setAttribute('hidden', '');
            }
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



function categoryClickSet() {
    for (let i = 0; i < findingCategories.length; i++) {
        findingCategories[i].setAttribute('onclick', 'categoryClick(this)');
    }
}  // Добавляем onClick для всех категорий для функции выше
categoryClickSet();


