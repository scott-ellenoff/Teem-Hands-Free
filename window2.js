
$(document).ready(function(){
    $(".start").click(function(){
        $(".start").hide();
        window.navigator.vibrate([200,200,200]);  //like
        setTimeout(function(){
            window.navigator.vibrate([200,200,200,200,200,200]); //sad
            setTimeout(() => {
                window.navigator.vibrate([200,200]); //wow
                setTimeout(() => {
                    window.navigator.vibrate([200,200,200,200]); //love
                    setTimeout(() => {
                        window.navigator.vibrate([200,200,200,200,200,200,200]); //laugh
                        setTimeout(() => {
                            window.navigator.vibrate([200,200,200,200,200]); //angry
                        }, 10000);
                    }, 10000);
                }, 10000);
            }, 10000);
        },10000);
    });
});