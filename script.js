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
  // console.log(distance, $(window).height())
  // console.log($(window).height()*(4/5) > distance)
  return ($(window).height()*(4/5) > distance)
}

const checkAnimation = () => {
  const elem1 = $('.title1');
  const elem2 = $('.title2');
  const elem3 = $('.hexagon');
  if (elem1.hasClass('animate') && elem2.hasClass('animate') && elem3.hasClass('fade_animation')) return;
  if (isElementInViewport(elem1)) {
    elem1.addClass('animate');
    elem3.addClass('fade_animation');
  }
  if (isElementInViewport(elem2)) {
    elem2.addClass('animate');
  }
}

$(document).on('scroll', () => {
  checkAnimation();
})

//honeycomb navigation animation
let i = 0;
const expand = () => {
  if (i===0){
    $('#nav_icon').html('<i class="fa fa-times fa-2x x"></i>');
    $('.item').eq(0).css('transform','translate(64px, 37px)');
    $('.item').eq(1).css('transform','translate(0px, 75px)');
    i=1;
  } else{
    $('#nav_icon').html('<i class="fas fa-bars fa-2x bars"></i>');
    $('.item').eq(0).css('transform','translateX(0px)');
    $('.item').eq(1).css('transform','translateY(0px)');
    i=0;
  }
}