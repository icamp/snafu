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

  // select all the images that will be listened
  const sliderImages = document.querySelectorAll('.slide-in');

  // write a function that will run everytime the user scrolls
  function checkslide(e) {
    // console.count(e);
    // loop over every image and calculate where it needs to be shown
    // console.log(window.scrollY);
    sliderImages.forEach(sliderImage => {
      const slideInAt = (window.scrollY + window.innerHeight) // the pixel level at the bottom of the viewport, 
                                                              // where the sliding should start 
                          - sliderImage.height / 2; // halfway through the image
      console.log(slideInAt);

      const imageBottom = sliderImage.offsetTop + sliderImage.height; //offsetTop is the distance from top of page to top of img
      const isHalfShown = slideInAt > sliderImage.offsetTop; // make sure that the slideInAt value is greater than the top of where the actual img is
      const isNotScrolledPast = window.scrollY < imageBottom; // make sure we're not scrolled all the way past the image

      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add('active');
      } else {
        sliderImage.classList.remove('active');
      }
    });
  }

  // run the function checkSlide when the window is scrolled
  window.addEventListener('scroll', debounce(checkslide));
  