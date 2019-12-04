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

var panelItem = document.querySelectorAll('.services-item'),
  active = document.getElementsByClassName('services-item-active');

Array.from(panelItem).forEach(function(item, i, panelItem) {
  item.addEventListener('click', function(e) {
    if (active.length > 0 && active[0] !== this) // если есть активный элемент, и это не тот по которому кликнули
      active[0].classList.remove('services-item-active'); // убрать класс panel-active

    // изменить состояние класса panel-active на текущем элементе: добавить если не было, убрать если было.
    this.classList.toggle('services-item-active');
  });
});

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();

    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;

      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});

var tel = document.getElementById('phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};
var mask = IMask(tel, maskOptions);
