// Start Slick Slider with Jquery.

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  nextArrow: $('#next_slick'),
  draggable: 'false',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// Start Odometer JS

// count numbers
var count = 0;

// count reset
var countReset = 0;

// Click button next
document.querySelector('#next_slick').addEventListener('click', function(){
  
  // Capture center element slide next sibling.
  var element = document.querySelector('.slick-slide.slick-current.slick-active.slick-center').nextSibling;

  // Slides start in third
  var slides = [ 300, 400, 500, 600, 100, 200 ];

  // Start odomter
  od = new Odometer({
    el: element,
    value: 0
    }
  );

  // Add number to element
  od.update( slides[count] );

  // Reset count
  if(count == slides.length ){
    count = 0 ;
  }

  // Second Time
  if( countReset >= slides.length ){
    // Reset element
    element.innerHTML = 0;   

    // Add number 
    setTimeout(() => {
      element.innerHTML = slides[count - 1 ];              
    }, 10)
  }

  // They are increasing
  count++;
  countReset++;

})
