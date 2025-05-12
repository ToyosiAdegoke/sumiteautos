// ✅ Contact Form Submission with WhatsApp alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    // ✅ WhatsApp Alert Section
    const name = this.querySelector('[name="name"]').value;
    const email = this.querySelector('[name="email"]').value;
    const message = this.querySelector('[name="message"]').value;

    // ✅ Build WhatsApp Message
    const whatsappMessage = `New Inquiry from Sumite Autos Website:%0A
Name: ${name}%0A
Email: ${email}%0A
Message: ${message}`;

    // ✅ WhatsApp Link (using your number 08036137700)
    const whatsappUrl = `https://wa.me/2348036137700?text=${encodeURIComponent(whatsappMessage)}`;

    // ✅ Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
});
