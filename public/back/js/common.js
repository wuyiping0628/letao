$(document).ajaxStart(function () {
  console.log("ajaxStart在开始一个ajax请求时触发");
  NProgress.start();
});


$(document).ajaxStop(function () {
  NProgress.done();
});


// 二级导航隐藏设置
$('.lt_aside .nav .category').click(function() {
  $(this).next().stop().slideToggle();
});

// 导航高亮效果
