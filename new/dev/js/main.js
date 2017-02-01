var MyPage = {
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

    MyPage.slider();
  },
   /**
   * slider
   * @access public
   * @desc slick-carousel plugin
   *
   * @return {Void}
   */
  slider: function() {
    "use strict";

    $(".slider").slick({
      // normal options...
      centerMode: true,
      centerPadding: '20px',
      speed: 300,
      lazyLoad: 'ondemand',

      // the magic
      // responsive: [
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 2
      //     }
      //   },
      //   {
      //     breakpoint: 768,
      //     settings: {
      //       arrows: false,
      //       centerMode: true,
      //       centerPadding: '40px',
      //       slidesToShow: 3
      //   }
      //   },
      //   {
      //     breakpoint: 1024,
      //     settings: {
      //       settings: "unslick" // destroys slick
      //     }
      //   }
      // ]
    });
  }
}

$(document).on("ready", function() {
  "use strict";

  MyPage.init();
});