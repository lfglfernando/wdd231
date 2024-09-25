const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets)
    displayProphets(data.prophets); //note that we reference the prophets array of the JSON data object, not just the object
}

getProphetData();

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        //Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.classList.add('prophet-card');
        let fullName = document.createElement('h2');
        card.classList.add('prophet-name');
        let dateOfBirth = document.createElement('p');
        card.classList.add('prophet-dateOfBirth');
        let placeOfBirth = document.createElement('p');
        card.classList.add('prophet-placeOfBirth');
        let portrait = document.createElement('img');
        card.classList.add('prophet-img');

        //Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.textContent = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); //fill
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        //Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    }); // end of arrow function and forEach loop
}
