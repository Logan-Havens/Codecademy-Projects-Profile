document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-mode');
    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();  
            alert('Message sent! Thanks for reaching out.');
            contactForm.reset(); 
        });
    }
});