const facts = [
    "Crocodiles are reptiles and belong to the order Crocodylia.",
    "They can live for over 70 years in the wild.",
    "Crocodiles are carnivorous and primarily eat fish, birds, and mammals.",
    "They have powerful jaws with a bite force of over 3,000 pounds per square inch.",
    "Crocodiles can hold their breath underwater for up to an hour.",
    "They are ectothermic, meaning their body temperature is regulated by their environment.",
    "Crocodiles can swim at speeds of up to 20 miles per hour in short bursts.",
    "They have a unique ability to see in the dark due to a reflective layer behind their retinas.",
    "Crocodiles communicate through a variety of vocalizations, including growls and hisses.",
    "There are 15 recognized species of crocodiles, including the Nile crocodile and the saltwater crocodile."
];

let attempts = 0;

const factDisplay = document.getElementById('factDisplay');
const factButton = document.getElementById('factButton');

factButton.addEventListener('click', () => {
    if (attempts < 2) {
        moveButton();
        attempts++;
    } else {
        displayRandomFact();
    }
});

function moveButton() {
    const randomX = Math.random() * (window.innerWidth - factButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - factButton.offsetHeight);
    factButton.style.position = 'absolute';
    factButton.style.left = `${randomX}px`;
    factButton.style.top = `${randomY}px`;
}

function displayRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
    factButton.style.position = 'static'; // Reset button position
}
