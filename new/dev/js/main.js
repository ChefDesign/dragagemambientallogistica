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

    var selected = 1;

    $('.wrap').click(function() {
      var value = $(this).children('p').text();
      var hiddenInput = $('<input/>', {
        type: 'hidden',
        name: value,
        value: value
      });

      if ($(this).children('.checkbox').hasClass('-selected')) {
        if (selected <= 1) {
          return false;
        } else {
          $(this).children('.checkbox').removeClass('-selected');
          $(this).find('input').remove();
          selected -= 1;
        }
      } else {
        $(this).children('.checkbox').addClass('-selected');
        hiddenInput.appendTo($(this));
        selected += 1;
      }
    });
  },
  /**
   * jqueryValidationMobile
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

              $('#name, #email, #phone').val('');

              setTimeout(function() {
                botaoEnviarMobile.removeClass('sucesso').text('Solicitar proposta');
              }, 2000);
            }, 2000);
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
   * jqueryValidationDesktop
   * @access public
   * @desc desktop form validation
   *
   * @return {Void}
   */
  jqueryValidationDesktop: function() {
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

              Ambiental.resetForm();

              setTimeout(function() {
                botaoEnviarDesktop.removeClass('sucesso').text('Solicitar proposta');
              }, 2000);
            }, 2000);
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
   * resetForm
   * @access public
   * @desc reseting form
   *
   * @return {Void}
   */
  resetForm: function() {
    'use strict';

    var selecteds = $('.wrap').children('.checkbox');
    var inputsToRemove = $('.wrap').children('input');
    var selectedDefault = $('.contactme').find('div:first');
    var hiddenInput = $('<input/>', {
        type: 'hidden',
        name: 'E-mail',
        value: 'E-mail'
      });

    // reseting inputs
    $('#name, #email, #phone').val('');

    // reseting contactme
    selecteds.removeClass('-selected');
    inputsToRemove.remove();

    // initializing contactme
    selectedDefault.find('span').addClass('-selected');
    hiddenInput.appendTo(selectedDefault);
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});