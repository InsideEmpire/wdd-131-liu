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

const features = [
    {
        icon: "🌍",
        title: "CoreLocation Engine",
        content: "Fetches exact coordinates to map the sun's true altitude in your sky."
    },
    {
        icon: "📈",
        title: "6500K to 3500K",
        content: "Stepless transitions that mimic the natural cooling and warming of daylight."
    },
    {
        icon: "🛡️",
        title: "Zero-Network Privacy",
        content: "100% offline astronomical calculations. No data ever leaves your Mac."
    },
    {
        icon: "🚀",
        title: "Native Swift Performance",
        content: "Built with SwiftUI and Metal for near-zero CPU impact. It runs silently in the menu bar without draining your MacBook's battery."
    }
]

const featuresList = document.querySelector('.features-list')

features.map(convertor)
    .forEach((features) => {
        featuresList.innerHTML += features
    })

function convertor(feature) {
    return `
        <article class="feature-item">
            <div class="icon-box" aria-hidden="true">${feature.icon}</div>
            <div class="feature-content">
                <h3>${feature.title}</h3>
                <p>${feature.content}</p>
            </div>
        </article>
    `
}