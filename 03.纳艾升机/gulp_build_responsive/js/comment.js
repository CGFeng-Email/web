$(function () {

  AOS.init();

  NProgress.done();
});

$('.header .language').hover(function () {
  $('.header .language .language_list').stop().slideToggle();
})

$('.header .menu').click(function () {
  $(this).stop().toggleClass('on');
  $('.inner_mid').stop().slideToggle();
})


var topDome = document.getElementById('top');
topDome.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

$('.news .news_list .col_md').hover(function () {
  $(this).addClass('active').siblings().removeClass('active')
})

$('.product .menu .category_list .li').click(function () {
  $(this).children('.child').stop().slideToggle();
})