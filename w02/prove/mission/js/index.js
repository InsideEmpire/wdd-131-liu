let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let fonts = document.querySelectorAll('.font');
let background = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png';
        fonts.forEach(function(font) {
            font.style.color = 'white'
        });
        background.style.backgroundColor = 'black';
    } else {
        logo.src = 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp';
        fonts.forEach(function(font) {
            font.style.color = 'black'
        });
        background.style.backgroundColor = 'white';
    }
}           