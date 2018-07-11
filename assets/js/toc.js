$(".section-nav a").click(function() {
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top + "px"
  }, {
    duration: 600,
    easing: "swing"
  });
  return false;
});
