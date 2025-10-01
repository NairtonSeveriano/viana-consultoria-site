document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os slides e botões do carrossel da Viana
    const slides = document.querySelectorAll('.carousel-slide-viana');
    const prevButton = document.querySelector('.carousel-prev-viana');
    const nextButton = document.querySelector('.carousel-next-viana');

    let currentIndex = 0;

    // Função para atualizar a visibilidade dos slides
    function updateCarousel() {
        slides.forEach((slide) => {
            slide.style.display = 'none'; // Esconde todos os slides
        });
        
        // Mostra o slide atual
        slides[currentIndex].style.display = 'block';
    }

    // Navegação para o slide anterior
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    // Navegação para o próximo slide
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Animação automática a cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);

    // Mostra o primeiro slide ao carregar a página
    updateCarousel();
});