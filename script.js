// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Prevent form submission (since backend is not implemented)
document.querySelector('.contact form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por contactarnos! Pronto te responderemos.');
    this.reset();
});