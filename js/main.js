$(function () {
  var $win = $(window),
    $header = $('header'),
    headerHeight = $header.outerHeight(),
    startPos = 0;

  $win.on('load scroll', function () {
    var value = $(this).scrollTop();
    if (value > startPos && value > headerHeight) {
      $header.css('top', '-' + headerHeight *2 + 'px');
    } else {
      $header.css('top', '0');
    }
    startPos = value;
  });

  $(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollin');
            }
        });
    });
});
});