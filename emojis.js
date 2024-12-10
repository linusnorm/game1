// Emojis to scatter in the background
const emojis = ["💄", "🎮", "🚗", "🍷", "🎤", "👠", "👔", "🕶", "🏎", "🎯", "💅", "💪", "🚀", "🍾", "🎬", "🎧", "💡", "📱", "🏆", "⚽", "👗", "👕", "👠"];

// Function to randomize size, position, and add floating animation
function generateEmojis() {
    const body = document.body;

    // Create 50 emojis to fill the screen
    for (let i = 0; i < 50; i++) {
        const emojiSpan = document.createElement("span");
        emojiSpan.classList.add("emoji");

        // Random emoji from array
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        emojiSpan.innerText = randomEmoji;

        // Random size between 2em and 7em (larger sizes)
        const randomSize = Math.random() * (7 - 2) + 2;
        emojiSpan.style.fontSize = `${randomSize}em`;

        // Random position across the screen
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        emojiSpan.style.top = `${randomTop}%`;
        emojiSpan.style.left = `${randomLeft}%`;

        // Append to body
        body.appendChild(emojiSpan);

        // Make the emoji float around
        animateFloating(emojiSpan);
    }
}

// Function to animate the floating movement
function animateFloating(element) {
    // Set random movement speeds and directions
    const randomDuration = Math.random() * (30 - 15) + 15; // Duration between 15s and 30s
    const randomX = Math.random() * 100 - 50; // Horizontal movement between -50 and 50
    const randomY = Math.random() * 100 - 50; // Vertical movement between -50 and 50

    element.animate(
        [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${randomX}px, ${randomY}px)` },
            { transform: 'translate(0, 0)' }
        ],
        {
            duration: randomDuration * 1000, // Convert to milliseconds
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        }
    );
}

// Call the function when the page loads
window.onload = generateEmojis;
