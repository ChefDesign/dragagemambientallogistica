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

    MyPage.initFunction();
  },
   /**
   * initFunction
   * @access public
   * @desc initFunction
   *
   * @return {Void}
   */
  initFunction: function() {
      "use strict";

      console.log("Project starter with LESS!");
  }
}

$(document).on("ready", function() {
  "use strict";

  MyPage.init();
});