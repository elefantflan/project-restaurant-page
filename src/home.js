import cover from "./assets/img/interior.jpg";
const restaurantImg = document.createElement('img');
restaurantImg.id='cover'

function getPageHome(){
    
    restaurantImg.src=cover;

    const div = document.createElement('div');
    div.className="info home";
    const title = document.createElement('h2');
    const info = document.createElement('p');

    div.append(title);
    div.append(restaurantImg);
    div.append(info);

    title.textContent=`"Your finest seafood dining experience"`;
    info.textContent="Innisfree lets you breathe, slow down, and relax. With our view by the beautiful sea and meals cooked from fresh, local sources, we guarantee you won't want to look anywhere else to taste the best of the ocean.";

    return div;
}

export {getPageHome}