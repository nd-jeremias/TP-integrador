const togglemenuElement = document.getElementById('toggle-menu');
const navContainerElement = document.getElementById('nav-container');

togglemenuElement.addEventListener ('click', () => {
    navContainerElement.classList.toggle ('nav-container--show');
});