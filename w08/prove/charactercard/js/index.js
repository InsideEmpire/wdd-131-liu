const skibidi = {
    character: 'Skibidi',
    img: 'https://upload.wikimedia.org/wikipedia/en/0/09/Skibidi_toilet_screenshot.webp',
    role: 'Warrior',
    level: 67,
    health: 100,
    attacked: function (attack = 20) {
        if (this.health >= attack) {
            this.health -= attack;
        } else {
            this.health = 0;
            alert('Character Died!');
        }
    },
    levelUp: function (level = 1) {
        this.level += level;
    }
}

const img = document.querySelector('.image');
const character = document.querySelector('.name');
const stats = document.querySelector('.stats');
const stats_class = stats.querySelector('.stats-class');
const stats_hp = stats.querySelector('.stats-hp');
const stats_level = stats.querySelector('.stats-level');
const buttons = document.querySelector('.buttons');
const button_attacked = buttons.querySelector('.button-attacked');
const button_levelup = buttons.querySelector('.button-levelup');

function updateUI() {
    stats_hp.innerHTML = `<strong>HP: </strong>${skibidi.health}`;
    stats_level.innerHTML = `<strong>Level: </strong>${skibidi.level}`;
}

img.src = skibidi.img;
character.innerHTML = skibidi.character;
stats_class.innerHTML = `<strong>Class: </strong>${skibidi.role}`
stats_hp.innerHTML = `<strong>HP: </strong>${skibidi.health}`;
stats_level.innerHTML = `<strong>Level: </strong>${skibidi.level}`;

button_attacked.addEventListener('click', () => {
    skibidi.attacked();
    updateUI();
});

button_levelup.addEventListener('click', () => {
    skibidi.levelUp();
    updateUI();
});