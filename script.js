// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-default"]');
    const navbar = document.getElementById('navbar-default');

    if (toggleBtn && navbar) {
        toggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('hidden');
            const expanded = navbar.classList.contains('hidden') ? 'false' : 'true';
            toggleBtn.setAttribute('aria-expanded', expanded);
        });
    }

    // Smooth scroll for anchor links (polyfill for Safari if needed, but CSS scroll-behavior: smooth covers most)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (!navbar.classList.contains('hidden')) {
                    navbar.classList.add('hidden');
                }
                
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
