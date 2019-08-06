$(function() {
  $('.logo').hover(
    function(){
      $(this).animate({
        'opacity': '0.8'
      }, 200);
    },
    function(){
      $(this).animate({
        'opacity': '1'
      }, 200);
    });

  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
