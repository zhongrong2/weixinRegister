$(function () {
    // 取消光标
    $("#dateSelectorOne").focus(function(){
        document.activeElement.blur();
    });
    new Mdate("dateSelectorOne");


    // 判断必填项不为空
    $(".sumbit").click(function () {
        var phone = $('#phone').val();
        var code = $("#code").val();
        var carClass = $("#CarClass option:selected").val();
        var carNum1 = $("#carnum1").val();
        var date = $("#birthday").val();
        var carNum2 = $("#carnum2").val();
        var datas = [phone,code,carClass,carNum1,date,carNum2];
        console.log(datas);

        var phoneReg = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;//手机号正则

        // 判断手机号不为空
        if (phone.length == 0){
            $.myToast("请输入手机号码");
            return false;
        }
        // 判断手机格式
        if (!phoneReg.test(phone)) {
            $.myToast("请输入有效手机号码");
            return false;
        }
        //判断手机验证码不为空
        if (code.length == 0){
            $.myToast("请输入手机验证码");
            return false;
        }
        //判断车辆类型不为空
        if (carClass === "0"){
            $.myToast("请选择车辆类型");
            return false;
        }
        //判断车牌号不为空
        if (carNum1.length == 0){
            $.myToast("请输入车牌号");
            return false;
        }

        //发送数据
        $.ajax({
            url:"aaaaaaaaaaa",
            method:"post",
            data:"datas",
            dataType:"json",
            success:function (data) {
                $.myToast("激活成功");
            },
            error:function () {
                $.myToast("激活失败");
            }
        });

        return true;

    })
})