$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 200
      }, 1000);
      // "easeInOutExpo" --> just as a reference if I want it back
    } // End if
  });

  $('body').scrollspy({
    target: '#mainNav',
    offset: 175
  });

  $('a').on('click', function (event) {
    $('.navbar-collapse').collapse('hide');
  });

  $('.landing-page__scroller').on('click', function (event) {
    $('html, body').animate({
      scrollTop: $('#mainNav').offset().top
    }, 1000);
  })

  // Start progress bar animation once it is within the viewport
  // There has got to be a better way to do this...
  var cppWaypoint = new Waypoint({
    element: document.getElementById('c++'),
    handler: function (direction) {
      $('#cpp-progress').addClass('progress-bar--fill'),
      $('#cpp-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var htmlcssWaypoint = new Waypoint({
    element: document.getElementById('html/css'),
    handler: function (direction) {
      $('#htmlcss-progress').addClass('progress-bar--fill'),
      $('#htmlcss-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var bootstrapWaypoint = new Waypoint({
    element: document.getElementById('bootstrap4'),
    handler: function (direction) {
      $('#bootstrap4-progress').addClass('progress-bar--fill'),
      $('#bootstrap4-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var javaWaypoint = new Waypoint({
    element: document.getElementById('java'),
    handler: function (direction) {
      $('#java-progress').addClass('progress-bar--fill'),
      $('#java-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var pythonWaypoint = new Waypoint({
    element: document.getElementById('python'),
    handler: function (direction) {
      $('#python-progress').addClass('progress-bar--fill'),
      $('#python-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var jsWaypoint = new Waypoint({
    element: document.getElementById('javascript'),
    handler: function (direction) {
      $('#javascript-progress').addClass('progress-bar--fill'),
      $('#javascript-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var linuxWaypoint = new Waypoint({
    element: document.getElementById('linux'),
    handler: function (direction) {
      $('#linux-progress').addClass('progress-bar--fill'),
      $('#linux-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
  var spanishWaypoint = new Waypoint({
    element: document.getElementById('spanish'),
    handler: function (direction) {
      $('#spanish-progress').addClass('progress-bar--fill'),
      $('#spanish-progress').addClass('accent-color__background');
    },
    offset: '90%'
  })
});