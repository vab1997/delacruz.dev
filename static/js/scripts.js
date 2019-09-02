var mobileBreakpoint = 768;

var applyResponsiveChanges = debounce(function() {
  var timeline = window.document.querySelector(".timeline");
  if (window.innerWidth <= mobileBreakpoint) {
    if (timeline && timeline.className.indexOf("is-centered") !== -1) {
      timeline.className = timeline.className.replace("is-centered", "");
    }
  }

  if (window.innerWidth > mobileBreakpoint) {
    if (timeline && timeline.className.indexOf("is-centered") === -1) {
      timeline.className = timeline.className + " is-centered";
    }
  }
}, 250);

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
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

window.addEventListener("resize", applyResponsiveChanges);

applyResponsiveChanges();

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});
