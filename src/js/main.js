  $(window).on("load",function() {
    setTimeout(function() {
      $('.page-loader').fadeOut('slow', function() {});
    }, 1000);
 
  });

$(document).ready(function(){

	//toggle mobile menu    
    if ($('.js-hamburger').length) {
        $('.js-hamburger').click(function(){
          var nav = $('.nav')

          $(this).toggleClass('is-active');
          nav.toggleClass('nav--open');
          $('body').toggleClass('body-menu-open');
      }); 
    };

    if ($('.js-tz-slider').length) {
      $('.js-tz-slider').slick({
      	dots: true,
      	arrows: false,
      	customPaging : function(slider, i) {
              var thumb = jQuery(slider.$slides[i]).data();
              // return '<a>'+(i+1)+'</a>'; // <-- old
              return '<a>'+('0'+(i+1)).slice(-2)+'</a>'; // <-- new
          }
      });
  }
    //wow
    function wow() {
      new WOW().init();
    };

function setLayoutHeight(sellector){
    jQuery(sellector).height('auto');
    var highestBox = 0;
    jQuery(sellector).each(function ()
    {
        if (jQuery(this).height() > highestBox)
        {
            highestBox = jQuery(this).height();
        }
    });
    jQuery(sellector).height(highestBox);
};

function callSetLayoutHeight(){
    for (var i = 1; i <= 10; i++)
    {
        if ($('.js-set-height-' + i).length > 0)
        {
            setLayoutHeight('.js-set-height-' + i);
        }
    }
}

$(window).resize(function() {
  callSetLayoutHeight();
  if(screen.width > 991) {
    wow();
  }
});
if(screen.width > 991) {
  wow();
}
callSetLayoutHeight();

particlesJS("particles-mission", {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": false,
        "value_area": 800
      }
    },
    "color": {
      "value": "#fff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.10415581710238508,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0,
        "opacity_min": 0.008115236356258881,
        "sync": false
      }
    },
    "size": {
      "value": 16.023971861905395,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 80.11985930952699,
      "color": "#ffffff",
      "opacity": 0.17626369048095938,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 3.204794372381079,
      "direction": "left",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 0,
        "rotateY": 0
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 0,
        "size": 0,
        "duration": 0,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": false
});
});