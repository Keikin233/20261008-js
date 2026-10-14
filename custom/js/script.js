$(function() {
  $(window).scroll(function() {
    for (var i = 1; i <= 4; i++) {
      if ($("section:nth-of-type(" + i + ")").offset().top < $(window).scrollTop() + 140) {
        $("nav li").removeClass("current");
        $("nav li:nth-child(" + i + ")").addClass("current");
      }
    }
  });

  $('nav a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top - 20
    }, 500);
  });
});
