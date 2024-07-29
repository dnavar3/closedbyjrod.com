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


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    const { firstName, lastName, email, phone, message } = data;

    const email_content = `
    First Name: ${firstName}\n
    Last Name: ${lastName}\n
    Email: ${email}\n
    Phone: ${phone}\n
    Message:\n${message}
    `;

    const msg = {
        to: 'dnavar15@icloud.com',
        from: 'your-verified-email@example.com',
        subject: 'New Consultation Request',
        text: email_content,
    };

    try {
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};

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
document.getElementById('contact-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        firstName: formData.get('first-name'),
        lastName: formData.get('last-name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
    };

    const response = await fetch(event.target.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();
    alert(result.message);
});