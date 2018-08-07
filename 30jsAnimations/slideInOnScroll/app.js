console.log('works');

function debounce(func, wait = 20, immediate = true) {
     var timeout;
     return function() {
       var context = this, args = arguments;
       var later = function() {
         timeout = null;
         if (!immediate) func.apply(context, args);
       };
       var callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
     };
   }
//select images
const slideImages = document.querySelectorAll('.slide-in');
// Write a function which will run everytime a person scrolls down
  function checkSlide(e) {
//1 find out height from images on screen when scrolling down
// console.log(window.scrollY);   Show pixels from Top of page
//I need from bottom
console.log(window.scrollY + window.innerHeight);
    // control behavior for every image
    slideImages.forEach(slideImage => {
      // Slide images in at 50% of its height (coming from top)
      const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
      // Slide images in at 50% of its height (coming from bottom)
      const imageBottom = slideImage.offsetTop + slideImage.height;
      // CONDITIONALS
      const isHalfShown =  slideInAt > slideImage.offsetTop;
      const isNotScrolledPast = window.scrollY < imageBottom;

      (isHalfShown && isNotScrolledPast) ?  slideImage.classList.add('active') : slideImage.classList.remove('active');
    });
  }
// adding  scrolldown (event)
  window.addEventListener('scroll',debounce(checkSlide));
