async function logMovies() {
    // const response = await fetch("https://openweathermap.org/city/505299");
    const response = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=54.41&lon=37.52&exclude=hourly,daily&appid=fbaf4d80dc7675e5118f511c8ceac3c2");
    const movies = await response.json();
    console.log(movies);
}

