export {getWeatherData}

async function getWeatherData(location){
    const weatherData = await fetch(`https://api.weatherapi.com/v1/current.json?key=25bafc304e7c429f98c204403231704&q=${location}`);
    const weatherDataJson = await weatherData.json();
    await console.log(weatherDataJson)
}