import './style.css';
import chowderThumbnail from './img/chowderThumbnail.jpg';
import finnThumbnail from './img/finnThumbnail.jpg';
import kuchiThumbnail from './img/kuchiThumbnail.jpg';

function loadHome() {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.classList.add('contentBox');
    title.innerHTML = '<h1>Psychadelic Ward</h1>';
    
    const headline = document.createElement('div');
    headline.setAttribute('id', 'headline');
    headline.classList.add('contentBox');
    headline.innerHTML = "Welcome to the Psychadelic Ward <br> <em>Where funky meets functional.</em> <br> Shop from over 15 different beautiful hand crafted keychains that resemble your favorite characters and also function as a jar to keep your important possessions stashed on the go.";
    
    const featuredContainer = document.createElement('div');
    featuredContainer.setAttribute('id', 'featuredContainer');
    featuredContainer.classList.add('contentBox');
    featuredContainer.innerHTML = '<h3>Featured Items</h3>';

    const featuredItems = document.createElement('div');
    featuredItems.setAttribute('id', 'featuredItems');
    featuredContainer.appendChild(featuredItems);

    const chowder = new Image();
    chowder.src = chowderThumbnail;
    const kuchi = new Image();
    kuchi.src = kuchiThumbnail;
    const finn = new Image();
    finn.src = finnThumbnail;

    featuredItems.appendChild(chowder);
    featuredItems.appendChild(kuchi);
    featuredItems.appendChild(finn);
    
    const content = document.getElementById('content');
    const body = document.createElement('div');
    body.setAttribute('id', 'body');   
    content.appendChild(body);
    body.appendChild(title);
    body.appendChild(headline);
    body.appendChild(featuredContainer);

}

export default loadHome;