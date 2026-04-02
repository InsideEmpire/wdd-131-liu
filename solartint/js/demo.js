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

const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

gallery.addEventListener('click', openModal);

function openModal(event) {
    console.log(event.target);
    if (event.target.tagName != 'IMG') {
        console.log('skip');
        return;
    }

    modal.showModal();
    modalImage.src = event.target.src;
}
closeButton.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
