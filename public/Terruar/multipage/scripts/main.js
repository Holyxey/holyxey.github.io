'use strict';

const multipage = {
    // Pop-up init
    popup(target){
        this.changeScroll()
        let multiPage = document.getElementById('multi-page')
        multiPage.insertAdjacentHTML('afterbegin',
            `<div class="blur" id="popup-block">
                    <article id="weatherTest"></article>
                    <h2>${target.textContent}</h2>
                    ${target.textContent === 'Трансляция' && this.getUserAgent() !== 'Safari'
                    ? `<article id="video-stream"><div id='streamPlayer'></div></article>` 
                    : '<p>Трансляция не поддерживается Вашим браузером. Приносим свои извинения</p>'}
                    <div id="close-popup" onclick="multipage.remPopup()">
                        <svg width="50px" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>`
        )
        target.textContent === 'Трансляция' ? initPlayer() : '';
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
            if (el.getAttribute('data-clicked') === '0') {
                menuPoints.forEach(point => {
                    point.style.display = 'block'
                    point.style.width = '100%'
                    point.style.textAlign = 'center'
                    point.style.marginBlock = '.5rem'
                })
                nav.style.height = '70vh'

                el.setAttribute('data-clicked', '1')
            } else
            if (el.getAttribute('data-clicked') === '1') {
                menuPoints.forEach(point => {
                    point.style.display = 'none'
                })
                nav.style.height = '4rem'

                el.setAttribute('data-clicked', '0')
            }
        }
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
                        <p class="hour">Утром: ${hourlyList[(getStroke(i, 6))]}℃</p>
                        <p class="hour">Днем: ${hourlyList[(getStroke(i, 14))]}℃</p>
                        <p class="hour">Вечером: ${hourlyList[(getStroke(i, 20))]}℃</p>
                    </div>
                </article>
            `)
        }
    } else return('Days is not defined')
}
// !weather