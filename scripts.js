document.querySelector('.card-button').addEventListener('click', function() {
    alert('Номер карты: 2200 8872 4172 1488');
});

document.querySelector('.support-button').addEventListener('click', function() {
    alert('Для поддержки писать в тг @vrode_zak');
});
const audio = document.getElementById('audio');
const musicButton = document.querySelector('.music-button');
let isPlaying = false;

musicButton.addEventListener('click', function() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
        musicButton.textContent = 'Stop';
    } else {
        audio.pause();
        isPlaying = false;
        musicButton.textContent = '▶';
    }
});
audio.volume = 0.2;

