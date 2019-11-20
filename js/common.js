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

var menu = document.querySelector(".burger-menu");
var navigation = document.querySelector(".main-navigation");
var heading1 = document.querySelector(".services-item-1");
var service1 = document.querySelector(".service-1");
var heading2 = document.querySelector(".services-item-2");
var service2 = document.querySelector(".service-2");
var heading3 = document.querySelector(".services-item-3");
var service3 = document.querySelector(".service-3");
var heading4 = document.querySelector(".services-item-4");
var service4 = document.querySelector(".service-4");
var heading5 = document.querySelector(".services-item-5");
var service5 = document.querySelector(".service-5");
var heading6 = document.querySelector(".services-item-6");
var service6 = document.querySelector(".service-6");
var list1 = document.querySelector(".services-list-1");
var list2 = document.querySelector(".services-list-2");
var list3 = document.querySelector(".services-list-3");
var list4 = document.querySelector(".services-list-4");
var list5 = document.querySelector(".services-list-5");
var list6 = document.querySelector(".services-list-6");

menu.addEventListener("click", function (evt) {
  evt.preventDefault();
  navigation.classList.toggle("modal-show");
});

heading1.addEventListener("click", function (evt) {
  evt.preventDefault();
  service1.classList.toggle("modal-show");
});

heading2.addEventListener("click", function (evt) {
  evt.preventDefault();
  service2.classList.toggle("modal-show");
});

heading3.addEventListener("click", function (evt) {
  evt.preventDefault();
  service3.classList.toggle("modal-show");
});

heading4.addEventListener("click", function (evt) {
  evt.preventDefault();
  service4.classList.toggle("modal-show");
});

heading5.addEventListener("click", function (evt) {
  evt.preventDefault();
  service5.classList.toggle("modal-show");
});

heading6.addEventListener("click", function (evt) {
  evt.preventDefault();
  service6.classList.toggle("modal-show");
});
