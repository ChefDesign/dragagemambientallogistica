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
    Ambiental.selectForm();
  },
  /**
   * fixedNav
   * @access public
   * @desc fixed navigation bar (bug fix ios)
   *
   * @return {Void}
   */
  fixedNav: function() {
    'use strict';

    $(window).scroll(function() {
      var distance = $('.header').outerHeight(),
          scrollTop = $(window).scrollTop();

      if ((navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')) {
        if (scrollTop >= distance) {
          $('#navigation').css({
            position: 'absolute',
            top: ($(document).scrollTop()) + 'px',
            zIndex: 10
          });
          $('.header').addClass('sticky');
        } else {
          $('#navigation').css({
            position: 'static'
          });
          $('.header').removeClass('sticky');
        }
      } else {
        if (scrollTop >= distance) {
          $('#navigation').addClass('sticky');
          $('.header').addClass('sticky');
        } else {
          $('#navigation').removeClass('sticky');
          $('.header').removeClass('sticky');
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
  },
  /**
   * selectForm
   * @access public
   * @desc form checkbox
   *
   * @return {Void}
   */
  selectForm: function() {
    'use strict';

    $('.wrap').click(function() {
      $(this).children('.checkbox').toggleClass('-selected');
    });
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});