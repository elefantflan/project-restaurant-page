function getPageAbout(){
    const div = document.createElement('div');
    div.className="info";
    const title = document.createElement('h2');
    const info = document.createElement('p');

    div.append(title);
    div.append(info);

    title.textContent="We Believe";
    info.textContent="Quality of food determines the quality of life. Through our service we aspire to bring a sense of abundance and clarity within our customer's lives.";

    return div;
}

export {getPageAbout}