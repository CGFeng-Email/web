$(function () {

  AOS.init();

  NProgress.done();
});

// h5导航菜单栏
$('.header .menu').click(function () {
  $(this).stop().toggleClass('active');
  $('.h5_nav').stop().toggleClass('h5_nav_active');
})

$('.h5_nav .c_nav .li').click(function () {
  $(this).children('.child_down').stop().slideToggle('.active')
})

$('.menu .category_list .li .lead').click(function () {
  $(this).next().stop().slideToggle()
})

$('.advantage .list .li').hover(function () {
  $(this).children('.lead').stop().slideToggle()
})