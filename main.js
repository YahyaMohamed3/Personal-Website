document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const socialButton = document.querySelectorAll('.light-social');
    const cards = document.querySelectorAll('.card');
    const socialLinks = document.querySelectorAll('#social-links');
    const homePage = document.querySelector('.hompage');
    const homeLink = document.getElementById('home-link');
    const about = document.getElementById('about');
    const aboutDiv = document.querySelector('.about');

    homeLink.addEventListener('click', () => {
        homePage.style.display = 'block';
        aboutDiv.style.display = 'none';
    });

    about.addEventListener('click', () => {
        homePage.style.display = 'none';
        aboutDiv.style.display = 'block';
    });

    // Set dark mode as default
    navLinks.forEach(link => link.style.color = 'white');
    socialButton.forEach(button => {
        button.classList.remove('btn-outline-dark');
        button.classList.add('btn-outline-light');
    });

    // Default styling for all cards in dark mode
    cards.forEach(card => {
        card.classList.remove('bg-light');
        card.style.border = '2px solid rgba(255, 255, 255, 0.24)';
        card.style.boxShadow = '0 0 10px rgba(169, 169, 169, 0.22)';
        card.style.color = 'white';
        card.style.backgroundColor = 'rgba(32, 32, 32, 0.154)';
    });

    socialLinks.forEach(link => link.style.color = 'white');
});