const enterButton = document.getElementById('enter-button');
const buttonSound = document.getElementById('button-sound');

function enterSite() {
    buttonSound.play(); // Play button sound
    setTimeout(() => {
        window.location.href = 'main.html'; // Redirect to main.html
    }, 100); // Small delay for sound to play
}

enterButton.addEventListener('click', enterSite);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        enterSite();
    }
});
