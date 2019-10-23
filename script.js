const logo = document.querySelectorAll('.title path');

console.log(logo);

logo.forEach((letter,i) => {
  console.log(`letter ${i} is ${letter.getTotalLength()}`);
})

const isElementInViewport = (element) => {
  // var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
  // var viewportTop = $(scrollElem).scrollTop();
  // var viewportBottom = viewportTop + $(window).height();

  // // Get the position of the element on the page.
  // var elemTop = Math.round( element.offset().top );
  // console.log('elemTop', elemTop)
  // var elemBottom = elemTop + element.height();
  // console.log('elemBottom', elemBottom)
  // console.log('viewTop', viewportTop, 'viewBottom', viewportBottom)

  // return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
  var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#about').offset().top,
    distance      = (elementOffset - scrollTop);
  console.log(distance, $(window).height())
  console.log($(window).height()*(4/5) > distance)
  return ($(window).height()*(4/5) > distance)
}

const checkAnimation = () => {
  const elem = $('.title')
  if (elem.hasClass('animate')) return;
  if (isElementInViewport(elem)) {
    elem.addClass('animate');
  }
}

$(document).on('scroll', () => {
  checkAnimation();
})