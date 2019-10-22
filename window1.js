$(document).ready(function(){
    var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    $(".button.send").click(function(){
        console.log("send");
        window.navigator.vibrate([200]);
    });
    $(".wow").click(function(){
        console.log("wow");
        if(!ios) window.navigator.vibrate([200, 200]);
    });
    $(".like").click(function(){
        console.log("like");
        if(!ios) window.navigator.vibrate([200, 200, 200]);
    });
    $(".love").click(function(){
        console.log("love");
        if(!ios) window.navigator.vibrate([200, 200, 200, 200]);
    });
    $(".angry").click(function(){
        console.log("angry");
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200]);
    });
    $(".sad").click(function(){
        console.log("sad");
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200, 200]);
    });
    $(".laugh").click(function(){
        console.log("laugh");
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200, 200, 200]);
    });
});