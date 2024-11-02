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


// scroll reveal


//Modals different membership levels

const courses = [
    {
        level: 'Software Developer',
        benefits: 'Ideal for companies looking to boost their development teams, the Software Developer membership offers valuable visibility and resources to support growth and skills enhancement.',
        price: '$ 10,000 per month',
        
    },
    {
        level: 'Web Developer',
        benefits: 'Perfect for companies focused on web-based projects, this membership offers training and networking opportunities to keep web developers connected and skilled.',
        price: '$ 8,000 per month',
        
    },
    {
        level: 'Cloud Engineer',
        benefits: 'Suited for companies that prioritize cloud solutions, the Cloud Engineer membership ensures visibility and the latest training for effective cloud infrastructure and technology advancements',
        price: '$ 12,000 per month',
        
    },
    {
        level: 'Full-Stack Developer',
        benefits: 'Designed for companies with versatile tech needs, the Full-Stack Developer membership provides well-rounded support and unique networking and learning opportunities across both front-end and back-end development.',
        price: '$ 9,000 per month',
        
    },
]

function displayMembershipDetails(membership) {
    const membershipDetails = document.querySelector('dialog.membership-details');
    
    if (!membershipDetails) {
        console.error('El elemento dialog.membership-details no fue encontrado.');
        return;
    }

    // Mostrar los detalles de la membresía en el modal
    membershipDetails.innerHTML = `
        <button id="closeModal">❌</button>
        <h1>${membership.level}</h1>
        <p><strong>Description:</strong> ${membership.benefits}</p>
        <p><strong>Price:</strong> ${membership.price}</p>
    `;

    // Mostrar el modal
    membershipDetails.showModal();

    // Cerrar el modal cuando se haga clic en el botón de cierre
    document.getElementById('closeModal').addEventListener('click', () => {
        membershipDetails.close();
    });

    // Cerrar el modal cuando se haga clic fuera del contenido
    membershipDetails.addEventListener('click', (e) => {
        if (e.target === membershipDetails) {
            membershipDetails.close();
        }
    });
}


// Añadir evento a los botones "Learn More"
function addButtonClickEvents() {
    const buttons = document.querySelectorAll('.portfolio-box .btn');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Mostrar los detalles de la membresía correspondiente al botón que fue clicado
            displayMembershipDetails(courses[index]);
        });
    });
}

// Llamar a la función para asignar eventos a los botones
addButtonClickEvents();




document.getElementById('timestamp').value = new Date().toISOString();


