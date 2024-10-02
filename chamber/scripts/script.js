/*================ toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

const url = 'data/members.json';
const cards = document.querySelector('#cards'); 

async function getBusinessData() {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json(); 

        displayBusinesses(data.companies); 
    } catch (error) {
        console.error("Error fetching the data:", error); 
    }
}

getBusinessData(); 

const displayBusinesses = (companies) => {
    // card build code goes here
     companies.forEach((business) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('div');
        card.classList.add('cards-box');
        let portrait = document.createElement('img');
        card.classList.add('business-img');
        let fullName = document.createElement('h2');
        card.classList.add('business-name');
        let address = document.createElement('h2');
        card.classList.add('business-address');
        let phoneNumber = document.createElement('h2');
        card.classList.add('business-phone-number');
        let website = document.createElement('a');
        card.classList.add('business-website');
        let businessLevel = document.createElement('h2');
        card.classList.add('business-level');
        

        //Build the h2 content out to show the prophet's full name
        fullName.innerHTML = `<span class='label'>Company:</span> ${business.name}`;
        address.innerHTML = `<span class='label'>Address:</span> ${business.address}`;
        phoneNumber.innerHTML = `<span class='label'>Phone Number:</span> ${business.phone_number}`;


        website.innerHTML = `<span class='label'>Website:</span> ${business.website_url}`;
        website.href = business.website_url;
        website.target = '_blank';
        website.classList.add('business-website');


        businessLevel.innerHTML = `<span class='label'>Membership Level:</span> ${business.membership_level}`;


        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `Portrait of ${business.name}`); //fill
        portrait.setAttribute('rel', 'preload');
        portrait.setAttribute('as', 'image');
        

        //Append the section(card) with the created elements
        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(businessLevel);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
};

// Selecciona los botones y el contenedor de las tarjetas
const gridViewButton = document.getElementById('gridView');
const listViewButton = document.getElementById('listView');
const cardsContainer = document.getElementById('cards');

// Función para cambiar a vista grid
gridViewButton.addEventListener('click', () => {
    cardsContainer.classList.add('grid-view');
    cardsContainer.classList.remove('list-view');
});

// Función para cambiar a vista lista
listViewButton.addEventListener('click', () => {
    cardsContainer.classList.add('list-view');
    cardsContainer.classList.remove('grid-view');
});

