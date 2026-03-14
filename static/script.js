// Static script for card animations

// Function to shuffle cards
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];  // Swap
    }
    return cards;
}

// Function to flip a card
function flipCard(cardElement) {
    cardElement.classList.toggle('flipped');
}

// Function to add interactive features
function addInteractiveFeatures() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => flipCard(card));
    });
}

// Run the interactive features
addInteractiveFeatures();
