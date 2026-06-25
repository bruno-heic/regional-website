document.addEventListener("DOMContentLoaded", () => {
    
    const audio = document.getElementById("meu-audio");
    
    const btnPlay = document.getElementById("btn-play");
    const playIcon = document.getElementById("play-icon");
    const btnForward = document.getElementById("btn-forward");
    const btnBackward = document.getElementById("btn-backward");
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.getElementById("progress-container");
    const currentTimeEl = document.getElementById("current-time");
    const totalTimeEl = document.getElementById("total-time");

    // Formatar segundos em MM:SS
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Atualiza a duração total assim que o arquivo de áudio for carregado
    audio.addEventListener("loadedmetadata", () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });

    // Controla o Play / Pause
    btnPlay.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            // Muda o ícone para Pause
            playIcon.innerHTML = `<path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
        } else {
            audio.pause();
            // Muda o ícone para Play
            playIcon.innerHTML = `<path fill="currentColor" d="M8 5v14l11-7z"/>`;
        }
    });

    // Atualiza a barra de progresso conforme o áudio toca
    audio.addEventListener("timeupdate", () => {
        const percentage = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${percentage}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    // Avançar 15 segundos
    btnForward.addEventListener("click", () => {
        audio.currentTime = Math.min(audio.currentTime + 15, audio.duration);
    });

    // Voltar 15 segundos
    btnBackward.addEventListener("click", () => {
        audio.currentTime = Math.max(audio.currentTime - 15, 0);
    });

    // Permite clicar na barra para avançar ou voltar para um ponto específico
    progressContainer.addEventListener("click", (e) => {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        
        if (duration) {
            audio.currentTime = (clickX / width) * duration;
        }
    });

    // Reseta o ícone quando o áudio terminar
    audio.addEventListener("ended", () => {
        playIcon.innerHTML = `<path fill="currentColor" d="M8 5v14l11-7z"/>`;
    });
});