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

// Obtener la URL completa
const currentUrl = window.location.href;
console.log(currentUrl);

// Dividir la URL en dos partes
const everything = currentUrl.split('?');

// Obtener solo la segunda mitad (datos del formulario)
let formData = everything[1].split('&');

// Función para mostrar los valores extraídos del formulario
function show(cup) {
    let result = '';
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split('=')[1]).replace(/\+/g, ' ');
        }
    });
    return result;
}

// Extraer y formatear el timestamp
let timestamp = show("timestamp");
let formattedDate = timestamp ? new Date(timestamp).toLocaleString() : 'N/A';

// Mostrar la información en la página
const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
    <p><span>Membership for:</span> ${show("first")} ${show("last")}</p>
    <p><span>Your Email:</span> <a href="mailto:${show('email')}">${show('email')}</a></p>
    <p><span>Your Phone:</span> ${show('phone')}</p>
    <p><span>Organization's Name:</span> ${show('business')}</p>
    <p><span>Membership Level:</span> ${show('membership-level')}</p>
    <p><span>Form Submission Date and Time:</span> ${formattedDate}</p>
`;
