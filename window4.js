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
        for(i=0; i<6; i++){
            var rand = Math.ceil(Math.random()*5+1)
            if(rand == 1.0){
                window.navigator.vibrate([500,100,500,100,500]);
                console.log("wow"+i);
            }
            else if(rand == 2.0){
                console.log("like"+i);
                window.navigator.vibrate([500,100,100,500,500]);
            }
            else if(rand == 3.0){
                console.log("love"+i);
                window.navigator.vibrate([500,500,500,500,500]);
            }
            else if(rand == 4.0){
                console.log("angry"+i);
                window.navigator.vibrate([100,500,100,500,100]);
            }
            else if(rand == 5.0){
                console.log("sad"+i);
                window.navigator.vibrate([500,500,500,100,100]);
            }
            else if(rand == 6.0){
                console.log("laugh"+i);
                window.navigator.vibrate([100,200,100,200,500]);
            }
            sleep(10000);
        }
    });
});