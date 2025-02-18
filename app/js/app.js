function mainSlider() {
  const sectionNodes = document.querySelectorAll('.slider-1')
  sectionNodes.forEach(element => {
    const sliderNode = element.querySelector('.slider-1__swiper')
    const prevNode = element.querySelector('.slider-1__prev')
    const nextNode = element.querySelector('.slider-1__next')
    const delay = 3000
    var swiper = new Swiper(sliderNode, {
      slidesPerView: 1,
      loop: false,
      effect: 'fade',
      loopedSlides: 4,
      // autoplay: {
      //   delay: delay,
      // },
      navigation: {
        nextEl: nextNode,
        prevEl: prevNode,
        disabledClass: 'disabled',
      },
    });
  })
}

mainSlider()

function faq() {
  const items = document.querySelectorAll('.faq__item')
  items.forEach(el => {
    const title = el.querySelector('.faq__title')
    const text = el.querySelector('.faq__text')
    title.addEventListener('click', () => {
      el.classList.toggle('active')
    })
  })
}
faq()

function detail() {
  const ths = document.querySelector('.detail__th-slider')
  const sws = document.querySelector('.detail__sw-slider')
  if (!ths || !sws) {
    return;
  }
  var swiperth = new Swiper(ths, {
    slidesPerView: 'auto',
    loop: false,
    direction: 'horizontal',
    breakpoints: {
      769: {
        direction: 'vertical',
      }
    }
  });


  var swiper = new Swiper(sws, {
    slidesPerView: 1,
    loop: false,
    effect: 'fade',
    thumbs: {
      swiper: swiperth,
    }
  });
}
detail()

function header() {
  const burger = document.querySelector('.header__act--burger')
  const menu = document.querySelector('.header__menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  })
}
header()