const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelectorAll('.nav-links li');



menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle("open"); 
    links.forEach(link=> {
        link.classList.toggle ("fade");
    });
})



