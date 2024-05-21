// https://api.open-meteo.com/v1/forecast?latitude=59.57&longitude=30.19&hourly=temperature&daily=weather_code&timezone=Europe%2FMoscow&forecast_days=3
let outputWeather = document.getElementById("outputWeather");
let weatherRain;
let weatherTime;
let weatherTemp;

let weatherToday;
let weatherTomorrow;
let weatherAfterTomorrow;

async function getWeather() {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=54.702&longitude=37.856&hourly=temperature_2m,rain&forecast_days=3");
    const weatheresult = await response.json();
    console.log(weatheresult);
    weatherRain = weatheresult.hourly.rain;
    weatherTime = weatheresult.hourly.time;
    weatherTemp = weatheresult.hourly.temperature_2m;

    weatherToday = {
        "Утро": weatherTemp[7] + "°С",
        "День": weatherTemp[13] + "°С",
        "Вечер": weatherTemp[21] + "°С",
    }
    weatherTomorrow = {
        "Утро": weatherTemp[31] + "°С",
        "День": weatherTemp[37] + "°С",
        "Вечер": weatherTemp[45] + "°С",
    }
    weatherAfterTomorrow = {
        "Утро": weatherTemp[55] + "°С",
        "День": weatherTemp[61] + "°С",
        "Вечер": weatherTemp[69] + "°С",
    }

    outputWeather.textContent = weatherTomorrow["Утро"];
}

window.onload = () => {
    // getWeather()
}

