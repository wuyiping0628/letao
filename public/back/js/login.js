$(function(){
  $('#form').bootstrapValidator({
        // 配置图标
        feedbackIcons: {
          valid: 'glyphicon glyphicon-ok',   // 校验成功
          invalid: 'glyphicon glyphicon-remove',   // 校验失败
          validating: 'glyphicon glyphicon-refresh'  // 校验中
        },
    fields:{
      username:{
      validators:{
        // 不能为空
        notEmpty:{
          message:'用户名不能为空'
        },
        // 长度校验
        stringLength:{
          min:2,
          max:6,
          message:'用户名长度必须在2到6之间'
        },
        // 正则校验
        // regexp:{
        //   regexp:/^[a-zA-Z0-9_\.]+$/,
        //   message:'用户名由数据字母下划线和.组成'
        // }
        callback: {
          message: "用户名不存在"
        }
      }
    },
    password: {
      validators: {
        notEmpty: {
          message: "密码不能为空"
        },
        stringLength: {
          min: 6,
          max: 12,
          message: "密码长度必须是6-12位"
        },
        callback: {
          message: "密码错误"
        }
      }
    }
  }
  })


  $('#form').on('success.form.bv',function(e){
    e.preventDefault();
    // console.log(111);
    $.ajax({
      type:"post",
      url:"/employee/employeeLogin",
      data:$("#form").serialize(),
      dateType:'json',
      success:function(info){
        console.log(info);
        if(info.success){
          // alert(1)
          location.href = "index.html";
        }
        if (info.error === 1000){
          $("#form").data("bootstrapValidator").updateStatus( "username", "INVALID", "callback")
        }
        if (info.error ===1001){
          $("#form").data("bootstrapValidator").updateStatus( "password", "INVALID", "callback")
        }
      }
    })
  })

  $('[type="reset"]').click(function(){
    $('#form').data("bootstrapValidator").resetForm();
  })

                   

})