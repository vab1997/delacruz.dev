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
