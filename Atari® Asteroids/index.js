var newDeg = 0;
var x = 0;
var y = 0;
var spaceship = $(".spaceship");

$(document).keydown(function(){
  switch (event.key){
    case "a":
        newDeg -= 25.714;
        spaceship.css({'transform': 'translate(-50%, -50%) rotate('+ newDeg +'deg)' });
        break;
    case "w":
        spaceship.finish().animate({
            marginTop: "-=10"
        });
        break;
    case "d":
        newDeg += 25.714;
      spaceship.css({'transform': 'translate(-50%, -50%) rotate('+ newDeg +'deg)' });
        break;
    case "s":
        getRandomPos();
        spaceship.css('margin-top', x);
        spaceship.css('margin-left', y);
        break;
    }
});

function getRandomPos(){
  let windowW = $(window).width();
  let windowH = $(window).width();
  x = Math.floor(Math.random() * windowW);
  y = Math.floor(Math.random() * windowH);
}
