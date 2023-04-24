export {getWeatherData }
const result = document.getElementById('result');
async function getWeatherData(url){
    try{
    const weatherData = await fetch(url);
    const weatherDataJson = await weatherData.json();
    await console.log(weatherDataJson);
   
    const obj = {}

    const currentCondition = weatherDataJson.current.condition.text
    const temp = weatherDataJson.current.temp_c;
    
    obj.current = currentCondition
    obj.temp = temp

    return obj}

    catch{
    result.innerHTML='Please enter a valid Town/City/State/Country'
    }
}