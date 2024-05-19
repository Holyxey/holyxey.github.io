let weatherInfo;
let output = document.querySelectorAll('#outputWeather');
// fetch('https://api.open-meteo.com/v1/forecast?latitude=59.9386&longitude=30.3141&hourly=temperature_2m,rain&forecast_days=3')

const multipage = {
    // Pop-up init
    popup(target){
        this.changeScroll()
        let multiPage = document.getElementById('multi-page')
        multiPage.insertAdjacentHTML('afterbegin',
            `<div class="blur" id="popup-block">
                    <h1>${target.textContent}</h1>
<!--                    <article class="weather">-->
<!--                        <a class="weatherwidget-io" -->
<!--                        data-days="5" -->
<!--                        data-font="Roboto" -->
<!--                        data-icons="Climacons Animated" -->
<!--                        data-label_1="ТЕРРУАР" -->
<!--                        data-label_2="Погода" -->
<!--                        data-theme="original" -->
<!--                        href="https://forecast7.com/ru/54d7037d87/kuzmishchevo/"></a>-->
<!--                    </article>-->
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
        __weatherwidget_init()
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