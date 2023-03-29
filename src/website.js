import loadHome from './home';
import loadAbout from './about';
import loadShop from './shop';

function createSite() {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.textContent = 'home';
    homeButton.addEventListener('click', loadHome);
    const shopButton = document.createElement('button');
    shopButton.setAttribute('id', 'shopButton');
    shopButton.textContent = 'shop';
    shopButton.addEventListener('click', loadShop);
    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'aboutButton');
    aboutButton.textContent = 'about';
    aboutButton.addEventListener('click', loadAbout);

    nav.appendChild(homeButton);
    nav.appendChild(shopButton);
    nav.appendChild(aboutButton);

    
    const content = document.getElementById('content');
    const body = document.createElement('body');
    body.setAttribute('id', 'body');  
    content.appendChild(nav);
    content.appendChild(body);
    loadHome();   
}

export default createSite;