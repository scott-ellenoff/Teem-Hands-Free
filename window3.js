var vibrate = false;
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
}
$(document).ready(function(){
    var choice = "";
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    $(".choose").on("touch", function(){
        alert("touch");
        if($(this).val() == "angry"){
            choice = "angry";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".wow").toggle();
            $(".angry").hide();
        }
        else if($(this).val() == "wow"){
            choice = "wow";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".sad").toggle();
            $(".wow").hide();
        }
        else if($(this).val() == "sad"){
            choice = "sad";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".like").toggle();
            $(".sad").hide();
        }
        if($(this).val() == "like"){
            choice = "like";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".love").toggle();
            $(".like").hide();
        }
        if($(this).val() == "love"){
            choice = "love";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".laugh").toggle();
            $(".love").hide();
        }
        if($(this).val() == "laugh"){
            choice = "laugh";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".cancel").toggle();
            $(".laugh").hide();
        }
        if($(this).val() == "cancel"){
            choice = "";
            $(".angry").toggle();
            $(".cancel").hide();
        }
    });
    $(".choose").on("click",function(){
        if($(this).val() == "angry"){
            choice = "angry";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }            $(".wow").toggle();
            $(".angry").hide();
        }
        else if($(this).val() == "wow"){
            choice = "wow";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".sad").toggle();
            $(".wow").hide();
        }
        else if($(this).val() == "sad"){
            choice = "sad";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".like").toggle();
            $(".sad").hide();
        }
        if($(this).val() == "like"){
            choice = "like";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".love").toggle();
            $(".like").hide();
        }
        if($(this).val() == "love"){
            choice = "love";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".laugh").toggle();
            $(".love").hide();
        }
        if($(this).val() == "laugh"){
            choice = "laugh";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".cancel").toggle();
            $(".laugh").hide();
        }
        if($(this).val() == "cancel"){
            choice = "";
            $(".angry").toggle();
            $(".cancel").hide();
        }
    });
    $(".send").click(function(){
        console.log(choice);
    });
});