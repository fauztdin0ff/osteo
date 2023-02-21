
let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper('.page', {
	//свои классы
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	//вертикальный слайдер
	direction: 'vertical',

	//количество слайдов для показа
	slidesPerView: 'auto',

	//включаем параллакс
	parallax: true,

	//управление клавиатурой
	keyboard: {
		//включить выключить
		enabled: true,
		//включить выключить только когда слайдер в пределах вьюпорта
		onlyInViewport: true,
		//включить pageUp pageDown
		pageUpDown: true,
	},

	//управление колесом мыши
	mousewheel: {
		//чувствительность колеса мыши
		sensitivity: 1,
		//класс обьекта на котором будет срабатывать прокрутка мышью
		//eventsTarget: ".image-slider"
	},

	//отключение слайдера если слайдов меньше чем надо
	watchOverflow: true,

	//скорость
	speed: 800,

	//обновить свайпер при изменении элементов слайдера
	observer: true,

	//обновить свайпер при изменении родительских элементов слайдера
	observeParents: true,

	//обновить свайпер при изменении дочерних элементов слайдера
	observeSlideChildren: true,


	//Навигация
	//буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	//скролл
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		//возможность перетаскивать скролл
		draggable: true
	},

	//отключаем автоинициализацию
	init: false,

	//события
	on: {
		//событие инициализации
		init: function() {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
		},
		//событие смены слайда
		slideChange: function() {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
		resize: function() {
			setScrollType();
		}
	},
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider() {
	if(menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function(e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if(wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}

	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if(pageSlideContentHeight > window.innerHeight){
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}

pageSlider.init();

let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
};
menuBody.addEventListener('click', function (e) {
   if (e.target.matches('a')) {
      menuBody.classList.remove('_active');
      iconMenu.classList.remove('_active');
      document.body.classList.remove('_lock');
   }
});

const swiper = new Swiper('.swiper', {
   loop: true,
   grabCursor: true,
   slideToClickedSlide: false,
   navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
   keyboard: {
      enabled: false,
   },
   mousewheel: false,
   watchOverflow: true,
   spaceBetween: 20,
   slidesPerGroup: 1,
   centeredSlides: false,
   initialSlide: 0,
   freeMode: false,
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 2,
      }
   },
});
