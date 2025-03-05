document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.slider__swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false, 
        }
    });
});
