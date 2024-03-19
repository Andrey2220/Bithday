const audio = 
document.querySelector('audio');
const body = document.body

audio.addEventListener('play', () => {
    body.classList.add('play-music');
});
