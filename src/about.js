function loadAbout() {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.classList.add('contentBox');
    title.innerHTML = '<h1>About Psychadelic Ward</h1>';

    const description = document.createElement('div');
    description.setAttribute('id', 'description');
    description.classList.add('contentBox');
    description.innerHTML = `<p>Psychadelic Ward run and operated by Raelyn. She lives in Indianapolis and
    creates everything to order and by hand. Pricing reflects the amount of time and detail put into the product. 
    Check out <a href="https://www.etsy.com/shop/Psychedelicwardst?ref=simple-shop-header-name&listing_id=1388400316">her Etsy</a>
    to browse the rest of her available products.</p>`
    
    const body = document.getElementById('body');
    body.textContent = '';
    body.appendChild(title);
    body.appendChild(description);
}

export default loadAbout;