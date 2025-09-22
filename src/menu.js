function getPageMenu(){
    const div = document.createElement('div');
    div.className="info";
    const title = document.createElement('h2');
    const info = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    div.append(title);
    div.append(info);
    div.append(ul);
    ul.append(li);

    title.textContent="Menu";
    li.textContent="Lobster Bisque";

    return div;
}

export {getPageMenu}