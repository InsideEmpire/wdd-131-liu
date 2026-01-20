const menuButton = document.querySelector('.menu-btn')
const menuLinks = document.querySelectorAll('nav a')

menuButton.addEventListener('click', () => {
    menuLinks.forEach((menuLink) => {
        menuLink.classList.toggle('show')
    })
})