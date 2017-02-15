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
    'use strict';

    Ambiental.fixedNav();
    Ambiental.videoAnchor();
    Ambiental.selectForm();
    Ambiental.jqueryValidationMobile();
    Ambiental.jqueryValidationDesktop();
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
  },
  /**
   * jqueryValidation
   * @access public
   * @desc mobile form validation
   *
   * @return {Void}
   */
  jqueryValidationMobile: function() {
    'use strict';

    var botaoEnviarMobile = $('#btnMobile'),
        formularioMobile = $('#form-mobile');

    jQuery.validator.setDefaults({
        errorClass: 'error',
        errorElement: 'p',
        validClass: 'valid'
    });

    formularioMobile.validate({
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: 'Digite seu nome',
          minlength: jQuery.validator.format('Mínimo {0} caracteres')
        },
        email: {
          required: 'Digite seu e-mail',
          email: 'Insira um e-mail válido'
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
      },
      submitHandler: function(form) {
        var dados = $(form).serialize();

        $.ajax({
          type: 'POST',
          url: 'processa.php',
          data: dados,
          dataType: 'text',
          cache: false,
          beforeSend: function() {
            botaoEnviarMobile.text('Enviando...');
          },
          complete: function() {
            botaoEnviarMobile.text('Processando...');
          },
          success: function() {
            setTimeout(function() {
              botaoEnviarMobile.addClass('sucesso').text('Obrigado pelo contato');

              setTimeout(function() {
                botaoEnviarMobile.removeClass('sucesso').text('Solicitar proposta');
              }, 2000);
            }, 2000);

            $('#name, #email, #phone').val('');
          },
          error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
          }
        });

        return false;
      }
    });
  },
  /**
   * jqueryValidation
   * @access public
   * @desc desktop form validation
   *
   * @return {Void}
   */
  jqueryValidationDeskop: function() {
    'use strict';

    var botaoEnviarDesktop = $('#btnDesktop'),
        formularioDesktop = $('#form-desktop');

    jQuery.validator.setDefaults({
        errorClass: 'error',
        errorElement: 'p',
        validClass: 'valid'
    });

    formularioDesktop.validate({
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: {
          required: 'Digite seu nome',
          minlength: jQuery.validator.format('Mínimo {0} caracteres')
        },
        email: {
          required: 'Digite seu e-mail',
          email: 'Insira um e-mail válido'
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
      },
      submitHandler: function(form) {
        var dados = $(form).serialize();

        $.ajax({
          type: 'POST',
          url: 'processa.php',
          data: dados,
          dataType: 'text',
          cache: false,
          beforeSend: function() {
            botaoEnviarDesktop.text('Enviando...');
          },
          complete: function() {
            botaoEnviarDesktop.text('Processando...');
          },
          success: function() {
            setTimeout(function() {
              botaoEnviarDesktop.addClass('sucesso').text('Obrigado pelo contato');

              setTimeout(function() {
                botaoEnviarDesktop.removeClass('sucesso').text('Solicitar proposta');
              }, 2000);
            }, 2000);

            $('#name, #email, #phone').val('');
          },
          error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
          }
        });

        return false;
      }
    });
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});