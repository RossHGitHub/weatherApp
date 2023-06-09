export {fetchData, storeData, fetchForecast}

async function fetchData(location) {
    
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=25bafc304e7c429f98c204403231704&q=${location}`);
    const weatherData = await response.json();
    return weatherData;
  
}

function storeData(data){

    let desc = data.current.condition.text;
    let tempC = data.current.temp_c;
    let tempF = data.current.temp_f;
    let humidity = data.current.humidity;
    let icon = data.current.condition.icon;
    let location = data.location.name;
    let country = data.location.country;

    return {desc, tempC, tempF, humidity, icon, location, country} 
}



async function fetchForecast(location){
    const fResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=25bafc304e7c429f98c204403231704&q=${location}&days=6`);
    const fWeatherData = await fResponse.json();
    const loopInfo = fWeatherData.forecast.forecastday;
    return {loopInfo};
}
