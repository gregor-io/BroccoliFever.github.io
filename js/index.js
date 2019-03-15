$(document).ready(function(){
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top - 75
        }, 1000, "easeInOutExpo");
      } // End if
    });

    $('body').scrollspy({
        target: '#mainNav',
        offset: 125
    });

    $('a').on('click', function(event) {
        $('.navbar-collapse').collapse('hide');
    });

    // Start progress bar animation once it is within the viewport
    var waypoint = new Waypoint({
      element: document.getElementById('skills'),
      handler: function(direction) {
        $('.progress-bar').addClass('progress-bar--fill');
      },
      offset: '85%' 
    })
});