$(function () {

  AOS.init();

  NProgress.done();
});

$('.header .language').hover(function () {
  $('.header .language .language_list').stop().slideToggle();
})

$('.menu').click(function () {
  $(this).stop().toggleClass('on');
  $('.inner_mid').stop().slideToggle();
})
