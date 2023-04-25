export {fetchData, storeData }

async function fetchData(location) {
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=25bafc304e7c429f98c204403231704&q=${location}`);
    const weatherData = await response.json();
    await console.log(weatherData)
    return weatherData;}
    catch{
        console.log('error has occured')
    }
}

function storeData(data){

    let desc = data.current.condition.text;
    let tempC = data.current.temp_c;
    let tempF = data.current.temp_f;
    let humidity = data.current.humidity;

    return {desc, tempC, tempF, humidity}
}

