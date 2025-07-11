document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    const baseFontSize = parseFloat(window.getComputedStyle(body).fontSize);
    let currentMultiplier = 1; // Para rastrear o estado atual

    // Tenta carregar a preferência de tamanho da fonte do localStorage
    const savedFontSizeMultiplier = localStorage.getItem('fontSizeMultiplier');
    if (savedFontSizeMultiplier) {
        currentMultiplier = parseFloat(savedFontSizeMultiplier);
        body.style.fontSize = (baseFontSize * currentMultiplier) + "px";
    }

    const aumentarTextoBtn = document.getElementById("aumentar-texto");
    const diminuirTextoBtn = document.getElementById("diminuir-texto");
    const resetarTextoBtn = document.getElementById("resetar-texto");

    if (aumentarTextoBtn) {
        aumentarTextoBtn.addEventListener("click", function() {
            if (currentMultiplier < 1.8) { // Limite para não aumentar demais
                currentMultiplier *= 1.15;
                body.style.fontSize = (baseFontSize * currentMultiplier) + "px";
                localStorage.setItem('fontSizeMultiplier', currentMultiplier.toString());
            }
        });
    }

    if (diminuirTextoBtn) {
        diminuirTextoBtn.addEventListener("click", function() {
            if (currentMultiplier > 0.7) { // Limite para não diminuir demais
                currentMultiplier /= 1.15;
                body.style.fontSize = (baseFontSize * currentMultiplier) + "px";
                localStorage.setItem('fontSizeMultiplier', currentMultiplier.toString());
            }
        });
    }

    if (resetarTextoBtn) {
        resetarTextoBtn.addEventListener("click", function() {
            currentMultiplier = 1;
            body.style.fontSize = baseFontSize + "px";
            localStorage.removeItem('fontSizeMultiplier');
        });
    }
});