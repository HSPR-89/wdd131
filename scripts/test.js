// Toggle the navigation menu when the hamburger icon is clicked
const hamburger = document.getElementById('hamburger-icon');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
