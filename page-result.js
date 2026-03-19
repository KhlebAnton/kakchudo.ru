document.addEventListener('DOMContentLoaded', function() {
    const imgSwiper = new Swiper('.swiper-img', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 500,
      
        navigation: {
            nextEl: '.swiper-img_nav__next',
            prevEl: '.swiper-img_nav__prev',
        },
        on: {
            slideChange: function() {
                const currentSlide = this.realIndex + 1;
                const totalSlides = this.slides.length;
                document.querySelector('.swiper-counter').textContent = `${currentSlide}/${totalSlides}`;
            }
        }
    });
});