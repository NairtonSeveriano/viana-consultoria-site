document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container-servicos');
    const slides = document.querySelectorAll('.carousel-slide-servicos');
    const prevButton = document.querySelector('.carousel-prev-servicos');
    const nextButton = document.querySelector('.carousel-next-servicos');

    if (!carousel || slides.length === 0) return; // Se não houver carrossel, para o script.

    let currentIndex = 0;
    const slidesPerPage = 3; 

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const totalSlides = slides.length;
        // Calcula a largura de UM slide com espaçamento
        // O valor 33.33% vem do CSS (100% / 3)
        // O valor 20px é o gap entre eles.
        const slideWidth = slides[0].offsetWidth + 20; 

        // Limita o índice de forma segura
        let maxIndex = totalSlides - slidesPerPage;
        if (maxIndex < 0) maxIndex = 0; // Garante que o índice não seja negativo se houver poucos slides.
        
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }

        // Aplica a translação
        carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;

        // Esconde ou mostra os botões de navegação
        prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentIndex >= maxIndex ? 'none' : 'block';
    }

    // Navegação para o slide anterior
    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex - 1;
        updateCarousel();
    });

    // Navegação para o próximo slide
    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex + 1;
        updateCarousel();
    });

    // O carrossel deve ser ajustado ao redimensionar a janela
    window.addEventListener('resize', updateCarousel);

    // Garante que o carrossel inicie corretamente
    updateCarousel();
});