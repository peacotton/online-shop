import chowderThumbnail from './img/chowderThumbnail.jpg';
import finnThumbnail from './img/finnThumbnail.jpg';
import kuchiThumbnail from './img/kuchiThumbnail.jpg';
import jake from './img/jake.jpg';
import garfield from './img/garfield.jpg';
import schnitzel from './img/schnitzel.jpg';
import puppycat from './img/puppycat.jpg';

function loadShop(){
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.classList.add('contentBox');
    title.innerHTML = '<h1>Shop</h1>';

    const shop = document.createElement('div');
    shop.setAttribute('id', 'shop');
    shop.classList.add('contentBox');

    function shopGrid(item, text) {
        const description = document.createElement('div');
        description.classList.add('itemDescription');
        description.innerHTML = text;
        const img = document.createElement('div');
        img.classList.add('itemImage');
        img.appendChild(importImage(item));

        shop.appendChild(description);
        shop.appendChild(img);
    }

    function importImage(img) {
         let image = new Image();
         image.src = img;
         return image;
    }

    shopGrid(chowderThumbnail, '<h1>Chowder Keychain</h1><br>$65');
    shopGrid(kuchiThumbnail, '<h1>Kuchi Keychain</h1><br>$45');
    shopGrid(finnThumbnail, '<h1>Finn Keychain</h1><br>$45');
    shopGrid(jake, '<h1>Jake Keychain</h1><br>$40');
    shopGrid(garfield, '<h1>Garfield Keychain</h1><br>$60');
    shopGrid(schnitzel, '<h1>Schnitzel Figurine</h1><br>$70');
    shopGrid(puppycat, '<h1>Puppycat Keychain</h1><br>$45');

    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(title);
    body.appendChild(shop);
    console.log('imported from shop.js!');
}

export default loadShop;