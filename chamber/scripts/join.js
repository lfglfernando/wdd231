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

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.portfolio-box', { origin: 'bottom'});

//Modals different membership levels

const courses = [
    {
        level: 'NP Membership',
        benefits: 'This membership level include special events, training, advertising (like spotlight positions on the home page), event discounts',
        price: '$ 0.00',
        
    },
    {
        level: 'Bronze Membership',
        benefits: 'This membership level include special events and training',
        price: '$ 5.00 per month',
        
    },
    {
        level: 'Silver Membership',
        benefits: 'This membership level include special events, training, advertising (like spotlight positions on the home page)',
        price: '$ 10.00 per month',
        
    },
    {
        level: 'Gold Membership',
        benefits: 'This membership level include special events, training, advertising (like spotlight positions on the home page), event discounts and monthly masterminds for employees',
        price: '$ 15.00 per month',
        
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
        <p><strong>Benefits:</strong> ${membership.benefits}</p>
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


