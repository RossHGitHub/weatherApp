import './style.css';
import { fetchData} from './APIfunctions';
import { storeDat} from './APIfunctions';
import { processData } from './utilities';


const search=document.getElementById('searchBar');
const button = document.getElementById('button');
const result = document.getElementById('result');



 button.addEventListener('click', ()=>{ processData(searchBar.value)});