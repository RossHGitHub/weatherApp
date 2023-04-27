
import { fetchData, storeData } from "./APIfunctions";

export {processData}


async function processData(location){
    try{
    const data = await fetchData(location);
    let weatherData = storeData(data);
    displayData(weatherData.desc, weatherData.tempC, weatherData.tempF, weatherData.humidity, weatherData.icon, weatherData.location, weatherData.country);

    
    }
    catch{
       alert('Please enter a valid Location.')
    }
};



 function displayData(desc, tempC, tempF, humidity, icon, locationP, country){
    let descDisplay = document.getElementById('desc').innerHTML=`${desc}`;  
        if(document.getElementById('checkbox').checked == false) {
            let tempDisplay = document.getElementById('tempC').innerHTML=`${tempC}°C`;
        }
    
        else {
            let tempDisplay = document.getElementById('tempC').innerHTML=`${tempF}°F`;
        }
   
    let humidDisplay = document.getElementById('humidity').innerHTML=`${humidity}% Humidity`;
    let iconDisplay = document.getElementById('icon').src=icon;
    let locationName = document.getElementById('locationName')
    if (locationP !== country) {
        locationName.innerHTML=(`In ${locationP}, ${country}:`)}
        else {
            locationName.innerHTML = (`In ${country}:`)
        }
    
 }