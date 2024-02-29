const audioPlayer = document.getElementById('audioPlayer');
const fileInput = document.getElementById('fileInput');

function playPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}

fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];

    if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        audioPlayer.load();
    }
});
