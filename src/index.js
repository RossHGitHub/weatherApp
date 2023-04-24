import './style.css';
import { getWeatherData } from './APIfunctions';


const search=document.getElementById('searchBar');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.addEventListener('click', ()=>{

    let url = `https://api.weatherapi.com/v1/current.json?key=25bafc304e7c429f98c204403231704&q=${search.value}`;
  getWeatherData(url)
  .then (obj =>{ result.innerHTML=`In ${search.value}, the weather is ${obj.current}, and it is ${obj.temp} degrees Celcius.`;
            }
    )
        });