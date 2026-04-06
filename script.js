// script.js

// Form validation
function validateForm() {
    const form = document.getElementById('myForm');
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    
    if (name === '' || email === '') {
        alert('All fields must be filled out.');
        return false;
    }
    return true;
}

// Smooth scrolling
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
}

// Interactive features for home page
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));
    });
});

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(e) {
    if (!validateForm()) {
        e.preventDefault();
    }
});
