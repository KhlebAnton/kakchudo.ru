document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.swiper-img').forEach((swiperEl) => {
        const container = swiperEl.closest('.swiper-img-container');
        
        // Находим текстовый элемент для счетчика (может быть .swiper-slide или .swiper-counter)
        const textEl = container.querySelector('.swiper-img_text .swiper-slide') || 
                      container.querySelector('.swiper-counter');
        
        const nextEl = container.querySelector('.swiper-img_nav__next');
        const prevEl = container.querySelector('.swiper-img_nav__prev');
        
        if (!textEl) return; // Если нет элемента для текста, пропускаем
        
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
                    textEl.textContent = `${currentSlide}/${totalSlides}`;
                },
                init: function() {
                    const currentSlide = this.realIndex + 1;
                    const totalSlides = this.slides.length;
                    textEl.textContent = `${currentSlide}/${totalSlides}`;
                }
            }
        });
    });
});