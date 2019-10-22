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
        window.navigator.vibrate([1000]);
        sleep(10000);
        window.navigator.vibrate([2500]);
        sleep(10000);
        window.navigator.vibrate([500]);
        sleep(10000);
        window.navigator.vibrate([1500]);
        sleep(10000);
        window.navigator.vibrate([3000]);
        sleep(10000);
        window.navigator.vibrate([2000]);
        sleep(10000);
    });
});