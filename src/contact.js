function getPageContact(){
    const div = document.createElement('div');
    div.className="info about";
    const title = document.createElement('h2');
    const info = document.createElement('p');
    info.className='statement'

    div.append(title);
    div.append(info);

    title.textContent="We Believe";
    info.textContent="Quality of food determines the quality of life. Through our services we aspire to bring a sense of abundance within our customer's lives.";

    const form = document.createElement('form')
    form.setAttribute('action', './submit')
    form.setAttribute('method', 'get');
    const email=document.createElement('input');
    const labelEmail=document.createElement('label');
    labelEmail.textContent='Email: '
    email.setAttribute('type','email');
    const labelMessage = document.createElement('label');
    labelMessage.textContent="Message:"
    const text=document.createElement('textarea');

    form.append(labelEmail);
    form.append(email);
    form.append(labelMessage);
    form.append(text);
    div.append(form);

    return div;
}

export {getPageContact}