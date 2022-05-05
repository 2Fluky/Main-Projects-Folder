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
  let windowW = window.innerWidth + elem.offsetWidth;
  let windowH = window.innerHeight + elem.offsetHeight;
  if(rect.top < 0 - elem.offsetHeight){ //if statement doesn't work after 1 time
    spaceship.css('bottom', -windowH);
  }

  if(rect.left < 0 - elem.offsetWidth){
    spaceship.css('right', -windowW);
  }

  if(rect.bottom > windowH){
    spaceship.css('top', windowH);
  }

  if(rect.right > windowW){
    spaceship.css('left', windowW);
  }
}

function move(){
  let deg = angle * radian;
  horzMove += (Math.sin(deg) * hypotenuse);
  vertMove -= (Math.cos(deg) * hypotenuse);
}
