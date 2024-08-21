$(document).ready(function() {
    document.getElementById('js-mailalert').innerHTML = '';
    // Open contact form
    $('#contactBtn').click(function() {
        $('.main-container').addClass('active').removeClass('reverse');
    });

    // Close contact form
    $('#closeBtn').click(function() {
        $('.main-container').addClass('reverse').removeClass('active');
        document.getElementById('js-mailalert').innerHTML = '';
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        document.getElementById('js-mailalert').style.color = '#28a745';
        document.getElementById('js-mailalert').innerHTML = 'Your message is being sent. Please wait a moment...';
        event.preventDefault(); // Prevent the default form submission
    
        // Collect form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
    
        // Send the form data using EmailJS
        emailjs.send("service_5yoreop", "template_mue9abm", formData)
            .then(function(response) {
                document.getElementById('js-mailalert').style.color = '#28a745';
                document.getElementById('js-mailalert').innerHTML = 'Message sent successfully!';
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                document.getElementById('js-mailalert').style.color = '#dc3545';
                document.getElementById('js-mailalert').innerHTML = 'There was an issue sending your message. Please try again later or reach out to us at workingnadeem@gmail.com.';
                console.log('FAILED...', error);
            });
    });
    
});

document.getElementById('contactBtn').addEventListener('click', function() {
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 500); // 1000 milliseconds = 1 second
});

