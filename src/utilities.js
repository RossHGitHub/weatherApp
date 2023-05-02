
import { fetchData, storeData, fetchForecast} from "./APIfunctions";
import moment from 'moment';
export {processData}


async function processData(location){
    try{
    const data = await fetchData(location);
     const fData = await fetchForecast(location);
     let weatherData = storeData(data);
    displayData(weatherData.desc, weatherData.tempC, weatherData.tempF, weatherData.humidity, weatherData.icon, weatherData.location, weatherData.country);
    displayForecastData(fData.loopInfo);
    
  
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
 
 function displayForecastData(forecastData) {
    const forecastElement = document.getElementById('forecastResults');
    forecastElement.innerHTML='';
    // Loop through each forecast day and create a div for it
    forecastData.forEach(day => {
        
      const dayElement = document.createElement('div');
      dayElement.classList.add('fResultItem')

      const dayEl = document.createElement('div');
      let forecastDate = day.date;
      console.log(forecastDate);
      let formattedDay = moment(forecastDate).format('dddd'); 
      dayEl.innerHTML=formattedDay;
  
      const tempElement = document.createElement('p');
      tempElement.textContent = `${day.day.avgtemp_c}°C`;
  
      // Create an element for the icon
      const iconElement = document.createElement('img');
      let icon = day.day.condition.icon
      iconElement.src = icon;
  
      // Append the temperature and icon elements to the day element
        dayElement.appendChild(dayEl);
        dayElement.appendChild(iconElement);
        dayElement.appendChild(tempElement);
    
  
      // Append the day element to the forecast element
      forecastElement.appendChild(dayElement);
    });
  }
  
