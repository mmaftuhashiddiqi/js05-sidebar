const menuButton = document.querySelector('.menu-button input');
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav');


menuButton.addEventListener('click', function() {
    nav.classList.remove('slide');
    menuToggle.checked = false;
});

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});