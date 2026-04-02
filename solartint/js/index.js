const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelectorAll('nav li');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('change');
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    navList.forEach((li) => {
        li.classList.toggle('show');
    });
});