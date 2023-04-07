import './style.css';
import chowderThumbnail from './img/chowderThumbnail.jpg';
import finnThumbnail from './img/finnThumbnail.jpg';
import kuchiThumbnail from './img/kuchiThumbnail.jpg';
import jake from './img/jake.jpg';
import garfield from './img/garfield.jpg';

function loadHome() {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.classList.add('contentBox');
    title.innerHTML = '<h1>Psychadelic Ward</h1>';
    
    const headline = document.createElement('div');
    headline.setAttribute('id', 'headline');
    headline.classList.add('contentBox');
    headline.innerHTML = "<h3>Welcome to the Psychadelic Ward</h3><br><em>Where funky meets functional.</em> <br> Shop from over 15 different beautiful hand crafted keychains that resemble your favorite characters and also function as a way to keep your important possessions stashed on the go.";
    
    const featuredContainer = document.createElement('div');
    featuredContainer.setAttribute('id', 'featuredContainer');
    featuredContainer.classList.add('contentBox');
    const featuredDescription = document.createElement('div');
    featuredDescription.setAttribute('id', 'featuredDescription');
    featuredDescription.innerHTML = '<h3>Featured Items</h3>';
    featuredContainer.appendChild(featuredDescription);
    
    const content = document.getElementById('content');
    const body = document.getElementById('body');
    body.textContent = '';   
    content.appendChild(body);
    body.appendChild(title);
    body.appendChild(headline);
    body.appendChild(featuredContainer);

    let currentPicture = 0;
    let myTimeout = setTimeout(nextPicture, 5000);

    function nextPicture() {
        currentPicture += 1;
        if (currentPicture > 4) {
            currentPicture = 0;
        }
        picture.style.transform = `translate(${currentPicture * -355}px)`;
        clearTimeout(myTimeout);
        myTimeout = setTimeout(nextPicture, 5000);
    }

    function previousPicture() {
        currentPicture -= 1;
        if (currentPicture < 0) {
            currentPicture = 4;
        }
        picture.style.transform = `translate(${currentPicture * -355}px)`;
        clearTimeout(myTimeout);
        myTimeout = setTimeout(nextPicture, 5000);
    }
    const carousel = document.createElement('div');
    carousel.setAttribute('id', 'carousel');
    const pictureFrame = document.createElement('div');
    pictureFrame.setAttribute('id', 'pictureFrame');
    pictureFrame.classList.add('contentBox');
    const previousButton = document.createElement('button');
    previousButton.setAttribute('id','previousButton');
    previousButton.textContent = '⮕';
    previousButton.style.rotate = '180deg';
    previousButton.addEventListener('click', previousPicture
        // () => {
        // currentPicture -= 1;
        // if (currentPicture < 0) {
        //     currentPicture = 4;
        // }
        // picture.style.transform = `translate(${currentPicture * -355}px)`;} 
    );
    carousel.appendChild(previousButton);
    carousel.appendChild(pictureFrame);
    const nextButton = document.createElement('button');
    nextButton.setAttribute('id','nextButton');
    nextButton.textContent = '⮕';
    nextButton.addEventListener('click', nextPicture
        // () => {
        // currentPicture += 1;
        // if (currentPicture > 4) {
        //     currentPicture = 0;
        // }
        // picture.style.transform = `translate(${currentPicture * -355}px)`;}
    );
    carousel.appendChild(nextButton);

    function importImage(img) {
        let image = new Image();
        image.src = img;
        return image;
    }

    const picture = document.createElement('div');
    picture.setAttribute('id','picture');
    pictureFrame.appendChild(picture);

    picture.appendChild(importImage(chowderThumbnail));
    picture.appendChild(importImage(finnThumbnail));
    picture.appendChild(importImage(kuchiThumbnail));
    picture.appendChild(importImage(jake));
    picture.appendChild(importImage(garfield));

    body.appendChild(carousel);
}

export default loadHome;