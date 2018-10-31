$(function(){
  $.ajax({
    type:"get",
    url:"/user/queryUser",
    data: {
      page: 1,
      pageSize: 5
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      // var htmlStr = template("tmp",info);
      var htmlStr = template("tmp", info);
      // console.log(htmlStr);
      $('tbody').html(htmlStr);
    }
  })
})