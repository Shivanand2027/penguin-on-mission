// Current scene tracker
let currentScene = 1;
let noClickAttempts = 0;

// Scene transition function
function nextScene(sceneNumber) {
    // Hide current scene
    const currentSceneElement = document.getElementById(`scene${currentScene}`);
    currentSceneElement.classList.remove('active');
    
    // Show next scene after a short delay
    setTimeout(() => {
        const nextSceneElement = document.getElementById(`scene${sceneNumber}`);
        nextSceneElement.classList.add('active');
        currentScene = sceneNumber;
    }, 300);
}

// NO button escape function
function escapeButton() {
    const noBtn = document.getElementById('noBtn');
    const container = noBtn.parentElement;
    
    // Get random position
    const maxX = container.offsetWidth - noBtn.offsetWidth - 20;
    const maxY = container.offsetHeight - noBtn.offsetHeight - 20;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    // Move button
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// NO button click attempt
function tryClickNo() {
    noClickAttempts++;
    const trollText = document.getElementById('trollText');
    const noBtn = document.getElementById('noBtn');
    
    // Shake button
    noBtn.style.animation = 'shake 0.5s';
    setTimeout(() => {
        noBtn.style.animation = '';
    }, 500);
    
    if (noClickAttempts === 1) {
        trollText.textContent = "Oops, button moved! 😏";
    } else if (noClickAttempts === 2) {
        trollText.textContent = "Still trying? 😌";
    } else if (noClickAttempts >= 3) {
        trollText.textContent = "Nice try 😌 Penguin already knows the answer.";
        noBtn.style.display = 'none';
    }
}

// Accept rose function
function acceptRose() {
    // Start heart rain
    startHeartRain();
    
    // Move to celebration scene
    setTimeout(() => {
        nextScene(11);
    }, 500);
}

// Heart rain animation
function startHeartRain() {
    const heartRainContainer = document.getElementById('heartRain');
    const heartCount = 50;
    
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            createHeart(heartRainContainer);
        }, i * 100);
    }
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '❤️';
    
    // Random horizontal position
    heart.style.left = Math.random() * 100 + '%';
    
    // Random animation duration (3-6 seconds)
    const duration = 3 + Math.random() * 3;
    heart.style.animationDuration = duration + 's';
    
    // Random size
    const size = 20 + Math.random() * 20;
    heart.style.fontSize = size + 'px';
    
    container.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Toast notification function
function showToast(message) {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Add click joke on penguin images (bonus feature)
document.addEventListener('DOMContentLoaded', () => {
    const penguinImages = document.querySelectorAll('.penguin-img');
    const jokes = [
        "Penguin says: I'm not short, I'm fun-sized! 🐧",
        "Penguin says: Ashu is my favorite person 💖",
        "Penguin says: This rose took 3 business days to prepare 🌹",
        "Penguin says: I practiced this 47 times 😌",
        "Penguin says: My heart goes brrr when you smile 💓",
        "Penguin says: I waddle for you every day 🐾",
        "Penguin says: You make my heart flip like a fish! 🐟"
    ];
    
    penguinImages.forEach(img => {
        img.addEventListener('click', () => {
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            showToast(randomJoke);
        });
    });
});

// Initialize choice container to allow absolute positioning
document.addEventListener('DOMContentLoaded', () => {
    const choiceContainer = document.querySelector('.choice-container');
    if (choiceContainer) {
        choiceContainer.style.position = 'relative';
        choiceContainer.style.minHeight = '150px';
    }
});