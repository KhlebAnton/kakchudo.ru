document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.swiper-img').forEach((swiperEl) => {
        const container = swiperEl.closest('.swiper-img-container');
        
        // Находим элементы для счетчика и текста подписи
        const counterEl = container.querySelector('.swiper-counter');
        const descSpan = container.querySelector('.swiper-img_desc span');
        
        const nextEl = container.querySelector('.swiper-img_nav__next');
        const prevEl = container.querySelector('.swiper-img_nav__prev');
        
        if (!counterEl || !descSpan) return; // Проверяем наличие всех нужных элементов
        
        new Swiper(swiperEl, {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 500,
            navigation: {
                nextEl: nextEl,
                prevEl: prevEl,
            },
            on: {
                slideChange: function() {
                    const currentSlide = this.realIndex + 1;
                    const totalSlides = this.slides.length;
                    
                    // Обновляем счетчик
                    counterEl.textContent = `${currentSlide}/${totalSlides}`;
                    
                    // Получаем активный слайд и обновляем текст подписи из data-text
                    const activeSlide = this.slides[this.activeIndex];
                    const slideText = activeSlide.getAttribute('data-text');
                    if (slideText) {
                        descSpan.textContent = slideText;
                    }
                },
                init: function() {
                    const currentSlide = this.realIndex + 1;
                    const totalSlides = this.slides.length;
                    
                    // Обновляем счетчик при инициализации
                    counterEl.textContent = `${currentSlide}/${totalSlides}`;
                    
                    // Получаем первый слайд и устанавливаем его текст подписи
                    const activeSlide = this.slides[this.activeIndex];
                    const slideText = activeSlide.getAttribute('data-text');
                    if (slideText) {
                        descSpan.textContent = slideText;
                    }
                }
            }
        });
    });
});