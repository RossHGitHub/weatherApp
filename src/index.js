import './style.css';
import { processData} from './utilities';


const search=document.getElementById('searchBar');
const button = document.getElementById('button');
const result = document.getElementById('result');


 button.addEventListener('click', ()=>{ 
processData(search.value);
});