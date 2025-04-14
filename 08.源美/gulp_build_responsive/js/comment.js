$(function () {
  AOS.init();
  NProgress.done();
});


// 判断是否为手机屏幕
let mobile = null;
function checkScreenSize() {
  if (window.innerWidth <= 768) return mobile = true;
  mobile = false;
}
checkScreenSize();

window.addEventListener('resize', checkScreenSize)

if (mobile == false) {
  ScrollTrigger.create({
    trigger: '.top_banner',
    start: 'top top',
    end: function() {
      return document.querySelector('.top_banner').offsetHeight
    },
    scrub: true,
    animation: gsap.timeline()
      .fromTo('.banner_top_bg', { scale: 1 }, { scale: 1.3 }, '<')
      .fromTo('.banner_wrap', { y: 0 }, { y: '-40px' }, '<')
  })
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 300) {
      $('.header').css({
        top: '20px',
        padding: '0 20px'
      })
    } else if (scrollTop < 300) {
      $('.header').css({
        top: '46px',
        padding: '0 50px'
      })
    }
  })
}

// video
const media_video = document.querySelector('.media_video');
ScrollTrigger.create({
  trigger: '.banner_media',
  start: 'top top',
  end: '+=1080',
  scrub: true,
  onEnter: function () {
    if (media_video) {
      media_video.duration = 0;
      media_video.play();
    }
  }
})

ScrollTrigger.create({
  trigger: '.module_box',
  start: 'top top',
  end: '+=1400',
  scrub: true,
  animation: gsap.timeline()
    .fromTo('.module_head', { left: '-5%' }, { left: '5%' })
    .fromTo('.about_us .module_cover', { x: 0 }, { x: '30px' }, '<')
    .fromTo('.about_us .content', { x: 0 }, { x: '-30px', duration: 2 }, '<')
})

ScrollTrigger.create({
  trigger: '.scroll_module',
  start: 'top top',
  end: '+=2080',
  scrub: true,
  pin: true,
  overwrite: false,
  immediate: false, // 防止动画在滚动时立即触发，而是在用户停止滚动后触发。
  animation: gsap.timeline()
    .fromTo('.scroll_module .head', { left: '-30%', opacity: .2 }, { left: '3%', opacity: .7 }, '<')
    .fromTo('.scroll_item2', { top: '105%', scale: 1 }, { top: '5%', scale: 1.02, duration: 4 }, '<')
    .fromTo('.scroll_item3', { top: '210%', scale: 1 }, { top: '10%', scale: 1.04, duration: 4 })
})

ScrollTrigger.create({
  trigger: '.research',
  start: 'top top',
  end: '+=1080',
  scrub: true,
  // pin: true,
  animation: gsap.timeline()
    .fromTo('.research .wrap', { y: 0 }, { y: '100px' })
})

ScrollTrigger.create({
  trigger: '.news_module',
  start: 'top 50%',
  end: '+=1080',
  scrub: true,
  animation: gsap.timeline()
    .fromTo('.news_module .head', { right: '-30%' }, { right: '3%' })
    .fromTo('.news_module .top_head', { x: '-100px' }, { x: '100px' }, '<')
})

ScrollTrigger.create({
  trigger: '.animate_module',
  start: 'top 50%',
  end: '+=2000',
  scrub: true,
  animation: gsap.timeline()
    .fromTo('.animate_module .wrap', { scale: 1.05 }, { scale: 1 })
})

ScrollTrigger.create({
  trigger: '.message_module',
  start: 'top-=1000 top',
  end: '+=2000',
  scrub: true,
  animation: gsap.timeline()
    .fromTo('.message_module .head', { left: '-30%' }, { left: '16%' })
})

ScrollTrigger.create({
  trigger: '.company',
  start: 'top-=1000 top',
  end: '+=2000',
  scrub: true,
  animation: gsap.timeline()
    .fromTo('.company .logo_bg', { left: '-15%' }, { left: '5%' })
})

// 导航itme移入
$('.header .left .nav .li').hover(function () {
  $(this).addClass('active').siblings().removeClass('active');
}, function () {
  $(this).removeClass('active');
})

// pc产品导航弹窗栏目切换
$('.product_child_popup .child_li').click(function () {
  let index = $(this).index();
  $(this).addClass('active').siblings().removeClass('active');
  $('.product_child_popup .child_right .child_cover').eq(index).addClass('active').siblings().removeClass('active')
})

// 二级导航弹窗
$('.header .left .nav .li_down').click(function () {
  $('.product_child_popup').stop().toggleClass('product_child_popup_active');
  $('.product_child_popup .child_content').animate({
    opacity: 1,
    'margin-top': '-20px'
  })
  $('.filter_box').stop().toggleClass('filter_box_active');
})

// 语言弹窗
$('.language_wrap .wrap').hover(function () {
  $('.language_wrap .language_list').stop().slideToggle();
})

// 搜索
let iconLength = 1;
$('.header .search .icon').click(function () {
  $('.header .search .input_box').toggleClass('active');
  if (iconLength == 1) {
    $('.header .search .icon .icon-sousuo').removeClass('open');
    $('.header .search .icon .icon-guanbi').addClass('open');
    iconLength = 2
  } else {
    $('.header .search .icon .icon-guanbi').removeClass('open');
    $('.header .search .icon .icon-sousuo').addClass('open');
    iconLength = 1
  }
})

// 打开h5导航栏
let h5_menu = 1;
$('.header .left .switch .menu_item').click(function () {
  $('.header .switch .menu_item .menu').stop().toggleClass('active')
  $('.nav_popup').stop().toggleClass('nav_popup_active');
  if (h5_menu == 1) {
    $('.nav_popup .content').animate({
      'opacity': '1',
      'margin-top': '-20px'
    })
    h5_menu = 2
  } else {
    $('.nav_popup .content').animate({
      'opacity': '0',
      'margin-top': '0px'
    })
    h5_menu = 1
  }
  $('.filter_box').stop().toggleClass('filter_box_active');

})

// 打开产品二级导航弹窗
$('.nav_popup .product_li').click(function () {
  $('.nav_popup .nav').addClass('x_100');
  $('.nav_popup .child').addClass('x_0');
})

// 产品二级导航关闭
$('.nav_popup .child .head').click(function () {
  $('.nav_popup .nav').removeClass('x_100');
  $('.nav_popup .child').removeClass('x_0');
})

// 首页banner视频
$('.video_btn').click(function () {
  const popup_video = document.querySelector('#popup_video');
  popup_video.duration = 0;
  popup_video.play();

  $('.filter_box').addClass('filter_box_active');
  $('.header').css('z-index', 9);
  $('.popup').addClass('popup_active');
  $('.popup .wrap').animate({
    opacity: 1,
    'margin-top': '-20px'
  })
})

// 关闭首页banner视频
$('.popup .clear_btn').click(function () {
  const popup_video = document.querySelector('#popup_video');
  popup_video.duration = 0;
  popup_video.pause();
  $('.header').css('z-index', 11);
  $('.filter_box').removeClass('filter_box_active');
  $('.popup').removeClass('popup_active');
  $('.popup .wrap').animate({
    opacity: 0,
    'margin-top': '0px'
  })
})

// 模糊弹窗
$('.filter_box').click(function () {
  $('.child_down').removeClass('active');
  $('.nav_popup').removeClass('nav_popup_active');
  $('.header .switch .menu_item .menu').removeClass('active');
  $('.product_child_popup').removeClass('product_child_popup_active');
  $('.nav_popup .content').animate({
    'opacity': '0',
    'margin-top': '0px'
  })
  h5_menu = 1
  $('.filter_box').removeClass('filter_box_active');
})


// 创新
let research_swiper = new Swiper('.research_swiper', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1400,
  on: {
    slideChangeTransitionStart: function () {
      $('.research .background_list .box').eq(this.realIndex).addClass('active').siblings().removeClass('active');
    },
  },
})

// 创新 后退
$('.research .arrow_box .arrow_prev').click(function () {
  research_swiper.slidePrev()
})

// 创新 前进
$('.research .arrow_box .arrow_next').click(function () {
  research_swiper.slideNext()
})


$('.to_down').click(function () {
  let top_banner = document.querySelector('.top_banner');
  let topHeight = top_banner.offsetHeight;
  if (topHeight) {
    window.scrollTo({
      top: top_banner.offsetHeight,
      behavior: 'smooth'
    })
  }
})