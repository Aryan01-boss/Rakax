
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    // Determine scroll direction
    const scrollingDown = lastScrollY < window.scrollY;
    
    // Update the navbar visibility based on scroll direction
    if (scrollingDown && window.scrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        navbar.classList.add('hidden');
    } else {
        // Scrolling up or at top - show navbar
        navbar.classList.remove('hidden');
    }
    
    // Update last scroll position
    lastScrollY = window.scrollY;
});
