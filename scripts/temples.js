const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastmodified");
lastModified.innerHTML = `Last Modification: ${document.lastModified}`


const toogle = document.getElementById('toogle-icon');
const navLinks = document.getElementById('nav-links');

toogle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});