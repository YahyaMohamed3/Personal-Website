document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const socialButton = document.querySelectorAll('.light-social');
    const cards = document.querySelectorAll('.card');
    const socialLinks = document.querySelectorAll('#social-links');
    const homePage = document.querySelector('.hompage');
    const homeLink = document.getElementById('home-link');
    const about = document.getElementById('about');
    const aboutDiv = document.querySelector('.about');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light' || document.documentElement.classList.contains('light-mode-loading')) {
        body.classList.add('light-mode');
        document.documentElement.classList.remove('light-mode-loading');
        updateThemeIcon();
    }

    homeLink.addEventListener('click', () => {
        homePage.style.display = 'block';
        aboutDiv.style.display = 'none';
        
        // Update active states
        navLinks.forEach(link => link.classList.remove('active'));
        homeLink.classList.add('active');
        
        applyTheme(); // Reapply theme when switching pages
    });

    about.addEventListener('click', () => {
        homePage.style.display = 'none';
        aboutDiv.style.display = 'block';
        
        // Update active states
        navLinks.forEach(link => link.classList.remove('active'));
        about.classList.add('active');
        
        applyTheme(); // Reapply theme when switching pages
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        updateThemeIcon();
        applyTheme(); // Reapply theme when toggling
        
        // Save theme preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-mode')) {
            icon.classList.remove('bx-sun');
            icon.classList.add('bx-moon');
        } else {
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
        }
    }

    // Apply initial theme styling
    applyTheme();

    function applyTheme() {
        // Remove inline styles from nav links to let CSS control them
        navLinks.forEach(link => link.style.color = '');
        
        if (!body.classList.contains('light-mode')) {
            // Dark mode styling
            socialButton.forEach(button => {
                button.classList.remove('btn-outline-dark');
                button.classList.add('btn-outline-light');
            });

            cards.forEach(card => {
                card.classList.remove('bg-light');
                card.style.border = '2px solid rgba(255, 255, 255, 0.24)';
                card.style.boxShadow = '0 0 10px rgba(169, 169, 169, 0.22)';
                card.style.color = 'white';
                card.style.backgroundColor = 'rgba(32, 32, 32, 0.154)';
            });

            socialLinks.forEach(link => link.style.color = 'white');
        } else {
            // Light mode styling - remove inline styles to let CSS take over
            cards.forEach(card => {
                card.style.border = '';
                card.style.boxShadow = '';
                card.style.color = '';
                card.style.backgroundColor = '';
            });
        }
    }
});