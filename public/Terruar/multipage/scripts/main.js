// 'use strict';
const videoPlayBackToken = '195C3CAD-85F2-05B9-E065-025056B67B70'
const terruarCatalogue = {
    link: 'https://store.tildaapi.com/api/getproductslist/?storepartuid=513452425241&recid=752306605&c=1716436482010&getparts=true&getoptions=true&slice=1&size=36&projectid=5131025',
    get parts() {
        return this.catalog.parts;
    },
    get products() {
        return this.catalog.products;
    },
    getProductId: (product, string) => {
        if (string)
            return product.uid.toString();
        return Number(product.uid)
    },
    getProductTitle: (product, string) => {
        if (string)
            return product.title.toString();
        return product.title
    },
    getProductPart: (product, string) => {
        if (string)
            return product.partuids.slice(1, -1)
        return Number(product.partuids.slice(1, -1))
    },
    getProductPrice: (product, string) => {
        if (string)
            return product.price
        return Math.floor(product.price)
    },
    getProductDescription: (product, string) => {
        if (string)
            return product.descr.toString()
        return product.descr
    },
    renderCategories: () => {
        if (document.getElementById('terruarMenu')) {
            let menu = document.getElementById('terruarMenu');
            terruarCatalogue.parts.forEach(part => {
                menu.insertAdjacentHTML('beforeend', `<div class="menuCategory" id="${part.uid}"><h4 class="categoryHeader">${part.title}</h4></div>`)
            })
        } else {console.log('Не обнаружен <div id="terruarMenu"></div>')}
    },
    renderProducts: () => {
        if (document.getElementById('terruarMenu')) {
            let menu = document.getElementById('terruarMenu');
            terruarCatalogue.products.forEach(product => {
                let partID = terruarCatalogue.getProductPart(product)
                document.getElementById(partID).insertAdjacentHTML("beforeend",
                    `
<div class="product" id="${terruarCatalogue.getProductId(product)}">
                        ${product.title
                        ? `<p class="productTitle">${terruarCatalogue.getProductTitle(product)}</p>`
                        : ''}
                        ${product.descr
                        ? `<p class="productDescription">${terruarCatalogue.getProductDescription(product)}</p> `
                        : ''}
                        ${product.price
                        ? `<p class="productPrice">${terruarCatalogue.getProductPrice(product)} p.</p> `
                        : ''}
</div>
`)
            })
        } else {
            console.log('Не обнаружен <div id="terruarMenu"></div>')}
    },
    getCatalogues: async function() {
        try {
            const response = await fetch(this.link);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            terruarCatalogue.catalog = await response.json();
        } catch (error) {console.error('Error fetching catalog:', error);}
    },
}
const restaurantGallery = {
    horizontal: [
        "https://optim.tildacdn.com/tild3862-3466-4135-a662-666565663861/-/format/webp/DSC_4429-2_.JPG",
        "https://optim.tildacdn.com/tild3437-3138-4262-b363-626433353334/-/format/webp/DSC_4434-2_.JPG",
        "https://optim.tildacdn.com/tild6664-3532-4735-b462-633139333135/-/format/webp/DSC_4440-2_.JPG",
        "https://optim.tildacdn.com/tild3433-3235-4663-b232-643536333365/-/format/webp/DSC_4443-2_.JPG",
        "https://optim.tildacdn.com/tild6162-6562-4463-a437-636434366233/-/format/webp/DSC_4445-2_.JPG",
        "https://optim.tildacdn.com/tild6336-3166-4539-b933-646265376165/-/format/webp/DSC_4878-2_.JPG",
        "https://optim.tildacdn.com/tild6633-3865-4561-b134-376231613366/-/format/webp/DSC_4575-2_.JPG",
        "https://optim.tildacdn.com/tild3661-6230-4561-a565-376134643135/-/format/webp/DSC_4453-2_.JPG",
        "https://optim.tildacdn.com/tild6334-3865-4563-b063-353037343638/-/format/webp/DSC_4902-2_.JPG",
        "https://optim.tildacdn.com/tild3134-3434-4562-a631-316133326565/-/format/webp/DSC_4454-2_.JPG",
        "https://optim.tildacdn.com/tild3837-3564-4233-b164-306238613366/-/format/webp/DSC_4638-2_.JPG",
        "https://optim.tildacdn.com/tild6635-3839-4761-a336-323563613861/-/format/webp/DSC_4462-2_.JPG",
        "https://optim.tildacdn.com/tild6538-3838-4332-b963-333761386339/-/format/webp/DSC_4611-2_.JPG",
    ],
    vertical: [
        "https://static.tildacdn.com/tild6234-3262-4536-a465-373837626336/DSC_4432-2_.JPG",
        "https://static.tildacdn.com/tild6466-3038-4463-b737-363630623662/DSC_4876-2_.JPG",
        "https://static.tildacdn.com/tild6462-6533-4762-b666-313337666537/DSC_4435-2_.JPG",
        "https://static.tildacdn.com/tild6330-3664-4339-b364-383535363434/DSC_4930-2_.JPG",
        "https://static.tildacdn.com/tild3534-6537-4563-b536-303465323663/DSC_4870-2_.JPG",
        "https://static.tildacdn.com/tild6662-3538-4636-b637-643961333535/DSC_4448-2_.JPG",
        "https://static.tildacdn.com/tild6239-3665-4137-b937-323531623161/DSC_4456-2_.JPG",
        "https://static.tildacdn.com/tild3432-3438-4661-a366-366137363137/DSC_4577-2_.JPG",
        "https://static.tildacdn.com/tild6361-3539-4533-b466-383833316338/DSC_4893-2_.JPG",
        "https://static.tildacdn.com/tild6264-3164-4465-a432-646533636363/DSC_4915-2_.JPG",
        "https://static.tildacdn.com/tild6364-3030-4437-b934-633130393034/DSC_4558-2_.JPG",
    ]
}
const multipage = {
    // Pop-up init
    popup(target){
        this.changeScroll()
        const multiPage = document.getElementById('multi-page')
        const getVideoStream = (target) => {
            let q;
            if (target.textContent === 'Трансляция' && this.getUserAgent() === 'Safari') {
                q = `<article id="video-stream">
                    <video controls autoplay muted playsinline loop style="width: 100%">
                        <source id="videoPlayBack" src="" type="video/mp4">
                    </video></article>`
                videoPlayBack().then()
            }
            else if (target.textContent === 'Трансляция' && this.getUserAgent() !== 'Safari') {
                q = `<article id="video-stream"><div id='streamPlayer'></div></article>`
            }
            return q;
        }
        const getMenu = (target) => {
            terruarCatalogue.getCatalogues().then(r => {terruarCatalogue.renderCategories();terruarCatalogue.renderProducts()})
            return `<div id="terruarMenu"></div>`
        }
        const getGallery = () => {
            let q = ''
            if (window.innerWidth > window.innerHeight) {
                for (const img of restaurantGallery["horizontal"]) {
                    q += `<img loading="lazy" src="${img}" alt="Фотографии ресторана">`
                }
                return `<article id="restaurantGallery">${q}</article>`;
            } else {
                for (const img of restaurantGallery["vertical"]) {
                    q += `<img loading="lazy" src="${img}" alt="Фотографии ресторана">`
                }
                return `<article id="restaurantGallery" class="vertical">${q}</article>`;
            }
        }
        multiPage.insertAdjacentHTML('afterbegin', `
                <div id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                <div class="blur" id="popup-block">
                    <article id="weatherTest"></article>
                    <h2>${target.textContent}</h2>
                    ${target.textContent === 'Трансляция' ? getVideoStream(target) : ''}
                    ${target.textContent === 'Трансляция' ? initPlayer() : ''}
                    ${target.textContent === 'Ресторан' ? getGallery() : ''}
                    ${target.textContent === 'Ресторан' ? getMenu(target) : ''}
                </div>`) // Рендер поп-апа
        getWeatherForecast();
    }, // Показ поп-апа
    remPopup(){
        this.changeScroll()
        const popup = document.getElementById('popup-block')
        const closeButton = document.getElementById('close-popup')
        const weatherBlock = document.getElementById('weatherTest')
        const mobileMenuButton = document.getElementById('monMenuButton')
        popup.style.animation = 'hidepopup .3s ease-out forwards'
        closeButton.style.animation = 'hidepopup .3s ease-out forwards'
        weatherBlock.style.animation = 'hidepopup .3s ease-out forwards'
        setTimeout(()=>{popup.remove(); closeButton.remove(); weatherBlock.remove()}, 300)
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
    bookingClick() {
        let booking = document.querySelector('.znms-widget__widget-btn');
        if (booking) {
            booking.click()
        }
    },
    getHeaderHeight() {
        let nav = document.querySelector('nav');
        let hero  = document.getElementById('hero');
        let mobNav = document.getElementById('mobileNavStroke');
        let widgetBooking = document.querySelector('.znms-widget__module-form-block');
        if (mobNav.offsetHeight < 1) {
            let height = `calc(${window.innerHeight}px - ${nav.offsetHeight}px - 3rem)`;
            let margin = `${nav.offsetHeight}px`
            hero.style.cssText = `height:${height}; margin-top: ${margin}`;
        } else {
            let height = `unset`;
            let margin = `calc(${mobNav.offsetHeight}px + 2rem)`
            hero.style.cssText = `height:${height}; margin-top: ${margin}`;
        }
    },
    hideMobileMenu() {
        let btn = document.getElementById('monMenuButton');
        if (btn.getBoundingClientRect().width > 0) return btn.click();
    },
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
    }
}
window.onresize = () => {
    multipage.getHeaderHeight()
}
window.onload = () => {
    multipage.getHeaderHeight()
}

// Инициализация трансляции
function initPlayer() {
    setTimeout(() => {
        if (document.getElementById('video-stream')) {
            let getWidth = document.getElementById('video-stream').offsetWidth
            let getHeigth = getWidth * 9 / 16
            sldpPlayer = SLDP.init({
                container: 'streamPlayer',
                stream_url: 'wss://b2o-vcore156.video.goodline.info:443/main/linkvideo_125009',
                autoplay: true,
                muted: true,
                height: getHeigth,
                width: getWidth
            });
        }
    }, 100)
    return ''
}
// Инициализация трансляции

// Тестовый запуск записи стрима вместо трансляции
async function videoPlayBack() {
    try {
        const response = await fetch("https://api.b2o.goodline.info/ords/mobile/vc2/downloads", {
            "headers": {
                "accept": "application/json",
                "api_key": "86e3ff40ec2c52a8504c8669710b4394",
                "cache-control": "no-cache",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "token": `${videoPlayBackToken}`
            },
            "referrer": "https://video.linkvideo.ru/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
        });
        const data = await response.json();
        const firstVideo = data[0].url;
        if (multipage.getUserAgent() === 'Safari') {
            document.getElementById('videoPlayBack').src = data[0].url;
            document.getElementById('videoPlayBack').parentNode.play()
        } else if (multipage.getUserAgent() !== 'Safari') {
            document.getElementById('videoPlayBack').parentNode.src = data[0].url;
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
// !Тестовый запуск записи стрима вместо трансляции

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
        const getStrokeNumber = (day, hour) => {
            return (24 * day + hour)
        }
        for (let i = 0; i < days; i++) {
            b.insertAdjacentHTML(`beforeend`, `
                <article class="weatherDay">
                    <p class="todayHeader">${today(i)}</p>
                    <div class="hourly">
                        <p class="hour morning">Утром: ${hourlyList[(getStrokeNumber(i, 6))]}℃</p>
                        <p class="hour day">Днем: ${hourlyList[(getStrokeNumber(i, 14))]}℃</p>
                        <p class="hour evening">Вечером: ${hourlyList[(getStrokeNumber(i, 20))]}℃</p>
                    </div>
                </article>
            `)
        }
    } else return('Days is not defined')
}
// !weather