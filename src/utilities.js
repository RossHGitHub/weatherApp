
import { fetchData, storeData } from "./APIfunctions";

export {processData, setData}


async function processData(location){
    const data = await fetchData(location);
    let weatherData = storeData(data);
    console.log(weatherData);
    
};

