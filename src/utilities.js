
import { fetchData, storeData } from "./APIfunctions";

export {processData}


async function processData(location){
    const data = await fetchData(location);
    let weatherData = storeData(data);
    console.log(weatherData);
}