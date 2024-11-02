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


//Get current date
const currentDate = new Date();
const lastVisit = localStorage.getItem('lastVisit');
const messageElement = document.getElementById('visitor-message');

if (lastVisit) {
    const lastVisitDate = new Date(parseInt(lastVisit, 10));
    const timeDiff = currentDate - lastVisitDate;
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
        messageElement.textContent = "Back so soon! Awesome!";
    } else if (daysDiff === 1) {
        messageElement.textContent = "You last visited 1 day ago.";
    } else {
        messageElement.textContent = `You last visited ${daysDiff} days ago.`;
    }
} else {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
}

//Update last visit date
localStorage.setItem('lastVisit', Date.now());
