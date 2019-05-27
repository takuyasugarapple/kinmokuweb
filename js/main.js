$(document).ready(function () {
    $('.textbox_name').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_name').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_name').addClass("focus")
        });

    $('.textbox_mail').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_mail').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_mail').addClass("focus")
        });

    $('.textbox_pass').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_pass').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_pass').addClass("focus")
        });

    $('.textbox_repass').blur(function () {
            if ($(this).val().length === 0) {
                $('.label_repass').removeClass("focus");
            } else {
                returns;
            }
        })
        .focus(function () {
            $('.label_repass').addClass("focus")
        });



    $('#input1').val(location.href);

    $(function () {
        $('.share_btn').click(function () {
            $('#input1').focus();
            $('#input1').select();

            document.execCommand('copy');
        });
    });

    var $lightbox = $('#lightbox');
    $('[data-target="#lightbox"]').on('click', function (event) {
        var $img = $(this).find('img'),
            src = $img.attr('src'),
            alt = $img.attr('alt');
        $lightbox.find('img').attr('src', src);
        $lightbox.find('img').attr('alt', alt);
        $lightbox.find('img').css(css);
    });
    $lightbox.on('shown.bs.modal', function (e) {
        var $img = $lightbox.find('img');
        // $lightbox.find('.modal-dialog').css({
        //     'width': $img.width()
        // });
        $lightbox.find('.close').removeClass('hidden');
    });

    

});