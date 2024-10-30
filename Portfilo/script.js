// Initialize EmailJS with your public key
(function() {
    emailjs.init('q9ifaAYfj8HSuakr2'); // Replace with your EmailJS public key
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'service_qvssw01'; // Replace with your EmailJS service ID
    const templateID = 'template_bh043p7'; // Replace with your EmailJS template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            document.getElementById('formMessage').innerText = 'Message sent successfully!';
            document.getElementById('formMessage').style.color = 'green';
            this.reset();
        })
        .catch((error) => {
            document.getElementById('formMessage').innerText = 'Failed to send message. Please try again.';
            document.getElementById('formMessage').style.color = 'red';
            console.error('EmailJS Error:', error);
        });
});

// Smooth Scroll for internal links (optional)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header Background Change on Scroll (optional for dynamic effect)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});