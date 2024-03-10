const sections = document.querySelectorAll('section');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const form = document.getElementById('checkout-form');

let currentSection = 0; 

function showSection(sectionIndex) {
    sections.forEach((section, index) => {
        section.classList.toggle('active', sectionIndex === index);
    })
}

function handleNext() {
    currentSection++;

    // Add validation for the current section before moving on

    if (currentSection >= sections.length) {
        currentSection = sections.length - 1; 
    }
    showSection(currentSection);
}
// Inside your handleNext() function
const currentStep = document.querySelector('.step.active');
currentStep.classList.remove('active'); 

const nextStep = currentStep.nextElementSibling; 
nextStep.classList.add('active'); 

function handlePrev() {
    currentSection--;
    if (currentSection < 0 ) {
        currentSection = 0;
    }
    showSection(currentSection);
}

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission (we'll handle it with JavaScript)
    // Gather form data, send it to your server for processing
}

nextBtn.addEventListener('click', handleNext);
prevBtn.addEventListener('click', handlePrev);
form.addEventListener('submit', handleSubmit);

showSection(currentSection); 
