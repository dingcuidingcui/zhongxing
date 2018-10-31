$(function () {
     var $phone = $("#login .right .user");
     var $pwd = $("#login .right .pwd");
     var arr = JSON.parse($.cookie('user'));
      //console.log(arr.get(0));
     var $immediately = $("#login .right .immediately");
     var $code = $("#login .right .code");
    var $update = $("#login .welcome .right .update");
    console.log($update.get(0));
    var $verify = $("#login .right .verify");


    $update.on({
        "click":function () {
            $code.html(random());
            //      console.log(color());
            $code.css("color",color());
            //   console.log(  $span.css("color",color()))
        }
    })



    console.log($immediately.get(0));

    $immediately.on({
        "click":function () {
            if($phone.val() == arr.phone && $pwd.val() == arr.pwd && $verify.val() == $code.html() ) {
                  window.location.href = "pay.html";
            }

        }
    })








    //随机验证码
    function random() {
        var arr = [];
        for(var i=48;i<=122;i++){
            if(i<57){
                arr.push(String.fromCharCode(i))
            }else if(i>=65 && i<= 90){
                arr.push(String.fromCharCode(i))
            }else if(i>=97 && i<= 122){
                arr.push(String.fromCharCode(i))
            }
        }
        arr.sort(function () {
            return Math.random()-0.5;
        });
        arr.length = 4;
        return arr.join("");
    }


    //随机颜色
    function color() {
        var str = "rgba(";
        for(var i = 0;i<3;i++){
            str+=Math.floor(Math.random()*256)+",";
        }
        var str1 = str.slice(0,-1);
        str1 +=")";

        return str1;
    }


})