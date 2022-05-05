var angle = 0;
var xPoint = 0;
var yPoint = 0;
var horzMove = 0;
var vertMove = 0;
var hypotenuse = 14.142;
var spaceship = $(".spaceship");
var radian = 0.0174533;
var currX = 0;
var currY = 0;
// var offsets = $('spaceship').offset();
// var top = offsets.top;
// var left = offsets.left;

$(document).keypress(function(){
  switch (event.key){
      case "a":
        angle -= 22.5;
        var currX = 0;
        var currY = 0;
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)' });
        break;
    case "w":
        move();
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)'}); //smthn wrong with this line trust my g
        // getCurrPos();
        break;
    case "d":
        angle += 22.5;
        var currX = 0;
        var currY = 0;
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)' });
        break;
    case "s":
        spaceship.fadeOut(600);
        setTimeout(getRandomPos, 600);
        break;
    }
});

function getRandomPos(){
  let windowW = $(window).innerWidth();
  let windowH = $(window).innerHeight();
  xPoint = Math.floor(Math.random() * windowW);
  yPoint = Math.floor(Math.random() * windowH);
  spaceship.fadeIn(600).css('margin-top', xPoint);
  spaceship.css('margin-left', yPoint);
}

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}

function getCurrPos(){
let offsets = spaceship.offset();
currY = (offsets.top + 'px');
currX = (offsets.left + 'px');
console.log(currY, currX);
}
