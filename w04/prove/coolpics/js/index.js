const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('nav')

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('display')
})

const gallery = document.querySelector('.pics');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(event) {
    console.log(event.target);
    if (event.target.tagName != 'IMG') {
        console.log('skip');
        return;
    }

    modal.showModal();
    console.log(modal);
    console.log(modalImage);
    // modalImage.src = event.target.src.replace('-sm', '-full');
    modalImage.src = 'https://wddbyui.github.io/wdd131/images/norris-full.jpg'
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          