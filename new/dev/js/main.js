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
    Ambiental.jqueryValidation();
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
   * @desc form validation
   *
   * @return {Void}
   */
  jqueryValidation: function() {
    'use strict';

    var btn = $('#enviar'),
        form = $('#form');

    jQuery.validator.setDefaults({
        errorClass: 'error',
        errorElement: 'p',
        validClass: 'valid'
    });

    btn.on('click', function() {
      form.validate({
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
              btn.val('Enviando...');
            },
            complete: function() {
              btn.val('Processando...');
            },
            success: function() {
              setTimeout(function() {
                btn.addClass('sucesso').val('Obrigado pelo contato');

                setTimeout(function() {
                  btn.removeClass('sucesso').val('Solicitar proposta');
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
    });
  }
}

$(document).on('ready', function() {
  'use strict';

  Ambiental.init();
});