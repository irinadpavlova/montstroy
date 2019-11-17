var swiper = new Swiper('#swiper-partners.swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '#swiper-partners .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '#swiper-partners .swiper-button-next',
    prevEl: '#swiper-partners .swiper-button-prev',
  },
  breakpoints: {
    1169: {
      slidesPerView: 3,
      spaceBetween: 260
    },
    723: {
      slidesPerView: 1,
      spaceBetween: 0
    }
  }
});
