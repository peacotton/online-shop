import './style.css';
import loadHome from './home';
import loadAbout from './about';
import loadShop from './shop';

function createSite() {
    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const homeButton = document.createElement('button');
    homeButton.setAttribute('id', 'homeButton');
    homeButton.classList.add('navButton');
    homeButton.textContent = 'home';
    homeButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateButton(homeButton);
        loadHome();
    });

    const shopButton = document.createElement('button');
    shopButton.setAttribute('id', 'shopButton');
    shopButton.classList.add('navButton');
    shopButton.textContent = 'shop';
    shopButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateButton(shopButton);
        loadShop();
    });
    
    const aboutButton = document.createElement('button');
    aboutButton.setAttribute('id', 'aboutButton');
    aboutButton.classList.add('navButton');
    aboutButton.textContent = 'about';
    aboutButton.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        activateButton(aboutButton);
        loadAbout();
    });
    
    nav.appendChild(homeButton);
    nav.appendChild(shopButton);
    nav.appendChild(aboutButton);

    function activateButton(button){
        const buttons = document.querySelectorAll('.navButton');

        buttons.forEach((button) => {
            if (button !== this) {
                button.classList.remove('active');
            }
        });
        button.classList.add('active');
    }
    
    const content = document.getElementById('content');
    const body = document.createElement('body');
    body.setAttribute('id', 'body');  
    content.appendChild(nav);
    content.appendChild(body);
    activateButton(homeButton);
    loadHome();   
}

export default createSite;