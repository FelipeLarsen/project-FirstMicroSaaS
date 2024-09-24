// Seleciona o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');

// Adiciona um event listener para mudanças no checkbox
themeToggle.addEventListener('change', () => {
  // Alterna entre os temas ao marcar/desmarcar o checkbox
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
});

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const icon = playPauseButton.querySelector('.icon');

// Inicializa o botão com o ícone de play
playPauseButton.classList.add('play');

// Alternar entre Play e Pause
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        icon.src = './assets/pause_24.svg'; // Troca para o ícone de pause
    } else {
        audio.pause();
        icon.src = './assets/play_arrow_24.svg'; // Troca para o ícone de play
    }
});
