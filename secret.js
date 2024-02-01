document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.moving-button');

    // Set the button's initial position
    setInitialPosition(button);

    // Ensure the button always appears above everything else
    button.style.zIndex = '999';

    // Add a click event listener to move the button on click
    button.addEventListener('click', moveButton);

    // After 5 seconds, show the button
    setTimeout(() => {
        button.style.opacity = 1;
    }, 5000);
});

document.addEventListener("DOMContentLoaded", function () {
    const Ybutton = document.querySelector('.Ybutton');

    // Set the Ybutton's initial position
    Ybutton.style.left = '90px';
    Ybutton.style.top = '40px';

    // Ensure the Ybutton always appears above everything else
    Ybutton.style.zIndex = '999';

    // After 5 seconds, show the Ybutton
    setTimeout(() => {
        Ybutton.style.opacity = 1;
    }, 5000);
    // No click event listener for the Ybutton, so it won't affect the moving button
});

function setInitialPosition(button) {
    // Set the button's initial position
    button.style.left = '250px';
    button.style.top = '40px';
}
function moveButton() {
    const button = document.querySelector('.moving-button');

    // Get random coordinates within the window excluding both center and a 100-pixel border around the edges
    const randomCoordinates = getRandomExcludingCenterAndEdges(button.offsetWidth, window.innerWidth, 100, -300, 900, -300, 500);

    // Set the button's position, ensuring it stays within the screen boundaries
    button.style.left = `${randomCoordinates.x}px`;
    button.style.top = `${randomCoordinates.y}px`;
}

function getRandomExcludingCenterAndEdges(elementWidth, viewportWidth, exclusionWidth, minXLimit, maxXLimit, minYLimit, maxYLimit) {
    const centerExclusionWidth = 100; // Adjust this value to define the width of the excluded center region
    const minX = Math.max(minXLimit, exclusionWidth + centerExclusionWidth / 2);
    const maxX = Math.min(maxXLimit - elementWidth, viewportWidth - elementWidth - centerExclusionWidth / 2 - exclusionWidth);

    const minY = minYLimit;
    const maxY = maxYLimit - elementWidth;

    const randomX = Math.max(minX, Math.min(maxX, Math.floor(Math.random() * (maxX - minX + 1) + minX)));
    const randomY = Math.max(minY, Math.min(maxY, Math.floor(Math.random() * (maxY - minY + 1) + minY)));

    return { x: randomX, y: randomY };
}
document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        audio.play();
        playButton.style.display = "none"; // Optional: Hide the button after playing
    });
});