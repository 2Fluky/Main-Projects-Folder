var angle = 0;
var xPoint = 0;
var yPoint = 0;
var horzMove = 0;
var vertMove = 0;
var hypotenuse = 14.142;
var spaceship = $(".spaceship");
// var offsets = $('spaceship').offset();
// var top = offsets.top;
// var left = offsets.left;

$(document).keydown(function(){
  switch (event.key){
    case "a":
        angle -= 22.5;
        spaceship.css({'transform': 'translate(-50%, -50%) rotate('+ angle +'deg)' });
        console.log(spaceship.postion);
        break;
    case "w":
        move();
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)'});
        console.log(spaceship.postion);
        break;
    case "d":
        angle += 22.5;
        spaceship.css({'transform': 'translate(-50%, -50%) rotate('+ angle +'deg)' });
        console.log(spaceship.postion);
        break;
    case "s":
        // spaceship.fadeOut(600);
        // setTimeout(getRandomPos, 600);
        break;
    }
});

function getRandomPos(){
  let windowW = $(window).width();
  let windowH = $(window).height();
  x = Math.floor(Math.random() * windowW);
  y = Math.floor(Math.random() * windowH);
  spaceship.fadeIn(600).css('margin-top', xPoint);
  spaceship.css('margin-left', yPoint);
}

function move(){
  horzMove += (Math.cos(angle) * hypotenuse)
  vertMove += (Math.sin(angle) * hypotenuse)
}
