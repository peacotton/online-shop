function loadAbout() {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.classList.add('contentBox');
    title.innerHTML = '<h1>About Psychadelic Ward</h1>';

    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.classList.add('contentBox');
    description.innerHTML = `Psychadelic Ward run and operated by Raelyn Watts. She lives in Indianapolis, Indiana and
    creates everything to order and by hand. Pricing reflects the amount of time and detail required to create these trinkets. 
    Check out her Etsy to see the rave reviews her creations receive.`
     
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(title);
    body.appendChild(description);
}

export default loadAbout;