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
var offScreen = 0;
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
        checkOnScreen();
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)'});
        break;
    case "d":
        angle += 22.5;
        var currX = 0;
        var currY = 0;
        spaceship.css({'transform': 'translate('+ horzMove + 'px,'+ vertMove +'px) rotate('+ angle +'deg)' });
        break;
    case "s":
        // spaceship.fadeOut(600);
        // setTimeout(getRandomPos, 600); //might have to change position to fixed
        break;
    }
});

// function getRandomPos(){
//   let windowW = $(window).innerWidth();
//   let windowH = $(window).innerHeight();
//   xPoint = Math.floor(Math.random() * windowW) + 'px';
//   yPoint = Math.floor(Math.random() * windowH) + 'px';
//   spaceship.fadeIn(600).css('top', xPoint);
//   spaceship.css('left', yPoint);
// }

function checkOnScreen(){
  let elem = document.querySelector('.spaceship');
  let rect = document.querySelector('.spaceship').getBoundingClientRect();
  if(rect.top < 0 - elem.offsetHeight){
  	offScreen = -1;
    teleportShip(offScreen);
  }

  if(rect.left < 0 - elem.offsetWidth){
  	offScreen = -2;
    teleportShip(offScreen);
  }

  if(rect.bottom > window.innerHeight + elem.offsetHeight){
  	offScreen = -3;
    teleportShip(offScreen);
  }

  if(rect.right > window.innerWidth + elem.offsetWidth) {
  	offScreen = -4;
    teleportShip(offScreen);
  }
}

function teleportShip(val){ //right and bottom don't work, *they keep going*
  let windowW = window.innerWidth;
  let windowH = window.innerHeight;
  if(val == -1){
    spaceship.css('bottom', -windowH);
    offScreen = 0;
  }

  if(val == -2){
    spaceship.css('right', -windowW);
    offScreen = 0;
  }

  if(val == -3){
    spaceship.css('top', windowH);
    offScreen = 0;
  }

  if(val == -4) {
    spaceship.css('left', windowW);
    offScreen = 0;
  }
  return ;
}

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}
