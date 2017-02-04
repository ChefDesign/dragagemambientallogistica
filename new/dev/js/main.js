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

    console.log("em desenvolvimento");
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});