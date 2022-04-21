var newDeg = 0;

$(document).keypress(function(){
  switch (event.key){
    case "a":
        newDeg -= 25.8;
        $(".spaceship").css({'transform': 'translate(-50%, -50%) rotate('+ newDeg +'deg)' });
        break;
    case "w":
        $(".spaceship").finish().animate({
            top: "-=10"
        });
        break;
    case "d":
        newDeg += 25.8;
        $(".spaceship").css({'transform': 'translate(-50%, -50%) rotate('+ newDeg +'deg)' });;
        break;
    case "s":
        $(".spaceship").finish().animate({

        });
        break;
    }
});
