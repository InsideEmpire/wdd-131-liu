const ratingList = document.querySelectorAll('.book-meta span');

ratingList.forEach((element) => {
    element.setAttribute('aria-label', `${element.innerText.length} out of 5 stars`);
    console.log(element.getAttribute(('aria-label')));
})

const nav = document.querySelector('nav');

if (nav) {
    nav.setAttribute('aria-label', 'Main navigation');
}