const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelectorAll('nav a');

menuBtn.addEventListener('click', () => {
    navList.forEach((a) => {
        a.classList.toggle('show')
    })
    menuBtn.classList.toggle('change');
})