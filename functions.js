$(document).ready(function(){
    $(".button.send").click(function(){
        console.log("send");
        window.navigator.vibrate([200]);
    });
    $(".wow").click(function(){
        console.log("wow");
        window.navigator.vibrate([200, 200]);
    });
    $(".like").click(function(){
        console.log("like");
        window.navigator.vibrate([200, 200, 200]);
    });
    $(".love").click(function(){
        console.log("love");
        window.navigator.vibrate([200, 200, 200, 200]);
    });
    $(".angry").click(function(){
        console.log("angry");
        window.navigator.vibrate([200, 200, 200, 200, 200]);
    });
    $(".sad").click(function(){
        console.log("sad");
        window.navigator.vibrate([200, 200, 200, 200, 200, 200]);
    });
    $(".laugh").click(function(){
        console.log("laugh");
        window.navigator.vibrate([200, 200, 200, 200, 200, 200, 200]);
    });
});