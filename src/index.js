import './style.css';
import { getWeatherData } from './APIfunctions';

const result = document.getElementById('result');

const button = document.getElementById('searchButton');


getWeatherData('wallsend');