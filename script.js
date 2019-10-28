(() => {
  'use strict';
  // Page is loaded
  const objects = $('.asyncImage');
  Array.from(objects).map((item) => {
    // Start loading image
    const img = new Image();
    img.src = item.dataset.src;
    // Once image is loaded replace the src of the HTML element
    img.onload = () => {
      item.classList.remove('asyncImage');
      return item.nodeName === 'IMG' ? 
        item.src = item.dataset.src :        
        item.style.backgroundImage = `url(${item.dataset.src})`;
    };
  });
})();


//title SVG animation
const isElementInViewport = (element) => {
  var scrollTop = $(window).scrollTop(),
    elementOffset = $(element).offset().top,
    distance = (elementOffset - scrollTop);
  console.log(distance, $(window).height())
  console.log($(window).height()*(4/5) > distance)
  return ($(window).height()*(4/5) > distance)
}

const checkAnimation = () => {
  const elem1 = $('.title1')
  const elem2 = $('.title2')
  if (elem1.hasClass('animate') && elem2.hasClass('animate')) return;
  if (isElementInViewport(elem1)) {
    elem1.addClass('animate');
  }
  if (isElementInViewport(elem2)) {
    elem2.addClass('animate');
  }
}

$(document).on('scroll', () => {
  checkAnimation();
})

