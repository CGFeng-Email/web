$(function () {

  AOS.init();

  NProgress.done();
});

layui.use(function () {
  var util = layui.util;
  util.fixbar({
    bars: [],
    on: {},
  })
});