require('./styles/main.scss');

import getPage from "./menu.js";

const menu = document.getElementById('menu');
menu.addEventListener('click', ()=>{

    getPage();
})