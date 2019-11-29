var swiper = new Swiper('.swiper-advantages', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 0,
  slidesPerView: 'auto',
  autoHeight: true,
  breakpoints :{
    1023:{
      loop: true,
      spaceBetween : 10,
      centeredSlides: true,
    },
    767:{
      spaceBetween: 0,
    }
  }
});

var swiper = new Swiper('.swiper-partners', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  slidesPerView: 'auto',
  autoHeight: true,
  breakpoints :{
    1169:{
      spaceBetween : 10,
      centeredSlides: true,
    },
    768:{
      spaceBetween: 0,
    }
  }
});

// var hamburger = document.querySelector(".burger-menu");
// var menu = document.querySelector(".main-navigation");
var heading1 = document.querySelector(".services-item-1");
var heading2 = document.querySelector(".services-item-2");
var heading3 = document.querySelector(".services-item-3");
var heading4 = document.querySelector(".services-item-4");
var heading5 = document.querySelector(".services-item-5");
var heading6 = document.querySelector(".services-item-6");
var service1 = document.querySelector(".service-1");
var service2 = document.querySelector(".service-2");
var service3 = document.querySelector(".service-3");
var service4 = document.querySelector(".service-4");
var service5 = document.querySelector(".service-5");
var service6 = document.querySelector(".service-6");
var list1 = document.querySelector(".services-list-1");
var list2 = document.querySelector(".services-list-2");
var list3 = document.querySelector(".services-list-3");
var list4 = document.querySelector(".services-list-4");
var list5 = document.querySelector(".services-list-5");
var list6 = document.querySelector(".services-list-6");

// menu.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   navigation.classList.toggle("modal-show");
// });


var hamburger = document.querySelector('.burger-menu');
var menu = document.querySelector('.main-navigation');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('modal-show');
};

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();

  toggleMenu();
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == hamburger;
  var menu_is_active = menu.classList.contains('modal-show');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});

heading1.addEventListener("click", function (evt) {
  evt.preventDefault();
  list1.classList.toggle("modal-show");
  service1.classList.toggle("services-item-active");
});

heading2.addEventListener("click", function (evt) {
  evt.preventDefault();
  list2.classList.toggle("modal-show");
  service2.classList.toggle("services-item-active");
});

heading3.addEventListener("click", function (evt) {
  evt.preventDefault();
  list3.classList.toggle("modal-show");
  service3.classList.toggle("services-item-active");
});

heading4.addEventListener("click", function (evt) {
  evt.preventDefault();
  list4.classList.toggle("modal-show");
  service4.classList.toggle("services-item-active");
});

heading5.addEventListener("click", function (evt) {
  evt.preventDefault();
  list5.classList.toggle("modal-show");
  service5.classList.toggle("services-item-active");
});

heading6.addEventListener("click", function (evt) {
  evt.preventDefault();
  list6.classList.toggle("modal-show");
  service6.classList.toggle("services-item-active");
});
