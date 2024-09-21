/*================ toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*================ scroll sections avtive link =================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*================== sticky navbar ==================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*================== remove toggle icon and navbar when click navbar link (scroll) ==================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*================== scroll reveal ==================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*================== typed js ==================*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer', 'Web Developer', 'UX/UI Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;


const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;


const courses = [
    {
        subject: 'CSE',
        number: 110,
        className: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        className: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        className: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        className: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        className: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        className: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

function createClassCard(clases) {
    const container = document.querySelector('.services-container');

    const figure = document.createElement('div');
    figure.classList.add('services-box'); // Add a class for easier styling

    if (clases.completed) {
        figure.classList.add('completed-course');
    } else {
        figure.classList.add('not-completed-course');
    }

    const title = document.createElement('h3');
    title.textContent = clases.className;
    figure.appendChild(title);

    const subject = document.createElement('p');
    subject.innerHTML = `<span class="label">Subject:</span> ${clases.subject} ${clases.number}`;
    figure.appendChild(subject);

    const certificate = document.createElement('p');
    certificate.innerHTML = `<span class="label">Certificate:</span> ${clases.certificate}`;
    figure.appendChild(certificate);

    const description = document.createElement('p');
    description.innerHTML = `<span class="label">Description:</span> ${clases.description}`;
    figure.appendChild(description);

    const technology = document.createElement('p');
    technology.innerHTML = `<span class="label">Technology:</span> ${clases.technology}`;
    figure.appendChild(technology);

    container.appendChild(figure);
}

function showTotalCredits() {
    const totalCredits = courses.reduce((total, clase) => total + clase.credits, 0);
    document.getElementById('creditCount').textContent = totalCredits;
}

  courses.forEach(createClassCard);
  showTotalCredits();

  document.querySelector('.filter-classes').addEventListener('click', function(event) {
    event.preventDefault();
    
    if (event.target.tagName === 'A') {
        const filter = event.target.textContent.toLowerCase();
        const container = document.querySelector('.services-container');
        container.innerHTML = ''; //Clear existing content

        let filteredClasses;

        switch (filter) {
            case 'all':
                filteredClasses = courses;
                break;
            case 'cse':
                filteredClasses = courses.filter(clases => clases.subject == 'CSE');
                break;
            case 'wdd':
                filteredClasses = courses.filter(clases => clases.subject == 'WDD');
                break;
            default:
                filteredClasses = courses;

        }

        filteredClasses.forEach(createClassCard);
    }
  });