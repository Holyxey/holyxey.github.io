function broneBt() {
    document.getElementById('input_5176421128602').value = document.querySelector('.numberhouse').innerText
}
var loadApi = false
var loadApi2 = false
function formatCurrency(number) {
    // Преобразовываем число в строку и разбиваем его на группы по 3 символа
    number = Number(number)
    const parts = String(number).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    // Объединяем группы и добавляем десятичную часть (если есть)
    return parts.join('.') + ' ₽';
}
// URL для запроса к API CRM
const apiURL = 'https://lesigora.bitrix24.ru/rest/13/lc2mmsr1r1dsew85/crm.product.list.json';

var homeinfo = {};
// Параметры запроса
const requestData = {
    FILTER: {
        // Здесь вы можете указать фильтры для выборки продуктов (например, по имени)
    },
    ORDER: {
        // Здесь вы можете указать сортировку (например, по имени в алфавитном порядке)
        ID: 'ASC',
    },
    start: 0, // Начальная позиция (начиная с 0)
    pageSize: 51,
    SELECT: [
        'ID',
        'NAME',
        'PROPERTY_45',
        'PROPERTY_117',
        'PROPERTY_121',
        'PROPERTY_123',
        'PROPERTY_125',
        'PROPERTY_127',
        'PROPERTY_129',
        'PROPERTY_131',
        'PROPERTY_133',
        'PROPERTY_135',
        'PROPERTY_139',
        'PROPERTY_141',
        'PROPERTY_143',
        'PROPERTY_145',
    ], // Поля, которые нужно вернуть в результате
};
const requestData2 = {
    FILTER: {
        // Здесь вы можете указать фильтры для выборки продуктов (например, по имени)
    },
    ORDER: {
        // Здесь вы можете указать сортировку (например, по имени в алфавитном порядке)
        ID: 'ASC',
    },
    start: 50,
    pageSize: 101,
    SELECT: [
        'ID',
        'NAME',
        'PROPERTY_45',
        'PROPERTY_117',
        'PROPERTY_121',
        'PROPERTY_123',
        'PROPERTY_125',
        'PROPERTY_127',
        'PROPERTY_129',
        'PROPERTY_131',
        'PROPERTY_133',
        'PROPERTY_135',
        'PROPERTY_139',
        'PROPERTY_141',
        'PROPERTY_143',
        'PROPERTY_145',
    ], // Поля, которые нужно вернуть в результате
};

// Опции для запроса
const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData),
};
// Опции для запроса
const requestOptions2 = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData2),
};

// Выполнение POST-запроса к API CRM с использованием fetch
fetch(apiURL, requestOptions)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            console.error(`Ошибка при выполнении запроса: ${response.status}`);
            throw new Error('Ошибка запроса');
        }
    })
    .then((data) => {
        // Выводим данные о продуктах, полученные из CRM
        const products = data.result;
        products.forEach((product) => {
            homeinfo[`${product.NAME}`] = {
                "kadastr": product.PROPERTY_117?product.PROPERTY_117.value:null,
                "ploshyad_uchastka": product.PROPERTY_123?product.PROPERTY_123.value:null,
                "status": product.PROPERTY_125?product.PROPERTY_125.value:null,
                "uchastok_s_domom": product.PROPERTY_127?product.PROPERTY_127.value:null,
                "ploshyad_doma": product.PROPERTY_129?product.PROPERTY_129.value:null,
                "s_terras": product.PROPERTY_131?product.PROPERTY_131.value:null,
                "dom_gotov": product.PROPERTY_133?product.PROPERTY_133.value:null,
                "dom_price_m2": product.PROPERTY_135?formatCurrency(product.PROPERTY_135).value:null,
                "dom_price": product.PROPERTY_139?formatCurrency(product.PROPERTY_139.value):null,
                "uchastok_price": product.PROPERTY_143?formatCurrency(product.PROPERTY_143.value):null,
                "itogo_price": product.PROPERTY_141?formatCurrency(product.PROPERTY_141.value):null,
                "popup_link": product.PROPERTY_145 ?product.PROPERTY_145.value:null,
            }
        });
        loadApi = true

    })
    .catch((error) => {
        console.error(`Ошибка: ${error}`);
    });

// Выполнение POST-запроса к API CRM с использованием fetch
fetch(apiURL, requestOptions2)
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            console.error(`Ошибка при выполнении запроса: ${response.status}`);
            throw new Error('Ошибка запроса');
        }
    })
    .then((data) => {
        // Выводим данные о продуктах, полученные из CRM
        const products = data.result;
        products.forEach((product) => {
            homeinfo[`${product.NAME}`] = {
                "kadastr": product.PROPERTY_117?product.PROPERTY_117.value:null,
                "ploshyad_uchastka": product.PROPERTY_123?product.PROPERTY_123.value:null,
                "status": product.PROPERTY_125?product.PROPERTY_125.value:null,
                "uchastok_s_domom": product.PROPERTY_127?product.PROPERTY_127.value:null,
                "ploshyad_doma": product.PROPERTY_129?product.PROPERTY_129.value:null,
                "s_terras": product.PROPERTY_131?product.PROPERTY_131.value:null,
                "dom_gotov": product.PROPERTY_133?product.PROPERTY_133.value:null,
                "dom_price_m2": product.PROPERTY_135?formatCurrency(product.PROPERTY_135).value:null,
                "dom_price": product.PROPERTY_139?formatCurrency(product.PROPERTY_139.value):null,
                "uchastok_price": product.PROPERTY_143?formatCurrency(product.PROPERTY_143.value):null,
                "itogo_price": product.PROPERTY_141?formatCurrency(product.PROPERTY_141.value):null,
                "popup_link": product.PROPERTY_145 ?formatCurrency(product.PROPERTY_145.value):null,
            }
        });
        loadApi2 = true
    })
    .catch((error) => {
        console.error(`Ошибка: ${error}`);
    });

const infobox = document.querySelector(".moreinfo")
const backimages = document.querySelectorAll(".background-icon")
let first = true
function changeBg(e) {
    if (e) {
        e.classList.toggle("view")
        if (!e.classList.contains("view")) {
            e.querySelector("span").innerText = "Показать в обычном режиме"
        } else {
            e.querySelector("span").innerText = "Показать свободные участки и дома"
        }
    }
    backimages.forEach(element => {
        element.classList.toggle('d-none')
    });
}
changeBg()
first = false

let zoomPoints = [];
if(window.innerWidth <1620) {
    zoomPoints.push({
        scale: "0.41",
        translateY:"-560px",
    });
}
if(window.innerWidth <2220) {
    zoomPoints.push({
        scale: "0.54",
        translateY:"-400px",
    });
    zoomPoints.push({
        scale: "0.64",
        translateY:"-300px",
    });
}
zoomPoints.push({
    scale: "0.7",
    translateY:"-300px",
});
zoomPoints.push({
    scale: "0.8",
    translateY:"-200px",
});
zoomPoints.push({
    scale: "0.9",
    translateY:"-100px",
});
zoomPoints.push({
    scale: "1",
    translateY:"0px",
});
zoomPoints.push({
    scale: "1.1",
    translateY:"0px",
});
zoomPoints.push({
    scale: "1.2",
    translateY:"0px",
});
zoomPoints.push({
    scale: "1.3",
    translateY:"0px",
});
zoomPoints.push({
    scale: "1.4",
    translateY:"0px",
});
const svgAction = document.querySelectorAll('.genmapcontent svg');

const scrollContainer = document.querySelector(".genmap");
const mapcontainer = document.querySelector(".genmapcontent");
const zoomInButton = document.getElementById("zoomInButton");
const zoomOutButton = document.getElementById("zoomOutButton");
let currentZoomIndex = 0; // Индекс текущей точки зума

function applyZoom(index) {
    const zoomPoint = zoomPoints[index];
    if (zoomPoint) {
        const style = `transform: scale(${zoomPoint.scale}) translateY(${zoomPoint.translateY})`;
        mapcontainer.setAttribute("style", style);
    }
}
// скрипт появления номера участка Х
const infoBox = document.getElementById('info-box');
const genmap = document.querySelector('.genplancontent');
svgAction.forEach((block, index) => {
    block.addEventListener('mouseover', (event) => {
        infoBox.innerText = `Участок №${index+1}`;


        // Получаем координаты курсора
        const x = event.clientX;
        const y = event.clientY;

        // Получаем координаты и размеры контейнера genmap
        const genmapRect = genmap.getBoundingClientRect();

        // Получаем размеры блока genmap-container внутри genmap
        const genmapContainer = document.querySelector('.genmap');
        const genmapContainerRect = genmapContainer.getBoundingClientRect();

        // Вычисляем смещение контейнера genmap
        const scrollLeft = genmap.scrollLeft;
        const scrollTop = genmap.scrollTop;

        // Позиционируем блок с индексом относительно курсора и учитываем прокрутку и размеры блока genmap-container
        infoBox.style.display = 'block';
        infoBox.style.left = `${x - genmapRect.left + scrollLeft}px`;
        infoBox.style.top = `${y - genmapRect.top + scrollTop}px`;
    });

    block.addEventListener('mouseout', () => {
        infoBox.style.display = 'none';
    });
});









// скрипт прокрутки с захватом
let isDragging = false;
let startX;
let startY;
let scrollLeft;
let scrollTop;
let containerinfo = document.querySelector('.genleftcontent');

document.querySelector('.closebtngen').addEventListener("click", () => {
    containerinfo.classList.add('hide');
})
scrollContainer.addEventListener('mousedown', handleMouseDown);
scrollContainer.addEventListener('mousemove', handleMouseMove);
scrollContainer.addEventListener('mouseup', handleMouseUp);

scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: false });
scrollContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
scrollContainer.addEventListener('touchend', handleTouchEnd);

function handleMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    scrollLeft = scrollContainer.scrollLeft;
    scrollTop = scrollContainer.scrollTop;

    scrollContainer.style.cursor = 'grabbing';
    scrollContainer.style.overflow = 'scroll';
}

function handleMouseMove(e) {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    scrollContainer.scrollLeft = scrollLeft - deltaX;
    scrollContainer.scrollTop = scrollTop - deltaY;
}

function handleMouseUp() {
    isDragging = false;

    scrollContainer.style.cursor = 'grab';
    scrollContainer.style.overflow = 'hidden';
}

function handleTouchStart(e) {
    if (e.touches.length === 1) {
        // Работаем только при одном касании
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
        scrollLeft = scrollContainer.scrollLeft;
        scrollTop = scrollContainer.scrollTop;

        scrollContainer.style.overflow = 'scroll';
        containerinfo.classList.add('hide');
    }
}

function handleTouchMove(e) {
    if (e.touches.length === 1 && isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        scrollContainer.scrollLeft = scrollLeft - deltaX;
        scrollContainer.scrollTop = scrollTop - deltaY;
        containerinfo.classList.add('hide');
    }
}

function handleTouchEnd() {
    scrollContainer.style.overflow = 'hidden';
}


scrollContainer.addEventListener('mouseleave', () => {
    isDragging = false;

    // Удаление стиля cursor: grab;
    scrollContainer.style.cursor = 'grab';
    scrollContainer.style.overflow = 'hidden';
});

// По умолчанию применяем первый зум
applyZoom(currentZoomIndex);

// Обработчик события для кнопки "+"
zoomInButton.addEventListener("click", () => {
    currentZoomIndex++;
    if (currentZoomIndex < zoomPoints.length) {
        applyZoom(currentZoomIndex);
    } else {
        currentZoomIndex = zoomPoints.length - 1; // Чтобы не выйти за пределы массива
    }
});

// Обработчик события для кнопки "-"
zoomOutButton.addEventListener("click", () => {
    currentZoomIndex--;
    if (currentZoomIndex >= 0) {
        applyZoom(currentZoomIndex);
    } else {
        currentZoomIndex = 0; // Чтобы не уйти в отрицательные значения
    }
});


let viewStart;
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function migles() {
    const card = document.querySelector(".genleftcontent")
    card.classList.add("hide")
    setTimeout(() => {
        card.classList.remove("hide")
        const randomNum = getRandomNumber(0, svgAction.length);
        const randomTime = getRandomNumber(4000, 6000);
        svgAction[randomNum].classList.add('selected')
        selectArea(randomNum)
        setTimeout(() => {
            svgAction[randomNum].classList.remove('selected')
            console.log(viewStart);
            if(!viewStart)
                migles()
        }, randomTime);
    }, 500);
}
function colorizeArea() {
    const myboxes = document.querySelectorAll('.genmapcontent svg')
    for (let index = 0; index < myboxes.length; index++) {
        const element = myboxes[index];
        if (homeinfo[index+1].status == "107") {
            //red
            element.classList.add('red')
        } else if (homeinfo[index+1].status == '105') {
            //yellow
            element.classList.add('yellow')
        }
    }
}
function injectApi() {
    if (loadApi && loadApi2) {
        migles()
        colorizeArea()
    } else {
        setTimeout(() => {
            injectApi()
        }, 400);
    }
}
injectApi()

function selectArea(id) {
    id++;
    const card = document.querySelector(".genleftcontent")
    card.classList.add("hide")
    setTimeout(() => {
        const itemArea = document.querySelector(".genitem")
        const moreinfo = document.querySelector('.moreinfo')
        moreinfo.innerHTML = ''
        if(document.getElementById("moreinfo").classList.contains('view')) {
            document.getElementById("moreinfo").classList.remove('view')
            document.querySelector(".moreinfo").classList.remove('open')
        }
        const addmibtn = () => {
            if(!document.getElementById("moreinfo").classList.contains('view')) {
                document.getElementById("moreinfo").classList.add('view')
                document.getElementById("moreinfo").innerText = "больше информации"

            }
        }
        //номер дома
        //Статус
        const btnfrm = document.getElementById('needhome');
        btnfrm.classList.add("shown")
        if (homeinfo[id].status == "107") {
            btnfrm.classList.remove("shown")
            itemArea.querySelector(".statustext").innerText = 'Продан';
            itemArea.querySelector(".genitemtitlestatus").style.background = "#D6B8A3"
        } else if (homeinfo[id].status == '105') {
            btnfrm.classList.remove("shown")
            itemArea.querySelector(".statustext").innerText = 'Забронирован';
            itemArea.querySelector(".genitemtitlestatus").style.background = "#E8E8E8"
        } else {
            itemArea.querySelector(".statustext").innerText = 'Доступен';
            itemArea.querySelector(".genitemtitlestatus").style.background = "#B2C8DD"
        }
        //Площадь участка
        itemArea.querySelector(".areaploshyad>span").innerText = homeinfo[id].ploshyad_uchastka;
        //определяем тип
        if(homeinfo[id].uchastok_s_domom) {

            itemArea.querySelector(".numberhouse>span").innerText = "Участок с домом №"+id;
            itemArea.querySelector(".areatype>span").innerText = "Участок с домом";
        }else{
            itemArea.querySelector(".numberhouse>span").innerText = "Участок №"+id;
            itemArea.querySelector(".areatype>span").innerText = "Участок";
        }
        //цена итог
        if(homeinfo[id].itogo_price)
            itemArea.querySelector(".areaprice>span").innerText = homeinfo[id].itogo_price;
        else
            itemArea.querySelector(".areaprice>span").innerText = "По запросу";

        const div = document.createElement('div')
        div.classList.add("statustext")
        if(homeinfo[id].popup_link) {
            div.innerHTML = `Фото объекта: <a href="${homeinfo[id].popup_link}">Показать</a>`
            moreinfo.appendChild(div.cloneNode(true))
        }
        // инфо о доме если есть
        if(homeinfo[id].uchastok_s_domom) {
            addmibtn();
            if(homeinfo[id].dom_gotov) {
                div.innerHTML = `Дом готов: Да`
            } else {
                div.innerHTML = `Дом готов: нет`
            }
            moreinfo.appendChild(div.cloneNode(true))

            if(homeinfo[id].ploshyad_doma) {
                div.innerHTML = `Площадь дома м2: ${homeinfo[id].ploshyad_doma}`
                moreinfo.appendChild(div.cloneNode(true))
            }
            if(homeinfo[id].dom_price_m2) {
                div.innerHTML = `Стоимость за м2: ${homeinfo[id].dom_price_m2}`
                moreinfo.appendChild(div.cloneNode(true))
            }
            if(homeinfo[id].dom_price) {
                div.innerHTML = `Стоимость дома: ${homeinfo[id].dom_price}`
                moreinfo.appendChild(div.cloneNode(true))
            }
        }

        //кадастровый номер
        if(homeinfo[id].kadastr) {
            addmibtn();
            div.innerHTML = `Кадастровый номер: ${homeinfo[id].kadastr}`
            moreinfo.appendChild(div.cloneNode(true))
        }


        card.classList.remove("hide")
    }, 500);
}
function selectItem(e) {
    if (document.querySelectorAll(".genmapcontent svg.selected").length) {
        document.querySelector(".genmapcontent svg.selected").classList.remove("selected")
    }
    setTimeout(() => {
        e.target.parentNode.classList.add("selected")
    }, 10);
}
for (let index = 0; index < svgAction.length; index++) {
    const element = svgAction[index];
    element.querySelector('path').addEventListener("mouseenter", () => {viewStart = true;})
    element.querySelector('path').addEventListener("touchstart", () => {viewStart = true;})
    element.querySelector('path').addEventListener("click", function(e) {
        selectArea(index)
        selectItem(e)
    })
};

document.getElementById("moreinfo").addEventListener("click", function(e){
    viewStart = true;
    if(infobox.classList.contains("open")) {
        infobox.classList.remove("open")
        e.target.innerText = "больше информации"
    } else {
        infobox.classList.add("open")
        e.target.innerText = "свернуть"

    }
})
const fullscreenElement = document.getElementById('fullscreen-element');
const fullscreenButton = document.getElementById('fullscreenButton');
let isFullscreen = false; // Переменная для отслеживания состояния

fullscreenButton.addEventListener('click', toggleFullscreen);

// Функция для включения или выключения полноэкранного режима
function toggleFullscreen() {
    if (!isFullscreen) {
        if (fullscreenElement.requestFullscreen) {
            fullscreenElement.requestFullscreen();
        } else if (fullscreenElement.mozRequestFullScreen) {
            fullscreenElement.mozRequestFullScreen();
        } else if (fullscreenElement.webkitRequestFullscreen) {
            fullscreenElement.webkitRequestFullscreen();
        } else if (fullscreenElement.msRequestFullscreen) {
            fullscreenElement.msRequestFullscreen();
        }
        isFullscreen = true; // Устанавливаем состояние полноэкранного режима
        fullscreenButton.classList.add('fullscreenopen'); // Добавляем класс кнопке
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        isFullscreen = false; // Устанавливаем состояние обычного режима
        fullscreenButton.classList.remove('fullscreenopen'); // Удаляем класс у кнопки
    }
}

var yourOverflowBlock = document.querySelector('.genmap');

yourOverflowBlock.scrollTop = 80;