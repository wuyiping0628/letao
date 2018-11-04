$(function(){
  // 功能1 搜索历史记录渲染
  // 功能2 清空搜索记录
  // 功能3 删除单条记录
  // 功能4 添加历史记录


  render();
  // 读取本地存储，返回一个数组
  function getHistory(){
    var jsonStr = localStorage.getItem("search_list") ||'[]';
    var arr =JSON.parse(jsonStr);
    return arr;
  }
  //  将渲染封装成一个方法
  function render(){
    var arr =getHistory();
    var htmlStr = template("search_tpl",{list:arr})
    // console.log(htmlStr);
   $('.lt_history').html(htmlStr);
  }

  // 功能2 清空搜索记录
  $('.lt_history').on("click",".btn_empty",function(){
    // alert(1)
    mui.confirm("你确定要清空历史记录嘛?","温馨提示",["取消","确认"],function(e){
      console.log(e);
      if(e.index===1){
        localStorage.removeItem("search_list");
        render();
      }
    })
  })

  // 功能3 删除单条记录 
  $(".lt_history").on("click",".btn-delete",function(){
    mui.confirm("你确定要删除这条记录嘛?","温馨提示",["取消","确认"],function(e){
      var index = $(this).data("index");
      // console.log(index);
      var arr =getHistory();
      // console.log(arr);
      arr.splice(index,1);
      localStorage.setItem("search_list",JSON.stringify(arr));
      render();
    })
    // alert(1)

  })
 // 功能4 添加历史记录
//  * 思路:
//  *   (1) 给搜索按钮添加点击事件
//  *   (2) 获取输入框的值
//  *   (3) 往数组的最前面添加 (unshift)
//  *   (4) 将数组存储到本地存储中
//  *   (5) 页面重新渲染
 $('.search_btn').click(function(){
  //  alert('1');
  var key = $('.search_input').val().trim();
  if(key ===''){
    mui.toast("请输入关键字");
    return;
  }
  var arr = getHistory();
  var index =arr.indexOf(key);
  console.log(index);
  if (index!=-1){
    arr.splice(index,1)
  }
  if(arr.length >= 10 ){
    arr.pop();
  }
  arr.unshift(key);
  console.log(arr);
  localStorage.setItem("search_list",JSON.stringify(arr));
  render();
  $('.search_input').val("");
  location.href ="./searchList.html?key="+key;
 })

})