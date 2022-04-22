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
        spaceship.fadeOut(600);
        setTimeout(getRandomPos, 600);
        break;
    }
});

function getRandomPos(){
  let windowW = $(window).width();
  let windowH = $(window).height();
  console.log(y)
  x = Math.floor(Math.random() * windowW);
  y = Math.floor(Math.random() * windowH);
  spaceship.fadeIn(600).css('margin-top', x);
  spaceship.css('margin-left', y);
}
