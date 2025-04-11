  // JavaScript form submission logic
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    // Reset previous messages
    document.getElementById('message-box').textContent = '';
    document.getElementById('error-message').textContent = '';

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic form validation
    if (!name || !email || !message) {
      document.getElementById('error-message').textContent = 'All fields are required!';
      return;
    }

    if (!validateEmail(email)) {
      document.getElementById('error-message').textContent = 'Please enter a valid email address.';
      return;
    }

    // Simulate successful form submission
    document.getElementById('message-box').textContent = 'Thank you for your message! We will get back to you shortly.';
  });

  // Email validation function
  function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
  }