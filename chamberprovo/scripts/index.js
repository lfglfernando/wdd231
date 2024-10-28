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

//end of header and footer

//WEATHER FUNCTION
const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=40.2338&lon=-111.6585&appid=76db66a39c66dda5bd0cfc4c27c55b39&units=imperial`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);

        // Acceder al clima actual desde la primera entrada de data.list
        const currentWeather = data.list[0];
        const iconCode = currentWeather.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Actualizar la temperatura y descripción actual
        document.querySelector('#current-temp span').textContent = Math.round(currentWeather.main.temp);
        document.querySelector('#current-desc span').textContent = currentWeather.weather[0].description.toUpperCase();

        // Actualizar el ícono del clima
        const iconElement = document.querySelector('.icon-weather');
        iconElement.src = iconUrl;
        iconElement.alt = currentWeather.weather[0].description;
        iconElement.style.width = '50px';

        // Crear pronóstico de 3 días (seleccionando las horas correspondientes)
        const forecastElement = document.querySelector('#forecast');
        forecastElement.innerHTML = '';

        // Filtrar la lista para obtener datos de los próximos 3 días al mediodía (12:00 PM)
        const middayForecasts = data.list.filter(forecast => 
            new Date(forecast.dt * 1000).getHours() === 12
        ).slice(0, 3); // Tomar solo los próximos 3 días

        middayForecasts.forEach((day) => {
            const dayName = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
            const temp = Math.round(day.main.temp);
            const forecastItem = document.createElement('li');
            forecastItem.textContent = `${dayName}: ${temp}°F`;
            forecastElement.appendChild(forecastItem);
        });
              
    } catch (error) {
        console.error('Error fetching weather data', error);
        document.querySelector('#weather-info').innerHTML = 'Unable to retrieve weather data.';
    }
}

fetchWeather();


//function for the spotlight membership

const url = 'data/members.json';
const cards = document.querySelector('#cards'); 

async function getBusinessData() {
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); 
        }
        const data = await response.json(); 

        const filteredCompanies = data.companies.filter(business =>
            business.membership_level === 'Silver' || business.membership_level === 'Gold'
            );

        const randomCompanies = getRandomCompanies(filteredCompanies, 2);

        displayBusinesses(randomCompanies); 
    } catch (error) {
        console.error("Error fetching the data:", error); 
    }
}

getBusinessData(); 

function getRandomCompanies(companies, num) {
    const shuffled = companies.sort(() => 0.5 - Math.random());
    return shuffled.slice(0,num);
}

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