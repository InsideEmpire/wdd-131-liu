const main = document.getElementById('main-content');
const movieList = document.getElementById('movie-list');

if (main) {
    main.setAttribute('role', 'main');
}

if (movieList) {
    movieList.setAttribute('aria-label', 'Movie Reviews');
}

const ratingList = document.querySelectorAll('.movie p span');

ratingList.forEach((element) => {
    element.setAttribute('aria-label', `${element.innerText.length} out of 5 stars`);
    console.log(element.getAttribute('aria-label'));
})