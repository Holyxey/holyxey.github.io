'use strict';

const multipage = {
    // Pop-up init
    popup(target){
        this.changeScroll()
        let multiPage = document.getElementById('multi-page')
        multiPage.insertAdjacentHTML('afterbegin',
            `<div class="blur" id="popup-block">
                    <article id="weatherTest">
                    </article>
                    <h1>${target.textContent}</h1>
                    ${target.textContent === 'Трансляция' 
                        ? `<article id="video-stream">
                                <div id='streamPlayer'></div>
                            </article>` 
                        : ''}
                    <div id="close-popup" onclick="multipage.remPopup()">
                        <svg width="2rem" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"/><g stroke-linecap="round" stroke-linejoin="round"/><path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10m-2.83-7.17 5.66-5.66m0 5.66L9.17 9.17" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </div>
                </div>`
        )
        target.textContent === 'Трансляция' ? initPlayer() : '';
        getWeatherForecast();
    }, //Показ поп-апа
    remPopup(){
        this.changeScroll()
        let popup = document.getElementById('popup-block')
        popup.style.animation = 'hidepopup .3s ease-out forwards'
        setTimeout(()=>{popup.remove()}, 300)
    },
    changeScroll(){
        if (document.body.style.overflow === 'hidden')
            document.body.style.overflow = 'unset'
        else document.body.style.overflow = 'hidden'

    }, // Запрет/разрешение на скролл ( прим. при открытии поп-апа )
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