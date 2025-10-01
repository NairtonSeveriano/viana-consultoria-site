document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('viana-score-form');
    const scoreDisplay = document.getElementById('score-value');
    const scoreText = document.querySelector('.score-text');

    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const faturamento = parseFloat(document.getElementById('faturamento').value);
        const valor = parseFloat(document.getElementById('value').value);
        const setor = document.getElementById('sector').value;

        // Lógica de simulação do Viana Score (simples e fictícia)
        let score = 5; // Ponto de partida

        // Aumenta a pontuação se o aumento de faturamento for alto
        if (faturamento > 30) {
            score += 2;
        } else if (faturamento > 15) {
            score += 1;
        }

        // Aumenta a pontuação para setores específicos (ex: Agro e Indústria)
        if (setor === 'agro' || setor === 'industria') {
            score += 1;
        }

        // Garante que o score fique entre 1 e 10
        if (score > 10) score = 10;
        if (score < 1) score = 1;

        // Exibe o resultado
        scoreDisplay.textContent = `${score}/10`;
        scoreText.textContent = 'Resultado da Análise Preliminar (Alto Potencial de Retorno):';
        
        // Estiliza o resultado baseado no score
        if (score >= 8) {
            scoreDisplay.style.color = '#32CD32'; // Verde
        } else if (score >= 5) {
            scoreDisplay.style.color = '#FFD700'; // Amarelo
        } else {
            scoreDisplay.style.color = '#E60000'; // Vermelho
        }
    });
});