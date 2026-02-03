const ratingList = document.querySelectorAll('.movie p span');

ratingList.forEach((element) => {
    element.setAttribute('aria-label', `${element.innerText.length} out of 5 stars`);
    console.log(element.getAttribute(('aria-label')));
})