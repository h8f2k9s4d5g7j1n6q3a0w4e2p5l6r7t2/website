document.addEventListener('mousemove', function (e) {
    let body = document.querySelector('body');
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 30; // Adjusted size to make images smaller
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';

    body.appendChild(heart);
    setTimeout(function () {
        heart.remove();
    }, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audio");
    var playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        audio.play();
        playButton.style.display = "none"; // Optional: Hide the button after playing
    });
});




