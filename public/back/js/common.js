$(document).ajaxStart(function () {
  console.log("ajaxStart在开始一个ajax请求时触发");
  NProgress.start();
});


$(document).ajaxStop(function () {
  setTimeout(function(){
    NProgress.done();
  },500);
});



$(function(){
// 1 二级导航隐藏设置
$('.lt_aside .nav .category').click(function() {
  $(this).next().stop().slideToggle();
});

// 2 左侧菜单的切换
$('.lt_topbar .icon_menu').click(function(){
  $('.lt_aside').toggleClass("hidemenu");
  $('.lt_main').toggleClass("hidemenu");
  $('.lt_topbar').toggleClass("hidemenu");

})

// 3. 退出功能的实现
$('.lt_topbar .icon_logout').click(function(){
  $('#logoutModal').modal("show");
})

$('#logoutBtn').click(function(){
  $.ajax({
    type:"get",
    url:'/employee/employeeLogout',
    dateType:'json',
    success:function(info){
      // console.log(info);
      if(info.success){
        location.href="login.html";
      }
    }
  })
})
})

