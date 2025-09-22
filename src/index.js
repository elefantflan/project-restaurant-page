require('./styles/main.scss');

import { getPageMenu } from './menu';
import { getPageHome } from './home';
import { getPageAbout } from './about';

console.log("This is Michelle. I am creating a restaurant page using webpack.")

const body = document.body;
const page = document.querySelector('.page')
const content = document.getElementById('content');
body.append(page);
page.append(content);

content.append(getPageHome());

function toggleHome(){
    //clear content
    content.textContent='';
    content.append(getPageHome());
}
function toggleMenu(){
    //clear content
    content.textContent='';
    content.append(getPageMenu());
}
function toggleAbout(){
    //clear content
    content.textContent='';
    content.append(getPageAbout());
}

const home = document.getElementById('home');
const clickHome=home.addEventListener('click', ()=>{
    toggleHome();
})

const menu = document.getElementById('menu');
const clickMenu=menu.addEventListener('click', ()=>{
    toggleMenu();
})

const about = document.getElementById('about');
const clickAbout=about.addEventListener('click', ()=>{
    toggleAbout();
})
