function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }
$(document).ready(function(){
    $(".start").click(function(){
        $(".start").hide();
        window.navigator.vibrate([200,200,200]);  //like
        sleep(10000);
        window.navigator.vibrate([200,200,200,200,200,200]); //sad
        sleep(10000);
        window.navigator.vibrate([200,200]); //wow
        sleep(10000);
        window.navigator.vibrate([200,200,200,200]); //love
        sleep(10000);
        window.navigator.vibrate([200,200,200,200,200,200,200]); //laugh
        sleep(10000);
        window.navigator.vibrate([200,200,200,200,200]); //angry
    });
});