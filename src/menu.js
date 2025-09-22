import lobster from "./assets/img/lobster.jpeg";
import oyster from "./assets/img/oyster.jpeg";
import sashimi from "./assets/img/sashimi.jpeg";
import uni from "./assets/img/uni.jpeg"


const img1=document.createElement('img');
const img2=document.createElement('img');
const img3=document.createElement('img');
const img4=document.createElement('img');

img1.src=lobster;
img2.src=oyster;
img3.src=sashimi;
img4.src=uni;

function getPageMenu(){
    const div = document.createElement('div');
    div.className="info menu";
    const title = document.createElement('h2');
    const ul = document.createElement('div');
    ul.className="menuContent";
    const lobster = document.createElement('p');
    const oyster = document.createElement('p');
    const sashimi = document.createElement('p');
    const uni = document.createElement('p');
    
    img1.className="img";
    img2.className="img";
    img3.className="img";
    img4.className="img";

    div.append(title);
    div.append(ul);

    ul.append(img1);
    ul.append(lobster);

    ul.append(img2);
    ul.append(oyster);

    ul.append(img3);
    ul.append(sashimi);

    ul.append(img4);
    ul.append(uni);

    title.textContent="Menu";
    lobster.textContent="Lobster Bisque - red lobster dripping in butter, garnished with caviar and orchids";
    oyster.textContent="Aphrodite's Oyster - freshly hauled oysters served with house special dipping sauce and spicy fruit mango";
    sashimi.textContent="Saltwater Sashimi - assortment of ahi tuna belly, yellowtail, albacore, salmon roe, and squid";
    uni.textContent="Creamy Uni Pasta - our best seller pasta is served with angelhair pasta mixed with uni and truffle oil"

    return div;
}

export {getPageMenu}