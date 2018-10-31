$(function () {
     var $user = $("#register .welcome .right .user");

     var $tishi = $("#register .welcome .right .tishi");
    // console.log($tishi.get(0));
     //
    $user.blur(function () {
     if(!(/^1[34578]\d{9}$/.test($user.val()))){
      $tishi.html("格式错误!")
      $tishi.css({"display":"block","color":"red"});
     }else {
         $tishi.css({"display":"none","color":"red"});
     }
    })

   var $update = $("#register .welcome .right .update");
    var $code = $("#register .welcome .right .code");
    var $verity = $("#register .welcome .right .verify");
    //console.log($span.get(0));

   $update.on({
       "click":function () {
           $code.html(random());
     //      console.log(color());
           $code.css("color",color());
        //   console.log(  $span.css("color",color()))
       }
   })

    //输入密码、验证密码
     var $pwd = $("#register .right .pwd");
     var $pwds = $("#register .right .pwds");
     var $immediately = $("#register .right .immediately");



     $immediately.on({
         "click":function () {



             if($pwd.val() === $pwds.val() && $verity.val() === $code.html() ){
                   window.location.href ="login.html"
             }

             var obj = {
                 "phone":$user.val(),
                 "pwd":$pwd.val(),
             }
             var strs = JSON.stringify(obj);
           //  console.log(strs)
             $.cookie('user',strs,{expires:9,path:'/'});
           //  alert($.cookie('user'));


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
