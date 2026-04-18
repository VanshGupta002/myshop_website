function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

function whatsapp() {
    try {
        window.open("https://wa.me/916005136346");
    } catch (e) {
        alert("Unable to open WhatsApp. Please contact us directly.");
    }
}

// Contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = contactForm.querySelector('input[type="text"]').value;
            const email = contactForm.querySelector('input[type="email"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            const subject = `Message from ${name}`;
            const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            
            // Open email client
            window.location.href = `mailto:vanshgupta2364@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            alert('Opening your email client to send the message. Please send it to complete.');
            contactForm.reset();
        });
    }
});