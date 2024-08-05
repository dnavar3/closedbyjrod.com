document.getElementById('aboutButton').addEventListener('click', function() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('homeButton').addEventListener('click', function() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contact').addEventListener('click', function() {
    document.getElementById('form-h2').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('videosButton').addEventListener('click', function() {
    document.getElementById('videos').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('contact-2').addEventListener('click', function() {
    document.getElementById('form-h2').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('home-contact').addEventListener('click', function() {
    document.getElementById('form-h2').scrollIntoView({ behavior: 'smooth' });
});

/* scripts.js */
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Add form validation or submission logic here
    
    alert('Form submitted successfully!');
    this.reset();

    

    
});

