function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  
  // Function to check if element is in viewport
  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class when element is in viewport
  function checkAnimation() {
    const target = document.querySelector('.aboutdetail .about h3');
    if (isElementInViewport(target)) {
      target.classList.add('start-animation');
      window.removeEventListener('scroll', scrollHandler);
    }
  }
  
  // Scroll handler with debounce
  const scrollHandler = debounce(checkAnimation);
  
  window.addEventListener('scroll', scrollHandler);
  
  // Initial check in case element is already in viewport
  document.addEventListener('DOMContentLoaded', () => {
    checkAnimation();
  });