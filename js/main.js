// FOOD スワイパー
const swiper = new Swiper("#js-food-swiper", {
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 10,

  speed: 800,
});
