$(function () {
  AOS.init({
    disable: 'mobile',
    duration: 1000,
    easing: 'ease-in-out',
    delay: 300,
  });
  NProgress.done();
});

layui.use(function () {
  var util = layui.util;
  util.fixbar({
    bars: [],
    on: {},
  })
});


