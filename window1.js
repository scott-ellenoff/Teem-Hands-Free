$(document).ready(function(){
    var ios = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    var choice = ""
    $(".button.send").click(function(){
        console.log(choice);
        choice = ""
        window.navigator.vibrate([200]);
    });
    $(".wow").click(function(){
        choice = "wow"
        if(!ios) window.navigator.vibrate([200, 200]);
    });
    $(".like").click(function(){
        choice = "like"
        if(!ios) window.navigator.vibrate([200, 200, 200]);
    });
    $(".love").click(function(){
        choice = "love"
        if(!ios) window.navigator.vibrate([200, 200, 200, 200]);
    });
    $(".angry").click(function(){
        choice = "angry"
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200]);
    });
    $(".sad").click(function(){
        choice = "sad"
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200, 200]);
    });
    $(".laugh").click(function(){
        choice = "laugh"
        if(!ios) window.navigator.vibrate([200, 200, 200, 200, 200, 200, 200]);
    });
});