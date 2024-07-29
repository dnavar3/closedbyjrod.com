document.getElementById('aboutButton').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('contactt').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('videosButton').addEventListener('click', function() {
    document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact-2').addEventListener('click', function() {
    document.getElementById('contactt').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('home-contact').addEventListener('click', function() {
    document.getElementById('contactt').scrollIntoView({ behavior: 'smooth' });
});

/* scripts.js */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Add form validation or submission logic here
    
    alert('Form submitted successfully!');
    this.reset();

    

    
});

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the email value from the input field
    const email = document.getElementById('newsletter-email').value;

    // Perform validation if necessary
    if (!email) {
        alert('dnavar15@icloud.com');
        return;
    }

    // API endpoint and key for Beehive
    const apiEndpoint = 'https://api.beehiiv.com/v1/subscribers';
    const apiKey = 'YOUR_BEEHIVE_API_KEY'; // Replace with your actual Beehive API key

    // Send the email to Beehive
    fetch(apiEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Thank you for subscribing!');
        } else {
            alert('There was an error. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
    });
});