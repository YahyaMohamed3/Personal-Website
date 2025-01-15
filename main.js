document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    const navLinks = document.querySelectorAll('.nav-link');
    const socialButton = document.querySelectorAll('.light-social');
    const cards = document.querySelectorAll('.card');
    const socialLinks = document.querySelectorAll('#social-links');
    const projectCards = document.querySelectorAll('.project-card');
    const viewProject = document.querySelectorAll('.view-project');
    const homePage = document.querySelector('.hompage');
    const homeLink = document.getElementById('home-link');
    const about = document.getElementById('about');
    const aboutDiv = document.querySelector('.about');
    const resumeLink = document.getElementById('resume-link');

    homeLink.addEventListener('click' , ()=>{
        homePage.style.display = 'block'
        aboutDiv.style.display = 'none'

    });

    about.addEventListener('click', () => {
        homePage.style.display = 'none'
        aboutDiv.style.display = 'block'
    });
    


    // Set default theme to light mode
    document.body.classList.remove('dark-mode');
    icon.classList.remove('bx-moon');
    icon.classList.add('bx-sun');
    icon.style.color = 'black';
    navLinks.forEach(link => link.style.color = 'black');
    socialButton.forEach(button => {
        button.classList.add('btn-outline-dark');
        button.classList.remove('btn-outline-light');
    });

    // Default styling for all cards including project cards
    cards.forEach(card => {
        card.classList.add('bg-light');
        card.style.color = 'black';
        card.style.border = '2px solid rgba(0, 0, 0, 0.1)';
        card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            // Dark mode active
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
            icon.style.color = 'white';
            navLinks.forEach(link => link.style.color = 'white');
            socialButton.forEach(button => {
                button.classList.remove('btn-outline-dark');
                button.classList.add('btn-outline-light');
            });

            // Cards for dark mode
            cards.forEach(card => {
                card.classList.remove('bg-light');
                card.classList.add('bg-black.bg-gradient');
                card.style.border = '2px solid rgba(255, 255, 255, 0.24)';
                card.style.boxShadow = '0 0 10px rgba(169, 169, 169, 0.22)';
                card.style.color = 'white';
            });

            // Specific styling for project cards in dark mode
            projectCards.forEach(card => {
                card.style.backgroundColor = 'rgba(32, 32, 32, 0.154)';
                card.querySelector('.card-overlay').style.backgroundColor = 'rgba(106, 106, 106, 0.12)';
                card.querySelector('.overlay-text').style.color = 'white';
            });

            socialLinks.forEach(link => link.style.color = 'white');

            viewProject.forEach(button => {
                button.style.color = '#fff';
            });
        } else {
            // Light mode active
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
            icon.style.color = 'black';
            navLinks.forEach(link => link.style.color = 'black');
            socialButton.forEach(button => {
                button.classList.add('btn-outline-dark');
                button.classList.remove('btn-outline-light');
            });

            // Cards for light mode
            cards.forEach(card => {
                card.classList.remove('bg-black.bg-gradient');
                card.classList.add('bg-light');
                card.style.border = '2px solid rgba(0, 0, 0, 0.1)';
                card.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
                card.style.color = 'black';
            });

            // Specific styling for project cards in light mode
            projectCards.forEach(card => {
                card.style.backgroundColor = '#fff';
                card.querySelector('.overlay-text').style.color = 'black';
                card.querySelector('.card-overlay').style.backgroundColor = 'rgba(161, 161, 161, 0.1)';
            });

            viewProject.forEach(button => {
                button.style.color = 'black';
            });

            socialLinks.forEach(link => link.style.color = 'black');
        }
    });

    
});