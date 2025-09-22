require('./styles/main.scss');

import getPage from "./menu.js";
import restaurantImg from './assets/beachhouse.jpg';

const menu = document.getElementById('menu');
menu.addEventListener('click', ()=>{

    getPage();
})