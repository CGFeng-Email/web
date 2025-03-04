$(function () {
  AOS.init();
  NProgress.done();
});

// h5导航菜单栏

$('.bottom_nav .menu').click(function () {
  $(this).addClass('active');
  $('.h5_nav').stop().addClass('h5_nav_active');
  // 禁止滚动条滚动
  $('body').css({
    'overflow': 'hidden'
  })
})

$('.h5_nav .return_icon').click(function () {
  $('.bottom_nav .menu').stop().removeClass('active');
  $('.h5_nav').stop().removeClass('h5_nav_active');
  $('body').css({
    'overflow': 'initial'
  })
})