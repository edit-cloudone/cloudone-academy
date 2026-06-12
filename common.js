// Load after DOM is ready
document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener('click', function (e) {

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });

    });

    // Load Header
    const header = document.getElementById('header');

    if (header) {
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                header.innerHTML = data;
            })
            .catch(error => {
                console.error('Header load failed:', error);
            });
    }

});

// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');

    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}