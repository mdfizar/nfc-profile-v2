// nfc intro video =========
const video = document.getElementById('hoverVideo');

video.addEventListener('mouseover', () => {
    video.play();
});

video.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0; // Optional: Reset to the start of the video
});