$(document).ready(function () {

    if ($('.section-title').length > 0) {
        function animation() {
            var screen = $(window).height();
            var scrollTop = $(window).scrollTop();

            $('.animation').each(function () {
                let position = $(this).offset().top;

                if (position < screen + scrollTop - 100) {
                    let animation = $(this).attr('data-animation');
                    $(this).addClass(animation);
                }
            });
        }


        $(window).scroll(function () {
            animation();
        });
        animation();

    }


    if ($('.services').length > 0) {
        function animation() {
            var windowHeight = $(window).height();
            var scroll = $(window).scrollTop();
            $('.animation').each(function () {
                let position = $(this).offset().top;

                if (position < scroll + windowHeight - 100) {
                    let animation = $(this).attr('data-animation');
                    $(this).addClass(animation);
                }
            });
        }
        animation();
        $(window).scroll(function () {
            animation();
        });

    }

    if ($('.contact-form').length > 0) {
        $(function () {
            $(".contact-form").validate({
                highlight: function (element) {
                    $(element).addClass("is-invalid").removeClass("is-valid");
                },
                unhighlight: function (element) {
                    $(element).removeClass('is-invalid').addClass('is-valid');
                },
                rules: {
                    name: {
                        required: true,
                        rangelength: [2, 20]
                    },
                    email: {
                        required: true,
                        email: true
                    },

                    message: {
                        required: true,
                        maxlength: 255
                    }

                },
                messages: {
                    name: {
                        required: 'Ime je obavezno polje',
                        rangelength: 'Ime mora imati izmedju 2 i 20 karaktera'

                    },
                    email: {
                        required: 'Email je obavezno polje',
                        email: 'Molimo Vas unesite validan email'
                    },

                    message: {
                        required: 'Poruka je obavezno polje',
                        maxlength: 'Poruka ne sme imati vise od 255 karaktera'

                    }

                },
                errorElement: 'p',
                errorPlacement: function (error, element) {
                    error.appendTo($(element).closest('.form-group').find('.invalid-feedback'));
                }

            });
        });

    }


});
