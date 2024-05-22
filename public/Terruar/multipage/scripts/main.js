'use strict';

const multipage = {
    // Pop-up init
    popup(target){
        this.changeScroll()
        let multiPage = document.getElementById('multi-page')
        const getVideoStream = (target) => {
            let q;
            initPlayer()
            if (target.textContent === 'Трансляция' && this.getUserAgent() === 'Safari') {
                q = `<article id="video-stream">
                    <video controls autoplay muted playsinline loop style="width: 100%">
                        <source id="videoPlayBack" src="" type="video/mp4">
                    </video></article>`
                videoPlayBack()
            } else if (target.textContent === 'Трансляция' && this.getUserAgent() !== 'Safari') {
                q = `<article id="video-stream"><div id='streamPlayer'></div></article>`
            }
            return q;
        }
        const getProductImages = (product) => {
            console.log(product.images)
            let q = '';
            product.images.forEach(image => {
                q += `<img loading="lazy" class="productImage" src="${image}" alt="${product.title}">`
            })
            return q;
        } // Рендерим изображения внутрь продукта
        const getProducts = (catName) => {
            // catName is name of category
            let q = '';
            const products =  multipage.menuList.products;
            Object.values(products).forEach(product => {
                if (product.category === catName) {
                    q += `
<div class="product">
<p class="productTitle">${product.title}</p>
${(!product.description) ? '' : `<p class="productDescription">${product.description}</p>`}
${(!product.price) ? '' : `<p class="productPrice">${product.price} p.</p>`}
${(!product.images) ? '' : `<div class="productImages">${getProductImages(product)}</div>`}
</div>`
                }
            })
            return q;
        } // Рендерим продукты внутрь подходящей категории
        const getMenu = (target) => {
            let q = ``;
            const getCategories = () => {
                let q = '';
                multipage.menuList.categories.forEach(item => {
                    q+=`<article class="categories">
                            <div class="categoryHeader">
                                <h4>${item}</h4>
                            </div>
                            <div class="categoryItems">
                                ${getProducts(item.toString())}
                            </div>
                        </article>`
                }) // Рендерим категории внутрь id="restaurantMenu"
                return q;
            }
            q =
                `<section id="restaurantMenu">${getCategories()}</section>`
            return q;
        }
        multiPage.insertAdjacentHTML(
            'afterbegin',
            `<div class="blur" id="popup-block">
                    <article id="weatherTest"></article>
                    <h2>${target.textContent}</h2>
                    ${target.textContent === 'Трансляция' ? getVideoStream(target) : ''}
                    ${target.textContent === 'Меню и доставка' ? getMenu(target) : ''}
                    <div id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>`
        )
        getWeatherForecast();
    }, // Показ поп-апа
    remPopup(){
        this.changeScroll()
        let popup = document.getElementById('popup-block')
        popup.style.animation = 'hidepopup .3s ease-out forwards'
        setTimeout(()=>{popup.remove()}, 300)
    }, // Сброс поп-апа
    changeScroll(){
        if (document.body.style.overflow === 'hidden')
            document.body.style.overflow = 'unset'
        else document.body.style.overflow = 'hidden'
    }, // Запрет/разрешение на скролл ( прим. при открытии поп-апа )
    getUserAgent(){
            if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
                return('Opera');
            } else if (navigator.userAgent.indexOf("Edg") != -1) {
                return('Edge');
            } else if (navigator.userAgent.indexOf("Chrome") != -1) {
                return('Chrome');
            } else if (navigator.userAgent.indexOf("Safari") != -1) {
                return('Safari');
            } else if (navigator.userAgent.indexOf("Firefox") != -1) {
                return('Firefox');
            } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
            {
                return('IE');
            } else {
                return('unknown');
            }
    }, // Строкой получаем название браузера
    mobileMenu: {
        btnClck(el){
            let menuPoints = document.querySelectorAll('.navPCItem')
            let nav = document.querySelector('nav')
            let mainList = document.getElementById('menuList')
            let buttonLines = document.querySelectorAll('.menuButtonHR')
            if (el.getAttribute('data-clicked') === '0') {
                let tmt = 100;
                menuPoints.forEach(point => {
                    point.style.opacity = '0'
                        setTimeout(function () {point.style.opacity = 1}, tmt)
                        tmt+=70
                    point.style.display = 'block'
                    point.style.width = '100%'
                    point.style.textAlign = 'center'
                    point.style.marginBlock = '.5rem'
                })
                nav.style.height = '70vh'
                el.style.backgroundColor = 'var(--white)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--wine)'
                })

                el.setAttribute('data-clicked', '1')
            } else
            if (el.getAttribute('data-clicked') === '1') {
                menuPoints.forEach(point => {
                    point.style.display = 'none'
                })
                nav.style.height = '4rem'
                el.style.backgroundColor = 'var(--wine)'
                buttonLines.forEach(line => {
                    line.style.backgroundColor = 'var(--white)'
                })

                el.setAttribute('data-clicked', '0')
            }
        }
    },
    menuList: {
        categories: [
            "Завтраки",
            "Напитки",
            "Бургеры",
            "Закуски",
            "Стейки",
            "Супы",
            "Салаты",
            "Десерты",
            "Гарниры"
        ],
        products: {
            "Завтрак": {
                title: `Завтраки`,
                price: 490,
                description: `Яичница глазунья (из 2-х яиц), сосиски (2 шт)<br>
                    Овощи свежие (Помидор, огурец)<br>
                    Сырники (2 шт), сметана, топинт маракуя<br>
                    Каша овсяная (ягоды - черника, клубника, брусника<br>
                    Хлеб, масло сл. порция`,
                category: "Завтраки"
            },
            "Чай": {
                title: 'Чай (черный/зеленый)',
                price: '',
                description: '',
                category: "Напитки",
                images:[
                    'https://static.tildacdn.com/stor3330-6330-4965-a138-646466396637/30003652.jpg',
                    'https://static.tildacdn.com/stor3838-3730-4664-b933-373937653831/98515642.jpg',
                    'https://static.tildacdn.com/stor3230-3136-4033-a130-613361393065/49497028.jpg',
                    'https://static.tildacdn.com/stor3937-3533-4762-b439-663763313366/73145240.jpg',
                    'https://static.tildacdn.com/stor3330-6330-4965-a138-646466396637/30003652.jpg'
                ]
            },
            "Кофе": {
                title: 'Кофе (с молоком)',
                price: '',
                description: '',
                category: "Напитки"
            },
            "Бургер вегетарианский": {
                title: 'Бургер вегетарианский',
                price: 300,
                description: 'Булочка, микс салатов, сыр чеддер, помидор, котлета из нута, соус дзадзики',
                category: "Бургеры"
            },
            "Чизбургер Пайпс": {
                title: `Чизбургер "Пайпс"`,
                price: 480,
                description: 'Булочка, микс салатов, сыр чеддер, помидор, котлета из говядины, лук, бекон, соус сырный/медово-горчичный',
                category: "Бургеры"
            },
            "Кесадилья": {
                title: `Кесадилья`,
                price: 300,
                description: 'Кукурузная лепешка, кукуруза, курица сувит, помидоры, сыр чеддер, болгарский перец, бобы, кинза/петрушка, соус сальса/сметана',
                category: "Закуски"
            },
            "Френч фрайс": {
                title: `Френч фрайс`,
                price: 350,
                description: 'Картофель фри, лук фри, бекон фри, микс салатов, топинг чеддер',
                category: "Закуски"
            },
            "Крылышки": {
                title: `Крылышки`,
                price: 400,
                description: 'Крылышки маринованые, кунжут, соус барбекю/мармайт',
                category: "Закуски"
            },
            "Стриплойн": {
                title: `Стриплойн`,
                price: 850,
                description: 'Говядина',
                category: "Стейки"
            },
            "Рибай": {
                title: `Рибай`,
                price: 980,
                description: 'Говядина',
                category: "Стейки"
            },
            "Стейк из сёмги": {
                title: `Стейк из сёмги`,
                price: 1200,
                description: '',
                category: "Стейки"
            },
            "Суп дня": {
                title: `Суп дня`,
                price: 400,
                description: '',
                category: "Супы"
            },
            "Грузинский": {
                title: `Грузинский`,
                price: 300,
                description: 'Помидор, огурец, лук красный, кинза, базилик, грецкий орех',
                category: "Салаты"
            },
            "Ростбиф": {
                title: `Ростбиф`,
                price: 520,
                description: 'Микс салатов, говядина сувит, помидоры черри, лук, соус медово-горчичный',
                category: "Салаты"
            },
            "Лосось": {
                title: `Лосось`,
                price: 580,
                description: 'Микс салатов, помидоры черри, руккола, лосось, апельсиновая заправка',
                category: "Салаты"
            },
            "Цезарь с курицей": {
                title: `Цезарь с курицей`,
                price: 480,
                description: 'Салат айсберг, филе куриное, помидоры черри, сыр пармезан, заправка',
                category: "Салаты"
            },
            "Honey day": {
                title: `Honey day`,
                price: 260,
                description: '',
                category: "Десерты"
            },
            "Чизкейк": {
                title: `Чизкейк`,
                price: 260,
                description: '',
                category: "Десерты"
            },
            "Профитроли": {
                title: `Профитроли`,
                price: 260,
                description: '',
                category: "Десерты"
            },
            "Картофель фри": {
                title: `Картофель фри`,
                price: 150,
                description: '',
                category: "Гарниры"
            },
            "Картофель по-деревенски": {
                title: `Картофель по-деревенски`,
                price: 150,
                description: '',
                category: "Гарниры"
            },
            "Батат фри": {
                title: `Батат фри`,
                price: 150,
                description: '',
                category: "Гарниры"
            }
        },
    }
}

// weather
const latitude = 54.702;
const longitude = 37.856;
const days = 3;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain&forecast_days=${days}`;
let hourlyList = {};
async function getWeatherForecast() {
    try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const { hourly } = data;
            const { temperature_2m, rain, time } = hourly;
            hourlyList = temperature_2m


            // for (let i = 0; i < time.length; i++) {
            //     console.log(`Hour ${i}: Temperature - ${temperature_2m[i]}°C, Rain - ${rain[i]}mm`);
            // }
            weatherTestRender(days);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
}
const weatherTestRender = (days) => {
    if (document.getElementById('weatherTest') && days > 0) {
        let b = document.getElementById('weatherTest')
        b.onclick = () => {
            b.style.animation = 'hidepopup .3s ease-out forwards'
            setTimeout(()=>{b.remove()}, 300)
        }
        const today = (i) => {
            let q;
            switch(i) {
                case 0:
                    q = 'Сегодня'
                    break;
                case 1:
                    q = 'Завтра'
                    break;
                case 2:
                    q = 'Послезавтра'
                    break;
                default:
                    q = 'Погода'
                    break;
            }
            return q;
        };
        const getStroke = (day, hour) => {
            return (24 * day + hour)
        }
        for (let i = 0; i < days; i++) {
            b.insertAdjacentHTML(`beforeend`, `
                <article class="weatherDay">
                    <p class="todayHeader">${today(i)}</p>
                    <div class="hourly">
                        <p class="hour morning">Утром: ${hourlyList[(getStroke(i, 6))]}℃</p>
                        <p class="hour day">Днем: ${hourlyList[(getStroke(i, 14))]}℃</p>
                        <p class="hour evening">Вечером: ${hourlyList[(getStroke(i, 20))]}℃</p>
                    </div>
                </article>
            `)
        }
    } else return('Days is not defined')
}
// !weather