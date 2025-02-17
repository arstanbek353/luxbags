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