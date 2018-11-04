$(function(){
  $.ajax({
    type:"get",
    url:"/category/queryTopCategory",
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("category_left_tpl",info);
      $(".lt_category_left ul").html(htmlStr);
      renderById(info.rows[0].id);
    }
  })

  $('.lt_category_left ul').on("click","a",function(){
    var id = $(this).data("id");
    renderById(id);
    $(this).addClass("current").parent().siblings().find("a").removeClass("current");

  })

  function renderById(id){
    $.ajax({
      typr:"get",
      url:"/category/querySecondCategory",
      data:{
        id:id
      },
      dataType:"json",
      success:function(info){
      var htmlStr=template("category_right_tpl",info);
      $('.lt_category_right ul').html(htmlStr);
      }
    })
  }

})