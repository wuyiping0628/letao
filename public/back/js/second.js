$(function(){
  var currentPage =1;
  var pageSize=5;

  render()
  function render(){
    $.ajax({
      type:"get",
      url:"/category/querySecondCategoryPaging",
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      dataType:"json",
      success:function(info){
        // console.log(info);
        var htmlStr = template("secondTmp",info);
        $('tbody').html(htmlStr);
        $("#secondPaginator").bootstrapPaginator({
          bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
          currentPage:info.page,//当前页
          totalPages:Math.ceil(info.total/info.size),//总页数
          onPageClicked:function(a, b, c,page){
            currentPage =page;
            render();

          }
        });
      }
    })
  }


$(".mb_20").click(function(){
  $("#secondModal").modal("show"); 

  $.ajax({
    type:"get",
    url:"/category/queryTopCategoryPaging",
    data:{
      page:1,
      pageSize:100
    },
    dataType:"json",
    success:function(info){
      console.log(info);
      var htmlStr = template("dropdownTpl",info);
      $('.dropdown-menu').html(htmlStr)
    }
  })
})

$('.dropdown-menu').on("click","a",function(){
  var txt = $(this).text();
  // console.log(txt);
  $('#dropdownText').text(txt);
  var id =$(this).data("id");
})



 
})