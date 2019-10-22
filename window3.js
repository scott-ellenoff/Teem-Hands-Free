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
    var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    $(".choose").on("touch", function(){
        alert(ios);
        if($(this).val() == "wow"){
            choice = "wow";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".like").toggle();
            $(".wow").hide();
        }
        else if($(this).val() == "like"){
            choice = "like";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".love").toggle();
            $(".like").hide();
        }
        else if($(this).val() == "love"){
            choice = "love";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".angry").toggle();
            $(".love").hide();
        }
        if($(this).val() == "angry"){
            choice = "angry";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".sad").toggle();
            $(".angry").hide();
        }
        if($(this).val() == "sad"){
            choice = "sad";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".laugh").toggle();
            $(".sad").hide();
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
            $(".wow").toggle();
            $(".cancel").hide();
        }
    });
    $(".choose").on("click", function(){
        alert(ios);
        if($(this).val() == "wow"){
            choice = "wow";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".like").toggle();
            $(".wow").hide();
        }
        else if($(this).val() == "like"){
            choice = "like";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".love").toggle();
            $(".like").hide();
        }
        else if($(this).val() == "love"){
            choice = "love";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".angry").toggle();
            $(".love").hide();
        }
        if($(this).val() == "angry"){
            choice = "angry";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".sad").toggle();
            $(".angry").hide();
        }
        if($(this).val() == "sad"){
            choice = "sad";
            if(!ios){
                window.navigator.vibrate([200,200]);
            }
            $(".laugh").toggle();
            $(".sad").hide();
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
            $(".wow").toggle();
            $(".cancel").hide();
        }
    });
    $(".send").click(function(){
        console.log(choice);
    });
});