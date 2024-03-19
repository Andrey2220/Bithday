const { body, querySelector } = document;
const { audio } = querySelector('audio');

audio.addEventListener('play', () => {
    body.classList.add('play-music');
});
