var Ambiental = {
  /**
   * instances
   * @access public
   * @desc instancias
   *
   * @type {Object}
   */
  instances: {},
  /**
   * variables
   * @access public
   * @desc variaveis
   *
   * @type {Object}
   */
  variables: {},
  /**
   * init
   * @access public
   * @desc constructor
   *
   * @return {Void}
   */
  init: function() {
    "use strict";

    Ambiental.fixedNav();
    Ambiental.videoAnchor();
  },
  /**
   * fixedNav
   * @access public
   * @desc fixed navigation bar
   *
   * @return {Void}
   */
  fixedNav: function() {
    'use strict';

    $(window).scroll(function() {
      var distance = $('.header').outerHeight(),
          scrollTop = $(window).scrollTop();

      if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
        console.log("ios");
        if (scrollTop >= distance) {
          $('#navigation').css('top', ($(window).height() + $(document).scrollTop() - distance ) + 'px');
          $('.cover').addClass('sticky');
        } else {
          $('#navigation').css('position', 'static');
          $('.cover').removeClass('sticky');
        }
      } else {
        if (scrollTop >= distance) {
          console.log("android");
          $('#navigation').addClass('sticky');
          $('.cover').addClass('sticky');
        } else {
          $('#navigation').removeClass('sticky');
          $('.cover').removeClass('sticky');
        }
      }
    });
  },
  /**
   * videoAnchor
   * @access public
   * @desc plugin jquery-smooth-scroll
   *
   * @return {Void}
   */
  videoAnchor: function() {
    'use strict';

    $('#scrollVideo').smoothScroll({
      offset: 0,
      easing: 'swing',
      speed: 500,
      preventDefault: true
    });
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});