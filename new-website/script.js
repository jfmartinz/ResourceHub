document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Reset messages
        document.getElementById('form-message-warning').innerText = '';
        document.getElementById('form-message-warning').style.display = 'none';
        document.getElementById('form-message-success').style.display = 'none';

        // Check if all fields are filled
        let fname = document.getElementById('fname').value.trim();
        let lname = document.getElementById('lname').value.trim();
        let email = document.getElementById('email').value.trim();
        let message = document.getElementById('message').value.trim();

        if (fname === '' || lname === '' || email === '' || message === '') {
            // Display warning for missing inputs
            document.getElementById('form-message-warning').innerText = 'Missing inputs';
            document.getElementById('form-message-warning').style.display = 'block';
        } else {
            // Simulate form submission (replace with actual submission logic)
            // For demo purposes, always show success message after 1 second
            setTimeout(function() {
                // Display success message
                document.getElementById('form-message-success').style.display = 'block';

                // Optionally, reset the form
                document.getElementById('contactForm').reset();
            }, 10000);
        }
    });
});
